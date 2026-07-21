import React, { useState, useEffect, useRef } from 'react';
import { 
  Phone, Mail, Calendar, Menu, X, ChevronDown, 
  Sparkles, Home, User, Compass, FileText, Star, HelpCircle, MessageSquare,
  Lock, LogIn, LogOut, ShieldCheck, ArrowRight, BookOpen
} from 'lucide-react';
import { brandInfo, servicesList } from '../data/tejendraData';

const NAV_LINKS = [
  { id: 'home',         label: 'Home', icon: Home },
  { id: 'about',        label: 'About Tejendra', icon: User },
  { id: 'services',     label: 'Services', icon: Compass, hasDropdown: true },
  { id: 'reports',      label: 'Numerology Reports', icon: FileText },
  { id: 'testimonials', label: 'Testimonials', icon: Star },
  { id: 'calculator',   label: 'Free Calculator', icon: Sparkles },
  { id: 'contact',      label: 'Contact', icon: Phone },
];

export default function Header({ activeTab, setActiveTab, onOpenConsultation, currentUser, setCurrentUser }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const go = (tab) => {
    setActiveTab(tab);
    setMobileOpen(false);
    setDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${brandInfo.whatsapp}?text=${encodeURIComponent(
    'Hello Tejendra Meena Ji, I have a question regarding Numerology consultation.'
  )}`;

  return (
    <header className="sticky top-0 z-50 w-full font-sans">
      
      {/* TOP NOTIFICATION & CONTACT BAR */}
      <div className="bg-[#1E3A8A] text-white text-xs py-2 px-3 sm:px-4 border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
            <span className="hidden sm:inline font-medium text-slate-200">
              Numbers Speak. We Decode. You Succeed.
            </span>
            <span className="sm:hidden font-medium text-slate-200 text-[11px] truncate">
              Numerology by Tejendra
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs font-semibold">
            {currentUser ? (
              <div className="flex items-center gap-1.5">
                <span className="text-[#D4AF37] font-bold text-[11px] sm:text-xs">
                  👤 {currentUser.name || 'Client'}
                </span>
                <button
                  onClick={() => setCurrentUser(null)}
                  className="text-slate-300 hover:text-white underline text-[10px] sm:text-[11px] cursor-pointer"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <button
                onClick={() => go('login')}
                className="flex items-center gap-1 text-slate-200 hover:text-[#D4AF37] transition-colors cursor-pointer text-[11px] sm:text-xs"
              >
                <LogIn className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Sign In</span>
              </button>
            )}

            <a href={`tel:${brandInfo.phoneRaw}`} className="flex items-center gap-1 text-[#D4AF37] hover:underline text-[11px] sm:text-xs">
              <Phone className="w-3.5 h-3.5" />
              <span>{brandInfo.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* MAIN NAVIGATION BAR */}
      <nav className={`w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F8F6F1]/95 backdrop-blur-md shadow-md py-2.5 border-b border-[#D4AF37]/30'
          : 'bg-[#F8F6F1] py-3.5 border-b border-slate-200'
      }`}>
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2">
          
          {/* BRAND LOGO RECOMMENDATION */}
          <button 
            onClick={() => go('home')} 
            className="text-left shrink-0 focus:outline-none cursor-pointer group"
          >
            <div className="flex flex-col leading-tight">
              <span className="text-lg sm:text-2xl font-extrabold font-cinzel tracking-widest text-[#1E3A8A]">
                NUMEROLOGY
              </span>
              <span className="text-[10px] sm:text-sm font-bold tracking-widest uppercase text-slate-700">
                by <span className="text-[#D4AF37] font-extrabold font-cinzel">TEJENDRA</span>
              </span>
            </div>
          </button>

          {/* DESKTOP NAVIGATION LINKS */}
          <div className="hidden lg:flex items-center gap-1.5 flex-1 justify-center">
            {NAV_LINKS.map(link => (
              link.hasDropdown ? (
                <div key={link.id} className="relative" ref={dropdownRef}>
                  <button
                    onMouseEnter={() => setDropdownOpen(true)}
                    onClick={() => go('services')}
                    className={`px-3 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
                      activeTab === 'services' ? 'text-[#1E3A8A] bg-[#1E3A8A]/10 font-extrabold' : 'text-slate-700 hover:text-[#1E3A8A]'
                    }`}
                  >
                    {link.label}
                    <ChevronDown className={`w-3.5 h-3.5 text-[#D4AF37] transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {dropdownOpen && (
                    <div
                      onMouseLeave={() => setDropdownOpen(false)}
                      className="absolute left-0 top-full mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-[#D4AF37]/30 overflow-hidden z-50 p-2 space-y-1 text-left"
                    >
                      {servicesList.map(s => (
                        <button
                          key={s.id}
                          onClick={() => go('services')}
                          className="w-full p-2.5 rounded-xl hover:bg-[#F8F6F1] text-xs font-bold text-[#1E3A8A] transition-colors block text-left cursor-pointer"
                        >
                          {s.title}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <button
                  key={link.id}
                  onClick={() => go(link.id)}
                  className={`px-3 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    activeTab === link.id
                      ? 'text-[#1E3A8A] bg-[#1E3A8A]/10 font-extrabold'
                      : 'text-slate-700 hover:text-[#1E3A8A]'
                  }`}
                >
                  {link.label}
                </button>
              )
            ))}
          </div>

          {/* RIGHT ACTION BUTTONS & OPTIMIZED 3-LINE NAVBAR BUTTON */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Desktop Primary Gold Button */}
            <button
              onClick={onOpenConsultation}
              className="hidden sm:flex btn-primary px-4 py-2 text-xs font-bold items-center gap-1.5 shadow-md cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-white" />
              <span>Book Consultation</span>
            </button>

            {/* OPTIMIZED 3-LINE HAMBURGER NAVBAR MENU BUTTON */}
            <button
              onClick={() => setMobileOpen(v => !v)}
              aria-label="Toggle menu"
              className="lg:hidden w-10 h-10 rounded-xl bg-[#1E3A8A] text-[#D4AF37] border border-[#D4AF37]/40 shadow-md cursor-pointer flex items-center justify-center active:scale-95 transition-transform"
            >
              {mobileOpen ? (
                <X className="w-5 h-5 text-[#D4AF37]" />
              ) : (
                <div className="w-4 h-3.5 flex flex-col justify-between items-center">
                  <span className="w-full h-[2px] bg-[#D4AF37] rounded-full" />
                  <span className="w-full h-[2px] bg-[#D4AF37] rounded-full" />
                  <span className="w-full h-[2px] bg-[#D4AF37] rounded-full" />
                </div>
              )}
            </button>
          </div>

        </div>
      </nav>

      {/* ULTRA ATTRACTIVE MOBILE FULL SCREEN DRAWER MENU */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-[#F8F6F1] flex flex-col animate-fadeIn">
          
          {/* Drawer Top Header */}
          <div className="p-4 border-b border-[#D4AF37]/30 flex items-center justify-between bg-[#1E3A8A] text-white shadow-md">
            <div className="flex flex-col text-left">
              <span className="text-lg font-extrabold font-cinzel text-white tracking-wider">NUMEROLOGY</span>
              <span className="text-xs font-bold tracking-widest text-slate-200">by <span className="text-[#D4AF37]">TEJENDRA</span></span>
            </div>
            
            <button 
              onClick={() => setMobileOpen(false)} 
              className="w-9 h-9 rounded-xl bg-white/10 text-[#D4AF37] flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Menu Body */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 relative space-y-3.5 text-left">
            
            {/* User Session Pill in Drawer */}
            <div className="bg-white p-3.5 rounded-2xl border border-[#D4AF37]/30 shadow-sm flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold text-[#D4AF37] block">Client Account</span>
                <span className="text-xs font-extrabold text-[#1E3A8A]">
                  {currentUser ? `👤 ${currentUser.name || 'Client'}` : 'Guest User'}
                </span>
              </div>
              <button
                onClick={() => go('login')}
                className="px-3 py-1.5 bg-[#1E3A8A] text-[#D4AF37] text-xs font-bold rounded-xl flex items-center gap-1 cursor-pointer"
              >
                {currentUser ? 'My Account' : 'Sign In'}
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Navigation Cards List */}
            <div className="space-y-2 font-medium text-slate-800 text-sm">
              
              <button 
                onClick={() => go('home')} 
                className="w-full p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-between font-bold text-[#1E3A8A] cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-[#1E3A8A]/10 text-[#1E3A8A]">
                    <Home className="w-4 h-4" />
                  </div>
                  <span>Home</span>
                </div>
                <ChevronDown className="w-4 h-4 text-slate-400 -rotate-90" />
              </button>

              <button 
                onClick={() => go('about')} 
                className="w-full p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-between font-bold text-slate-900 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-[#D4AF37]/15 text-[#D4AF37]">
                    <User className="w-4 h-4" />
                  </div>
                  <span>About Tejendra</span>
                </div>
                <ChevronDown className="w-4 h-4 text-slate-400 -rotate-90" />
              </button>

              {/* Services Accordion Card */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <button
                  onClick={() => setMobileServicesOpen(v => !v)}
                  className="w-full p-3.5 flex items-center justify-between text-left font-bold text-slate-900 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-[#1E3A8A]/10 text-[#1E3A8A]">
                      <Compass className="w-4 h-4" />
                    </div>
                    <span>Services</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>

                {mobileServicesOpen && (
                  <div className="px-4 pb-3 pt-1 space-y-1.5 text-xs text-slate-700 border-t border-slate-100 bg-[#F8F6F1]">
                    {servicesList.map(s => (
                      <button 
                        key={s.id} 
                        onClick={() => go('services')} 
                        className="block w-full text-left p-2 rounded-lg hover:bg-white font-bold text-[#1E3A8A] transition-colors"
                      >
                        • {s.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button 
                onClick={() => go('reports')} 
                className="w-full p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-between font-bold text-slate-900 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-[#D4AF37]/15 text-[#D4AF37]">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <span>Numerology Reports</span>
                </div>
                <ChevronDown className="w-4 h-4 text-slate-400 -rotate-90" />
              </button>

              <button 
                onClick={() => go('calculator')} 
                className="w-full p-3.5 rounded-2xl bg-gradient-to-r from-[#1E3A8A] to-[#0f2357] text-white border border-[#D4AF37]/40 shadow-md flex items-center justify-between font-bold cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-[#D4AF37]/20 text-[#D4AF37]">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <span>Free Calculators</span>
                </div>
                <span className="text-[10px] font-extrabold bg-[#D4AF37] text-[#1E3A8A] px-2 py-0.5 rounded">FREE</span>
              </button>

              <button 
                onClick={() => go('signup')} 
                className="w-full p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-between font-bold text-slate-900 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600">
                    <User className="w-4 h-4" />
                  </div>
                  <span>Register Account</span>
                </div>
                <ChevronDown className="w-4 h-4 text-slate-400 -rotate-90" />
              </button>

              <button 
                onClick={() => go('contact')} 
                className="w-full p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-between font-bold text-slate-900 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-[#1E3A8A]/10 text-[#1E3A8A]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>Contact Office</span>
                </div>
                <ChevronDown className="w-4 h-4 text-slate-400 -rotate-90" />
              </button>

            </div>
          </div>

          {/* STICKY BOTTOM DUAL ACTION BUTTONS FOR MOBILE */}
          <div className="p-3 bg-white border-t border-slate-200 grid grid-cols-2 gap-2.5 z-20 shadow-2xl">
            <button
              onClick={() => { setMobileOpen(false); onOpenConsultation(); }}
              className="btn-primary py-3 px-2 text-xs text-center font-extrabold truncate cursor-pointer shadow-md"
            >
              Book Consultation
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="btn-secondary py-3 px-2 text-xs text-center font-extrabold truncate flex items-center justify-center gap-1 cursor-pointer shadow-md"
            >
              Ask Your Question
            </a>
          </div>

        </div>
      )}

    </header>
  );
}
