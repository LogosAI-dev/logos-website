"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Loading() {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Simulate loading progress
        const progressInterval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(progressInterval);
                    return 100;
                }
                return prev + Math.random() * 15 + 5;
            });
        }, 150);

        // Auto-dismiss after animation completes
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2800);

        return () => {
            clearTimeout(timer);
            clearInterval(progressInterval);
        };
    }, []);

    // Fixed particle positions to avoid hydration mismatch
    const particles = [
        { left: 15, top: 20, duration: 2.5, delay: 0.3 },
        { left: 85, top: 15, duration: 3.2, delay: 0.8 },
        { left: 25, top: 75, duration: 2.8, delay: 1.2 },
        { left: 70, top: 80, duration: 3.5, delay: 0.5 },
        { left: 45, top: 10, duration: 2.2, delay: 1.5 },
        { left: 60, top: 65, duration: 3.8, delay: 0.9 },
        { left: 10, top: 50, duration: 2.6, delay: 1.8 },
        { left: 90, top: 45, duration: 3.1, delay: 0.2 },
        { left: 35, top: 30, duration: 2.9, delay: 1.1 },
        { left: 75, top: 25, duration: 3.4, delay: 0.6 },
        { left: 20, top: 85, duration: 2.4, delay: 1.6 },
        { left: 80, top: 70, duration: 3.6, delay: 0.4 },
        { left: 50, top: 55, duration: 2.7, delay: 1.4 },
        { left: 65, top: 35, duration: 3.3, delay: 0.7 },
        { left: 30, top: 60, duration: 2.3, delay: 1.9 },
        { left: 55, top: 90, duration: 3.7, delay: 0.1 },
        { left: 40, top: 40, duration: 2.1, delay: 1.3 },
        { left: 95, top: 55, duration: 3.9, delay: 1.0 },
        { left: 5, top: 65, duration: 2.0, delay: 1.7 },
        { left: 72, top: 12, duration: 3.0, delay: 0.0 },
    ];

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-cream"
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        scale: 1.1,
                        transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }
                    }}
                >
                    {/* Animated gradient orbs - warm tones */}
                    <motion.div
                        className="absolute w-[800px] h-[800px] rounded-full"
                        style={{
                            background: "radial-gradient(circle, rgba(255, 107, 53, 0.15) 0%, transparent 70%)",
                            filter: "blur(60px)",
                        }}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{
                            scale: [0, 1.5, 1.2],
                            opacity: [0, 0.8, 0.6],
                        }}
                        transition={{
                            duration: 2,
                            ease: "easeOut",
                        }}
                    />

                    <motion.div
                        className="absolute w-[600px] h-[600px] rounded-full"
                        style={{
                            background: "radial-gradient(circle, rgba(232, 93, 42, 0.15) 0%, transparent 70%)",
                            filter: "blur(50px)",
                        }}
                        initial={{ scale: 0, opacity: 0, x: -200 }}
                        animate={{
                            scale: [0, 1.3, 1.1],
                            opacity: [0, 0.7, 0.5],
                            x: [-200, 0, 0],
                        }}
                        transition={{
                            duration: 2.2,
                            ease: "easeOut",
                            delay: 0.2,
                        }}
                    />

                    <motion.div
                        className="absolute w-[600px] h-[600px] rounded-full"
                        style={{
                            background: "radial-gradient(circle, rgba(74, 108, 88, 0.15) 0%, transparent 70%)",
                            filter: "blur(50px)",
                        }}
                        initial={{ scale: 0, opacity: 0, x: 200 }}
                        animate={{
                            scale: [0, 1.3, 1.1],
                            opacity: [0, 0.7, 0.5],
                            x: [200, 0, 0],
                        }}
                        transition={{
                            duration: 2.2,
                            ease: "easeOut",
                            delay: 0.3,
                        }}
                    />

                    {/* Embracing arms effect - curved lines */}
                    <svg
                        className="absolute w-full h-full -z-10 top-1/3"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                    >
                        <motion.path
                            d="M -10 50 Q 20 20, 50 50 Q 80 80, 110 50"
                            fill="none"
                            stroke="url(#gradient1)"
                            strokeWidth="0.3"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 0.6 }}
                            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                        />
                        <motion.path
                            d="M -10 50 Q 20 80, 50 50 Q 80 20, 110 50"
                            fill="none"
                            stroke="url(#gradient2)"
                            strokeWidth="0.3"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 0.6 }}
                            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.7 }}
                        />
                        <defs>
                            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#FF6B35" stopOpacity="0" />
                                <stop offset="50%" stopColor="#E85D2A" stopOpacity="1" />
                                <stop offset="100%" stopColor="#4A6C58" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#4A6C58" stopOpacity="0" />
                                <stop offset="50%" stopColor="#FF6B35" stopOpacity="1" />
                                <stop offset="100%" stopColor="#E85D2A" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>

                    {/* Floating particles */}
                    {particles.map((particle, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 rounded-full bg-orange/30"
                            style={{
                                left: `${particle.left}%`,
                                top: `${particle.top}%`,
                            }}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{
                                opacity: [0, 0.8, 0],
                                scale: [0, 1, 0],
                                y: [0, -100],
                            }}
                            transition={{
                                duration: particle.duration,
                                repeat: Infinity,
                                delay: particle.delay,
                                ease: "easeOut",
                            }}
                        />
                    ))}

                    {/* Central content */}
                    <div className="relative z-50 flex flex-col items-center">
                        {/* Logo mark with pulse */}
                        <motion.div
                            className="relative mb-8"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                                duration: 0.8,
                                ease: [0.68, -0.55, 0.265, 1.55],
                                delay: 0.3,
                            }}
                        >
                            {/* Pulsing rings */}
                            <motion.div
                                className="absolute inset-0 rounded-full border-2 border-orange/30"
                                style={{ width: 120, height: 120, margin: -20 }}
                                animate={{
                                    scale: [1, 1.5, 1],
                                    opacity: [0.5, 0, 0.5],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                            <motion.div
                                className="absolute inset-0 rounded-full border border-clay/20"
                                style={{ width: 140, height: 140, margin: -30 }}
                                animate={{
                                    scale: [1, 1.8, 1],
                                    opacity: [0.3, 0, 0.3],
                                }}
                                transition={{
                                    duration: 2.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 0.3,
                                }}
                            />

                            {/* Logo container */}
                            <div className="w-20 h-20 rounded-2xl bg-orange flex items-center justify-center shadow-xl">
                                <span className="text-4xl font-bold text-white">L</span>
                            </div>
                        </motion.div>

                        {/* Brand name with reveal */}
                        <motion.div
                            className="overflow-hidden mb-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            <motion.h1
                                className="text-3xl md:text-4xl font-bold gradient-text"
                                initial={{ y: 40 }}
                                animate={{ y: 0 }}
                                transition={{
                                    duration: 0.8,
                                    ease: [0.43, 0.13, 0.23, 0.96],
                                    delay: 0.6,
                                }}
                            >
                                Logos Technology
                            </motion.h1>
                        </motion.div>

                        {/* Tagline */}
                        <motion.p
                            className="text-slate text-sm md:text-base mb-8 text-center max-w-md"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.6 }}
                        >
                            Bridging the gap between knowledge and understanding
                        </motion.p>

                        {/* Progress bar */}
                        <motion.div
                            className="w-48 h-1 bg-beige rounded-full overflow-hidden"
                            initial={{ opacity: 0, scaleX: 0 }}
                            animate={{ opacity: 1, scaleX: 1 }}
                            transition={{ delay: 1.2, duration: 0.4 }}
                        >
                            <motion.div
                                className="h-full bg-orange rounded-full"
                                style={{ width: `${Math.min(progress, 100)}%` }}
                                transition={{ duration: 0.1 }}
                            />
                        </motion.div>

                        {/* Welcome message */}
                        <motion.span
                            className="mt-4 text-silver text-xs tracking-widest uppercase"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5 }}
                        >
                            Welcome
                        </motion.span>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
