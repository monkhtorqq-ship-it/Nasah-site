"use client";

import React, { useState, useEffect } from 'react';
import { ArrowLeft, Beaker, Atom, Orbit, Sparkles, Microscope, AlertTriangle } from 'lucide-react';
import Link from 'next/link';

export default function SciencePage() {
  const [apod, setApod] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // NASA APOD API - Чиний хувийн түлхүүрээр дата татах
  useEffect(() => {
    // ЧИНҮҮ ХУВИЙН ТҮЛХҮҮР (API KEY)
    const NASA_KEY = "dgMgW0D1KBDAyTqyBQMpPnUzAUgk15Wm7S4vqQp1"; 
    
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`)
      .then(res => {
        if (!res.ok) {
          if (res.status === 429) throw new Error("Rate Limit Exceeded. Try again later.");
          throw new Error("Deep Space Connection Failed.");
        }
        return res.json();
      })
      .then(data => {
        setApod(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Дата татахад алдаа гарлаа:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const scienceSectors = [
    { title: "Astrophysics", icon: <Atom size={20} />, desc: "Орчлон ертөнцийн үүсэл, хар нүх, цаг хугацааны судалгаа." },
    { title: "Exoplanets", icon: <Orbit size={20} />, desc: "Нарны аймгаас гадна орших амьдрал байж болох гарагуудын эрэл." },
    { title: "Heliophysics", icon: <Sparkles size={20} />, desc: "Нарны идэвхжил болон түүний дэлхийд үзүүлэх нөлөө." }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans overflow-x-hidden selection:bg-purple-500 selection:text-white">
      
      {/* BACKGROUND EFFECTS */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-20">
        
        {/* HEADER */}
        <div className="mb-20">
          <Link href="/" className="group inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] italic mb-10 text-purple-400 transition-all">
            <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" />
            Terminal Main
          </Link>
          <h1 className="text-7xl md:text-[120px] font-black italic uppercase tracking-tighter leading-[0.85]">
            SCIENCE <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-400 to-cyan-400">RESEARCH</span>
          </h1>
        </div>

        {/* MAIN RESEARCH SECTION */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-8 border-l-2 border-purple-500 pl-4">
            <Beaker className="text-purple-500 animate-bounce" size={24} />
            <h2 className="text-xl font-black italic uppercase tracking-widest">Өдрийн онцлох судалгаа</h2>
          </div>

          {loading ? (
            <div className="h-[500px] bg-white/[0.02] border border-white/10 flex flex-col items-center justify-center gap-4">
              <div className="w-12 h-12 border-4 border-purple-500/20 border-t-purple-500 rounded-full animate-spin"></div>
              <p className="italic text-zinc-500 tracking-[0.3em] uppercase text-[10px] animate-pulse">Deep Space Link Establishing...</p>
            </div>
          ) : error ? (
            <div className="h-[400px] bg-red-950/10 border border-red-500/20 flex flex-col items-center justify-center gap-4 text-center p-10 backdrop-blur-sm">
              <AlertTriangle className="text-red-500" size={48} />
              <p className="text-red-400 font-mono text-sm uppercase tracking-widest font-bold">{error}</p>
              <p className="text-zinc-500 text-xs mt-2 uppercase tracking-tight">Системд алдаа гарлаа. Түр хүлээгээд дахин оролдоно уу.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-white/5 bg-white/[0.01] backdrop-blur-xl">
              <div className="relative group overflow-hidden border-r border-white/5">
                {apod?.media_type === "video" ? (
                  <iframe src={apod.url} className="w-full h-full min-h-[400px]" title="NASA Video" />
                ) : (
                  <img 
                    src={apod?.url || "https://images.nasa.gov/images/placeholder.jpg"} 
                    alt="NASA APOD" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms] ease-out"
                  />
                )}
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 border border-white/10">
                  <p className="text-[10px] font-mono text-purple-400 uppercase tracking-widest">Live Feed // NASA_SYSTEM</p>
                </div>
              </div>
              
              <div className="p-12 flex flex-col justify-center space-y-8">
                <div>
                  <h3 className="text-4xl font-black italic uppercase tracking-tighter text-white leading-none mb-4 group-hover:text-purple-400 transition-colors">
                    {apod?.title}
                  </h3>
                  <div className="flex gap-4 items-center">
                    <span className="text-[10px] font-mono text-zinc-500 border border-zinc-800 px-2 py-1 uppercase italic">Date: {apod?.date}</span>
                    <span className="text-[10px] font-mono text-purple-500 border border-purple-500/20 px-2 py-1 uppercase italic">Status: Verified</span>
                  </div>
                </div>

                <p className="text-zinc-400 text-sm leading-relaxed italic opacity-80 font-medium">
                  {apod?.explanation?.slice(0, 500)}...
                </p>

                <div className="pt-8 border-t border-white/5">
                  <button className="group/btn relative px-8 py-4 bg-purple-600 overflow-hidden transition-all hover:pr-12">
                    <span className="relative z-10 font-black italic uppercase text-xs tracking-widest">Бүрэн эхээр унших</span>
                    <div className="absolute inset-0 bg-white translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover/btn:opacity-100 group-hover/btn:text-black transition-all">→</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* SECTORS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {scienceSectors.map((sector, i) => (
            <div key={i} className="group p-12 bg-white/[0.02] border border-white/5 hover:bg-purple-600 transition-all duration-700 relative overflow-hidden">
              <div className="relative z-10">
                <div className="mb-8 text-purple-500 group-hover:text-white group-hover:scale-110 transition-all duration-500">
                  {sector.icon}
                </div>
                <h4 className="text-2xl font-black italic uppercase tracking-tighter mb-4 text-white">
                  {sector.title}
                </h4>
                <p className="text-xs text-zinc-500 group-hover:text-purple-100 leading-relaxed italic font-medium uppercase tracking-wider transition-colors">
                  {sector.desc}
                </p>
              </div>
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/10 group-hover:border-white transition-colors"></div>
            </div>
          ))}
        </div>

        {/* TICKER */}
        <div className="mt-32 py-8 border-y border-white/5 overflow-hidden whitespace-nowrap bg-purple-900/5 relative">
           <div className="ticker-content inline-block text-[10px] font-mono uppercase tracking-[0.6em] text-purple-400/40 font-bold">
             DETECTION: Gravitational Waves +++ SPECTRUM: Gamma Ray Burst 04.22 +++ HUBBLE CONSTANT: 73.3 KM/S/MPC +++ DARK MATTER RATIO: 26.8% +++ NASA_DATA_STREAM: CONNECTED +++ 
             DETECTION: Gravitational Waves +++ SPECTRUM: Gamma Ray Burst 04.22 +++ HUBBLE CONSTANT: 73.3 KM/S/MPC +++ DARK MATTER RATIO: 26.8% +++ NASA_DATA_STREAM: CONNECTED +++
           </div>
        </div>
      </div>

      <style jsx>{`
        .ticker-content {
          display: inline-block;
          animation: ticker 40s linear infinite;
        }
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}