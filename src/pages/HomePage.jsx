import React, { useState } from 'react';
import { 
  Sparkles, Calendar, CheckCircle2, ArrowRight, ShieldCheck, 
  Award, Heart, BookOpen, Star, HelpCircle, Phone, Mail
} from 'lucide-react';
import { brandInfo, servicesList, reportsCatalog, testimonialsList, faqList } from '../data/tejendraData';
import FreeCalculators from '../components/FreeCalculators';
import { ScrollReveal } from '../hooks/useScrollReveal';

export default function HomePage({ onOpenConsultation, setActiveTab }) {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="space-y-0 pb-16 font-sans bg-[#F8F6F1] text-[#2B2B2B]">

      {/* ═══════════════════════════════════════════════════════
          HERO SECTION WITH STAGGERED TEXT REVEAL ANIMATIONS
      ═══════════════════════════════════════════════════════ */}
      <section className="relative bg-[#1E3A8A] text-white py-16 sm:py-24 border-b-4 border-[#D4AF37] overflow-hidden">
        
        {/* Subtle Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(212,175,55,0.15),transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Text & Buttons with Staggered Entrance Animations */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-bold uppercase tracking-widest animate-text delay-100">
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                Professional Numerological Consulting
              </div>

              {/* Main Headline Text Animation */}
              <h1 className="text-4xl sm:text-6xl font-extrabold font-cinzel text-white tracking-tight leading-tight animate-text delay-200">
                Numbers Speak. <br />
                <span className="text-gold-gradient">We Decode. You Succeed.</span>
              </h1>

              {/* Category Subheading Text Animation */}
              <p className="text-[#D4AF37] font-cinzel font-semibold text-lg sm:text-xl tracking-wide animate-text delay-300">
                Corporate · Business · Career · Couples · Students · Parenting Numerology
              </p>

              {/* Body Copy Text Animation */}
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-2xl font-poppins animate-text delay-400">
                Unlock your cosmic blueprint with <strong>Tejendra Meena</strong>. Transform your personal energy, commercial enterprise, career milestones, and relationship harmony with high-vibration Chaldean & Pythagorean numerology.
              </p>

              {/* Action Buttons Entrance Animation */}
              <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 animate-text delay-500">
                <button
                  onClick={onOpenConsultation}
                  className="btn-primary px-8 py-4 text-base font-bold flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-5 h-5 text-white" />
                  <span>Book Consultation</span>
                </button>

                <button
                  onClick={() => setActiveTab('signup')}
                  className="btn-secondary px-7 py-4 text-base font-bold flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Register Now</span>
                  <ArrowRight className="w-5 h-5 text-[#1E3A8A]" />
                </button>
              </div>

              {/* Stats Bar Entrance Animation */}
              <div className="pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left animate-text delay-600">
                <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-xl border border-white/15">
                  <div className="text-2xl font-extrabold font-cinzel text-[#D4AF37]">10,000+</div>
                  <div className="text-xs text-slate-200 mt-0.5">Lives Transformed</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-xl border border-white/15">
                  <div className="text-2xl font-extrabold font-cinzel text-[#D4AF37]">1,500+</div>
                  <div className="text-xs text-slate-200 mt-0.5">Corporate Brands</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-xl border border-white/15">
                  <div className="text-2xl font-extrabold font-cinzel text-[#D4AF37]">10+ Yrs</div>
                  <div className="text-xs text-slate-200 mt-0.5">Expert Experience</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-xl border border-white/15">
                  <div className="text-2xl font-extrabold font-cinzel text-[#D4AF37]">100%</div>
                  <div className="text-xs text-slate-200 mt-0.5">Private & Authentic</div>
                </div>
              </div>

            </div>

            {/* Right Column: Tejendra Brand Profile Card Animation */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end animate-text delay-300">
              <div className="w-full max-w-[400px] bg-white rounded-3xl p-6 sm:p-8 text-[#2B2B2B] shadow-2xl border-4 border-[#D4AF37] relative">
                
                <div className="w-20 h-20 rounded-2xl bg-[#1E3A8A] text-[#D4AF37] font-extrabold font-cinzel text-3xl flex items-center justify-center mx-auto mb-4 border-2 border-[#D4AF37]">
                  TM
                </div>

                <div className="text-center">
                  <h3 className="text-2xl font-extrabold font-cinzel text-[#1E3A8A]">
                    Tejendra Meena
                  </h3>
                  <p className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest mt-1">
                    Master Numerologist & Business Strategist
                  </p>
                  <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                    "Numbers are not mere symbols; they are living planetary vibrations that shape your destiny, commercial prosperity, and relationship compatibility."
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 space-y-2.5 text-xs text-slate-700 font-semibold">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Chaldean & Pythagorean System Specialist</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Corporate Logo & Brand Name Tuning</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>20% Advance Booking Deposit System</span>
                  </div>
                </div>

                <button
                  onClick={onOpenConsultation}
                  className="btn-primary w-full mt-6 py-3.5 text-sm font-extrabold cursor-pointer"
                >
                  Book Priority Session (₹1,000 Deposit)
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          INTERACTIVE FREE CALCULATOR SUITE
      ═══════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ScrollReveal>
          <FreeCalculators onBookConsultation={onOpenConsultation} />
        </ScrollReveal>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SERVICES CATALOG
      ═══════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[#1E3A8A] font-extrabold text-xs uppercase tracking-widest bg-[#D4AF37]/15 px-4 py-1.5 rounded-full border border-[#D4AF37]/30">
              Tailored Consulting Domains
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-cinzel text-[#1E3A8A] mt-4">
              Our Numerology Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 font-poppins">
              Corporate, Business, Career, Couples & Relationship, Students, and Parenting Numerology.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 80}>
              <div className="bg-white rounded-3xl p-7 shadow-lg border border-[#D4AF37]/30 hover:border-[#1E3A8A] transition-all flex flex-col justify-between text-left group h-full">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-extrabold bg-[#1E3A8A] text-[#D4AF37] px-3 py-1 rounded-full">
                      {service.badge}
                    </span>
                    <span className="text-base font-extrabold font-cinzel text-[#1E3A8A]">
                      {service.price}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-cinzel text-slate-900 group-hover:text-[#1E3A8A] transition-colors mb-2">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>

                  <ul className="space-y-2 border-t border-slate-100 pt-4 mb-6">
                    {service.benefits.map((b, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-semibold">
                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={onOpenConsultation}
                    className="btn-primary flex-1 py-3 text-xs font-extrabold cursor-pointer"
                  >
                    Book Consultation
                  </button>
                  <button
                    onClick={() => setActiveTab('services')}
                    className="btn-secondary py-3 px-4 text-xs font-bold cursor-pointer"
                  >
                    Details
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          NUMEROLOGY REPORTS CATALOG
      ═══════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-[#1E3A8A] font-extrabold text-xs uppercase tracking-widest bg-slate-100 px-4 py-1.5 rounded-full border border-slate-200">
                Personalized PDF Blueprints
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-cinzel text-[#1E3A8A] mt-3">
                Numerology Reports
              </h2>
              <p className="text-slate-600 text-sm mt-2">
                Comprehensive downloadable digital reports calculated through Chaldean & Pythagorean matrices.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reportsCatalog.map((rep, idx) => (
              <ScrollReveal key={rep.id} delay={idx * 70}>
                <div className="bg-[#F8F6F1] rounded-2xl p-6 border border-[#D4AF37]/40 flex flex-col justify-between shadow-sm h-full">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase bg-[#D4AF37] text-white px-2.5 py-0.5 rounded">
                      {rep.tag}
                    </span>
                    <h4 className="text-base font-bold font-cinzel text-slate-900 mt-3 mb-1">
                      {rep.title}
                    </h4>
                    <span className="text-xs font-semibold text-[#1E3A8A] block mb-2">{rep.pages}</span>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {rep.description}
                    </p>
                  </div>
                  <div className="border-t border-slate-200 pt-4 flex items-center justify-between">
                    <span className="text-lg font-extrabold font-cinzel text-[#1E3A8A]">{rep.price}</span>
                    <button
                      onClick={onOpenConsultation}
                      className="btn-primary py-2 px-3 text-xs font-extrabold cursor-pointer"
                    >
                      Order Report
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CLIENT TESTIMONIALS
      ═══════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#1E3A8A] font-extrabold text-xs uppercase tracking-widest bg-[#D4AF37]/15 px-4 py-1.5 rounded-full">
              Real Success Stories
            </span>
            <h2 className="text-3xl font-extrabold font-cinzel text-[#1E3A8A] mt-3">
              What Our Clients Say
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {testimonialsList.map((t, idx) => (
            <ScrollReveal key={idx} delay={idx * 100}>
              <div className="bg-white rounded-3xl p-7 shadow-md border border-slate-200 space-y-4">
                <div className="flex items-center gap-1 text-[#D4AF37]">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                  "{t.text}"
                </p>
                <div className="border-t border-slate-100 pt-3 flex items-center justify-between text-xs">
                  <div>
                    <strong className="text-[#1E3A8A] font-bold block">{t.name}</strong>
                    <span className="text-slate-500">{t.role}</span>
                  </div>
                  <span className="text-slate-400 font-semibold">{t.location}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          FAQ SECTION
      ═══════════════════════════════════════════════════════ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-left">
        <ScrollReveal>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold font-cinzel text-[#1E3A8A]">
              Frequently Asked Questions
            </h2>
          </div>
        </ScrollReveal>

        <div className="space-y-3">
          {faqList.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
              <button
                onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                className="w-full p-5 text-left font-bold text-slate-900 text-sm flex items-center justify-between gap-4 cursor-pointer"
              >
                <span>{item.q}</span>
                <span className="text-lg font-bold text-[#D4AF37]">{openFaq === idx ? '-' : '+'}</span>
              </button>
              {openFaq === idx && (
                <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
