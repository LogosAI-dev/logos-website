"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import ContactModal from "./ContactModal";

export default function Hero() {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalType, setModalType] = useState<"demo" | "partner" | "pilot" | "newsletter">("demo");

    return (
        <>
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cream">
                {/* Decorative background blobs */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="blob blob-orange w-[600px] h-[600px] -top-40 -right-40" />
                    <div className="blob blob-sage w-[500px] h-[500px] -bottom-32 -left-32" />
                    <div className="blob blob-orange w-[300px] h-[300px] top-1/2 left-1/4 opacity-30" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left: Text Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            <motion.h1
                                className="text-5xl lg:text-7xl font-bold leading-tight text-charcoal"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                            >
                                The AI Knowledge Infrastructure for{" "}
                                <span className="gradient-text">Southeast Asian Families</span>
                            </motion.h1>

                            <motion.p
                                className="text-xl lg:text-2xl text-slate leading-relaxed"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                            >
                                Powered by <span className="text-orange font-semibold">Logos Engine™</span>.
                                Bridging the gap between raw data and human understanding for the 3-9s and the elderly.
                            </motion.p>

                            <motion.div
                                className="flex flex-col sm:flex-row gap-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                            >
                                <button
                                    onClick={() => {
                                        setModalType("partner");
                                        setModalOpen(true);
                                    }}
                                    className="px-8 py-4 bg-orange hover:bg-clay text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
                                >
                                    Partner with Us
                                </button>
                                <button
                                    onClick={() => {
                                        setModalType("demo");
                                        setModalOpen(true);
                                    }}
                                    className="px-8 py-4 bg-white text-charcoal font-semibold rounded-full border border-beige hover:border-orange hover:text-orange transition-all duration-300 shadow-soft"
                                >
                                    Watch the Demo
                                </button>
                            </motion.div>
                        </motion.div>

                        {/* Right: Visual */}
                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4, duration: 1 }}
                        >
                            <div className="relative w-full h-[500px] flex items-center justify-center">
                                {/* Warm glow background */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <motion.div
                                        className="w-96 h-96 rounded-full bg-gradient-to-br from-orange/10 to-sage/10 blur-3xl"
                                        animate={{
                                            scale: [1, 1.1, 1],
                                        }}
                                        transition={{
                                            duration: 8,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                    />
                                </div>

                                {/* MeBao character */}
                                <motion.div
                                    className="relative z-10"
                                    animate={{
                                        y: [0, -15, 0],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                >
                                    <div className="relative w-80 h-80 flex items-center justify-center">
                                        <img
                                            src="/mebao-character.png"
                                            alt="MeBao AI Companion"
                                            className="w-full h-full object-contain drop-shadow-2xl"
                                        />
                                        {/* Warm glow effect */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-orange/20 via-clay/10 to-sage/20 rounded-full blur-3xl -z-10 scale-110"></div>
                                    </div>
                                </motion.div>

                                {/* Floating data points */}
                                <motion.div
                                    className="absolute top-16 left-8 bg-white px-4 py-2 rounded-full text-sm font-medium shadow-soft text-charcoal"
                                    animate={{ y: [0, -12, 0] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                >
                                    KSSR Math
                                </motion.div>
                                <motion.div
                                    className="absolute bottom-16 right-8 bg-white px-4 py-2 rounded-full text-sm font-medium shadow-soft text-charcoal"
                                    animate={{ y: [0, 12, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                                >
                                    Dialect Voice
                                </motion.div>
                                <motion.div
                                    className="absolute top-32 right-12 bg-white px-4 py-2 rounded-full text-sm font-medium shadow-soft text-charcoal"
                                    animate={{ y: [0, -8, 0], x: [0, 5, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                                >
                                    Visual RAG
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <div className="w-6 h-10 border-2 border-silver rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-orange rounded-full mt-2" />
                    </div>
                </motion.div>
            </section>

            <ContactModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                type={modalType}
            />
        </>
    );
}
