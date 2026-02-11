"use client";

import React, { useState } from 'react';
import { Search, Rocket, ArrowLeft, MapPin, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setHasSearched(true);
    
    try {
      const res = await fetch(`https://images-api.nasa.gov/search?q=${query}&media_type=image`);
      const data = await res.json();
      
      const formatted = data.collection.items.slice(0, 20).map((item: any) => ({
        id: item.data[0].nasa_id,
        title: item.data[0].title,
        img: item.links?.[0]?.href,
        center: item.data[0].center,
        date: item.data[0].date_created.split('T')[0],
        description: item.data[0].description_508 || item.data[0].description,
      
        keywords: item.data[0].keywords || [] 
      }));
      
      setResults(formatted);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-transparent text-white font-sans selection:bg-blue-600">
      
     
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 rounded-full blur-[120px]"></div>
      </div>

    
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-20">
        
     
        <div className="flex justify-between items-center mb-28 border-b border-white/5 pb-8">
          <Link href="/" className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] italic hover:text-blue-500 transition-all">
            <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" />
            Буцах
          </Link>
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <p className="text-[10px] text-zinc-500 font-black tracking-[0.3em] uppercase italic">
              System: Database v2.0
            </p>
          </div>
        </div>


        <div className="max-w-4xl mx-auto mb-32 text-center">
          <img 
            src="/nasa-1-logo-svg-vector.svg" 
            alt="NASA" 
            className="w-20 h-20 mx-auto mb-8 object-contain brightness-125 drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]"
          />
          <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-12">
            NASA <span className="text-blue-600 font-outline-2">DATABASE</span>
          </h1>

          <form onSubmit={handleSearch} className="relative group">
            <input 
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Огторгуйн өгөгдөл хайх..."
              className="w-full bg-white/5 border-2 border-white/10 rounded-none py-8 px-10 text-2xl md:text-4xl font-black italic uppercase tracking-tighter outline-none focus:border-blue-600 focus:bg-white/[0.08] transition-all placeholder:text-zinc-800 shadow-2xl"
            />
            <button 
              type="submit"
              className="absolute right-4 top-1/2 -translate-y-1/2 p-5 bg-blue-600 text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              <Search size={24} />
            </button>
          </form>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {loading ? (
            <div className="col-span-full py-40 text-center">
              <div className="w-12 h-12 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
              <p className="text-[10px] font-black italic uppercase tracking-[0.5em] text-blue-500">Connecting to satellites...</p>
            </div>
          ) : results.length > 0 ? (
            results.map((item) => (
              <div key={item.id} className="group flex flex-col bg-zinc-900/10 border border-white/5 hover:border-blue-600/40 transition-all duration-500 overflow-hidden">
                <div className="relative aspect-video overflow-hidden">
                  <img src={item.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" alt={item.title} />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-[8px] font-black uppercase tracking-widest px-2 py-1 italic shadow-lg">
                      {item.center}
                    </span>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-zinc-600 mb-4">
                    <MapPin size={10} className="text-blue-500" />
                    <span className="text-[9px] font-black uppercase tracking-widest italic">{item.id}</span>
                  </div>
                  
                  <h3 className="text-xl font-black italic uppercase tracking-tighter leading-tight mb-4 group-hover:text-blue-400 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-zinc-500 text-[11px] leading-relaxed mb-8 line-clamp-3 font-medium italic opacity-70">
                    {item.description}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-2 pt-6 border-t border-white/5">
             
                    {item.keywords?.slice(0, 3).map((kw: string, i: number) => (
                      <span key={i} className="text-[8px] text-zinc-500 bg-white/5 px-2 py-1 uppercase font-black tracking-tighter hover:text-white hover:bg-blue-600/20 transition-all cursor-default">
                        #{kw}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))
          ) : hasSearched && (
            <div className="col-span-full py-40 text-center">
               <Rocket className="mx-auto mb-6 text-zinc-800" size={48} />
               <p className="text-xs text-zinc-600 font-bold uppercase tracking-[0.4em]">Sector Empty. Try another coordinate.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}