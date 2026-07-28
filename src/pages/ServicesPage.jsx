import React from 'react';
import { CheckCircle2, Calendar, ArrowRight, ShieldCheck, Sparkles, BookOpen } from 'lucide-react';
import { servicesList, brandInfo, reportsCatalog } from '../data/tejendraData';
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
              Consulting & Reports
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-cinzel text-white animate-text delay-200">
              Numerology Services & Reports
            </h1>
            <p className="text-slate-200 text-sm sm:text-base mt-3 max-w-2xl mx-auto font-poppins animate-text delay-300">
              Explore our premium reports, priority booking slots, and specialized corporate, business, and personal numerology consulting options.
            </p>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════
            1. NUMEROLOGY REPORTS CATALOG
        ═══════════════════════════════════════════════════════ */}
        <section className="bg-white py-16 border-t border-slate-200 rounded-3xl shadow-sm px-4 sm:px-8">
          <div className="max-w-7xl mx-auto space-y-8 text-center">
            <ScrollReveal>
              <div>
                <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1E3A8A]/10 text-[#1E3A8A] text-xs font-bold uppercase tracking-widest">
                  Premium Reports
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold font-cinzel text-[#1E3A8A] mt-3">
                  Premium Numerology Reports
                </h2>
                <p className="text-slate-600 text-sm max-w-xl mx-auto mt-2 font-medium">
                  Order custom 5–20 page PDF blueprints calculated specifically for your birth date and name numbers.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 text-left pt-4">
              {reportsCatalog.map((rep) => (
                <div key={rep.id} className="bg-[#F8F6F1] rounded-3xl p-8 border-2 border-[#D4AF37]/40 flex flex-col justify-between hover:border-[#1E3A8A] transition-all duration-300 shadow-lg">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold uppercase bg-[#D4AF37] text-white px-3 py-1 rounded">
                        {rep.tag}
                      </span>
                      <div className="flex flex-col items-end">
                        <span className="text-xs text-slate-400 line-through font-semibold">
                          {rep.originalPrice}
                        </span>
                        <span className="text-2xl font-extrabold font-cinzel text-[#1E3A8A]">
                          {rep.price}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-extrabold font-cinzel text-slate-900 mb-2">
                      {rep.title}
                    </h3>
                    <span className="text-xs font-semibold text-[#1E3A8A] block mb-4">{rep.pages}</span>

                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {rep.description}
                    </p>
                  </div>

                  <button
                    onClick={() => onOpenConsultation({ service: rep.title })}
                    className="btn-primary w-full py-4 text-sm font-extrabold flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <BookOpen className="w-4 h-4" />
                    Order {rep.title}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            2. BOOK AN APPOINTMENT SECTION (Priority Sessions)
        ═══════════════════════════════════════════════════════ */}
        <section className="bg-white py-16 border-t border-slate-200 rounded-3xl shadow-sm px-4 sm:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <ScrollReveal>
              <div>
                <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1E3A8A]/10 text-[#1E3A8A] text-xs font-bold uppercase tracking-widest">
                  Priority Sessions
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold font-cinzel text-[#1E3A8A] mt-3">
                  Book An Appointment
                </h2>
                <p className="text-slate-600 text-sm max-w-xl mx-auto mt-2 font-medium">
                  Select your preferred meeting type and duration to schedule a consultation slot with Tejendraa k meena.
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
                    <p className="text-xs font-black text-slate-700 uppercase tracking-widest mb-4">
                      Book your Appointment for:
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                      <button
                        onClick={() => onOpenConsultation({ mode: 'Online Zoom Meeting', duration: '30 Minutes' })}
                        className="w-full sm:w-auto min-w-[130px] py-3 px-4 rounded-2xl bg-white hover:bg-[#D4AF37]/10 border-2 border-[#D4AF37] flex flex-col items-center justify-center transition-all cursor-pointer hover:scale-105 shadow-sm group-hover:border-[#1E3A8A]"
                        title="Book 30 Minutes Online Session"
                      >
                        <span className="text-xs font-black text-[#1E3A8A] uppercase tracking-wide">30 Minutes</span>
                        <span className="text-[#1E3A8A] font-extrabold text-base mt-1">₹2,599</span>
                        <span className="text-slate-400 line-through text-[10px] font-semibold">₹5,999</span>
                      </button>
                      <button
                        onClick={() => onOpenConsultation({ mode: 'Online Zoom Meeting', duration: '60 Minutes' })}
                        className="w-full sm:w-auto min-w-[130px] py-3 px-4 rounded-2xl bg-white hover:bg-[#D4AF37]/10 border-2 border-[#D4AF37] flex flex-col items-center justify-center transition-all cursor-pointer hover:scale-105 shadow-sm group-hover:border-[#1E3A8A]"
                        title="Book 60 Minutes Online Session"
                      >
                        <span className="text-xs font-black text-[#1E3A8A] uppercase tracking-wide">60 Minutes</span>
                        <span className="text-[#1E3A8A] font-extrabold text-base mt-1">₹7,999</span>
                        <span className="text-slate-400 line-through text-[10px] font-semibold">₹14,999</span>
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
                    <p className="text-xs font-black text-slate-700 uppercase tracking-widest mb-4">
                      Book your Appointment for:
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                      <button
                        onClick={() => onOpenConsultation({ mode: 'Face to Face Office Meeting', duration: '30 Minutes' })}
                        className="w-full sm:w-auto min-w-[130px] py-3 px-4 rounded-2xl bg-white hover:bg-[#D4AF37]/10 border-2 border-[#D4AF37] flex flex-col items-center justify-center transition-all cursor-pointer hover:scale-105 shadow-sm group-hover:border-[#1E3A8A]"
                        title="Book 30 Minutes In-Person Session"
                      >
                        <span className="text-xs font-black text-[#1E3A8A] uppercase tracking-wide">30 Minutes</span>
                        <span className="text-[#1E3A8A] font-extrabold text-base mt-1">₹4,999</span>
                        <span className="text-slate-400 line-through text-[10px] font-semibold">₹9,999</span>
                      </button>
                      <button
                        onClick={() => onOpenConsultation({ mode: 'Face to Face Office Meeting', duration: '60 Minutes' })}
                        className="w-full sm:w-auto min-w-[130px] py-3 px-4 rounded-2xl bg-white hover:bg-[#D4AF37]/10 border-2 border-[#D4AF37] flex flex-col items-center justify-center transition-all cursor-pointer hover:scale-105 shadow-sm group-hover:border-[#1E3A8A] relative overflow-hidden"
                        title="Book 60 Minutes In-Person Session"
                      >
                        <div className="absolute top-0 right-0 bg-[#D4AF37] text-[7px] text-[#1E3A8A] font-black px-1.5 py-0.5 rounded-bl uppercase tracking-wider">Offer</div>
                        <span className="text-xs font-black text-[#1E3A8A] uppercase tracking-wide">60 Minutes</span>
                        <span className="text-[#1E3A8A] font-extrabold text-base mt-1">₹9,999</span>
                        <span className="text-slate-400 line-through text-[10px] font-semibold">₹14,999</span>
                      </button>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            3. SPECIALIZED CONSULTING SERVICES (Rest)
        ═══════════════════════════════════════════════════════ */}
        <section className="bg-white py-16 border-t border-slate-200 rounded-3xl shadow-sm px-4 sm:px-8">
          <div className="max-w-7xl mx-auto space-y-8 text-center">
            <ScrollReveal>
              <div>
                <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1E3A8A]/10 text-[#1E3A8A] text-xs font-bold uppercase tracking-widest">
                  Consulting Categories
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold font-cinzel text-[#1E3A8A] mt-3">
                  Specialized Consulting Services
                </h2>
                <p className="text-slate-600 text-sm max-w-xl mx-auto mt-2 font-medium">
                  Deep professional guidance tailored for your business registration, co-founder harmony, career timeline, or parenting and relationship alignment.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left pt-4">
              {servicesList.map((service, idx) => (
                <div key={service.id} className="bg-[#F8F6F1] rounded-3xl p-8 border-2 border-[#D4AF37]/40 flex flex-col justify-between hover:border-[#1E3A8A] transition-all duration-300 shadow-lg">
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
        </section>

      </div>
    </div>
  );
}
