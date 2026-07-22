import React, { useState, useEffect } from 'react';
import { X, Calendar, User, Phone, Mail, CheckCircle2, Sparkles, Lock, ArrowRight, MessageSquare } from 'lucide-react';
import { brandInfo, servicesList, saveConsultationBooking } from '../data/tejendraData';

export default function ConsultationModal({ isOpen, onClose, currentUser, onRequireLogin }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    dob: '',
    service: 'Corporate Numerology',
    date: '',
    timeSlot: '07:00 AM - 08:30 AM',
    notes: ''
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedBooking, setSubmittedBooking] = useState(null);

  // Autofill current user details if logged in
  useEffect(() => {
    if (currentUser) {
      setFormData(prev => ({
        ...prev,
        name: currentUser.name || prev.name,
        email: currentUser.email || prev.email,
        phone: currentUser.phone || prev.phone,
        dob: currentUser.dob || prev.dob
      }));
    }
  }, [currentUser, isOpen]);

  if (!isOpen) return null;

  // Get active service details
  const activeService = servicesList.find(s => s.title === formData.service) || servicesList[0];
  const totalFee = activeService.price;
  
  // Calculate dynamic 20% deposit
  const getAdvanceDeposit = (priceStr) => {
    const num = parseInt(priceStr.replace(/[^0-9]/g, ''), 10);
    if (isNaN(num)) return '₹1,000';
    const dep = Math.round(num * 0.2 / 100) * 100; // round to nearest 100
    return `₹${dep.toLocaleString('en-IN')}`;
  };
  const advanceDeposit = getAdvanceDeposit(totalFee);

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
      advanceDeposit: `${advanceDeposit} (20% Confirmed)`,
      totalFee: totalFee
    });

    setSubmittedBooking(saved);
    setIsSuccess(true);
  };

  // WhatsApp Message Formatted Output
  const generateFormattedWhatsApp = () => {
    const text = 
`🌟 *NUMEROLOGY BY TEJENDRA* 🌟
----------------------------------
📌 *New Consultation Booking Request*

👤 *Client Name*: ${formData.name}
📱 *Mobile*: ${formData.phone}
✉️ *Email*: ${formData.email}
🎂 *Date of Birth*: ${formData.dob || 'Not specified'}
🔮 *Service Focus*: ${formData.service}
📅 *Preferred Date*: ${formData.date}
⏰ *Time Slot*: ${formData.timeSlot}
💳 *Advance Deposit*: ${advanceDeposit} (20% Booking Fee)
💰 *Total Fee*: ${totalFee}

----------------------------------
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
                Numerology by Tejendra
              </span>
              <h3 className="text-2xl font-extrabold font-cinzel text-[#1E3A8A]">
                Book Consultation
              </h3>
              <p className="text-xs text-slate-500 mt-1 font-medium">
                20% Advance Booking Deposit @ {advanceDeposit} | Total Project Cost @ {totalFee}
              </p>
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
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="tejendrameena7@gmail.com"
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
                  {servicesList.map(s => {
                    const displayTitle = s.title.replace(" Numerology", "");
                    return (
                      <option key={s.id} value={s.title}>{displayTitle} ({s.price})</option>
                    );
                  })}
                </select>
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

              <div className="bg-[#F8F6F1] p-3.5 rounded-2xl border border-[#D4AF37]/30 text-xs text-slate-700 space-y-1">
                <div className="flex justify-between font-bold">
                  <span>Advance Payment Deposit (20%):</span>
                  <span className="text-[#1E3A8A]">{advanceDeposit}</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Project Fee:</span>
                  <span>{totalFee}</span>
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
          <div className="text-center space-y-6 py-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-extrabold font-cinzel text-slate-900">Request Confirmed!</h3>
            <p className="text-xs text-slate-600">
              Thank you, <strong className="text-slate-900">{formData.name}</strong>. Your booking request has been logged in the system. Send your details via WhatsApp to complete slot confirmation.
            </p>

            <a
              href={generateFormattedWhatsApp()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full py-4 text-sm font-extrabold flex items-center justify-center gap-2 block"
            >
              <MessageSquare className="w-5 h-5 text-white" />
              Send Formatted Details on WhatsApp
            </a>

            <button
              onClick={() => { setIsSuccess(false); onClose(); }}
              className="w-full py-2.5 text-xs text-slate-500 font-semibold cursor-pointer"
            >
              Close Window
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
