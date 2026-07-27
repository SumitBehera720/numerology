import React from 'react';
import { CheckCircle2, Calendar, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { servicesList, brandInfo } from '../data/tejendraData';
import SolarSystemBackground from '../components/SolarSystemBackground';
import { ScrollReveal } from '../hooks/useScrollReveal';

export default function ServicesPage({ onOpenConsultation }) {
  return (
    <div className="min-h-screen bg-[#F8F6F1] py-12 px-4 sm:px-6 lg:px-8 text-left">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Banner with Staggered Text Animations */}
        <div className="bg-[#1E3A8A] text-white rounded-3xl p-8 sm:p-14 shadow-2xl border-2 border-[#D4AF37]/30 text-center relative overflow-hidden">
          <SolarSystemBackground />
          <div className="relative z-10 w-full">
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

        {/* ═══════════════════════════════════════════════════════
            BOOK AN APPOINTMENT SECTION (Inspired by Reference Screenshot)
        ═══════════════════════════════════════════════════════ */}
        <section className="bg-white py-16 border-t border-slate-200 rounded-3xl mt-12 shadow-sm">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <ScrollReveal>
              <div>
                <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1E3A8A]/10 text-[#1E3A8A] text-xs font-bold uppercase tracking-widest">
                  Priority Sessions
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold font-cinzel text-[#1E3A8A] mt-3">
                  Book An Appointment
                </h2>
                <p className="text-slate-600 text-sm max-w-xl mx-auto mt-2 font-medium">
                  Select your preferred meeting type and duration to schedule a consultation slot with Teiendraa K Meena.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              
              {/* Card 1: Online Appointment */}
              <ScrollReveal>
                <div className="bg-[#F8F6F1] rounded-3xl p-6 sm:p-8 border-2 border-[#D4AF37]/40 shadow-lg space-y-5 text-center flex flex-col justify-between h-full group hover:border-[#1E3A8A] transition-all">
                  <div className="space-y-4">
                    <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm h-48">
                      <img 
                        src="/logo.jpeg" 
                        alt="Online Consultation" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="text-xl font-extrabold font-cinzel text-[#1E3A8A]">
                      Online Appointment
                    </h3>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wide">
                      Online Zoom Meeting
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
                      Ask anything about you, your career, marriage, family etc. from any location globally.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200">
                    <p className="text-xs font-black text-slate-700 uppercase tracking-widest mb-3.5">
                      Book your Appointment for:
                    </p>
                    <div className="flex justify-center gap-6">
                      <button
                        onClick={() => onOpenConsultation({ mode: 'Online Zoom Meeting', duration: '30 Minutes' })}
                        className="w-16 h-16 rounded-full bg-[#1E3A8A]/10 hover:bg-[#D4AF37] hover:text-[#1E3A8A] border-2 border-[#D4AF37] flex flex-col items-center justify-center text-[10px] font-black text-[#1E3A8A] transition-all cursor-pointer hover:scale-110 shadow-sm"
                        title="Book 30 Minutes Online Session"
                      >
                        <span className="text-base font-extrabold leading-none">30</span>
                        <span className="text-[8px] font-bold">Minutes</span>
                      </button>
                      <button
                        onClick={() => onOpenConsultation({ mode: 'Online Zoom Meeting', duration: '60 Minutes' })}
                        className="w-16 h-16 rounded-full bg-[#1E3A8A]/10 hover:bg-[#D4AF37] hover:text-[#1E3A8A] border-2 border-[#D4AF37] flex flex-col items-center justify-center text-[10px] font-black text-[#1E3A8A] transition-all cursor-pointer hover:scale-110 shadow-sm"
                        title="Book 60 Minutes Online Session"
                      >
                        <span className="text-base font-extrabold leading-none">60</span>
                        <span className="text-[8px] font-bold">Minutes</span>
                      </button>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Card 2: Face to Face Appointment */}
              <ScrollReveal>
                <div className="bg-[#F8F6F1] rounded-3xl p-6 sm:p-8 border-2 border-[#D4AF37]/40 shadow-lg space-y-5 text-center flex flex-col justify-between h-full group hover:border-[#1E3A8A] transition-all">
                  <div className="space-y-4">
                    <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm h-48">
                      <img 
                        src="/numerology pic.jpg" 
                        alt="Face to Face Consultation" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="text-xl font-extrabold font-cinzel text-[#1E3A8A]">
                      Face to Face Appointment
                    </h3>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wide">
                      Face to Face Meeting in office
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
                      In-person consultation in our office for in-depth chart readings and personal strategy.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200">
                    <p className="text-xs font-black text-slate-700 uppercase tracking-widest mb-3.5">
                      Book your Appointment for:
                    </p>
                    <div className="flex justify-center gap-6">
                      <button
                        onClick={() => onOpenConsultation({ mode: 'Face to Face Office Meeting', duration: '30 Minutes' })}
                        className="w-16 h-16 rounded-full bg-[#1E3A8A]/10 hover:bg-[#D4AF37] hover:text-[#1E3A8A] border-2 border-[#D4AF37] flex flex-col items-center justify-center text-[10px] font-black text-[#1E3A8A] transition-all cursor-pointer hover:scale-110 shadow-sm"
                        title="Book 30 Minutes In-Person Session"
                      >
                        <span className="text-base font-extrabold leading-none">30</span>
                        <span className="text-[8px] font-bold">Minutes</span>
                      </button>
                      <button
                        onClick={() => onOpenConsultation({ mode: 'Face to Face Office Meeting', duration: '60 Minutes' })}
                        className="w-16 h-16 rounded-full bg-[#1E3A8A]/10 hover:bg-[#D4AF37] hover:text-[#1E3A8A] border-2 border-[#D4AF37] flex flex-col items-center justify-center text-[10px] font-black text-[#1E3A8A] transition-all cursor-pointer hover:scale-110 shadow-sm"
                        title="Book 60 Minutes In-Person Session"
                      >
                        <span className="text-base font-extrabold leading-none">60</span>
                        <span className="text-[8px] font-bold">Minutes</span>
                      </button>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
