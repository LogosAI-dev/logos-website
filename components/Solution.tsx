"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Solution() {
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

    const features = [
        {
            svgIcon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
            ),
            title: "Computer Vision",
            description: "\"I see what you see.\"",
            detail: "MeBao uses advanced visual AI to understand textbooks, worksheets, and real-world objects through its camera.",
            color: "orange",
            bgColor: "bg-orange/10",
        },
        {
            svgIcon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
            ),
            title: "Voice-First",
            description: "\"Speak naturally. No screens required.\"",
            detail: "Communicate in Mandarin, Malay, English, or dialects. No typing, no complexity - just conversation.",
            color: "clay",
            bgColor: "bg-clay/10",
        },
        {
            svgIcon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            title: "Digital Kin",
            description: "\"More than a toy. A family member.\"",
            detail: "Designed to build emotional bonds, offering companionship that grows with your family.",
            color: "sage",
            bgColor: "bg-sage/10",
        },
    ];

    return (
        <section ref={ref} className="relative py-24 bg-cream">
            {/* Decorative blob */}
            <div className="absolute top-40 left-0 w-96 h-96 bg-orange/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-charcoal">
                        Meet <span className="gradient-text">MeBao (Me宝)</span>
                    </h2>
                    <p className="text-2xl text-slate">The Ageless Interface</p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                            className="group"
                        >
                            <div className="bg-white p-8 rounded-3xl shadow-soft hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full card-hover">
                                <div className={`w-20 h-20 mx-auto mb-6 rounded-full ${feature.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 text-${feature.color}`}>
                                    {feature.svgIcon}
                                </div>
                                <h3 className={`text-2xl font-bold mb-3 text-${feature.color} text-center`}>
                                    {feature.title}
                                </h3>
                                <p className="text-xl text-charcoal mb-4 font-semibold text-center">
                                    {feature.description}
                                </p>
                                <p className="text-slate leading-relaxed text-center">
                                    {feature.detail}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Product Showcase */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="relative bg-white p-12 rounded-3xl shadow-soft">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="space-y-6">
                                <h3 className="text-3xl font-bold text-charcoal">Warm Technology, Human Connection</h3>
                                <p className="text-slate leading-relaxed">
                                    MeBao isn&apos;t just hardware - it&apos;s a bridge between generations, combining cutting-edge AI
                                    with the warmth of a family companion.
                                </p>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-sage rounded-full"></div>
                                        <span className="text-slate">Child-safe design & materials</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-sage rounded-full"></div>
                                        <span className="text-slate">Privacy-first architecture</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-sage rounded-full"></div>
                                        <span className="text-slate">Continuous learning & updates</span>
                                    </div>
                                </div>
                            </div>
                            <div className="relative h-64 flex items-center justify-center">
                                <motion.div
                                    className="w-56 h-56 rounded-full bg-gradient-to-br from-orange/10 to-sage/10 blur-2xl absolute"
                                    animate={{
                                        scale: [1, 1.3, 1],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                    }}
                                />
                                <motion.img
                                    src="/mebao-character.png"
                                    alt="MeBao"
                                    className="relative w-56 h-56 object-contain drop-shadow-2xl"
                                    animate={{
                                        y: [0, -20, 0],
                                    }}
                                    transition={{
                                        duration: 5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
