    import React from "react";

    const Footer = () => { 
        return (
            <footer className="w-full py-10 bg-gray-900 text-gray-400 mt-auto border-t border-gray-800">
                <div className="container mx-auto px-6">
                    <div>
                        <div className="bg-gray-900 w-370 h-35">
                                <img src="nasa-1-logo-svg-vector-1.svg" alt="nasaerxec" className="w-32 h-32 object-contain" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            <div>
                            <h3 className="text-xl font-bold text-white mb-4">National Aeronautics and Space Administration</h3>
                            <p className="text-sm leading-relaxed">
                                NASA explores the unknown in air and space, innovates for the benefit of humanity, and inspires the world through discovery.
                            </p>
                            <p className="mt-5 text-white font-bold">
                                About NASA's Mission
                            </p>
                            <h3 className="mt-5 text-white font-bold">
                                Join Us 
                            </h3>
                        </div>
                        <div id ="contact">
                            <h3 className="text-xl font-bold text-white mb-4">Stuffs</h3>
                            <p className="mt-3 text-white font-bold">Home</p>
                            <p className="mt-3 text-white font-bold">News & Events</p>
                            <p className="mt-3 text-white font-bold">Multimedia</p>
                            <p className="mt-3 text-white font-bold">NASA+</p>
                            <p className="mt-3 text-white font-bold">About NASA's Mission</p>
                        </div>
                        <div id ="contact">
                            <h3 className="text-xl font-bold text-white mb-4">Our solar Stuffs</h3>
                            <p className="mt-3 text-white font-bold">Humans in Space</p>
                            <p className="mt-3 text-white font-bold">Earth</p>
                            <p className="mt-3 text-white font-bold">The Solar System</p>
                            <p className="mt-3 text-white font-bold">The Universe</p>
                            <p className="mt-3 text-white font-bold">Science</p>
                        </div>
                        <div id ="contact">
                            <h3 className="text-xl font-bold text-white mb-4">Stuffs</h3>
                            <p className="mt-3 text-white font-bold">Aeronautics</p>
                            <p className="mt-3 text-white font-bold">Technology</p>
                            <p className="mt-3 text-white font-bold">Learning Resources</p>
                            <p className="mt-3 text-white font-bold">About NASA</p>
                            <p className="mt-3 text-white font-bold">NASA en Español</p>
                        </div>
                        
                        </div>
                    </div>

                    <hr className="my-8 border-white" />

                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-xs">
                            ©{new Date().getFullYear()} tsal, toroo, orchlon. All rights reserved.
                        </p>
                        <div className="flex gap-6 text-xs uppercase tracking-widest">
                            <span className="hover:text-white cursor-pointer">Twitter</span>
                            <span className="hover:text-white cursor-pointer">Discord</span>
                            <span className="hover:text-white cursor-pointer">Github</span>
                        </div>
                    </div>
                </div>
            </footer>
        );
    };

    export default Footer;
    