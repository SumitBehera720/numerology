import React from 'react';
import { Calendar, MessageSquare } from 'lucide-react';
import { brandInfo } from '../data/tejendraData';

const WHATSAPP_URL = `https://wa.me/${brandInfo.whatsapp}?text=${encodeURIComponent(
  'Hello Tejendra Meena Ji, I have a question regarding Numerology consultation.'
)}`;

export default function FloatingCTA({ onOpenConsultation }) {
  return (
    <>
      {/* Desktop Floating Pills */}
      <div className="hidden lg:flex fixed right-6 bottom-8 z-40 flex-col items-end gap-3">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          title="Ask Your Question"
          className="btn-primary flex items-center gap-2 px-5 py-3.5 shadow-2xl text-xs font-extrabold cursor-pointer border border-[#D4AF37]/50"
        >
          <MessageSquare className="w-4 h-4 text-white" />
          <span>Ask Your Question</span>
        </a>

        <button
          onClick={onOpenConsultation}
          title="Book Consultation"
          className="btn-primary flex items-center gap-2 px-5 py-3.5 shadow-2xl text-xs font-extrabold cursor-pointer border border-[#D4AF37]/50"
        >
          <Calendar className="w-4 h-4 text-white" />
          <span>Book Consultation</span>
        </button>
      </div>

      {/* ULTRA POLISHED MOBILE FIXED DUAL BUTTONS BAR */}
      <div
        className="lg:hidden fixed left-0 right-0 bottom-0 z-40 bg-white/95 backdrop-blur-lg border-t-2 border-[#D4AF37]/30 p-2 sm:p-2.5 shadow-[0_-6px_25px_rgba(0,0,0,0.18)]"
        style={{ paddingBottom: 'calc(0.6rem + env(safe-area-inset-bottom, 0px))' }}
      >
        <div className="max-w-md mx-auto grid grid-cols-2 gap-2 text-center items-center justify-center">
          
          {/* Button 1: Book Consultation (Gold Primary) */}
          <button
            onClick={onOpenConsultation}
            className="btn-primary py-3 px-2 text-[11px] sm:text-xs text-center font-extrabold leading-tight cursor-pointer shadow-lg active:scale-[0.98] transition-transform flex items-center justify-center gap-1 min-h-[44px]"
          >
            <Calendar className="w-3.5 h-3.5 text-white shrink-0" />
            <span className="truncate">Book Consultation</span>
          </button>

          {/* Button 2: Ask Your Question (Royal Blue Secondary) */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary py-3 px-2 text-[11px] sm:text-xs text-center font-extrabold leading-tight flex items-center justify-center gap-1 cursor-pointer shadow-lg active:scale-[0.98] transition-transform min-h-[44px]"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#1E3A8A] shrink-0" />
            <span className="truncate">Ask Your Question</span>
          </a>

        </div>
      </div>
    </>
  );
}
