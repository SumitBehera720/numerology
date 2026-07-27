import React, { useState } from 'react';
import { 
  User, Mail, Phone, Calendar, Lock, Eye, EyeOff, ShieldCheck, CheckCircle2, 
  Sparkles, ArrowRight, MessageSquare
} from 'lucide-react';
import { brandInfo, servicesList, saveRegisteredUser } from '../data/tejendraData';

export default function RegisterPage({ onOpenConsultation, setActiveTab, setCurrentUser }) {
  const [formData, setFormData] = useState({
    name: '',
    countryCode: '+91',
    phone: '',
    dob: '',
    agreeTerms: true
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setTimeout(() => {
      const fullPhone = `${formData.countryCode} ${formData.phone}`;
      // Save User to LocalStorage & Login
      saveRegisteredUser({
        name: formData.name,
        phone: fullPhone,
        dob: formData.dob
      });

      const userSession = {
        name: formData.name,
        phone: fullPhone,
        dob: formData.dob,
        role: 'client'
      };

      setCurrentUser(userSession);
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 800);
  };

  const countryCodes = [
    { code: '+91', flag: '🇮🇳', label: 'India (+91)' },
    { code: '+1', flag: '🇺🇸', label: 'USA / Canada (+1)' },
    { code: '+44', flag: '🇬🇧', label: 'UK (+44)' },
    { code: '+971', flag: '🇦🇪', label: 'UAE (+971)' },
    { code: '+966', flag: '🇸🇦', label: 'Saudi Arabia (+966)' }
  ];

  const whatsappQuestionUrl = `https://wa.me/${brandInfo.whatsapp}?text=${encodeURIComponent(
    'Hello Teiendraa K Meena Ji, I have a question regarding Numerology consultation.'
  )}`;

  return (
    <div className="min-h-screen bg-[#F8F6F1] py-10 px-4 sm:px-6 lg:px-8 pb-28">
      <div className="max-w-md mx-auto">

        {!isSubmitted ? (
          /* EXACT REGISTER NOW CARD Inspired by Reference Screenshot */
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border-2 border-[#1E3A8A] text-left relative">
            
            {/* Title & Subtitle */}
            <div className="text-center mb-6">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest block mb-1">
                NUMEROLOGY by TEJENDRA
              </span>
              <h2 className="text-2xl font-extrabold font-cinzel text-[#1E3A8A]">
                Register Now
              </h2>
              <p className="text-xs text-slate-500 font-medium mt-0.5">
                To book a personal consultation
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Field 1: Name */}
              <div>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] text-sm font-medium"
                />
              </div>

              {/* Field 2: Flag + Country Code + Phone Number */}
              <div className="flex gap-2">
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleInputChange}
                  className="w-24 px-2 py-3 rounded-lg border border-slate-300 bg-slate-50 text-slate-800 text-xs font-bold focus:outline-none focus:border-[#D4AF37]"
                >
                  {countryCodes.map(c => (
                    <option key={c.code} value={c.code}>
                      {c.flag} {c.code}
                    </option>
                  ))}
                </select>

                <div className="flex-1 relative">
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+91 Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] text-sm font-medium"
                  />
                </div>
              </div>

              {/* Field 3: DD-MM-YYYY Date of Birth */}
              <div>
                <input
                  type="date"
                  name="dob"
                  required
                  placeholder="DD-MM-YYYY"
                  value={formData.dob}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#D4AF37] text-sm font-medium"
                />
              </div>

              {/* Checkbox & Terms Agreement */}
              <div className="flex items-start gap-2.5 pt-2">
                <input
                  type="checkbox"
                  id="agreeTerms"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleInputChange}
                  className="mt-1 w-4 h-4 text-[#D4AF37] focus:ring-[#D4AF37] rounded border-slate-300 cursor-pointer"
                />
                <label htmlFor="agreeTerms" className="text-[11px] text-slate-700 leading-tight">
                  I agree to receive communication from NUMEROLOGY by TEJENDRA via text messaging. Communication will be occasional as required and no spam will be sent. View{' '}
                  <button type="button" onClick={() => setActiveTab('policies')} className="text-[#1E3A8A] underline font-bold">Terms & conditions</button> and{' '}
                  <button type="button" onClick={() => setActiveTab('policies')} className="text-[#1E3A8A] underline font-bold">Privacy Policy</button>.
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full py-3.5 px-6 text-base font-extrabold shadow-md cursor-pointer"
                >
                  {isSubmitting ? 'Registering Account...' : 'Submit'}
                </button>
              </div>

              <div className="text-center pt-2">
                <span className="text-xs text-slate-600 font-medium">Already have an account? </span>
                <button
                  type="button"
                  onClick={() => setActiveTab('login')}
                  className="text-[#1E3A8A] font-extrabold text-xs hover:underline cursor-pointer"
                >
                  Sign In
                </button>
              </div>

            </form>
          </div>
        ) : (
          /* Success Screen */
          <div className="bg-white rounded-2xl p-8 shadow-2xl border-2 border-emerald-500 text-center animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-extrabold font-cinzel text-slate-900">Registration Complete!</h3>
            <p className="text-xs text-slate-600 mt-2">
              Thank you, <strong className="text-slate-900">{formData.name}</strong>. You are logged in to your client account.
            </p>

            <div className="my-6 space-y-2">
              <button
                onClick={onOpenConsultation}
                className="btn-primary w-full py-3.5 text-sm cursor-pointer"
              >
                Proceed to Book Consultation
              </button>
              <button
                onClick={() => setActiveTab('home')}
                className="w-full py-3 bg-slate-100 text-slate-800 font-bold text-xs rounded-xl cursor-pointer"
              >
                Return to Home
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
