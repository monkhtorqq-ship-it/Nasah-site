  "use client";

  import React from 'react';
  import { ChevronDown } from 'lucide-react';

<<<<<<< Updated upstream:app/components/Hero.tsx
  const Hero = () => {
    return (
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0 bg-black">
          {/* Анимэйшн бүхий мананцар (Nebula) эффект */}
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-indigo-900/20 rounded-full blur-[100px]"></div>
=======
const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">

      {/* Background Layer */}
      <div className="absolute inset-0 z-0 bg-black">

        {/* Анимэйшн бүхий мананцар (Nebula) эффект */}
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-indigo-900/20 rounded-full blur-[100px]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 mt-20">
        <div className="inline-block px-4 py-1 border border-blue-500/30 rounded-full mb-6 bg-blue-500/5 backdrop-blur-sm">
          <span className="text-[10px] text-blue-400 font-black tracking-[0.4em] uppercase italic">
            Outer Space Explorations
          </span>
>>>>>>> Stashed changes:app/components/Main.tsx
        </div>

        {/* Main Content */}
        <div className="relative z-10 text-center px-6 mt-20">
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
            <button className="w-full sm:w-auto px-10 py-4 bg-white text-black font-black text-[10px] tracking-[0.2em] uppercase hover:bg-blue-500 hover:text-white transition-all duration-300 rounded-sm">
              Explore Missions
            </button>
            <button className="w-full sm:w-auto px-10 py-4 bg-transparent border border-white/10 text-white font-black text-[10px] tracking-[0.2em] uppercase hover:border-blue-500/50 transition-all rounded-sm">
              View Live Feed
            </button>
          </div>
        </div>

        {/* Bottom Detail */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span className="text-[10px] text-gray-500 tracking-[0.3em] uppercase">Scroll to Discover</span>
          <ChevronDown className="text-blue-500 animate-bounce w-5 h-5" />
        </div>

        {/* NASA Style Grid Line */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </section>
    );
  };

  export default Hero;