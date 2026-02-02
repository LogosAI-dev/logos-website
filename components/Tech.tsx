"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Tech() {
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

    const capabilities = [
        {
            prefix: "[1]",
            title: "Verified Knowledge Base",
            subtitle: "Verified Knowledge Base",
            description: "Accurate, verified, and up-to-date knowledge base for children and seniors",
            color: "clay",
        },
        {
            prefix: "[2]",
            title: "Socratic Algorithm",
            subtitle: "Teaching How to Think, Not Just Answers",
            description: "Guides children through problem-solving steps instead of giving direct answers—building critical thinking",
            color: "sage",
        },
        {
            prefix: "[3]",
            title: "Visual RAG",
            subtitle: "Retrieval-Augmented Generation with Eyes",
            description: "MeBao doesn't just 'see' text—it understands diagrams, handwriting, and visual context from textbooks",
            color: "orange",
        },
    ];

    return (
        <section ref={ref} className="relative py-24 bg-beige overflow-hidden">
            {/* Decorative blobs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-sage/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-6xl font-bold mb-4 text-charcoal">
                        Inside the <span className="gradient-text">Logos Engine™</span>
                    </h2>
                    <p className="text-xl text-slate max-w-3xl mx-auto">
                        Our proprietary AI infrastructure that powers warm, intelligent conversations across generations
                    </p>
                </motion.div>

                {/* Architecture Diagram */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-20 max-w-4xl mx-auto"
                >
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-orange/20 via-clay/20 to-sage/20 blur-3xl group-hover:blur-2xl transition-all duration-500"></div>
                        <div className="relative bg-white p-4 rounded-3xl shadow-soft">
                            <img
                                src="/tech-architecture.png"
                                alt="Logos Engine Architecture"
                                className="w-full h-auto rounded-2xl"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Core Capabilities */}
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
                    {capabilities.map((cap, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                            className="bg-white p-8 rounded-3xl shadow-soft hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                        >
                            <div className={`text-3xl font-bold mb-4 text-${cap.color} group-hover:scale-110 transition-transform duration-300 inline-block`}>
                                {cap.prefix}
                            </div>
                            <h3 className="text-2xl font-bold mb-2 text-charcoal">{cap.title}</h3>
                            <div className={`text-sm font-semibold mb-4 text-${cap.color}`}>
                                {cap.subtitle}
                            </div>
                            <p className="text-slate leading-relaxed">{cap.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Tech Stack Details */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="bg-white p-10 rounded-3xl shadow-soft">
                        <h3 className="text-2xl font-bold mb-6 text-center">
                            <span className="gradient-text">Enterprise-Grade Technology Stack</span>
                        </h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="font-semibold text-orange mb-4 flex items-center gap-2">
                                    AI & Machine Learning
                                </h4>
                                <ul className="space-y-2 text-slate">
                                    <li className="flex items-start gap-2">
                                        <span className="text-orange mt-1">▹</span>
                                        <span>Gemini 3 Pro Vision for multimodal understanding</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-sage mb-4 flex items-center gap-2">
                                    <span>Infrastructure & Data</span>
                                </h4>
                                <ul className="space-y-2 text-slate">
                                    <li className="flex items-start gap-2">
                                        <span className="text-sage mt-1">▹</span>
                                        <span>Pinecone Vector DB for semantic search</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-sage mt-1">▹</span>
                                        <span>Edge computing for &lt;100ms latency</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-sage mt-1">▹</span>
                                        <span>99.9% uptime with auto-scaling</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
