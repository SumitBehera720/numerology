import React from 'react';
import { Award, CheckCircle2, Calendar, Phone, Mail, Sparkles, ShieldCheck } from 'lucide-react';
import { brandInfo } from '../data/tejendraData';

export default function AboutPage({ onOpenConsultation }) {
  return (
    <div className="min-h-screen bg-[#F8F6F1] py-12 px-4 sm:px-6 lg:px-8 text-left">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Profile Header */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border-2 border-[#D4AF37]/40 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          <div className="md:col-span-4 flex justify-center">
            <div className="w-40 h-40 rounded-3xl bg-[#1E3A8A] text-[#D4AF37] font-extrabold font-cinzel text-5xl flex items-center justify-center border-4 border-[#D4AF37] shadow-xl">
              TM
            </div>
          </div>

          <div className="md:col-span-8 space-y-4">
            <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#1E3A8A] px-3.5 py-1 rounded-full">
              About The Numerologist
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold font-cinzel text-[#1E3A8A]">
              Tejendra Meena
            </h1>
            <p className="text-sm font-bold text-slate-700">
              Founder & Chief Numerology Strategist · Numerology by Tejendra
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Tejendra Meena is a renowned professional numerologist specializing in corporate brand alignment, personal destiny calculation, and commercial name vibration tuning. With over a decade of practice, his insights have helped entrepreneurs, corporate leaders, couples, and students decode their path to success.
            </p>
          </div>

        </div>

        {/* Philosophy & Approach */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-200 space-y-4">
            <h3 className="text-2xl font-bold font-cinzel text-[#1E3A8A]">
              Our Philosophy
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              "Numbers Speak. We Decode. You Succeed." We believe numbers are not arbitrary labels; they represent active planetary frequencies that dictate momentum, harmony, and opportunities.
            </p>
            <div className="pt-2 space-y-2 text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                <span>Chaldean & Pythagorean Dual Matrix</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                <span>No Overly Mystical or Unnecessary Fear-mongering</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                <span>Scientific, Minimal & High-Trust Approach</span>
              </div>
            </div>
          </div>

          <div className="bg-[#1E3A8A] text-white p-8 rounded-3xl shadow-lg border-2 border-[#D4AF37] space-y-6">
            <h3 className="text-2xl font-bold font-cinzel text-white">
              Direct Contact
            </h3>
            <div className="space-y-4 text-xs">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#D4AF37]" />
                <div>
                  <span className="text-slate-300 block">Phone / WhatsApp:</span>
                  <a href={`tel:${brandInfo.phoneRaw}`} className="font-bold text-white text-sm hover:underline">{brandInfo.phone}</a>
                </div>
              </div>
              <div className="flex items-center gap-3 border-t border-white/10 pt-3">
                <Mail className="w-5 h-5 text-[#D4AF37]" />
                <div>
                  <span className="text-slate-300 block">Email Address:</span>
                  <a href={`mailto:${brandInfo.email}`} className="font-bold text-white text-sm hover:underline">{brandInfo.email}</a>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenConsultation}
              className="btn-primary w-full py-4 text-sm font-extrabold cursor-pointer"
            >
              Book Consultation Session
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
