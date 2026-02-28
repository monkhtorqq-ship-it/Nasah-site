"use client";
import React from "react";
import { Github, Code2, Sparkles, Rocket, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";

const team = [
  {
    name: "Orchlon",
    role: "Founder / Chief Architect",
    github: "orchlonely-hash",
    image: "https://github.com/orchlonely-hash.png",
    bio: "NASAERXEC-ийн дижитал суурь болон стратегийг тодорхойлогч. Бүтээгдэхүүн бүрийн чанар, стандартыг дэлхийн түвшинд хүргэхэд анхаардаг.",
    color: "from-blue-600 to-cyan-500"
  },
  {
    name: "Monkhtor",
    role: "System Engineer / Ops",
    github: "monkhtorqq-ship-it",
    image: "https://github.com/monkhtorqq-ship-it.png",
    bio: "Системийн тогтвортой ажиллагаа болон логистикийг хариуцагч. Хэрэглэгчдэд хүрэх захиалга бүрийн хурд, аюулгүй байдлыг ханган ажилладаг.",
    color: "from-indigo-600 to-purple-500"
  },
  {
    name: "Tsalgiun",
    role: "Creative Director / UI-UX",
    github: "tsalgiun",
    image: "https://github.com/tsalgiun.png",
    bio: "Брэндийн өнгө төрх болон бүтээлч шийдлүүдийг хариуцагч. Хэрэглэгч бүрт NASAERXEC-ийн онцлог, мэдрэмжийг өгөхөд анхаардаг.",
    color: "from-blue-400 to-blue-700"
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-transparent text-white pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Brand Mission Section */}
        <div className="text-center mb-24 animate-in fade-in slide-in-from-top-6 duration-1000">
          <h1 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter mb-8 leading-none">
            NASAE<span className="text-blue-600">RXEC</span>
          </h1>
          <div className="h-1 w-24 bg-blue-600 mx-auto mb-10"></div>
          <p className="text-gray-400 max-w-3xl mx-auto text-xl leading-relaxed italic font-light">
            "Бид зөвхөн бүтээгдэхүүн бус, орчин үеийн амьдралын хэв маяг болон технологийн нэгдлийг санал болгож байна. NASAERXEC бол чанар, хурд, итгэлцлийн бэлгэдэл юм."
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {team.map((member, index) => (
            <div 
              key={index}
              className="group relative bg-zinc-900/30 border border-white/5 p-10 rounded-[40px] hover:border-blue-600/40 transition-all duration-500 hover:-translate-y-3 overflow-hidden backdrop-blur-xl"
            >
              <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${member.color} opacity-5 blur-[90px] group-hover:opacity-20 transition-opacity`}></div>

              <div className="relative z-10">
                <div className="w-20 h-20 rounded-2xl overflow-hidden mb-8 border border-white/10 filter grayscale group-hover:grayscale-0 transition-all duration-500">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>

                <h2 className="text-2xl font-black italic uppercase tracking-tighter mb-2">
                  {member.name}
                </h2>
                <p className="text-blue-500 text-[10px] font-black uppercase tracking-[0.3em] mb-6">
                  {member.role}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed mb-10 min-h-[80px]">
                  {member.bio}
                </p>

                <Link 
                  href={`https://github.com/${member.github}`}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-white transition-colors"
                >
                  <Github size={14} /> GitHub Profile <ChevronRight size={12} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Brand Values */}
        <div className="mt-40 grid grid-cols-1 md:grid-cols-3 gap-16 border-t border-white/5 pt-24">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-blue-600/10 rounded-full flex items-center justify-center text-blue-500 mb-6">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-lg font-black uppercase italic mb-3 tracking-widest text-white">Quality First</h3>
            <p className="text-gray-500 text-xs uppercase tracking-widest leading-loose">Бүтээгдэхүүн бүр маань чанарын нарийн хяналтыг давдаг.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-blue-600/10 rounded-full flex items-center justify-center text-blue-500 mb-6">
              <Zap size={32} />
            </div>
            <h3 className="text-lg font-black uppercase italic mb-3 tracking-widest text-white">Fast Response</h3>
            <p className="text-gray-500 text-xs uppercase tracking-widest leading-loose">Хамгийн хурдан түгээлт, хамгийн хурдан хариу үйлдэл.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-blue-600/10 rounded-full flex items-center justify-center text-blue-500 mb-6">
              <Rocket size={32} />
            </div>
            <h3 className="text-lg font-black uppercase italic mb-3 tracking-widest text-white">Innovation</h3>
            <p className="text-gray-500 text-xs uppercase tracking-widest leading-loose">Бид үргэлж шинэ шийдэл, шинэ бүтээл рүү тэмүүлдэг.</p>
          </div>
        </div>

      </div>
    </div>
  );
}

// Lucide-react-аас ChevronRight нэмэх хэрэгтэй
import { ChevronRight } from "lucide-react";