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
    otp: '',
    email: '',
    dob: '',
    service: 'Corporate Numerology',
    password: '',
    confirmPassword: '',
    agreeTerms: true
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSendOtp = () => {
    if (!formData.phone) {
      alert('Please enter your mobile number first');
      return;
    }
    setOtpSent(true);
    alert(`OTP sent to ${formData.countryCode} ${formData.phone} (Mock OTP: 1234)`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password && formData.confirmPassword && formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      // Save User to LocalStorage & Login
      const savedUsers = saveRegisteredUser({
        name: formData.name,
        email: formData.email,
        phone: `${formData.countryCode} ${formData.phone}`,
        dob: formData.dob
      });

      const userSession = {
        name: formData.name,
        email: formData.email,
        phone: `${formData.countryCode} ${formData.phone}`,
        dob: formData.dob
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
    'Hello Tejendra Meena Ji, I have a question regarding Numerology consultation.'
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
                Numerology by Tejendra
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

              {/* Field 3: Enter OTP */}
              <div className="relative flex items-center">
                <input
                  type="text"
                  name="otp"
                  placeholder="Enter OTP"
                  value={formData.otp}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#D4AF37] text-sm font-medium pr-24"
                />
                <button
                  type="button"
                  onClick={handleSendOtp}
                  className="absolute right-2 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-[#1E3A8A] font-bold text-xs rounded transition-colors cursor-pointer"
                >
                  {otpSent ? 'Resend' : 'Send OTP'}
                </button>
              </div>

              {/* Field 4: Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#D4AF37] text-sm font-medium"
                />
              </div>

              {/* Field 5: DD-MM-YYYY Date of Birth */}
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

              {/* Field 6: Password with eye toggle */}
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  required
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#D4AF37] text-sm font-medium pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(prev => !prev)}
                  className="absolute right-3 top-3.5 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              {/* Field 7: Confirm Password with eye toggle */}
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  required
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#D4AF37] text-sm font-medium pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(prev => !prev)}
                  className="absolute right-3 top-3.5 text-slate-400 hover:text-slate-600"
                >
                  {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
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
                  I agree to receive communication from Numerology by Tejendra via text messaging. Communication will be occasional as required and no spam will be sent. View{' '}
                  <button type="button" onClick={() => setActiveTab('contact')} className="text-[#1E3A8A] underline font-bold">Terms & conditions</button> and{' '}
                  <button type="button" onClick={() => setActiveTab('contact')} className="text-[#1E3A8A] underline font-bold">Privacy Policy</button>.
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
