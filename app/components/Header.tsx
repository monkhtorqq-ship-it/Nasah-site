    "use client";


    import React, { useState, useEffect } from "react";
    import { Rocket, Search, Menu, X } from "lucide-react";

    const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
        className={`fixed top-0 w-full z-100 transition-all duration-500 ${
            scrolled
            ? "bg-black/60 backdrop-blur-xl border-b border-white/10 py-4"
            : "bg-transparent py-6"
        }`}
        >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
            <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
                <Rocket className="w-7 h-7 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-blue-500 blur-xl opacity-20"></div>
            </div>
            <div className="flex flex-col leading-none">
                <a
                href="/"
                className="text-xl font-black tracking-tighter text-white uppercase italic"
                >
                NASA<span className="text-blue-500">ERXEC</span>
                </a>
            </div>
            </div>

            <div className="hidden md:flex items-center gap-10">
            <div className="gap-8 flex :hidden md:flex items-center cursor-pointer hover:text-white text-gray-400 transition-colors ">
                <a href="/missions"></a>
            </div>
            <div className="gap-8 flex items-center cursor-pointer hover:text-white text-gray-400 transition-colors">
                <a href="/missions/technology">Technology</a>
            </div>

            <div className="gap-8 flex items-center cursor-pointer hover:text-white text-gray-400 transition-colors">
                <a href="/missions/science">Science</a>
            </div>

            <div className="gap-8 flex items-center cursor-pointer hover:text-white text-gray-400 transition-colors">
                <a href="/missions/search">Search planet</a>
            </div>
            </div>

            <div className="hidden md:flex items-center gap-6">
            <Search className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white transition-colors" />
            <button className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-[10px] font-black tracking-widest uppercase transition-all rounded-sm">
                Launch Menu
            </button>
            </div>

            <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>

        <div
            className={`absolute top-full left-0 w-full bg-black/95 backdrop-blur-2xl border-b border-blue-500/20 md:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
            }`}
        >
            <div className="flex flex-col p-8 gap-6">
            {["Missions", "Technology", "Science", "About"].map((item) => (
                <a
                key={item}
                href="#"
                className="text-xs font-bold tracking-widest text-gray-300 uppercase hover:text-blue-500"
                >
                {item}
                </a>
            ))}
            </div>
        </div>
        </nav>
    );
    };

    export default Header;

    ///Users/PADA-1-5-12/Desktop/Nasah-site/app/pages/missions/about/about.tsx
    ///Users/PADA-1-5-12/Desktop/Nasah-site/app/pages/missions
    ///Users/PADA-1-5-12/Desktop/Nasah-site/app/pages/missions/about/page.tsx
    ///Users/PADA-1-5-12/Desktop/Nasah-site/app/pages/missions/technology/page.tsx
    ///Users/PADA-1-5-12/Desktop/Nasah-site/app/components/doshoo.tsx
    ///Users/PADA-1-5-12/Desktop/Nasah-site/app/components/Hero.tsx
    ///Users/PADA-1-5-12/Desktop/Nasah-site/app/globals.css
