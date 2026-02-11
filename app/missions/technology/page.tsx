"use client";

import React, { useState, useEffect } from 'react';
import { ArrowLeft, Binary, Loader2 } from 'lucide-react';
import Link from 'next/link';

export default function TechnologyVisualPage() {
  // --- NASA API ХОЛБОЛТ ---
  const [techItems, setTechItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Чиний хувийн API Key
    const MY_NASA_KEY = "dgMgW0D1KBDAyTqyBQMpPnUzAUgk15Wm7S4vqQp1";
    
    // NASA-ийн "Technology" сэдэвтэй зургуудыг татах
    fetch(`https://images-api.nasa.gov/search?q=space technology&media_type=image`)
      .then(res => res.json())
      .then(data => {
        const rawItems = data.collection.items.slice(0, 4); // Эхний 4-ийг авна
        const formatted = rawItems.map((item: any, index: number) => ({
          id: `TECH-00${index + 1}`,
          title: item.data[0].title,
          src: item.links[0].href,
          desc: item.data[0].description?.slice(0, 150) + "...",
          stats: { 
            date: item.data[0].date_created.split('T')[0],
            center: item.data[0].center 
          }
        }));
        setTechItems(formatted);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-[#020202] text-white font-sans selection:bg-blue-600">
      
      {/* Background Effect */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-20">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
          <div>
            <Link href="/" className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] italic mb-10 text-blue-500 transition-all">
              <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" />
              Return to Base
            </Link>
            <h1 className="text-7xl md:text-[100px] font-black italic uppercase tracking-tighter leading-[0.85]">
              ENGINEERING <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-400">BLUEPRINTS</span>
            </h1>
          </div>
          <div className="text-right hidden md:block border-l border-white/10 pl-10">
             <div className="text-[10px] font-mono text-zinc-500 mb-2 uppercase tracking-widest leading-relaxed">
                Auth: NASA_KEY_ACTIVE <br/>
                Key: { "dgMgW...p1" }
             </div>
             <Binary className="text-blue-600 ml-auto animate-pulse" size={24} />
          </div>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="h-96 flex flex-col items-center justify-center border border-white/5 bg-white/[0.01]">
            <Loader2 className="animate-spin text-blue-500 mb-4" size={40} />
            <p className="text-[10px] font-mono tracking-[0.5em] text-zinc-500 uppercase">Fetching Schematics...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1 px-1 bg-white/5 border border-white/10">
            {techItems.map((item) => (
              <div key={item.id} className="group relative aspect-[16/10] overflow-hidden bg-black cursor-crosshair border border-white/5">
                
                <img 
                  src={item.src} 
                  className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-1000"
                  alt={item.title} 
                />

                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <div className="flex justify-between items-start opacity-60 group-hover:opacity-100 transition-opacity">
                     <div className="px-3 py-1 bg-black/80 border border-white/20 text-[9px] font-black uppercase tracking-widest italic">
                       {item.id}
                     </div>
                     <div className="flex flex-col items-end gap-1">
                        <div className="w-12 h-[1px] bg-blue-600 shadow-[0_0_10px_#2563eb]"></div>
                        <div className="w-6 h-[1px] bg-blue-600 shadow-[0_0_10px_#2563eb]"></div>
                     </div>
                  </div>

                  <div className="relative z-20">
                    <h3 className="text-3xl font-black italic uppercase tracking-tighter mb-2 group-hover:text-blue-500 transition-colors drop-shadow-lg leading-none">
                      {item.title}
                    </h3>
                    <div className="max-h-0 group-hover:max-h-40 overflow-hidden transition-all duration-700 ease-in-out">
                      <p className="text-xs text-zinc-300 font-medium leading-relaxed mb-4 max-w-sm italic">
                        {item.desc}
                      </p>
                      <div className="flex gap-6 border-t border-white/10 pt-4">
                         {Object.entries(item.stats).map(([key, val]: any) => (
                           <div key={key}>
                              <p className="text-[8px] uppercase text-blue-500 font-black">{key}</p>
                              <p className="text-[10px] font-mono text-white">{val}</p>
                           </div>
                         ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Scanline Animation */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent h-24 -translate-y-full group-hover:animate-[scan_3s_linear_infinite] pointer-events-none"></div>
              </div>
            ))}
          </div>
        )}

        {/* Footer info */}
        <div className="mt-20 flex flex-wrap justify-between items-center gap-10 border-t border-white/5 pt-10 font-mono text-zinc-600">
            <div className="flex items-center gap-4">
              <div className="w-3 h-3 bg-blue-600 animate-ping rounded-full"></div>
              <span className="text-[10px] uppercase tracking-[0.5em]">System Uplink Active...</span>
            </div>
            <p className="text-[9px] uppercase tracking-widest">© 2026 NASA Innovation Lab / Engineering Archive</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes scan {
          from { transform: translateY(-100%); }
          to { transform: translateY(400%); }
        }
      `}</style>
    </div>
  );
}