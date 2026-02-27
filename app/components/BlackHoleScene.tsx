"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BlackHoleUniverse() {
  const images = [
    "/enigma1.jpg",
    "/enigma2.jpg",
    "/enigma3.jpg",
    "/enigma4.jpg",
    "/enigma5.jpg",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 6000); // 6 секунд
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full h-full bg-black overflow-hidden flex items-center justify-center">
      
  
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={index} 
            src={images[index]}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.6, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 2.5, ease: "easeInOut" }} 
            className="w-full h-full object-cover grayscale-[0.2] contrast-125"
            alt="Black Hole Scene"
          />
        </AnimatePresence>
        
  
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/90 z-10" />
      </div>

      <div className="relative z-20 container mx-auto px-10">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <span className="text-orange-600 font-mono text-[10px] tracking-[0.8em] uppercase block mb-6">
            Singularity_Visualized // Sequence {index + 1}
          </span>
          
          <h1 className="text-6xl md:text-[100px] font-black text-white italic tracking-tighter leading-none mb-10">
            ENIGMA <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-700 to-white">
              THE VOID
            </span>
          </h1>

          <div className="h-[1px] w-24 bg-orange-600 mb-8" />
          
          <p className="text-gray-300 text-xl md:text-3xl font-light leading-relaxed italic max-w-3xl">
            "Орон зай, цаг хугацааны хязгаар энд дуусч, <br/>
            <span className="text-white font-bold not-italic border-l-4 border-orange-600 pl-4">
                бүх зүйл нэг цэгт төвлөрнө.
            </span>"
          </p>
        </motion.div>
      </div>

      <div className="absolute inset-0 pointer-events-none border-[1px] border-white/5 m-8 z-30" />
    </div>
  );
}