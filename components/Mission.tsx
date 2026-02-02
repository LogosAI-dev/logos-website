"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Mission() {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <section ref={ref} className="relative py-24 bg-beige overflow-hidden">
            {/* Decorative blobs */}
            <div className="absolute top-20 right-10 w-64 h-64 bg-orange/5 rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-10 w-48 h-48 bg-sage/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl mx-auto"
                >
                    {/* Mission Statement */}
                    <div className="text-center mb-12">
                        <motion.h2
                            className="text-5xl lg:text-6xl font-bold mb-6 text-charcoal"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.2, duration: 0.8 }}
                        >
                            <span className="gradient-text">Our Mission</span>
                        </motion.h2>
                        <motion.div
                            className="w-24 h-1 bg-gradient-to-r from-orange to-clay mx-auto rounded-full"
                            initial={{ width: 0 }}
                            animate={isVisible ? { width: 96 } : {}}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        />
                    </div>

                    {/* Main Mission Card */}
                    <motion.div
                        className="bg-white p-12 rounded-3xl shadow-soft mb-12"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        <p className="text-2xl lg:text-3xl text-charcoal leading-relaxed text-center font-light mb-8">
                            To build AI that <span className="text-orange font-semibold">feels human</span>.
                        </p>
                        <p className="text-xl text-slate leading-relaxed text-center mb-8">
                            We believe technology should adapt to people, not the other way around.
                            From <span className="text-orange font-semibold">3-year-olds</span> learning their ABCs to{" "}
                            <span className="text-clay font-semibold">90-year-olds</span> using smartphones,
                            MeBao bridges the gap with warmth and intelligence.
                        </p>

                        {/* Core Values */}
                        <div className="grid md:grid-cols-2 gap-6 mt-12">
                            <motion.div
                                className="text-center p-6 rounded-2xl bg-beige hover:shadow-soft transition-all duration-300"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.6, duration: 0.6 }}
                            >
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-orange/10 flex items-center justify-center">
                                    <svg className="w-8 h-8 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-orange">Intelligence</h3>
                                <p className="text-slate text-sm">Deep tech that understands context and reasoning</p>
                            </motion.div>

                            <motion.div
                                className="text-center p-6 rounded-2xl bg-beige hover:shadow-soft transition-all duration-300"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.7, duration: 0.6 }}
                            >
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-clay/10 flex items-center justify-center">
                                    <svg className="w-8 h-8 text-clay" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-clay">Warmth</h3>
                                <p className="text-slate text-sm">Building emotional connections across generations</p>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Vision Statement */}
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.9, duration: 0.8 }}
                    >
                        <p className="text-lg text-slate italic">
                            "Growing with you. Growing old with you"
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
