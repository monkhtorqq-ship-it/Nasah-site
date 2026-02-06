"use client";

import React from 'react';
import { ArrowLeft, Binary } from 'lucide-react';
import Link from 'next/link';

const TECH_GALLERY = [
  {
    id: "TECH-001",
    title: "Mars Rover Perseverance",
    category: "Robotic Exploration",
    // Perseverance Rover-ийн бодит зураг
    src: "https://mars.nasa.gov/system/resources/detail_files/25615_24-Main-1200.jpg", 
    desc: "Ангараг гарагийн хөрснөөс амьдралын ул мөр хайх дэвшилтэт робот систем.",
    stats: { cpu: "PowerPC 750", power: "110 Watts" }
  },
  {
    id: "TECH-002",
    title: "James Webb Telescope",
    category: "Space Telescopes",
    // JWST Алтан толь
    src: "https://www.nasa.gov/wp-content/uploads/2023/03/stsci-01evy6q9vpxm5t5qpx5q65q5q5.jpg",
    desc: "Орчлон ертөнцийн анхны гэрлийг барих алтан бүрхүүл бүхий толь.",
    stats: { temp: "-233°C", resolution: "0.1 arcsec" }
  },
  {
    id: "TECH-003",
    title: "The Lunar Gateway",
    category: "Orbital Stations",
    // Сарны станц
    src: "https://www.nasa.gov/wp-content/uploads/2021/02/gateway_in_lunar_orbit_1.jpg",
    desc: "Сарны тойрог замд байрлах хүн төрөлхтний анхны алсын станц.",
    stats: { orbit: "NRHO", capacity: "4 Crew" }
  },
  {
    id: "TECH-004",
    title: "Orion Spacecraft",
    category: "Crew Modules",
    // Орион капсул
    src: "https://www.nasa.gov/wp-content/uploads/2022/11/artemis-i-orion-earth-departure.jpg",
    desc: "Гүн огторгуйд хүн тээвэрлэх хамгийн найдвартай капсул.",
    stats: { speed: "40,000 km/h", heat: "2,800°C" }
  }
];

export default function TechnologyVisualPage() {
  return (
    <div className="min-h-screen bg-[#020202] text-white font-sans selection:bg-blue-600">
      
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-20">
        
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
                Active Tech Stack: 2026.02.06 <br/>
                Authorization: NASA_TECH_PORT
             </div>
             <Binary className="text-blue-600 ml-auto animate-pulse" size={24} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 px-1 bg-white/5 border border-white/10">
          {TECH_GALLERY.map((item) => (
            <div key={item.id} className="group relative aspect-[16/10] overflow-hidden bg-black cursor-crosshair border border-white/5">
              
              <img 
                src={item.src} 
                className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-1000"
                alt={item.title} 
                onError={(e) => {
                  // Хэрэв зураг ачаалахгүй бол placeholder харуулна
                  (e.target as HTMLImageElement).src = "https://images.nasa.gov/images/as11-40-5874~orig.jpg";
                }}
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
                  <h3 className="text-3xl font-black italic uppercase tracking-tighter mb-2 group-hover:text-blue-500 transition-colors drop-shadow-lg">
                    {item.title}
                  </h3>
                  <div className="max-h-0 group-hover:max-h-40 overflow-hidden transition-all duration-700 ease-in-out">
                    <p className="text-xs text-zinc-300 font-medium leading-relaxed mb-4 max-w-sm italic">
                      {item.desc}
                    </p>
                    <div className="flex gap-6 border-t border-white/10 pt-4">
                       {Object.entries(item.stats).map(([key, val]) => (
                         <div key={key}>
                            <p className="text-[8px] uppercase text-blue-500 font-black">{key}</p>
                            <p className="text-[10px] font-mono text-white">{val}</p>
                         </div>
                       ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent h-24 -translate-y-full group-hover:animate-[scan_3s_linear_infinite] pointer-events-none"></div>
            </div>
          ))}
        </div>

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