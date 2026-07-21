import React from 'react';
import { Phone, Mail, Sparkles, ShieldCheck, User, Calendar, LogIn, Lock } from 'lucide-react';
import { brandInfo, servicesList } from '../data/tejendraData';

export default function Footer({ setActiveTab, onOpenConsultation }) {
  return (
    <footer className="bg-[#1E3A8A] text-white pt-16 pb-12 font-sans border-t-4 border-[#D4AF37]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand Logo & Tagline */}
          <div className="space-y-4">
            <div className="flex flex-col leading-none">
              <span className="text-2xl font-extrabold font-cinzel text-white tracking-widest">
                NUMEROLOGY
              </span>
              <span className="text-xs font-bold tracking-widest uppercase mt-0.5 text-slate-300">
                by <span className="text-[#D4AF37] font-extrabold font-cinzel">TEJENDRA</span>
              </span>
            </div>

            <p className="text-xs text-[#D4AF37] font-cinzel font-semibold tracking-wide">
              "{brandInfo.tagline}"
            </p>

            <p className="text-xs text-slate-300 leading-relaxed">
              Professional Corporate, Business, Career, Couples, Students, and Parenting Numerology guidance by Tejendra Meena.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="text-sm font-bold text-[#D4AF37] font-cinzel uppercase tracking-wider mb-4 border-l-2 border-[#D4AF37] pl-2.5">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-200">
              <li>
                <button onClick={() => setActiveTab('home')} className="hover:text-[#D4AF37] transition-colors cursor-pointer">
                  Home Overview
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('about')} className="hover:text-[#D4AF37] transition-colors cursor-pointer">
                  About Tejendra Meena
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('calculator')} className="hover:text-[#D4AF37] text-[#D4AF37] font-bold transition-colors cursor-pointer">
                  Free Calculators
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('reports')} className="hover:text-[#D4AF37] transition-colors cursor-pointer">
                  Numerology Reports Catalog
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('signup')} className="hover:text-[#D4AF37] transition-colors cursor-pointer">
                  Register Consultation Account
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('login')} className="hover:text-[#D4AF37] text-amber-300 font-bold transition-colors cursor-pointer flex items-center gap-1">
                  <LogIn className="w-3 h-3 text-[#D4AF37]" />
                  Sign In to Portal
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-sm font-bold text-[#D4AF37] font-cinzel uppercase tracking-wider mb-4 border-l-2 border-[#D4AF37] pl-2.5">
              Services
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-200">
              {servicesList.map(s => (
                <li key={s.id}>
                  <button onClick={() => setActiveTab('services')} className="hover:text-[#D4AF37] transition-colors cursor-pointer">
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Deposit Details */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-[#D4AF37] font-[#D4AF37] font-cinzel uppercase tracking-wider mb-4 border-l-2 border-[#D4AF37] pl-2.5">
              Direct Contact
            </h4>
            
            <div className="text-xs space-y-2.5 text-slate-200">
              <div className="flex items-center gap-2.5 text-[#D4AF37] font-bold">
                <Phone className="w-4 h-4 shrink-0" />
                <a href={`tel:${brandInfo.phoneRaw}`} className="hover:underline">{brandInfo.phone}</a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href={`mailto:${brandInfo.email}`} className="hover:underline">{brandInfo.email}</a>
              </div>

              <div className="p-3 bg-white/10 rounded-xl border border-[#D4AF37]/30 text-[11px] leading-relaxed">
                <span className="font-bold text-[#D4AF37] block mb-0.5">Booking Payment terms:</span>
                Advance payment 20% @ ₹1,000 | Total project cost @ ₹5,000
              </div>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <p>© {new Date().getFullYear()} Numerology by Tejendra. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <button onClick={() => setActiveTab('contact')} className="hover:text-[#D4AF37] transition-colors">Privacy Policy</button>
            <span>•</span>
            <button onClick={() => setActiveTab('contact')} className="hover:text-[#D4AF37] transition-colors">Terms & Conditions</button>
            <span>•</span>
            <button onClick={onOpenConsultation} className="text-[#D4AF37] font-bold hover:underline">Book Consultation</button>
          </div>
        </div>

      </div>
    </footer>
  );
}
