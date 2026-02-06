"use client";
import React, { useState } from 'react';
import { ChevronDown, Globe, Zap, Shield, Rocket } from 'lucide-react';
import Link from 'next/link';
import { cn } from "@/lib/utils";
import { GlareCard } from "@/components/ui/glare-card";

const Hero = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  const stats = [
    { label: "Туулсан зай", value: "4.2 тэрбум КМ", icon: <Globe className="w-4 h-4" /> },
    { label: "Идэвхтэй даалгавар", value: "12", icon: <Rocket className="w-4 h-4" /> },
    { label: "Өгөгдлийн хамгаалалт", value: "99.9%", icon: <Shield className="w-4 h-4" /> },
    { label: "Эрчим хүчний гаралт", value: "8.4 TW", icon: <Zap className="w-4 h-4" /> },
  ];

  const missions = [
    { title: "Төслүүд", src: "/mission.png", href: "/missions", tag: "Явагдаж буй" },
    { title: "Технологи", src: "/sience.jpg", href: "/missions/technology", tag: "Шинэ шийдэл" },
    { title: "Шинжлэх ухаан", src: "/technolegy.jpg", href: "/missions/science", tag: "Судалгаа" },
    { title: "Бидний тухай", src: "/sun.webp", href: "/missions/about", tag: "Түүх" },
    { title: "Дэлхий газар", src: "/earth.jpg", href: "/missions/station", tag: "Орбит" },
    { title: "Хар нүхний түүх", src: "/black.jpg", href: "/missions/mars", tag: "Ирээдүй" }
  ];

  return (
    <section className="relative min-h-screen w-full bg-transparent overflow-x-hidden font-sans">
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-indigo-900/30 rounded-full blur-[120px]"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com')] opacity-[0.03]"></div>
      </div>
      <div className="relative z-10 h-screen w-full flex flex-col items-center justify-center text-center px-6">
        <div className="inline-flex items-center gap-2 px-4 py-1 border border-blue-500/30 rounded-full mb-8 bg-blue-500/10 backdrop-blur-md">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
          <span className="text-[10px] text-blue-300 font-bold tracking-[0.5em] uppercase italic">
            Систем онлайн: Артемис протокол
          </span>
        </div>
        <h1 className="text-7xl md:text-[140px] font-black text-white leading-none tracking-tighter mb-6 uppercase italic">
          ГҮН <span className="text-transparent bg-clip-text bg-gradient-to-t from-blue-800 via-blue-400 to-white drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]">ОГТОРГУЙ</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-gray-400 text-[10px] md:text-xs leading-loose mb-12 tracking-[0.3em] uppercase opacity-70">
          Хязгааргүй огторгуйн нууцыг хамтдаа нээн илрүүлж, <br/>
          хүн төрөлхтний дараагийн алхмыг эндээс эхлүүлцгээе.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link href="/missions">
            <button className="group relative w-full sm:w-auto px-12 py-5 bg-white text-black font-black text-[10px] tracking-[0.3em] uppercase transition-all duration-500 hover:bg-blue-600 hover:text-white rounded-none">
              <span className="relative z-10">Аялалд гарах</span>
              <div className="absolute inset-0 w-0 bg-blue-500 transition-all duration-500 group-hover:w-full"></div>
            </button>
          </Link>
          <a href="https://plus.nasa.gov" target="_blank" className="w-full sm:w-auto px-12 py-5 border border-white/20 text-white font-black text-[10px] tracking-[0.3em] uppercase hover:border-blue-400 hover:bg-white/5 transition-all">
            Шуд дамжуулалт
          </a>
        </div>
        <div className="absolute bottom-24 hidden lg:grid grid-cols-4 gap-12 border-t border-white/10 pt-10 w-full max-w-5xl">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="flex items-center gap-2 text-blue-400 mb-1">
                {stat.icon}
                <span className="text-[9px] tracking-widest uppercase font-bold">{stat.label}</span>
              </div>
              <span className="text-xl font-mono text-white tracking-tighter">{stat.value}</span>
            </div>
          ))}
        </div>
        <div className="absolute bottom-6 flex flex-col items-center gap-2 opacity-40">
          <ChevronDown className="text-blue-500 animate-bounce w-6 h-6" />
        </div>
      </div>
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-black text-white tracking-widest uppercase italic">Даалгаврын танилцуулга</h2>
            <p className="text-gray-400 text-sm leading-relaxed tracking-wide">
              Бидний эрхэм зорилго бол хүн төрөлхтнийг гараг хоорондын соёл иргэншил болгоход оршино. 
              Энэхүү видеоноос та бидний ирээдүйн төлөвлөгөө болон одоогийн ахиц дэвшлийг харах боломжтой.
            </p>
            <div className="h-px w-20 bg-blue-500"></div>
          </div>
          <div className="w-full aspect-video rounded-lg overflow-hidden border border-white/10 shadow-2xl shadow-blue-500/10 bg-black">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/GzWzo0AXmTg" 
              title="Space Video"
              allowFullScreen 
            />
          </div>
        </div>
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white italic tracking-tighter uppercase mb-2">Үйл ажиллагааны чиглэл</h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          {missions.map((card, index) => (
            <Link 
              key={index} 
              href={card.href}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className={cn(
                "transition-all duration-500 ease-in-out",
                hovered !== null && hovered !== index && "blur-[3px] scale-[0.96] opacity-30"
              )}
            >
              <GlareCard className="relative flex flex-col items-start justify-end rounded-none border border-white/10 overflow-hidden w-[300px] h-[420px]">
                <img 
                  src={card.src} 
                  className="absolute inset-0 w-full h-full object-cover grayscale-[0.3]" 
                  alt={card.title} 
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-2 py-1 text-[8px] bg-blue-600 text-white font-bold tracking-widest uppercase">
                    {card.tag}
                  </span>
                </div>
                <div className="relative z-20 w-full p-8 bg-gradient-to-t from-black via-black/20 to-transparent">
                  <h2 className="text-blue-400 font-black text-2xl tracking-tighter italic uppercase drop-shadow-md">
                    {card.title}
                  </h2>
                  <div className="w-10 h-px bg-blue-500 mt-2"></div>
                </div>
              </GlareCard>
            </Link>
          ))}
        </div>
      </div>
      <div className='relative w-full h-[600px] overflow-hidden group mt-10'>
        <video 
          src='/video/video.mp4' 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-10000 opacity-40" 
        />
        <div className="absolute inset-0 bg-black/40 backdrop-brightness-75"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <div className="w-px h-20 bg-gradient-to-b from-transparent to-blue-500 mb-8"></div>
          <h1 className="text-white text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-6">
            ДЭЛХИЙН <span className="text-blue-500">ТҮНШЛЭЛ</span>
          </h1>
          <p className='text-gray-400 text-xs md:text-sm mt-4 max-w-2xl leading-relaxed tracking-[0.2em] uppercase'>
            Хагас зуун жилийн турш бид НАСА-тай хамтран сансар огторгуйн түүхийг шинээр бичиж байна. 
            Сарны гадаргуугаас Санчир гараг хүртэл бид нэгдмэл зорилготой.
          </p>
          <div className="w-px h-20 bg-gradient-to-t from-transparent to-blue-500 mt-8"></div>
        </div>
      </div>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent mt-20"></div>
    </section>
  );
};

export default Hero;