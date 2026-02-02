"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Problem() {
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
        <section ref={ref} className="relative py-24 bg-cream overflow-hidden">
            {/* Decorative blobs */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-orange/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-64 h-64 bg-sage/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-6xl font-bold mb-4 text-charcoal">
                        The <span className="gradient-text">Era of Misinformation & Complexity</span>
                    </h2>
                    <p className="text-xl text-slate max-w-3xl mx-auto">
                        Families are drowning in noise. Generic AI hallucinates, and search engines are too complex for the young and old.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Children Crisis */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-white p-8 rounded-3xl shadow-soft group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
                    >
                        {/* Pulsing indicator */}
                        <div className="absolute top-6 right-6">
                            <span className="relative flex h-4 w-4">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-clay opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-4 w-4 bg-clay"></span>
                            </span>
                        </div>

                        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-clay/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-10 h-10 text-clay" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                        </div>
                        <h3 className="text-3xl font-bold mb-4 text-clay text-center">The Logic Gap</h3>
                        <p className="text-xl text-charcoal mb-6 font-semibold text-center">
                            Children: "I don't understand this math problem..."
                        </p>
                        <div className="space-y-3 mb-6">
                            <div className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-clay rounded-full mt-2"></div>
                                <p className="text-slate">ChatGPT guesses. Kids need facts. Whether it's logic reasoning or general science, a "probable" answer isn't good enough. Kids need the Truth.</p>
                            </div>
                        </div>
                        <div className="pt-4 border-t border-beige">
                            <p className="text-sm text-silver">Impact: Learning delays, confidence issues, achievement gaps</p>
                        </div>
                    </motion.div>

                    {/* Elderly Crisis */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="bg-white p-8 rounded-3xl shadow-soft group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
                    >
                        {/* Pulsing indicator */}
                        <div className="absolute top-6 right-6">
                            <span className="relative flex h-4 w-4">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-4 w-4 bg-orange"></span>
                            </span>
                        </div>

                        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-orange/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-10 h-10 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h3 className="text-3xl font-bold mb-4 text-orange text-center">The Digital Wall</h3>
                        <p className="text-xl text-charcoal mb-6 font-semibold text-center">
                            Elderly: "这个东西我不会用..." (I don't know how to use this...)
                        </p>
                        <div className="space-y-3 mb-6">
                            <div className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-orange rounded-full mt-2"></div>
                                <p className="text-slate">Elderly people are shut out from the digital world and cannot communicate real-time with their lovely and busy children. Valuable knowledge exists, but it's locked behind complex screens and keyboards, shutting out toddlers and seniors.</p>
                            </div>
                        </div>
                        <div className="pt-4 border-t border-beige">
                            <p className="text-sm text-silver">Impact: Social isolation, tech information gap</p>
                        </div>
                    </motion.div>
                </div>

                {/* Statistics Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
                >
                    <div className="text-center bg-white p-6 rounded-2xl shadow-soft">
                        <div className="text-4xl font-bold text-orange mb-2">2.8M+</div>
                        <div className="text-sm text-slate">Primary Students</div>
                        <div className="text-xs text-silver mt-1">Malaysia 2024</div>
                    </div>
                    <div className="text-center bg-white p-6 rounded-2xl shadow-soft">
                        <div className="text-4xl font-bold text-clay mb-2">65%</div>
                        <div className="text-sm text-slate">Parents Struggle</div>
                        <div className="text-xs text-silver mt-1">Teaching at Home</div>
                    </div>
                    <div className="text-center bg-white p-6 rounded-2xl shadow-soft">
                        <div className="text-4xl font-bold text-sage mb-2">3.5M+</div>
                        <div className="text-sm text-slate">Seniors 65+</div>
                        <div className="text-xs text-silver mt-1">Malaysia 2024</div>
                    </div>
                    <div className="text-center bg-white p-6 rounded-2xl shadow-soft">
                        <div className="text-4xl font-bold text-clay mb-2">45%</div>
                        <div className="text-sm text-slate">Feel tech-isolated</div>
                        <div className="text-xs text-silver mt-1">Weekly or More</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
