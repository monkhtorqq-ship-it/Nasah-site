"use client";

import React from 'react';
import { ChevronDown } from 'lucide-react';


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
        <div className="inline-block px-4 py-1 border border-blue-500/30 rounded-full mb-6 bg-blue-500/5 backdrop-blur-sm">
          <span className="text-[10px] text-blue-400 font-black tracking-[0.4em] uppercase italic">
            Outer Space Explorations
          </span>
        </div>
        
        <h1 className="text-6xl md:text-[120px] font-black text-white leading-tight tracking-tighter mb-4 uppercase italic">
          DEEP <span className="text-transparent bg-clip-text bg-linear-to-t from-blue-700 via-blue-400 to-white">SPACE</span>
        </h1>
        
        <p className="max-w-xl mx-auto text-gray-400 text-xs md:text-sm leading-relaxed mb-10 tracking-widest uppercase opacity-80">
          Хязгааргүй огторгуйн нууцыг хамтдаа нээн илрүүлж, 
          хүн төрөлхтний дараагийн алхмыг эндээс эхлүүлцгээе.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

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
            <div className="h-px w-20 bg-blue-500"></div>
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
      <div className="flex gap-8 justify-center bg-white pt-20 pb-20">
        <div>
  <div className="relative group overflow-hidden rounded-lg">
    <a href="/missions">
      <img 
      src='/mission.png' 
        className="w-75 h-115 object-cover object-top" 
        alt="infrometion about sun" 
      />
        <div className="absolute inset-0 flex items-end justify-center bg-black/30">
        <h2 className="text-blue-500 font-bold text-xl drop-shadow-md">
          Missions
        </h2>
      </div>
      </a>
    </div>
  </div>
  <div>
  <div className="relative group overflow-hidden rounded-lg">
    <a href="/missions/technology">
      <img 
      src='/sience.jpg' 
        className="w-75 h-115 object-cover object-top" 
        alt="infrometion about sun" 
      />
      <div className="absolute inset-0 flex items-end justify-center bg-black/30">
        <h2 className="text-blue-500 font-bold text-xl drop-shadow-md">
          Technology
        </h2>
      </div>
    </a>
    </div>
  </div>
  <div>
  <div className="relative group overflow-hidden rounded-lg">
    <a href="/missions/science">
      <img 
      src='/technolegy.jpg' 
        className="w-75 h-115 object-cover object-top" 
        alt="infrometion about sun" 
      />
      <div className="absolute inset-0 flex items-end justify-center bg-black/30">
        <h2 className="text-blue-500 font-bold text-xl drop-shadow-md">
          Sience
        </h2>
      </div>
    </a>
    </div>
  </div>
  <div>
  <div className="relative group overflow-hidden rounded-lg">
    <a href="/missions/about">
      <img 
      src='/sun.webp' 
        className="w-75 h-115 object-cover object-top" 
        alt="infrometion about sun" 
      />
      <div className="absolute inset-0 flex items-end justify-center bg-black/30">
        <h2 className="text-blue-500 font-bold text-xl drop-shadow-md">
          About
        </h2> 
      </div>
    </a>
    </div>
  </div>
  
        {/* <div>
          <img className='w-75 h-115 object-cover object-top' src="/sun.webp" alt="sun" />
        </div>
        <div>
          <img className='w-75 h-115 object-cover object-top' src="/mission.png" alt="mission" />
        </div>
        <div>
          <img className='w-75 h-115 object-cover object-top' src="/sience.jpg" alt="sience" />
        </div>
        <div>
          <img className='w-75 h-115 object-cover object-top' src="/technolegy.jpg" alt="techno" />
        </div> */}
      </div>
      
      <div className='relative w-full h-96 overflow-hidden mt-20 mb-20'>
        <video 
          src='video/video.mp4' 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
          />
            <div className="absolute inset-0 flex flex-col items-start justify-center text-start ml-66">
              <h1 className="text-blue-500 text-4xl font-bold drop-shadow-lg">
              NasaErxec Success
              </h1>
              <p className='text-blue-500 text-lg mt-4 max-w-md drop-shadow-md' >
                in NasaErxec, We been partnership with Nasa for like 50 years , We been working on and studying our way around world for like 50 years
              </p>
          </div>
      </div>
      <div className="sticky bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white to-transparent"></div>
    </section>
  );
};

export default Hero;


//https://www.youtube.com/watch?v=ydkQlJhodio not working link only for youtube video page
//remove the watch?v= part and replace it with embed so the video is visible to directly
//https://www.youtube.com/embed/GzWzo0AXmTg correct link for embeded video but for this it's works in our site

///Users/PADA-1-5-12/Desktop/Nasah-site/public/solar.jpg
///Users/PADA-1-5-12/Desktop/Nasah-site/public/video/video.mp4
//video/video.mp4
