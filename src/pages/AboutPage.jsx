import React from 'react';
import { Award, CheckCircle2, Calendar, Phone, Mail, Sparkles, ShieldCheck, Instagram, Facebook, Youtube, Linkedin } from 'lucide-react';
import { brandInfo } from '../data/tejendraData';
import SolarSystemBackground from '../components/SolarSystemBackground';

export default function AboutPage({ onOpenConsultation }) {
  return (
    <div className="min-h-screen bg-[#09031a] text-white py-12 px-4 sm:px-6 lg:px-8 text-left relative overflow-hidden">
      <SolarSystemBackground />
      
      <div className="max-w-5xl mx-auto space-y-10 relative z-10 animate-page-entrance">
        
        {/* Profile Header Block */}
        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 sm:p-12 shadow-2xl border-2 border-[#C59B27]/40 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          <div className="md:col-span-4 flex justify-center">
            <img 
              src="/tejendra_new.jpeg" 
              alt="Tejendra Meena" 
              className="w-48 h-48 sm:w-56 sm:h-56 rounded-3xl object-cover object-top border-4 border-[#C59B27] shadow-2xl" 
            />
          </div>
 
          <div className="md:col-span-8 space-y-4">
            <span className="text-xs font-black bg-[#C59B27] text-slate-950 px-3.5 py-1 rounded-full inline-block">
              About The Master Numerologist
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold font-cinzel text-white">
              Tejendra Meena
            </h1>
            <p className="text-sm font-bold text-slate-300">
              Founder & Chief Numerology Strategist · Numerology by Tejendra
            </p>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
              Tejendra Meena is the Founder of <strong>Numerology by Tejendra</strong>, a modern numerology consulting practice dedicated to helping individuals, professionals, entrepreneurs, and business leaders make informed life and career decisions through the wisdom of numbers.
            </p>
          </div>
 
        </div>
 
        {/* Corporate Experience & Education */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Left Column: Experience */}
          <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl shadow-lg border border-white/10 space-y-4">
            <h3 className="text-xl font-bold font-cinzel text-white border-b border-white/10 pb-2 flex items-center gap-2">
              <Award className="w-5 h-5 text-[#C59B27]" />
              Corporate Leadership & Approach
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              With <strong>11+ years of corporate leadership experience</strong>, Tejendra brings a unique combination of analytical thinking, strategic decision-making, and intuitive guidance to every consultation. 
            </p>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              His professional journey enables him to interpret numerology not only from a personal and spiritual perspective but also through the lens of career growth, leadership, business strategy, and organizational success.
            </p>
          </div>
 
          {/* Right Column: Academic Credentials */}
          <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl shadow-lg border border-white/10 space-y-4">
            <h3 className="text-xl font-bold font-cinzel text-white border-b border-white/10 pb-2 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#C59B27]" />
              Education & Certifications
            </h3>
            <ul className="space-y-3.5 text-xs text-slate-200 font-semibold">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
                <span>
                  <strong>Bachelor's (Hons.) in English Literature</strong> from Banaras Hindu University (BHU), Varanasi.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
                <span>
                  <strong>Master's in Rural Development & Governance</strong> from the Tata Institute of Social Sciences (TISS).
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
                <span>
                  Professional Certifications in <strong>Organizational Behavior</strong> and <strong>Operations Management</strong> from the Indian Institute of Management (IIM) Shirmaur and Bangalore.
                </span>
              </li>
            </ul>
          </div>
 
        </div>
 
        {/* Methodology & What Sets Tejendra Apart */}
        <div className="bg-white/5 backdrop-blur-md p-8 sm:p-10 rounded-3xl shadow-lg border border-white/10 space-y-6">
          <h3 className="text-2xl font-bold font-cinzel text-white text-center border-b border-white/10 pb-4">
            Our Methodology & Ethical Approach
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
            
            <div className="space-y-4">
              <h4 className="text-base font-bold text-[#C59B27] font-cinzel">Specialized Focus</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Tejendra specializes in <strong>Corporate Numerology, Business Numerology, Career Numerology, Personal Numerology, Name Analysis, and Strategic Decision Guidance</strong>. 
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                His approach combines traditional Pythagorean and Chaldean numerology with practical insights, helping clients gain clarity about their strengths, opportunities, relationships, career direction, business branding, and life purpose.
              </p>
            </div>
 
            <div className="space-y-4">
              <h4 className="text-base font-bold text-[#C59B27] font-cinzel">What Sets Him Apart</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                What truly sets Tejendra apart is his <strong>deep listening ability, intuitive analysis, logical interpretation, and ethical consulting approach</strong>. 
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Rather than offering generic predictions, he believes in understanding each individual's unique numerical blueprint and providing practical, personalized guidance that empowers clients to make confident decisions.
              </p>
            </div>
 
          </div>
 
          {/* Consultation Highlights */}
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mt-6">
            <h4 className="text-sm font-bold text-[#C59B27] font-cinzel uppercase tracking-wider mb-4">
              His consultations are known for being:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-semibold text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C59B27] shrink-0" />
                <span>Insightful and deeply personalized</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C59B27] shrink-0" />
                <span>Analytical yet easy to understand</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C59B27] shrink-0" />
                <span>Practical and action-oriented</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C59B27] shrink-0" />
                <span>Ethical, confidential, and client-focused</span>
              </div>
              <div className="flex items-center gap-2 sm:col-span-2">
                <CheckCircle2 className="w-4 h-4 text-[#C59B27] shrink-0" />
                <span>Focused on long-term growth rather than short-term predictions</span>
              </div>
            </div>
          </div>
 
        </div>
 
        {/* Call to Action and Connect section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Social Connect */}
          <div className="md:col-span-5 bg-white/5 backdrop-blur-md p-8 rounded-3xl shadow-lg border border-white/10 flex flex-col justify-between space-y-4">
            <div>
              <h3 className="text-xl font-bold font-cinzel text-white border-b border-white/10 pb-2">
                Connect With Us
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mt-2">
                Follow our official social profiles to stay updated with numerology forecasts, success grids, and exclusive wisdom resources.
              </p>
            </div>
            
            <div className="flex items-center gap-3 pt-2">
              <a href={brandInfo.socials.instagram} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 hover:bg-[#C59B27] hover:text-white rounded-2xl transition-all border border-white/10 flex-1 flex justify-center cursor-pointer" title="Instagram">
                <Instagram className="w-5 h-5 text-[#E1306C]" />
              </a>
              <a href={brandInfo.socials.facebook} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 hover:bg-[#C59B27] hover:text-white rounded-2xl transition-all border border-white/10 flex-1 flex justify-center cursor-pointer" title="Facebook">
                <Facebook className="w-5 h-5 text-[#1877F2]" />
              </a>
              <a href={brandInfo.socials.youtube} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 hover:bg-[#C59B27] hover:text-white rounded-2xl transition-all border border-white/10 flex-1 flex justify-center cursor-pointer" title="YouTube">
                <Youtube className="w-5 h-5 text-[#FF0000]" />
              </a>
              <a href={brandInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 hover:bg-[#C59B27] hover:text-white rounded-2xl transition-all border border-white/10 flex-1 flex justify-center cursor-pointer" title="LinkedIn">
                <Linkedin className="w-5 h-5 text-[#0A66C2]" />
              </a>
            </div>
          </div>
 
          {/* Quick Contact & Book */}
          <div className="md:col-span-7 bg-[#1E3A8A] text-white p-8 rounded-3xl shadow-lg border-2 border-[#D4AF37] flex flex-col justify-between space-y-6 relative overflow-hidden">
            <SolarSystemBackground />
            <div className="relative z-10 flex flex-col justify-between h-full space-y-6 w-full">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold font-cinzel text-white">
                    Direct Session Booking
                  </h3>
                  <span className="text-[10px] font-extrabold text-[#D4AF37] tracking-widest border border-[#D4AF37] px-2 py-0.5 rounded">
                    20% DEPOSIT SECURED
                  </span>
                </div>
                
                <p className="text-xs text-slate-200 leading-relaxed italic">
                  "Numbers Speak. We Decode. You Succeed." Align your personal vibration and company grid for maximum material and emotional alignment.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-2">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <a href={`tel:${brandInfo.phoneRaw}`} className="font-bold text-white hover:underline">{brandInfo.phone}</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <a href={`mailto:${brandInfo.email}`} className="font-bold text-white hover:underline">{brandInfo.email}</a>
                  </div>
                </div>
              </div>
 
              <button
                onClick={onOpenConsultation}
                className="btn-primary w-full py-4 text-sm font-extrabold cursor-pointer relative z-20"
              >
                Book Priority Consultation Session
              </button>
            </div>
          </div>
 
        </div>
      </div>
    </div>
  );
}
