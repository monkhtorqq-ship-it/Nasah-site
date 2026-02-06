import React from "react";

const Footer = () => { 
    return (
        // mt-20 эсвэл mt-32 нэмж үндсэн контентоосоо холдууллаа
        <footer className="w-full pt-16 pb-10 bg-black text-zinc-500 mt-32 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-12 mb-16">
                    
                    {/* Зүүн тал: Лого болон Танилцуулга */}
                    <div className="max-w-sm">
                        <div className="mb-6">
                            <a href="/">
                                <img 
                                    src="/nasa-1-logo-svg-vector.svg" 
                                    alt="nasa-logo" 
                                    className="w-16 h-16 object-contain brightness-90 hover:brightness-110 transition-all" 
                                />
                            </a>
                        </div>
                        <h3 className="text-sm font-bold text-zinc-100 mb-4 leading-tight">
                            National Aeronautics and Space Administration
                        </h3>
                        <p className="text-xs leading-relaxed text-zinc-500">
                            NASA explores the unknown in air and space, innovates for the benefit of humanity, and inspires the world through discovery.
                        </p>
                    </div>

                    {/* Баруун тал: Link-үүд (Grid ашиглан шахсан) */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 flex-1">
                        <div>
                            <h4 className="text-[10px] uppercase tracking-[2px] font-bold text-white mb-5 opacity-50">Discovery</h4>
                            <ul className="space-y-3 text-xs font-medium">
                                <li className="hover:text-white cursor-pointer transition-colors">Home</li>
                                <li className="hover:text-white cursor-pointer transition-colors">News & Events</li>
                                <li className="hover:text-white cursor-pointer transition-colors">Multimedia</li>
                                <li className="hover:text-white cursor-pointer transition-colors">NASA+</li>
                            </ul>
                        </div>
                        
                        <div>
                            <h4 className="text-[10px] uppercase tracking-[2px] font-bold text-white mb-5 opacity-50">Exploration</h4>
                            <ul className="space-y-3 text-xs font-medium">
                                <li className="hover:text-white cursor-pointer transition-colors">Humans in Space</li>
                                <li className="hover:text-white cursor-pointer transition-colors">The Solar System</li>
                                <li className="hover:text-white cursor-pointer transition-colors">The Universe</li>
                                <li className="hover:text-white cursor-pointer transition-colors">Science</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-[10px] uppercase tracking-[2px] font-bold text-white mb-5 opacity-50">Resources</h4>
                            <ul className="space-y-3 text-xs font-medium">
                                <li className="hover:text-white cursor-pointer transition-colors">Aeronautics</li>
                                <li className="hover:text-white cursor-pointer transition-colors">Technology</li>
                                <li className="hover:text-white cursor-pointer transition-colors">Learning Resources</li>
                                <li className="hover:text-white cursor-pointer transition-colors">NASA en Español</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Доод хэсэг: Line болон Copyright */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[10px] font-mono tracking-wider opacity-40">
                        ©{new Date().getFullYear()} TSAL, TOROO, ORCHLON. ALL RIGHTS RESERVED.
                    </p>
                    <div className="flex gap-8 text-[10px] uppercase tracking-[3px]">
                        <a href="#" className="hover:text-blue-500 transition-colors">Twitter</a>
                        <a href="#" className="hover:text-indigo-500 transition-colors">Discord</a>
                        <a href="#" className="hover:text-white transition-colors">Github</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;