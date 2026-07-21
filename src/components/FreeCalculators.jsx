import React, { useState } from 'react';
import { Sparkles, Calendar, User, Phone, Heart, ArrowRight, RefreshCw, CheckCircle2, Award, Zap } from 'lucide-react';
import { brandInfo } from '../data/tejendraData';

// Chaldean letter values map
const CHALDEAN_MAP = {
  A: 1, I: 1, J: 1, Q: 1, Y: 1,
  B: 2, K: 2, R: 2,
  C: 3, G: 3, L: 3, S: 3,
  D: 4, M: 4, T: 4,
  E: 5, H: 5, N: 5, X: 5,
  U: 6, V: 6, W: 6,
  O: 7, Z: 7,
  F: 8, P: 8
};

// Calculate Chaldean Name Number
function calculateChaldeanNumber(name) {
  if (!name) return 0;
  const cleanName = name.toUpperCase().replace(/[^A-Z]/g, '');
  let sum = 0;
  for (let char of cleanName) {
    sum += CHALDEAN_MAP[char] || 0;
  }
  return sum;
}

// Reduce number to single digit unless master number
function reduceToSingleDigit(num) {
  let current = num;
  while (current > 9 && current !== 11 && current !== 22 && current !== 33) {
    current = String(current).split('').reduce((acc, digit) => acc + parseInt(digit, 10), 0);
  }
  return current;
}

// Calculate Life Path Number from YYYY-MM-DD
function calculateLifePath(dobString) {
  if (!dobString) return 0;
  const parts = dobString.split('-'); // [YYYY, MM, DD]
  if (parts.length !== 3) return 0;
  
  const yearSum = parts[0].split('').reduce((acc, d) => acc + parseInt(d, 10), 0);
  const monthSum = parseInt(parts[1], 10);
  const daySum = parts[2].split('').reduce((acc, d) => acc + parseInt(d, 10), 0);

  const total = yearSum + monthSum + daySum;
  return reduceToSingleDigit(total);
}

// Number Trait Interpretations
const NUMBER_TRAITS = {
  1: { title: "The Leader (Sun)", traits: "Independent, Ambitious, Pioneer, Courageous", career: "Executive, Entrepreneur, Director", color: "#D4AF37" },
  2: { title: "The Diplomat (Moon)", traits: "Intuitive, Harmonious, Empathetic, Peacemaker", career: "Counselor, Mediator, Artist", color: "#1E3A8A" },
  3: { title: "The Communicator (Jupiter)", traits: "Creative, Expressive, Optimistic, Charismatic", career: "Author, Speaker, Marketing", color: "#D4AF37" },
  4: { title: "The Builder (Rahu)", traits: "Disciplined, Practical, Hardworking, Structured", career: "Engineer, Architect, Strategist", color: "#1E3A8A" },
  5: { title: "The Explorer (Mercury)", traits: "Adaptable, Freedom-loving, Energetic, Versatile", career: "Travel, Media, Finance", color: "#D4AF37" },
  6: { title: "The Nurturer (Venus)", traits: "Loving, Responsible, Artistic, Harmonious", career: "Consultant, Designer, Educator", color: "#1E3A8A" },
  7: { title: "The Seeker (Ketu)", traits: "Analytical, Spiritual, Intellectual, Philosophical", career: "Researcher, Analyst, Spiritualist", color: "#D4AF37" },
  8: { title: "The Powerhouse (Saturn)", traits: "Authoritative, Financial Wizard, Resilient, Visionary", career: "CEO, Banker, Real Estate", color: "#1E3A8A" },
  9: { title: "The Humanitarian (Mars)", traits: "Compassionate, Philanthropic, Energetic, Inspiring", career: "Leader, Coach, Healer", color: "#D4AF37" },
  11: { title: "Master Intuitive (Illuminator)", traits: "Highly Spiritual, Visionary, Inspiring", career: "Thought Leader, Master Guide", color: "#D4AF37" },
  22: { title: "Master Architect", traits: "Builds Grand Visionary Projects", career: "Global Enterprise Founder", color: "#1E3A8A" },
  33: { title: "Master Teacher", traits: "Selfless Service, Spiritual Upliftment", career: "World Teacher, Healer", color: "#D4AF37" }
};

