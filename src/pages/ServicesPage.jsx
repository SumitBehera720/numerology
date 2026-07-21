import React from 'react';
import { CheckCircle2, Calendar, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { servicesList, brandInfo } from '../data/tejendraData';

export default function ServicesPage({ onOpenConsultation }) {
  return (
    <div className="min-h-screen bg-[#F8F6F1] py-12 px-4 sm:px-6 lg:px-8 text-left">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Banner with Staggered Text Animations */}
        <div className="bg-[#1E3A8A] text-white rounded-3xl p-8 sm:p-14 shadow-2xl border-2 border-[#D4AF37]/30 text-center relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-3 animate-text delay-100">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            Consulting Categories
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-cinzel text-white animate-text delay-200">
            Numerology Consultation Services
          </h1>
          <p className="text-slate-200 text-sm sm:text-base mt-3 max-w-2xl mx-auto font-poppins animate-text delay-300">
            Explore our specialized categories: Corporate, Business, Career, Couples & Relationship, Students, and Parenting Numerology.
          </p>
        </div>

        {/* Services List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesList.map((service, idx) => (
            <div key={service.id} className={`bg-white rounded-3xl p-8 shadow-xl border border-[#D4AF37]/30 flex flex-col justify-between animate-text delay-${(idx + 1) * 100}`}>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-extrabold bg-[#1E3A8A] text-[#D4AF37] px-3.5 py-1 rounded-full">
                    {service.badge}
                  </span>
                  <span className="text-xl font-extrabold font-cinzel text-[#1E3A8A]">
                    {service.price}
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold font-cinzel text-slate-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {service.fullDesc}
                </p>

                <h4 className="text-xs font-bold uppercase tracking-wider text-[#1E3A8A] mb-3">
                  Key Scope & Deliverables:
                </h4>
                <ul className="space-y-2.5 mb-8">
                  {service.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={onOpenConsultation}
                className="btn-primary w-full py-4 text-sm font-extrabold flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                Book {service.title} Session
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
