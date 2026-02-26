"use client";
import React from 'react';
import { cn } from "@/lib/utils";
import { Rocket, Shield, Activity, Globe, ArrowLeft } from 'lucide-react'; 
import Link from "next/link";

const missions = [
    { id: "01", title: "Орбит Контакт", status: "Амжилттай", date: "2024", desc: "Гүн огторгуйн холбооны сүлжээг тогтоох анхны хиймэл дагуул хөөргөлт.", img: "/solar.jpg" },
    { id: "02", title: "Артемис Протокол", status: "Идэвхтэй", date: "2025", desc: "Сарны тойрог замд байрлах 'Gateway' баазын үндсэн модулиудыг угсрах ажиллагаа.", img: "/mission.png" },
    { id: "03", title: "Марс Колони I", status: "Төлөвлөгөөт", date: "2027", desc: "Улаан нүдэн гараг дээр автоматжуулсан суурь бааз бэлтгэх роботжуулсан даалгавар.", img: "" },
    { id: "04", title: "Сарны Геологи", status: "Төлөвлөгөөт", date: "2028", desc: "Сарны өмнөд туйлын мөсөн нөөцийг олборлох, ус гарган авах туршилт." , img: ""},
    { id: "05", title: "Deep Space Relay", status: "Төлөвлөгөөт", date: "2029", desc: "Гадаад нарны аймгийн хөлгүүдтэй холбогдох лазер холбооны станц." , img: ""},
    { id: "06", title: "Био-Сфер Протокол", status: "Төлөвлөгөөт", date: "2030", desc: "Сансрын хөлөг дотор өөрөө нөхөн төлжих хүчилтөрөгчийн систем суурилуулах.", img: "" },
    { id: "07", title: "Астероид Олборлолт", status: "Төлөвлөгөөт", date: "2031", desc: "Ойр орчмын астероидоос газрын ховор элемент олборлох туршилтын төсөл.", img: "" },
    { id: "08", title: "Ионын Хөдөлгүүр", status: "Төлөвлөгөөт", date: "2032", desc: "Хэт холын зайд аялах чадвартай дараагийн үеийн цөмийн ионын хөдөлгүүр.", img: "" },
    { id: "09", title: "Марс Колони II", status: "Төлөвлөгөөт", date: "2033", desc: "Марс гараг дээрх анхны хүн төрөлхтний байнгын оршин суух хотхоны барилга.", img: "" },
    { id: "10", title: "Сансрын Лифт", status: "Төлөвлөгөөт", date: "2034", desc: "Нано-нүүрстөрөгчийн технологи ашиглан тойрог замд ачаа хүргэх туршилт.", img: "" },
    { id: "11", title: "Титан Судалгаа", status: "Төлөвлөгөөт", date: "2035", desc: "Санчир гарагийн дагуул Титан дээрх шингэн метан нуурыг судлах шумбагч.", img: "" },
    { id: "12", title: "Interstellar Alpha", status: "Төлөвлөгөөт", date: "2036", desc: "Нарны аймгаас гарч хамгийн ойрын одон систем рүү илгээх автомат тандагч.", img: "" },
];
export default function MissionsPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 bg-black text-white selection:bg-blue-500/30">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* 1. TOP NAVIGATION & TITLE */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
                    <div className="w-full">
                        <Link
                            href="/"
                            className="group inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] italic mb-10 text-blue-500 hover:text-white transition-all"
                        >
                            <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" />
                            Return to Base
                        </Link>
                        <h1 className="text-6xl md:text-[100px] font-black italic uppercase tracking-tighter leading-[0.85]">
                            ENGINEERING <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-400">
                                BLUEPRINTS
                            </span>
                        </h1>
                    </div>
                </div>

                {/* 2. TELEMETRY DASHBOARD */}
                <div className="mb-32">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { label: "Active Nodes", value: "1,240", icon: <Globe className="w-3 h-3" /> },
                            { label: "Signal Strength", value: "98%", icon: <Activity className="w-3 h-3" /> },
                            { label: "Safety Index", value: "A-01", icon: <Shield className="w-3 h-3" /> },
                            { label: "Next Launch", value: "14 Days", icon: <Rocket className="w-3 h-3" /> },
                        ].map((stat, i) => (
                            <div key={i} className="bg-zinc-900/30 border border-white/5 p-6 rounded-2xl backdrop-blur-md hover:border-blue-500/30 transition-colors group">
                                <div className="flex items-center gap-2 text-zinc-500 mb-2 uppercase text-[9px] tracking-[0.2em] font-bold">
                                    <span className="text-blue-500 group-hover:animate-pulse">{stat.icon}</span> {stat.label}
                                </div>
                                <p className="text-2xl font-black italic text-zinc-100">{stat.value}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 3. MISSION TIMELINE */}
                <div className="max-w-5xl mx-auto relative">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 -translate-x-px h-full w-px bg-linear-to-b from-blue-600/50 via-zinc-800 to-transparent hidden md:block" />
                    
                    <div className="space-y-24">
                        {missions.map((m, i) => (
                            <div key={i} className="relative flex flex-col md:flex-row items-center gap-8 group">
                                {/* Center Glowing Dot */}
                                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-black border border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.6)] z-10 group-hover:scale-150 transition-transform duration-500" />
                                
                                <div className={cn(
                                    "w-full md:w-[45%] p-1 bg-linear-to-br from-white/10 to-transparent rounded-[2rem] transition-all duration-500",
                                    i % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                                )}>
                                    <div className="bg-zinc-950/90 p-8 rounded-[1.9rem] backdrop-blur-2xl relative overflow-hidden group-hover:bg-zinc-900/90 transition-colors h-full">
                                        
                                        {/* Dossier Image Background Decor */}
                                        {m.img && (
                                            <img 
                                                src={m.img} 
                                                className="absolute -top-4 -right-4 w-32 h-32 object-cover opacity-10 grayscale group-hover:opacity-20 group-hover:scale-110 transition-all duration-700" 
                                                alt=""
                                            />
                                        )}

                                        <div className="relative z-10">
                                            <div className="flex justify-between items-center mb-6">
                                                <span className="text-[10px] font-mono text-blue-500 tracking-[0.3em] font-bold">PHASE_{m.id}</span>
                                                <span className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-zinc-400 text-[8px] font-black uppercase tracking-widest">
                                                    {m.status}
                                                </span>
                                            </div>

                                            <div className="flex flex-col sm:flex-row gap-6 items-start">
                                                {m.img && (
                                                    <div className="shrink-0 relative">
                                                        <img 
                                                            src={m.img} 
                                                            alt={m.title} 
                                                            className="w-20 h-20 rounded-2xl object-cover border border-white/10 shadow-2xl group-hover:border-blue-500/50 transition-colors" 
                                                        />
                                                        <div className="absolute inset-0 rounded-2xl bg-blue-500/10 mix-blend-overlay" />
                                                    </div>
                                                )}
                                                <div>
                                                    <h3 className="text-2xl font-black italic uppercase mb-3 tracking-tighter group-hover:text-blue-400 transition-colors">
                                                        {m.title}
                                                    </h3>
                                                    <p className="text-zinc-500 text-xs leading-loose uppercase tracking-wider font-medium">
                                                        {m.desc}
                                                    </p>
                                                    <div className="mt-4 text-[9px] font-mono text-zinc-600">
                                                        EST_COMPLETION: {m.date}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}