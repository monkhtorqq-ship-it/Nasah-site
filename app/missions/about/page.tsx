"use client";
import React from 'react';
import { cn } from "@/lib/utils";
import { Rocket, Shield, Activity, Globe, ArrowLeft } from 'lucide-react'; // Fixed Import
import Link from "next/link";

const missions = [
    { id: "01", title: "Орбит Контакт", status: "Амжилттай", date: "2024", desc: "Анхны хиймэл дагуул хөөргөлт болон холбооны систем тогтоох." },
    { id: "02", title: "Артемис Протокол", status: "Идэвхтэй", date: "2025", desc: "Сарны тойрог замд бааз байгуулах үндсэн үе шат." },
    { id: "03", title: "Марс Колони", status: "Төлөвлөгөөт", date: "2027", desc: "Улаан нүдэн гараг руу хийх анхны хүн төрөлхтний нислэг." },
    { id: "04", title: "Сарын Хөрөнгийн Систем", status: "Төлөвлөгөөт", date: "2028", desc: "Сарын газрын түүхийг хадгалах системийг байгуулах." },
    { id: "05", title: "Марс Хөрөнгийн Систем", status: "Төлөвлөгөөт", date: "2029", desc: "Марсын газрын түүхийг хадгалах системийг байгуулах." },
    { id: "06", title: "Марс Хөрөнгийн Систем", status: "Төлөвлөгөөт", date: "2030", desc: "Марсын газрын түүхийг хадгалах системийг байгуулах." },
    { id: "07", title: "Марс Хөрөнгийн Систем", status: "Төлөвлөгөөт", date: "2031", desc: "Марсын газрын түүхийг хадгалах системийг байгуулах." },
];

export default function MissionsPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 bg-transparent text-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
                    <div>
                        <Link
                            href="/"
                            className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] italic mb-10 text-blue-500 transition-all"
                        >
                            <ArrowLeft
                                size={16}
                                className="group-hover:-translate-x-2 transition-transform"
                            />
                            Return to Base
                        </Link>
                        <h1 className="text-7xl md:text-[100px] font-black italic uppercase tracking-tighter leading-[0.85]">
                            ENGINEERING <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-400">
                                BLUEPRINTS
                            </span>
                        </h1>
                    </div>
                </div>

                {/* 1. TELEMETRY */}
                <div className="mb-20">
                    <h1 className="text-5xl font-black italic uppercase tracking-tighter mb-12">
                        ДААЛГАВРЫН <span className="text-blue-500">ТӨЛӨВЛӨГӨӨ</span>
                    </h1>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { label: "Active Nodes", value: "1,240", icon: <Globe className="w-4 h-4" /> },
                            { label: "Signal Strength", value: "98%", icon: <Activity className="w-4 h-4" /> },
                            { label: "Safety Index", value: "A-01", icon: <Shield className="w-4 h-4" /> },
                            { label: "Next Launch", value: "14 Days", icon: <Rocket className="w-4 h-4" /> },
                        ].map((stat, i) => (
                            <div key={i} className="bg-zinc-900/50 border border-white/10 p-5 rounded-2xl backdrop-blur-md">
                                <div className="flex items-center gap-2 text-zinc-500 mb-2 uppercase text-[10px] tracking-widest">
                                    {stat.icon} {stat.label}
                                </div>
                                <p className="text-2xl font-black italic text-blue-400">{stat.value}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 2. TIMELINE */}
                <div className="max-w-4xl mx-auto relative">
                    <div className="absolute left-1/2 -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500/50 via-blue-500 to-transparent hidden md:block" />
                    
                    <div className="space-y-12">
                        {missions.map((m, i) => (
                            <div key={i} className="relative flex flex-col md:flex-row items-center gap-8 group">
                                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,1)] z-10" />
                                
                                <div className={cn(
                                    "w-full md:w-1/2 p-8 bg-zinc-900/40 border border-white/10 rounded-3xl backdrop-blur-xl transition-all hover:border-blue-500/50",
                                    i % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                                )}>
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-xs font-mono text-blue-400 tracking-tighter">{m.date} PHASE</span>
                                        <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 text-[10px] font-bold uppercase">{m.status}</span>
                                    </div>
                                    <h3 className="text-2xl font-black italic uppercase mb-2">{m.title}</h3>
                                    <p className="text-zinc-500 text-sm leading-relaxed">{m.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}