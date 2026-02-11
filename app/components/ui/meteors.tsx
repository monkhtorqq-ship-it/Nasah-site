    "use client";
    import { cn } from "@/lib/utils";
    import { motion } from "motion/react";
    import React, { useEffect, useState } from "react";

    export const Meteors = ({
    number = 20,
    className,
    }: {
    number?: number;    
    className?: string;
    }) => {
    // 1. Add state to hold the styles after the component mounts
    const [meteorStyles, setMeteorStyles] = useState<any[]>([]);

    useEffect(() => {
        // 2. Generate the random values ONLY on the client side
        const styles = new Array(number).fill(true).map((_, idx) => ({
        top: "-40px",
        // Use % instead of px to cover the WHOLE screen width
        left: Math.floor(Math.random() * 100) + "%", 
        animationDelay: Math.random() * 5 + "s",
        animationDuration: Math.floor(Math.random() * 5 + 5) + "s",
        }));
        setMeteorStyles(styles);
    }, [number]);

    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 pointer-events-none"
        >
        {meteorStyles.map((style, idx) => (
            <span
            key={"meteor" + idx}
            className={cn(
                "animate-meteor-effect absolute h-0.5 w-0.5 rotate-45 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10]",
                "before:absolute before:top-1/2 before:h-px before:w-[50px] before:-translate-y-[50%] before:transform before:bg-gradient-to-r before:from-[#64748b] before:to-transparent before:content-['']",
                className
            )}
            style={style}
            ></span>
        ))}
        </motion.div>
    );
    };
