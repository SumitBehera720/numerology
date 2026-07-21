import React from 'react';
import { BookOpen, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';
import { reportsCatalog } from '../data/tejendraData';

export default function ReportsPage({ onOpenConsultation }) {
  return (
    <div className="min-h-screen bg-[#F8F6F1] py-12 px-4 sm:px-6 lg:px-8 text-left">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Banner */}
        <div className="bg-[#1E3A8A] text-white rounded-3xl p-8 sm:p-14 shadow-2xl border-2 border-[#D4AF37]/30 text-center">
          <h1 className="text-3xl sm:text-5xl font-extrabold font-cinzel text-white">
            Numerology Reports Catalog
          </h1>
          <p className="text-slate-200 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
            Order custom 15–25 page PDF reports calculated specifically for your birth date and name numbers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reportsCatalog.map((rep) => (
            <div key={rep.id} className="bg-white rounded-3xl p-8 shadow-xl border border-[#D4AF37]/30 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase bg-[#D4AF37] text-white px-3 py-1 rounded">
                    {rep.tag}
                  </span>
                  <span className="text-xl font-extrabold font-cinzel text-[#1E3A8A]">
                    {rep.price}
                  </span>
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
                onClick={onOpenConsultation}
                className="btn-primary w-full py-4 text-sm font-extrabold flex items-center justify-center gap-2 cursor-pointer"
              >
                <BookOpen className="w-4 h-4" />
                Order {rep.title}
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
