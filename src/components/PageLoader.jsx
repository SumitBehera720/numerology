import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 500);
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[#1E3A8A] text-white flex flex-col items-center justify-center transition-opacity duration-500 font-sans ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative flex flex-col items-center text-center p-6">
        
        {/* Animated Gold Ring Glow */}
        <div className="relative mb-6">
          <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-[#0f2357] to-[#1E3A8A] border-2 border-[#D4AF37] shadow-[0_0_40px_rgba(212,175,55,0.4)] flex flex-col items-center justify-center animate-pulse">
            <span className="text-xl font-extrabold font-cinzel text-white tracking-widest leading-none">
              NUM
            </span>
            <span className="text-[10px] font-bold text-[#D4AF37] tracking-widest uppercase mt-1">
              TEJENDRA
            </span>
          </div>
          <div className="absolute -inset-2 rounded-[2rem] border border-[#D4AF37]/40 animate-ping opacity-25 pointer-events-none" />
        </div>

        {/* Brand Name & Tagline */}
        <h2 className="text-2xl font-extrabold font-cinzel text-white tracking-wider">
          NUMEROLOGY <span className="text-[#D4AF37] font-normal">by</span> TEJENDRA
        </h2>
        
        <p className="text-xs text-[#D4AF37] font-cinzel tracking-widest mt-2 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-spin" />
          Numbers Speak. We Decode. You Succeed.
        </p>

        {/* Loading Bar */}
        <div className="w-48 h-1 bg-white/20 rounded-full mt-6 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-[#D4AF37] via-amber-300 to-[#D4AF37] w-full animate-shimmer" 
               style={{
                 animation: 'shimmer 1s infinite linear',
                 backgroundSize: '200% 100%'
               }} 
          />
        </div>

      </div>
    </div>
  );
}
