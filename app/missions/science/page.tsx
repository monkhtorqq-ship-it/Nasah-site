    "use client";

    import React, { useState, useEffect } from "react";
    import {
    ArrowLeft,
    Beaker,
    Atom,
    Orbit,
    Sparkles,
    AlertTriangle,
    } from "lucide-react";
    import Link from "next/link";

    export default function SciencePage() {
    const [apod, setApod] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const NASA_KEY = "dgMgW0D1KBDAyTqyBQMpPnUzAUgk15Wm7S4vqQp1";

        fetch(`https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`)
        .then((res) => {
            if (!res.ok) {
            if (res.status === 429)
                throw new Error("Rate Limit Exceeded. Try again later.");
            throw new Error("Deep Space Connection Failed.");
            }
            return res.json();
        })
        .then((data) => {
            setApod(data);
        })
        .catch((err) => {
            console.error(err);
            setError(err.message);
        })
        .finally(() => setLoading(false));
    }, []);

    const scienceSectors = [
        {
        title: "Astrophysics",
        icon: <Atom size={20} />,
        desc: "Орчлон ертөнцийн үүсэл, хар нүх, цаг хугацааны судалгаа.",
        },
        {
        title: "Exoplanets",
        icon: <Orbit size={20} />,
        desc: "Нарны аймгаас гадна орших амьдрал байж болох гарагуудын эрэл.",
        },
        {
        title: "Heliophysics",
        icon: <Sparkles size={20} />,
        desc: "Нарны идэвхжил болон түүний дэлхийд үзүүлэх нөлөө.",
        },
    ];

    return (
        <div className="min-h-screen bg-transparent text-white font-sans overflow-x-hidden selection:bg-purple-500 selection:text-white">
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-20">
            {/* HEADER */}
            <div className="mb-20">
            <Link
                href="/"
                className="group inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] italic mb-10 text-purple-400"
            >
                <ArrowLeft
                size={16}
                className="group-hover:-translate-x-2 transition-transform"
                />
                Terminal Main
            </Link>

            <h1 className="text-7xl md:text-[120px] font-black italic uppercase tracking-tighter leading-[0.85]">
                SCIENCE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-400 to-cyan-400">
                RESEARCH
                </span>
            </h1>
            </div>

            {/* APOD SECTION */}
            <section className="mb-32">
            <div className="flex items-center gap-4 mb-8 border-l-2 border-purple-500 pl-4">
                <Beaker className="text-purple-500" size={24} />
                <h2 className="text-xl font-black italic uppercase tracking-widest">
                Өдрийн онцлох судалгаа
                </h2>
            </div>

            {loading ? (
                <div className="h-[400px] flex items-center justify-center">
                Loading...
                </div>
            ) : error ? (
                <div className="h-[400px] flex flex-col items-center justify-center gap-4 text-center">
                <AlertTriangle className="text-red-500" size={48} />
                <p className="text-red-400 font-mono">{error}</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 border border-white/5">
                <div className="relative overflow-hidden">
                    {apod?.media_type === "video" ? (
                    <iframe
                        src={apod.url}
                        className="w-full h-full min-h-[400px]"
                        title="NASA Video"
                    />
                    ) : (
                    <img
                        src={apod?.url}
                        alt={apod?.title}
                        className="w-full h-full object-cover"
                    />
                    )}
                </div>

                <div className="p-12 flex flex-col justify-center space-y-6">
                    <h3 className="text-3xl font-black italic uppercase">
                    {apod?.title}
                    </h3>

                    <span className="text-xs font-mono text-zinc-400">
                    Date: {apod?.date}
                    </span>

                    <p className="text-zinc-400 text-sm leading-relaxed">
                    {apod?.explanation}
                    </p>
                </div>
                </div>
            )}
            </section>

            {/* SECTORS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {scienceSectors.map((sector, i) => (
                <div
                key={i}
                className="p-8 bg-white/[0.02] border border-white/5"
                >
                <div className="mb-4 text-purple-500">{sector.icon}</div>
                <h4 className="text-xl font-black italic mb-2">
                    {sector.title}
                </h4>
                <p className="text-xs text-zinc-400">{sector.desc}</p>
                </div>
            ))}
            </div>
        </div>
        </div>
    );
    }
