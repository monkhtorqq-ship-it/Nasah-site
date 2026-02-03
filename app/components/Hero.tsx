"use client";

import React from 'react';
import { ChevronDown } from 'lucide-react';
<<<<<<< Updated upstream

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-black">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-indigo-900/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 text-center px-6 mt-20">
=======
import Link from 'next/link';

const Hero = () => {
  return (
    // Changed to min-h-screen to allow content to grow vertically
    <section className="relative min-h-screen w-full bg-black overflow-x-hidden">
      
      {/* Background Layer: Changed to fixed so it stays while you scroll */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-10%] right-[-10%] w-125 h-125 bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-100 h-100 bg-indigo-900/20 rounded-full blur-[100px]"></div>
      </div>

      {/* 1. MAIN HERO AREA: Occupies exactly one full screen */}
      <div className="relative z-10 h-screen w-full flex flex-col items-center justify-center text-center px-6">
>>>>>>> Stashed changes
        <div className="inline-block px-4 py-1 border border-blue-500/30 rounded-full mb-6 bg-blue-500/5 backdrop-blur-sm">
          <span className="text-[10px] text-blue-400 font-black tracking-[0.4em] uppercase italic">
            Outer Space Explorations
          </span>
        </div>
        
        <h1 className="text-6xl md:text-[120px] font-black text-white leading-tight tracking-tighter mb-4 uppercase italic">
          DEEP <span className="text-transparent bg-clip-text bg-gradient-to-t from-blue-700 via-blue-400 to-white">SPACE</span>
        </h1>
        
        <p className="max-w-xl mx-auto text-gray-400 text-xs md:text-sm leading-relaxed mb-10 tracking-[0.1em] uppercase opacity-80">
          Хязгааргүй огторгуйн нууцыг хамтдаа нээн илрүүлж, 
          хүн төрөлхтний дараагийн алхмыг эндээс эхлүүлцгээе.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<<<<<<< Updated upstream
          <button className="w-full sm:w-auto px-10 py-4 bg-white text-black font-black text-[10px] tracking-[0.2em] uppercase hover:bg-blue-500 hover:text-white transition-all duration-300 rounded-sm">
            Explore Missions
          </button>
          <button className="w-full sm:w-auto px-10 py-4 bg-transparent border border-white/10 text-white font-black text-[10px] tracking-[0.2em] uppercase hover:border-blue-500/50 transition-all rounded-sm">
            View Live Feed
          </button>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-[10px] text-gray-500 tracking-[0.3em] uppercase">Scroll to Discover</span>
        <ChevronDown className="text-blue-500 animate-bounce w-5 h-5" />
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </section>
  );
};

export default Hero;
=======
          <Link href="/missions">
            <button className="w-full sm:w-auto px-10 py-4 bg-white text-black font-black text-[10px] tracking-[0.2em] uppercase hover:bg-blue-500 hover:text-white transition-all duration-300 rounded-sm">
              Explore Missions
            </button>
          </Link>
          <a href="https://plus.nasa.gov/video/moonbound-for-all-humanity/" target="_blank" rel="noopener noreferrer">
            <button className="w-full sm:w-auto px-10 py-4 bg-transparent border border-white/10 text-white font-black text-[10px] tracking-[0.2em] uppercase hover:border-blue-500/50 transition-all rounded-sm">
              View Live Feed
            </button>
          </a>
        </div>
        <div className="absolute bottom-10 flex flex-col items-center gap-2">
          <span className="text-[10px] text-gray-500 tracking-[0.3em] uppercase">Scroll to Discover</span>
          <ChevronDown className="text-blue-500 animate-bounce w-5 h-5" />
        </div>
      </div>
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24 flex flex-col items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white tracking-widest uppercase italic">The Mission Brief</h2>
            <p className="text-gray-400 text-sm leading-relaxed tracking-wide">
              Бидний эрхэм зорилго бол хүн төрөлхтнийг гараг хоорондын соёл иргэншил болгоход оршино. 
              Энэхүү видеоноос та бидний ирээдүйн төлөвлөгөө болон одоогийн ахиц дэвшлийг харах боломжтой.
            </p>
            <div className="h-[1px] w-20 bg-blue-500"></div>
          </div>
          <div className="w-full aspect-video rounded-lg overflow-hidden border border-white/10 shadow-2xl shadow-blue-500/10">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/GzWzo0AXmTg" 
              title="Space Video"
              allowFullScreen 
            />
          </div>
        </div>
      </div>  
      <div className="sticky bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent"></div>
    </section>
  );
};

export default Hero;


//https://www.youtube.com/watch?v=ydkQlJhodio not working link only for youtube video page
//remove the watch?v= part and replace it with embed so the video is visible to directly
//https://www.youtube.com/embed/GzWzo0AXmTg correct link for embeded video but for this it's works in our site
>>>>>>> Stashed changes