export default function FreeCalculators({ onBookConsultation }) {
  const [activeTab, setActiveTab] = useState('name');

  /* Calculator Form States */
  const [nameInput, setNameInput] = useState('');
  const [dobInput, setDobInput] = useState('');
  const [mobileInput, setMobileInput] = useState('');
  
  /* Compatibility State */
  const [partner1Dob, setPartner1Dob] = useState('');
  const [partner2Dob, setPartner2Dob] = useState('');

  /* Results */
  const [result, setResult] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleCalculateName = (e) => {
    e.preventDefault();
    if (!nameInput) return;
    setIsCalculating(true);

    setTimeout(() => {
      const chaldeanSum = calculateChaldeanNumber(nameInput);
      const reducedSingle = reduceToSingleDigit(chaldeanSum);
      const traitsObj = NUMBER_TRAITS[reducedSingle] || NUMBER_TRAITS[1];

      setResult({
        type: 'Name Number Analysis',
        name: nameInput,
        compoundNumber: chaldeanSum,
        singleDigit: reducedSingle,
        title: traitsObj.title,
        traits: traitsObj.traits,
        career: traitsObj.career,
        advice: `Your name number ${chaldeanSum} (${reducedSingle}) carries strong cosmic vibrations. Consult Tejendra Meena for personalized spelling optimization.`
      });
      setIsCalculating(false);
    }, 600);
  };

  const handleCalculateLifePath = (e) => {
    e.preventDefault();
    if (!dobInput) return;
    setIsCalculating(true);

    setTimeout(() => {
      const lifePathNum = calculateLifePath(dobInput);
      const traitsObj = NUMBER_TRAITS[lifePathNum] || NUMBER_TRAITS[1];

      setResult({
        type: 'Life Path Number Report',
        dob: dobInput,
        singleDigit: lifePathNum,
        title: traitsObj.title,
        traits: traitsObj.traits,
        career: traitsObj.career,
        advice: `Your Life Path Number ${lifePathNum} defines your core life purpose. Book a private consultation with Tejendra Meena to align your career and business with this number.`
      });
      setIsCalculating(false);
    }, 600);
  };

  const handleCalculateMobile = (e) => {
    e.preventDefault();
    if (!mobileInput) return;
    setIsCalculating(true);

    setTimeout(() => {
      const digits = mobileInput.replace(/\D/g, '');
      const sum = digits.split('').reduce((acc, d) => acc + parseInt(d, 10), 0);
      const reduced = reduceToSingleDigit(sum);
      const traitsObj = NUMBER_TRAITS[reduced] || NUMBER_TRAITS[1];

      setResult({
        type: 'Mobile Number Numerology Score',
        mobile: mobileInput,
        compoundNumber: sum,
        singleDigit: reduced,
        title: traitsObj.title,
        traits: traitsObj.traits,
        vibrationRating: reduced === 1 || reduced === 5 || reduced === 6 ? 'Highly Auspicious & Wealth Attracting' : 'Moderate Energy - Optimization Suggested',
        advice: `Your mobile number totals ${sum} (Single Digit ${reduced}). Discover if your phone number attracts wealth or blocks income with Tejendra Meena.`
      });
      setIsCalculating(false);
    }, 600);
  };

  const handleCalculateCompatibility = (e) => {
    e.preventDefault();
    if (!partner1Dob || !partner2Dob) return;
    setIsCalculating(true);

    setTimeout(() => {
      const lp1 = calculateLifePath(partner1Dob);
      const lp2 = calculateLifePath(partner2Dob);
      const diff = Math.abs(lp1 - lp2);
      
      let matchScore = 88 - (diff * 7);
      if (matchScore < 60) matchScore = 65;

      setResult({
        type: 'Relationship Compatibility Analysis',
        p1Lp: lp1,
        p2Lp: lp2,
        matchScore: matchScore,
        harmonyStatus: matchScore > 80 ? 'Excellent Cosmic Harmony' : 'Good Compatibility - Minor Alignment Needed',
        advice: `Life Path ${lp1} & Life Path ${lp2} have a ${matchScore}% cosmic resonance. Book Couples Numerology with Tejendra Meena to deepen mutual understanding.`
      });
      setIsCalculating(false);
    }, 600);
  };

  return (
    <div className="bg-[#1E3A8A] text-white rounded-3xl p-6 sm:p-12 shadow-2xl border-2 border-[#D4AF37]/30 relative overflow-hidden text-left">
      
      {/* Subtle Background Glow */}
      <div className="absolute -right-20 -top-20 w-96 h-96 bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            Free Online Numerology Calculators
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-cinzel text-white tracking-tight">
            Decode Your Numbers Instantly
          </h2>
          <p className="text-slate-200 text-sm sm:text-base mt-2 font-poppins max-w-2xl mx-auto">
            Discover your Chaldean Name Number, Life Path Destiny, Mobile Vibration, and Couples Compatibility.
          </p>
        </div>

        {/* Calculator Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8 bg-[#0f2357] p-1.5 rounded-2xl border border-white/10 text-xs font-bold">
          <button
            onClick={() => { setActiveTab('name'); setResult(null); }}
            className={`py-3 px-3 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
              activeTab === 'name' ? 'bg-[#D4AF37] text-[#1E3A8A] shadow-md font-extrabold' : 'text-slate-300 hover:text-white'
            }`}
          >
            <User className="w-4 h-4" />
            Name Number
          </button>

          <button
            onClick={() => { setActiveTab('lifepath'); setResult(null); }}
            className={`py-3 px-3 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
              activeTab === 'lifepath' ? 'bg-[#D4AF37] text-[#1E3A8A] shadow-md font-extrabold' : 'text-slate-300 hover:text-white'
            }`}
          >
            <Calendar className="w-4 h-4" />
            Life Path
          </button>

          <button
            onClick={() => { setActiveTab('mobile'); setResult(null); }}
            className={`py-3 px-3 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
              activeTab === 'mobile' ? 'bg-[#D4AF37] text-[#1E3A8A] shadow-md font-extrabold' : 'text-slate-300 hover:text-white'
            }`}
          >
            <Phone className="w-4 h-4" />
            Mobile Number
          </button>

          <button
            onClick={() => { setActiveTab('compatibility'); setResult(null); }}
            className={`py-3 px-3 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
              activeTab === 'compatibility' ? 'bg-[#D4AF37] text-[#1E3A8A] shadow-md font-extrabold' : 'text-slate-300 hover:text-white'
            }`}
          >
            <Heart className="w-4 h-4" />
            Compatibility
          </button>
        </div>

        {/* CALCULATOR FORMS */}
        {!result ? (
          <div className="bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/15 shadow-inner">
            
            {/* 1. Name Calculator Form */}
            {activeTab === 'name' && (
              <form onSubmit={handleCalculateName} className="space-y-4 animate-fadeIn">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-2">
                    Enter Your Full Name (As Per Official / Common Usage)
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Tejendra Meena"
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/25 text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] text-sm font-medium"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isCalculating}
                  className="w-full py-4 bg-[#D4AF37] hover:bg-[#c49f2b] text-[#1E3A8A] font-extrabold text-base rounded-xl transition-all shadow-lg cursor-pointer flex items-center justify-center gap-2"
                >
                  {isCalculating ? <RefreshCw className="w-5 h-5 animate-spin" /> : <Sparkles className="w-5 h-5" />}
                  Calculate Name Vibration Number
                </button>
              </form>
            )}

            {/* 2. Life Path Calculator Form */}
            {activeTab === 'lifepath' && (
              <form onSubmit={handleCalculateLifePath} className="space-y-4 animate-fadeIn">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-2">
                    Select Your Date of Birth (DD-MM-YYYY)
                  </label>
                  <input
                    type="date"
                    required
                    value={dobInput}
                    onChange={(e) => setDobInput(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/25 text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] text-sm font-medium"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isCalculating}
                  className="w-full py-4 bg-[#D4AF37] hover:bg-[#c49f2b] text-[#1E3A8A] font-extrabold text-base rounded-xl transition-all shadow-lg cursor-pointer flex items-center justify-center gap-2"
                >
                  {isCalculating ? <RefreshCw className="w-5 h-5 animate-spin" /> : <Calendar className="w-5 h-5" />}
                  Calculate Life Path Destiny Number
                </button>
              </form>
            )}

            {/* 3. Mobile Number Form */}
            {activeTab === 'mobile' && (
              <form onSubmit={handleCalculateMobile} className="space-y-4 animate-fadeIn">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-2">
                    Enter Your 10-Digit Mobile Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="8107241463"
                    value={mobileInput}
                    onChange={(e) => setMobileInput(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/25 text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] text-sm font-medium"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isCalculating}
                  className="w-full py-4 bg-[#D4AF37] hover:bg-[#c49f2b] text-[#1E3A8A] font-extrabold text-base rounded-xl transition-all shadow-lg cursor-pointer flex items-center justify-center gap-2"
                >
                  {isCalculating ? <RefreshCw className="w-5 h-5 animate-spin" /> : <Phone className="w-5 h-5" />}
                  Analyze Mobile Number Vibration
                </button>
              </form>
            )}

            {/* 4. Compatibility Form */}
            {activeTab === 'compatibility' && (
              <form onSubmit={handleCalculateCompatibility} className="space-y-4 animate-fadeIn">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-2">
                      Person 1 Date of Birth
                    </label>
                    <input
                      type="date"
                      required
                      value={partner1Dob}
                      onChange={(e) => setPartner1Dob(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/25 text-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37] text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-2">
                      Person 2 Date of Birth
                    </label>
                    <input
                      type="date"
                      required
                      value={partner2Dob}
                      onChange={(e) => setPartner2Dob(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/25 text-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37] text-sm"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={isCalculating}
                  className="w-full py-4 bg-[#D4AF37] hover:bg-[#c49f2b] text-[#1E3A8A] font-extrabold text-base rounded-xl transition-all shadow-lg cursor-pointer flex items-center justify-center gap-2"
                >
                  {isCalculating ? <RefreshCw className="w-5 h-5 animate-spin" /> : <Heart className="w-5 h-5" />}
                  Check Relationship Compatibility
                </button>
              </form>
            )}

          </div>
        ) : (
          /* RESULT DISPLAY CARD */
          <div className="bg-[#F8F6F1] text-[#2B2B2B] p-6 sm:p-8 rounded-3xl border-2 border-[#D4AF37] shadow-2xl animate-fadeIn text-left">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6">
              <div>
                <span className="text-[#1E3A8A] text-xs font-extrabold uppercase tracking-widest block">
                  {result.type}
                </span>
                <h3 className="text-2xl font-bold font-cinzel text-slate-900 mt-1">
                  {result.name || result.mobile || 'Personal Numerology Output'}
                </h3>
              </div>
              <div className="text-right">
                {result.singleDigit && (
                  <div className="w-14 h-14 rounded-2xl bg-[#1E3A8A] text-[#D4AF37] font-extrabold font-cinzel text-3xl flex items-center justify-center shadow-md border border-[#D4AF37]">
                    {result.singleDigit}
                  </div>
                )}
                {result.matchScore && (
                  <div className="text-3xl font-extrabold text-[#1E3A8A] font-cinzel">
                    {result.matchScore}%
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-4 mb-6 text-sm text-slate-700">
              {result.title && (
                <div className="bg-[#1E3A8A]/5 p-4 rounded-xl border border-[#1E3A8A]/15">
                  <span className="text-xs uppercase font-bold text-[#1E3A8A] block mb-1">Archetype & Ruling Energy</span>
                  <h4 className="text-lg font-bold text-slate-900">{result.title}</h4>
                  <p className="text-xs text-slate-600 mt-1">{result.traits}</p>
                </div>
              )}

              {result.vibrationRating && (
                <div className="p-3 bg-emerald-50 text-emerald-800 rounded-xl border border-emerald-200 text-xs font-bold">
                  Vibration Status: {result.vibrationRating}
                </div>
              )}

              {result.harmonyStatus && (
                <div className="p-3 bg-purple-50 text-[#1E3A8A] rounded-xl border border-purple-200 text-xs font-bold">
                  Harmony Status: {result.harmonyStatus}
                </div>
              )}

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic border-l-4 border-[#D4AF37] pl-3 py-1">
                "{result.advice}"
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={onBookConsultation}
                className="flex-1 py-3.5 px-6 rounded-xl bg-[#D4AF37] hover:bg-[#c49f2b] text-[#1E3A8A] font-extrabold text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                Book Consultation with Tejendra Meena
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setResult(null)}
                className="py-3.5 px-5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold text-xs transition-all flex items-center justify-center gap-1 cursor-pointer"
              >
                <RefreshCw className="w-4 h-4" />
                Recalculate
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
