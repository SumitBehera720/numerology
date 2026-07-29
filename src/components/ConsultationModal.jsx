import React, { useState, useEffect } from 'react';
import { X, Calendar, User, Phone, Mail, CheckCircle2, Sparkles, Lock, ArrowRight, MessageSquare } from 'lucide-react';
import { brandInfo, servicesList, reportsCatalog, discussionList, saveConsultationBooking } from '../data/tejendraData';

export default function ConsultationModal({ isOpen, onClose, currentUser, onRequireLogin, bookingParams }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    dob: '',
    service: 'Corporate Numerology',
    date: '',
    timeSlot: '07:00 AM - 08:30 AM',
    notes: '',
    mode: 'Online Zoom Meeting',
    duration: '30 Minutes'
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedBooking, setSubmittedBooking] = useState(null);

  // Autofill current user details if logged in
  useEffect(() => {
    if (isOpen) {
      setFormData(prev => {
        let defaultService = prev.service;
        if (bookingParams?.service) {
          defaultService = bookingParams.service;
        } else if (bookingParams?.mode && bookingParams?.duration) {
          const matched = discussionList.find(
            d => d.mode === bookingParams.mode && d.duration === bookingParams.duration
          );
          if (matched) {
            defaultService = matched.title;
          }
        }
        return {
          ...prev,
          name: currentUser?.name || prev.name,
          email: currentUser?.email || prev.email,
          phone: currentUser?.phone || prev.phone,
          dob: currentUser?.dob || prev.dob,
          mode: bookingParams?.mode || prev.mode || 'Online Zoom Meeting',
          duration: bookingParams?.duration || prev.duration || '30 Minutes',
          service: defaultService
        };
      });
    }
  }, [currentUser, isOpen, bookingParams]);

  if (!isOpen) return null;

  // Get active service details across services, reports, and discussions
  const allBookable = [...servicesList, ...reportsCatalog, ...discussionList];
  const activeService = allBookable.find(s => s.title === formData.service) || allBookable[0];
  const totalFee = activeService.price;
  
  // Calculate dynamic 20% deposit
  const getAdvanceDeposit = (priceStr) => {
    const num = parseInt(priceStr.replace(/[^0-9]/g, ''), 10);
    if (isNaN(num)) return '₹1,000';
    const dep = Math.round(num * 0.2 / 100) * 100; // round to nearest 100
    return `₹${dep.toLocaleString('en-IN')}`;
  };
  const advanceDeposit = getAdvanceDeposit(totalFee);
  const depositNum = parseInt(advanceDeposit.replace(/[^0-9]/g, ''), 10) || 1000;
  const upiLink = `upi://pay?pa=8107241463@ybl&pn=TEJENDRA KUMAR MEENA&am=${depositNum}&cu=INR`;

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check MANDATORY Login Requirement
    if (!currentUser) {
      onRequireLogin();
      return;
    }

    // Save booking to storage for Admin Panel
    const saved = saveConsultationBooking({
      userName: formData.name,
      userEmail: formData.email,
      phone: formData.phone,
      dob: formData.dob,
      service: formData.service,
      date: formData.date,
      timeSlot: formData.timeSlot,
      notes: formData.notes,
      mode: formData.mode,
      duration: formData.duration,
      advanceDeposit: `${advanceDeposit} (20% Confirmed)`,
      totalFee: totalFee
    });

    setSubmittedBooking(saved);
    setIsSuccess(true);

    // Automatically trigger WhatsApp redirect in a new tab
    const waUrl = generateFormattedWhatsApp();
    window.open(waUrl, '_blank');
  };

  // WhatsApp Message Formatted Output
  const generateFormattedWhatsApp = () => {
    const qrLink = `${window.location.origin}/payment-qr.jpeg`;
    const text = 
`*NUMEROLOGY BY TEJENDRA*
----------------------------------
*New Consultation Booking Request*

*Client Name*: ${formData.name}
*Mobile*: ${formData.phone}
*Email*: ${formData.email || 'Not specified'}
*Date of Birth*: ${formData.dob || 'Not specified'}
*Service Focus*: ${formData.service}
*Meeting Mode*: ${formData.mode}
*Duration*: ${formData.duration}
*Preferred Date*: ${formData.date}
*Time Slot*: ${formData.timeSlot}
*Advance Booking Fee*: ${advanceDeposit}
*Total Fee*: ${totalFee}

----------------------------------
*Direct UPI Pay Link (Mobile Only):*
${upiLink}

*QR Code Scanner Link (View QR image):*
${qrLink}

----------------------------------
*Instructions:*
1. Pay the advance booking fee using any UPI app (Google Pay, PhonePe, Paytm, etc.).
2. Once paid, share the payment receipt screenshot here to confirm your slot!

"Numbers Speak. We Decode. You Succeed."`;

    return `https://wa.me/${brandInfo.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-2 sm:p-4">
      <div className="bg-white rounded-2xl sm:rounded-3xl max-w-lg w-full p-4 sm:p-8 shadow-2xl border-2 border-[#D4AF37] relative text-left max-h-[95vh] overflow-y-auto font-sans">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full cursor-pointer"
        >
          <X className="w-6 h-6" />
        </button>

        {/* User Not Logged In Warning Banner */}
        {!currentUser && (
          <div className="bg-amber-50 border border-amber-300 p-4 rounded-2xl mb-6 text-xs text-amber-900 flex items-start gap-3">
            <Lock className="w-5 h-5 text-[#1E3A8A] shrink-0 mt-0.5" />
            <div>
              <strong className="font-bold block text-sm text-[#1E3A8A]">Account Login Required</strong>
              <span>Please log in or register a free client account before completing your consultation booking.</span>
              <button
                type="button"
                onClick={onRequireLogin}
                className="mt-2 text-xs font-extrabold text-[#1E3A8A] underline block hover:text-[#D4AF37]"
              >
                Click Here to Sign In / Register
              </button>
            </div>
          </div>
        )}

        {!isSuccess ? (
          <div>
            <div className="text-center mb-6">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest block mb-1">
                NUMEROLOGY by TEJENDRA
              </span>
              <h3 className="text-2xl font-extrabold font-cinzel text-[#1E3A8A]">
                Book Consultation
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full max-w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="8107241463"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full max-w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.dob}
                    onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                    className="w-full max-w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Email Address (Optional)
                </label>
                <input
                  type="email"
                  placeholder="e.g. client@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full max-w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Consultation Service *
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full max-w-full px-4 py-3 rounded-xl border border-slate-300 text-sm font-medium focus:outline-none focus:border-[#D4AF37]"
                >
                  <optgroup label="Detailed Reports & Plans">
                    {reportsCatalog.map(r => (
                      <option key={r.id} value={r.title}>{r.title} ({r.price})</option>
                    ))}
                  </optgroup>
                  <optgroup label="Direct Consultation Sessions">
                    {discussionList.map(d => (
                      <option key={d.id} value={d.title}>{d.title} ({d.price})</option>
                    ))}
                  </optgroup>
                  <optgroup label="Specialized Consulting Services">
                    {servicesList.map(s => (
                      <option key={s.id} value={s.title}>{s.title} ({s.price})</option>
                    ))}
                  </optgroup>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Appointment Mode *
                  </label>
                  <select
                    value={formData.mode}
                    onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                    className="w-full max-w-full px-4 py-3 rounded-xl border border-slate-300 text-sm font-medium focus:outline-none focus:border-[#D4AF37]"
                  >
                    <option value="Online Zoom Meeting">Online Zoom Meeting</option>
                    <option value="Face to Face Office Meeting">Face to Face Office Meeting</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Duration *
                  </label>
                  <select
                    value={formData.duration}
                    onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                    className="w-full max-w-full px-4 py-3 rounded-xl border border-slate-300 text-sm font-medium focus:outline-none focus:border-[#D4AF37]"
                  >
                    <option value="30 Minutes">30 Minutes</option>
                    <option value="60 Minutes">60 Minutes</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full max-w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Time Slot *
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full max-w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#D4AF37]"
                  >
                    <option value="07:00 AM - 08:30 AM">Morning (7:00 AM - 8:30 AM)</option>
                    <option value="12:00 PM - 03:00 PM">Afternoon (12:00 PM - 3:00 PM)</option>
                    <option value="05:00 PM - 09:00 PM">Evening (5:00 PM - 9:00 PM)</option>
                  </select>
                </div>
              </div>


              <button
                type="submit"
                className="btn-primary w-full py-4 text-base font-extrabold cursor-pointer"
              >
                {currentUser ? 'Proceed to Confirm Slot & Send WhatsApp' : 'Log In to Confirm Booking'}
              </button>
            </form>
          </div>
        ) : (
          /* SUCCESS STATE */
          <div className="text-center space-y-5 py-2">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold font-cinzel text-[#1E3A8A]">Booking Request Submitted!</h3>
              <p className="text-xs text-slate-600 mt-1">
                Thank you, <strong className="text-slate-900">{formData.name}</strong>. We've saved your request in our admin system and opened WhatsApp to connect.
              </p>
            </div>

            {/* QR Payment Area */}
            <div className="bg-[#F8F6F1] border border-amber-200 p-4 rounded-2xl space-y-3">
              <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                👇 Pay 20% Booking Advance 👇
              </div>
              <div className="text-lg font-extrabold text-[#1E3A8A]">
                Advance Deposit: <span className="text-[#D4AF37]">{advanceDeposit}</span>
              </div>
              
              {/* QR Code Wrapper */}
              <div className="relative w-44 h-44 mx-auto bg-white p-2 rounded-xl shadow-md border-2 border-[#D4AF37] flex items-center justify-center overflow-hidden">
                <img 
                  src="/payment-qr.jpeg" 
                  alt="Payment QR Code Scanner"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Pay via UPI button for mobiles */}
              <div className="px-2">
                <a
                  href={upiLink}
                  className="w-full py-2.5 px-4 text-xs font-extrabold bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 text-white rounded-xl transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer uppercase tracking-wider"
                >
                  ⚡ Pay via UPI App (GPay/PhonePe)
                </a>
              </div>

              <div className="text-[11px] text-slate-500 font-medium leading-relaxed px-2">
                Scan using <strong className="text-slate-800">any UPI app</strong> (Google Pay, PhonePe, Paytm, BHIM, etc.) or click the button above on mobile.
              </div>
              <div className="text-[11px] bg-[#1E3A8A]/10 text-[#1E3A8A] font-bold py-1.5 px-3 rounded-lg inline-block">
                Please share the payment screenshot on WhatsApp to confirm your slot!
              </div>
            </div>

            <div className="space-y-2">
              <a
                href={generateFormattedWhatsApp()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 text-sm font-extrabold flex items-center justify-center gap-2 block bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-xl transition-all shadow-md cursor-pointer"
              >
                <MessageSquare className="w-5 h-5 text-white" />
                Go to WhatsApp Chat
              </a>

              <button
                onClick={() => { setIsSuccess(false); onClose(); }}
                className="w-full py-2 text-xs text-slate-400 hover:text-slate-600 font-bold cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
