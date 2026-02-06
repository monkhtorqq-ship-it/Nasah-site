"use client";

import React, { useState, useEffect } from 'react';
import { ArrowLeft, Beaker, Atom, Orbit, Sparkles, Microscope } from 'lucide-react';
import Link from 'next/link';

export default function SciencePage() {
  const [apod, setApod] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // NASA APOD API - Өдрийн онцлох зураг татах
  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
      .then(res => res.json())
      .then(data => {
        setApod(data);
        setLoading(false);
      })
      .catch(err => console.log(err));
  }, []);

  const scienceSectors = [
    { title: "Astrophysics", icon: <Atom size={20} />, desc: "Орчлон ертөнцийн үүсэл, хар нүх, цаг хугацааны судалгаа." },
    { title: "Exoplanets", icon: <Orbit size={20} />, desc: "Нарны аймгаас гадна орших амьдрал байж болох гарагуудын эрэл." },
    { title: "Heliophysics", icon: <Sparkles size={20} />, desc: "Нарны идэвхжил болон түүний дэлхийд үзүүлэх нөлөө." }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans overflow-x-hidden">
      
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-20">
        
        <div className="mb-20">
          <Link href="/" className="group inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] italic mb-10 text-purple-400 transition-all">
            <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" />
            Terminal Main
          </Link>
          <h1 className="text-7xl md:text-[120px] font-black italic uppercase tracking-tighter leading-none">
            SCIENCE <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-400 to-cyan-400">RESEARCH</span>
          </h1>
        </div>

        <section className="mb-32">
          <div className="flex items-center gap-4 mb-8">
            <Beaker className="text-purple-500" />
            <h2 className="text-xl font-black italic uppercase tracking-widest">Өдрийн онцлох судалгаа</h2>
          </div>

          {loading ? (
            <div className="h-[500px] bg-white/5 animate-pulse flex items-center justify-center border border-white/10 italic text-zinc-500 tracking-widest uppercase text-xs">
              Deep Space Link Establishing...
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white/[0.02] border border-white/5 p-8 backdrop-blur-md">
              <div className="relative group overflow-hidden border border-white/10">
                <img 
                  src={apod?.url} 
                  alt="APOD" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex items-end">
                   <p className="text-[10px] font-mono text-purple-400">SOURCE: NASA APOD SYSTEM</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-3xl font-black italic uppercase tracking-tighter text-purple-400 leading-tight">
                  {apod?.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed italic opacity-80">
                  {apod?.explanation?.slice(0, 450)}...
                </p>
                <div className="pt-6 border-t border-white/10 flex justify-between items-center text-[10px] font-mono uppercase tracking-widest">
                  <span className="text-zinc-500 italic">DATE: {apod?.date}</span>
                  <button className="px-6 py-3 bg-purple-600 hover:bg-white hover:text-black transition-all font-black italic">
                    БҮРЭН ЭХЭЭР УНШИХ
                  </button>
                </div>
              </div>
            </div>
          )}
        </section>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {scienceSectors.map((sector, i) => (
            <div key={i} className="group p-10 bg-zinc-900/20 border border-white/5 hover:border-purple-500/50 transition-all duration-500 relative">
              <div className="mb-8 text-purple-500 group-hover:scale-110 transition-transform">
                {sector.icon}
              </div>
              <h4 className="text-2xl font-black italic uppercase tracking-tighter mb-4 text-white">
                {sector.title}
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed italic font-medium uppercase tracking-wider">
                {sector.desc}
              </p>
              
           
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/10 group-hover:border-purple-500 transition-colors"></div>
            </div>
          ))}
        </div>

      
        <div className="mt-32 py-6 border-y border-white/5 overflow-hidden whitespace-nowrap bg-purple-900/5 relative">
           <div className="inline-block animate-[ticker_30s_linear_infinite] text-[10px] font-mono uppercase tracking-[0.5em] text-purple-400/50">
             DETECTION: Gravitational Waves +++ SPECTRUM: Gamma Ray Burst 04.22 +++ HUBBLE CONSTANT: 73.3 KM/S/MPC +++ DARK MATTER RATIO: 26.8% +++
             DETECTION: Gravitational Waves +++ SPECTRUM: Gamma Ray Burst 04.22 +++ HUBBLE CONSTANT: 73.3 KM/S/MPC +++ DARK MATTER RATIO: 26.8% +++
           </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}