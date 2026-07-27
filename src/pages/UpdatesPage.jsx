import React, { useState } from 'react';
import { Play, BookOpen, Clock, Heart, Share2, Compass, Film, MessageSquare, Sparkles } from 'lucide-react';
import SolarSystemBackground from '../components/SolarSystemBackground';

const UPDATES_DATA = [
  {
    id: 1,
    type: 'reel',
    title: 'Is your Mobile Number blocking your financial cash flow?',
    views: '12.4K Views',
    likes: '1.2K Likes',
    duration: '0:58',
    thumbnail: '/logo.jpeg',
    description: 'Quick check: If your mobile number digits sum up to 4 or 8, discover why it might cause financial delays and how to remedy it.',
    link: 'https://instagram.com/numerologybytejendra'
  },
  {
    id: 2,
    type: 'article',
    title: 'Chaldean vs Pythagorean Numerology: The Core Differences Explained',
    readTime: '5 Mins Read',
    date: 'July 24, 2026',
    author: 'Teiendraa K Meena',
    excerpt: 'Understanding the origins and vibrational mappings of Chaldean and Pythagorean matrices to correctly calculate your personal destiny grid.',
    thumbnail: '/numerology pic.jpg',
    category: 'Educational'
  },
  {
    id: 3,
    type: 'reel',
    title: 'Calculate your Chaldean Name Number in 15 seconds',
    views: '8.9K Views',
    likes: '840 Likes',
    duration: '0:45',
    thumbnail: '/numerology pic.jpg',
    description: 'Learn the ancient Chaldean character mapping to sum your name letters and find your identity vibration score.',
    link: 'https://instagram.com/numerologybytejendra'
  },
  {
    id: 4,
    type: 'article',
    title: 'Corporate Logo Design: The Numerology and Planetary Alignment of Brand Colors',
    readTime: '7 Mins Read',
    date: 'July 20, 2026',
    author: 'Teiendraa K Meena',
    excerpt: 'How business names, logo grid dimensions, and color wave frequencies interact with a founder\'s personal Life Path and Destiny numbers.',
    thumbnail: '/logo.jpeg',
    category: 'Corporate'
  },
  {
    id: 5,
    type: 'reel',
    title: 'Life Path 7: The Spiritual Seeker\'s Career Guidelines',
    views: '15.2K Views',
    likes: '2.1K Likes',
    duration: '0:59',
    thumbnail: '/tejendra_wisdom.jpeg',
    description: 'Are you a Life Path 7? Discover why career options in data analysis, spiritual consulting, and research are your cosmic sweet spot.',
    link: 'https://instagram.com/numerologybytejendra'
  },
  {
    id: 6,
    type: 'article',
    title: 'Selecting Favorable Business Registration Dates in 2026',
    readTime: '4 Mins Read',
    date: 'July 15, 2026',
    author: 'Teiendraa K Meena',
    excerpt: 'An auspicious registration date acts as the foundational birth grid of your company. Avoid mercury retrograde windows and select peak double-vibration dates.',
    thumbnail: '/logo.jpeg',
    category: 'Business'
  }
];

export default function UpdatesPage() {
  const [filter, setFilter] = useState('all');

  const filteredData = filter === 'all' 
    ? UPDATES_DATA 
    : UPDATES_DATA.filter(item => item.type === filter);

  return (
    <div className="min-h-screen bg-[#09031a] text-white py-12 px-4 sm:px-6 lg:px-8 text-left relative overflow-hidden">
      <SolarSystemBackground />
      
      <div className="max-w-7xl mx-auto space-y-10 relative z-10 animate-page-entrance">
        
        {/* Page Title Banner */}
        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 sm:p-14 shadow-2xl border-2 border-[#C59B27]/40 text-center relative overflow-hidden">
          <div className="relative z-10 w-full space-y-3">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C59B27]/20 border border-[#C59B27]/40 text-[#C59B27] text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-4 h-4 text-[#C59B27]" />
              Creator Stream
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-cinzel text-white">
              Daily Reels & Updates
            </h1>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-poppins">
              Stay aligned with daily numerology tips, cosmic video reels, spelling correction rules, and executive articles written by Teiendraa K Meena.
            </p>
          </div>
        </div>

        {/* Filters Controls */}
        <div className="flex justify-center">
          <div className="bg-white/5 backdrop-blur-md p-1 rounded-2xl border border-white/10 flex text-xs font-bold w-full sm:w-auto">
            <button
              onClick={() => setFilter('all')}
              className={`flex-1 sm:flex-initial py-2.5 px-6 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                filter === 'all' ? 'bg-[#C59B27] text-slate-950 shadow-md font-extrabold' : 'text-slate-300 hover:text-white'
              }`}
            >
              <Compass className="w-4 h-4" />
              All Content
            </button>
            <button
              onClick={() => setFilter('reel')}
              className={`flex-1 sm:flex-initial py-2.5 px-6 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                filter === 'reel' ? 'bg-[#C59B27] text-slate-950 shadow-md font-extrabold' : 'text-slate-300 hover:text-white'
              }`}
            >
              <Film className="w-4 h-4" />
              Daily Reels
            </button>
            <button
              onClick={() => setFilter('article')}
              className={`flex-1 sm:flex-initial py-2.5 px-6 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                filter === 'article' ? 'bg-[#C59B27] text-slate-950 shadow-md font-extrabold' : 'text-slate-300 hover:text-white'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              Articles & Blogs
            </button>
          </div>
        </div>

        {/* Content Stream Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredData.map((item) => (
            <div 
              key={item.id} 
              className="bg-white/5 backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 hover:border-[#C59B27]/40 transition-all flex flex-col justify-between shadow-lg group h-full hover:-translate-y-1 duration-300"
            >
              {/* Media Thumbnail Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-950/40">
                <img 
                  src={item.thumbnail} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay for Reels */}
                {item.type === 'reel' && (
                  <div className="absolute inset-0 bg-black/45 flex items-center justify-center group-hover:bg-black/35 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-[#C59B27] text-slate-950 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-6 h-6 fill-slate-950 text-slate-950 ml-0.5" />
                    </div>
                    <span className="absolute bottom-2 right-2 text-[10px] font-extrabold bg-black/60 text-white px-2 py-0.5 rounded">
                      {item.duration}
                    </span>
                  </div>
                )}

                {/* Overlay Badge for Articles */}
                {item.type === 'article' && (
                  <span className="absolute top-2 right-2 text-[10px] font-black uppercase bg-[#C59B27] text-slate-950 px-2.5 py-1 rounded">
                    {item.category}
                  </span>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex-grow flex flex-col justify-between text-left space-y-4">
                <div className="space-y-2">
                  <span className="text-[10px] font-extrabold text-[#C59B27] uppercase tracking-wider block">
                    {item.type === 'reel' ? '🎥 VIDEO REEL' : '✍️ BLOG ARTICLE'}
                  </span>
                  
                  <h3 className="text-lg font-bold font-cinzel text-white group-hover:text-[#C59B27] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-poppins">
                    {item.type === 'reel' ? item.description : item.excerpt}
                  </p>
                </div>

                {/* Footer details */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400 font-semibold">
                  {item.type === 'reel' ? (
                    <>
                      <span>{item.views}</span>
                      <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-[#C59B27] hover:underline flex items-center gap-1 font-bold cursor-pointer"
                      >
                        Watch Reel <Play className="w-3 h-3 text-[#C59B27]" />
                      </a>
                    </>
                  ) : (
                    <>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#C59B27]" />
                        {item.readTime}
                      </span>
                      <span>{item.date}</span>
                    </>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
