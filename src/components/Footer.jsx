import React from 'react';
import { Phone, Mail, Sparkles, ShieldCheck, User, Calendar, LogIn, Lock, Instagram, Facebook, Youtube, Linkedin } from 'lucide-react';
import { brandInfo, servicesList } from '../data/tejendraData';

export default function Footer({ setActiveTab, onOpenConsultation }) {
  return (
    <footer className="bg-[#1E3A8A] text-white pt-16 pb-12 font-sans border-t-4 border-[#D4AF37]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand Logo & Tagline */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <img 
                src="/logo.jpeg" 
                alt="Numerology by Tejendra Logo" 
                className="w-10 h-10 rounded-xl object-cover border border-[#D4AF37]/30 shadow-sm"
              />
              <div className="flex flex-col leading-none">
                <span className="text-xl font-extrabold font-cinzel text-white tracking-widest">
                  NUMEROLOGY
                </span>
                <span className="text-[10px] font-bold tracking-widest uppercase mt-0.5 text-slate-300">
                  by <span className="text-[#D4AF37] font-extrabold font-cinzel">TEJENDRA</span>
                </span>
              </div>
            </div>

            <p className="text-xs text-[#D4AF37] font-cinzel font-semibold tracking-wide">
              "{brandInfo.tagline}"
            </p>

            <p className="text-xs text-slate-300 leading-relaxed">
              Professional Corporate, Business, Career, Couples, Students, and Parenting Numerology guidance by Tejendra Meena.
            </p>

            {/* Follow Us Row */}
            <div className="space-y-2 pt-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Follow Us</span>
              <div className="flex items-center gap-2">
                <a href={brandInfo.socials.instagram} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 hover:bg-[#D4AF37] hover:text-white rounded-full transition-all cursor-pointer" title="Instagram">
                  <Instagram className="w-4 h-4 text-white" />
                </a>
                <a href={brandInfo.socials.facebook} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 hover:bg-[#D4AF37] hover:text-white rounded-full transition-all cursor-pointer" title="Facebook">
                  <Facebook className="w-4 h-4 text-white" />
                </a>
                <a href={brandInfo.socials.youtube} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 hover:bg-[#D4AF37] hover:text-white rounded-full transition-all cursor-pointer" title="YouTube">
                  <Youtube className="w-4 h-4 text-white" />
                </a>
                <a href={brandInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 hover:bg-[#D4AF37] hover:text-white rounded-full transition-all cursor-pointer" title="LinkedIn">
                  <Linkedin className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>
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
            <h4 className="text-sm font-bold text-[#D4AF37] font-cinzel uppercase tracking-wider mb-4 border-l-2 border-[#D4AF37] pl-2.5">
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
                Advance booking deposit of 20% (varies by service starting from ₹400 up to ₹1,000) is required to secure your slot. All bookings are non-refundable.
              </div>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <p>© {new Date().getFullYear()} Numerology by Tejendra. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <button onClick={() => setActiveTab('policies')} className="hover:text-[#D4AF37] transition-colors cursor-pointer">Privacy Policy</button>
            <span>•</span>
            <button onClick={() => setActiveTab('policies')} className="hover:text-[#D4AF37] transition-colors cursor-pointer">Terms & Conditions</button>
            <span>•</span>
            <button onClick={onOpenConsultation} className="text-[#D4AF37] font-bold hover:underline cursor-pointer">Book Consultation</button>
          </div>
        </div>

      </div>
    </footer>
  );
}
