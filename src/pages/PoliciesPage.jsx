import React, { useState } from 'react';
import { ShieldCheck, FileText, BadgeAlert, ArrowRight, Calendar } from 'lucide-react';
import { brandInfo } from '../data/tejendraData';

export default function PoliciesPage({ onOpenConsultation }) {
  const [activeSubTab, setActiveSubTab] = useState('refund');

  return (
    <div className="min-h-screen bg-[#F8F6F1] py-12 px-4 sm:px-6 lg:px-8 text-left">
      <div className="max-w-5xl mx-auto space-y-8 animate-page-entrance">
        
        {/* Header Hero Banner */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border-2 border-[#D4AF37]/30 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3">
            <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#1E3A8A] px-3.5 py-1 rounded-full">
              Legal & Policies
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold font-cinzel text-[#1E3A8A]">
              Terms & Policies
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
              Please review our Terms of Service, Privacy guidelines, and Refund policies regarding your professional consultation bookings.
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="btn-primary py-4 px-6 text-sm font-extrabold shrink-0 flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4 text-white" />
            Book Consultation
          </button>
        </div>

        {/* Tab Controls */}
        <div className="flex border-b border-slate-200 gap-2 sm:gap-4 overflow-x-auto pb-1.5">
          <button
            onClick={() => setActiveSubTab('refund')}
            className={`px-4 py-2.5 rounded-t-xl text-xs sm:text-sm font-bold transition-all shrink-0 flex items-center gap-2 cursor-pointer ${
              activeSubTab === 'refund'
                ? 'bg-[#1E3A8A] text-white border-b-2 border-[#D4AF37]'
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            <BadgeAlert className="w-4 h-4 shrink-0" />
            Refund Policy
          </button>
          <button
            onClick={() => setActiveSubTab('terms')}
            className={`px-4 py-2.5 rounded-t-xl text-xs sm:text-sm font-bold transition-all shrink-0 flex items-center gap-2 cursor-pointer ${
              activeSubTab === 'terms'
                ? 'bg-[#1E3A8A] text-white border-b-2 border-[#D4AF37]'
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            <FileText className="w-4 h-4 shrink-0" />
            Terms & Conditions
          </button>
          <button
            onClick={() => setActiveSubTab('privacy')}
            className={`px-4 py-2.5 rounded-t-xl text-xs sm:text-sm font-bold transition-all shrink-0 flex items-center gap-2 cursor-pointer ${
              activeSubTab === 'privacy'
                ? 'bg-[#1E3A8A] text-white border-b-2 border-[#D4AF37]'
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            <ShieldCheck className="w-4 h-4 shrink-0" />
            Privacy Policy
          </button>
        </div>

        {/* Content Box */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-lg border border-slate-200 min-h-[300px]">
          
          {activeSubTab === 'refund' && (
            <div className="space-y-6 animate-text delay-100">
              <h3 className="text-2xl font-bold font-cinzel text-[#1E3A8A] border-b border-slate-100 pb-3 flex items-center gap-2.5">
                <BadgeAlert className="w-6 h-6 text-[#D4AF37]" />
                Refund Policy
              </h3>
              
              <div className="bg-amber-50 border border-amber-300 p-5 rounded-2xl text-amber-900 text-xs sm:text-sm leading-relaxed space-y-2">
                <strong className="font-extrabold text-[#1E3A8A] block text-base">⚠️ Critical Notice Regarding Payments:</strong>
                <p className="font-semibold">
                  Once a consultation is booked, the booking amount (including both the 20% advance booking deposit and the final balance payment) will <span className="underline decoration-2 decoration-[#1E3A8A]">not be refunded back</span> under any circumstances.
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <p>
                  At <strong>{brandInfo.name}</strong>, we dedicate substantial time and analytical preparation to formulate your personalized Pythagorean & Chaldean numerology charts and profiles prior to your direct consultation session. Due to the custom, individualized nature of our services, all sales are absolute.
                </p>
                <h4 className="text-base font-bold text-[#1E3A8A] font-cinzel pt-2">Rescheduling Policy</h4>
                <p>
                  We understand that unexpected conflicts arise. You may request to reschedule your consultation session up to **24 hours before** your scheduled slot. 
                </p>
                <ul className="list-disc pl-5 space-y-1.5 font-medium text-slate-700">
                  <li>Requests must be sent via WhatsApp at <a href={`tel:${brandInfo.phoneRaw}`} className="text-[#1E3A8A] underline font-bold">{brandInfo.phone}</a> or Email at <a href={`mailto:${brandInfo.email}`} className="text-[#1E3A8A] underline font-bold">{brandInfo.email}</a>.</li>
                  <li>One complimentary reschedule is allowed per booking.</li>
                  <li>Failure to show up for your consultation session or requesting a reschedule less than 24 hours in advance will result in forfeiture of your advance deposit.</li>
                </ul>
              </div>
            </div>
          )}

          {activeSubTab === 'terms' && (
            <div className="space-y-6 animate-text delay-100">
              <h3 className="text-2xl font-bold font-cinzel text-[#1E3A8A] border-b border-slate-100 pb-3 flex items-center gap-2.5">
                <FileText className="w-6 h-6 text-[#D4AF37]" />
                Terms & Conditions
              </h3>
              <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <p>
                  Welcome to <strong>{brandInfo.name}</strong>. By accessing our website, registering a client account, or booking consultations, you agree to comply with and be bound by the following terms and conditions of use.
                </p>
                
                <h4 className="text-base font-bold text-[#1E3A8A] font-cinzel pt-2">1. Scope of Consultations</h4>
                <p>
                  Numerology analysis, predictions, spelling modifications, and compatibility scores are provided as self-empowerment tools. They represent the intuitive analysis and corporate guidance of Tejendra Meena and do not guarantee specific material outcomes.
                </p>
                
                <h4 className="text-base font-bold text-[#1E3A8A] font-cinzel pt-2">2. Professional Disclaimer</h4>
                <p>
                  Our services are for educational and analytical purposes. They do not constitute formal legal, financial, medical, or psychiatric advice. Clients are encouraged to exercise independent judgment and consult licensed professionals for critical career, business, or health decisions.
                </p>

                <h4 className="text-base font-bold text-[#1E3A8A] font-cinzel pt-2">3. Payment & Booking</h4>
                <p>
                  Bookings require a 20% advance deposit to secure a priority calendar slot. The remaining balance must be paid upon delivery of the reports or at the start of the virtual session. As noted in our Refund Policy, all payments are non-refundable.
                </p>

                <h4 className="text-base font-bold text-[#1E3A8A] font-cinzel pt-2">4. User Account Responsibility</h4>
                <p>
                  Clients are responsible for maintaining the confidentiality of their portal credentials and ensuring all submitted date of birth and spelling details are accurate. Errors in input data can lead to incorrect calculations.
                </p>
              </div>
            </div>
          )}

          {activeSubTab === 'privacy' && (
            <div className="space-y-6 animate-text delay-100">
              <h3 className="text-2xl font-bold font-cinzel text-[#1E3A8A] border-b border-slate-100 pb-3 flex items-center gap-2.5">
                <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />
                Privacy Policy
              </h3>
              <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <p>
                  At <strong>{brandInfo.name}</strong>, we prioritize the confidentiality of our clients' planetary grids and personal history. We handle your sensitive details with the highest standards of safety and professional discretion.
                </p>

                <h4 className="text-base font-bold text-[#1E3A8A] font-cinzel pt-2">1. Information We Collect</h4>
                <p>
                  To perform accurate calculations, we collect your **Full Name, Official Spelling, Date of Birth, Email Address, and Phone Number**.
                </p>

                <h4 className="text-base font-bold text-[#1E3A8A] font-cinzel pt-2">2. How We Protect Your Data</h4>
                <ul className="list-disc pl-5 space-y-1.5">
                  <li>Client records are kept completely confidential and are never shared or sold to external marketing networks.</li>
                  <li>Portal storage is encrypted, and payment bookings are logged directly inside our private secure database.</li>
                  <li>Spelling adjustments, business plans, and relationship charts are discussed solely with the registered client.</li>
                </ul>

                <h4 className="text-base font-bold text-[#1E3A8A] font-cinzel pt-2">3. Contacting Us</h4>
                <p>
                  For any privacy questions or to request removal of your registered client record, please contact our support team at <a href={`mailto:${brandInfo.email}`} className="text-[#1E3A8A] underline font-bold">{brandInfo.email}</a>.
                </p>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
