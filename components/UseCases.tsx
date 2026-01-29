"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function UseCases() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeTab, setActiveTab] = useState<"education" | "elderly">("education");
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
        <section ref={ref} className="relative py-24 bg-beige">
            {/* Decorative blobs */}
            <div className="absolute top-20 right-20 w-80 h-80 bg-orange/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-20 w-64 h-64 bg-sage/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-charcoal">
                        Real-World <span className="gradient-text">Use Cases</span>
                    </h2>
                    <p className="text-xl text-slate">See MeBao in action across generations</p>
                </motion.div>

                {/* Tab Navigation */}
                <div className="flex justify-center mb-12">
                    <div className="bg-white p-2 rounded-full inline-flex gap-2 shadow-soft">
                        <button
                            onClick={() => setActiveTab("education")}
                            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === "education"
                                ? "bg-orange text-white"
                                : "text-slate hover:text-charcoal"
                                }`}
                        >
                            Education (3-9yo)
                        </button>
                        <button
                            onClick={() => setActiveTab("elderly")}
                            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === "elderly"
                                ? "bg-orange text-white"
                                : "text-slate hover:text-charcoal"
                                }`}
                        >
                            Elderly Care
                        </button>
                    </div>
                </div>

                {/* Tab Content */}
                <div className="max-w-5xl mx-auto">
                    {activeTab === "education" && (
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="grid md:grid-cols-2 gap-8 items-center"
                        >
                            <div className="space-y-6">
                                <h3 className="text-3xl font-bold text-charcoal">Interactive Learning Companion</h3>
                                <div className="space-y-4">
                                    <div className="bg-white p-4 rounded-xl shadow-soft">
                                        <p className="text-charcoal mb-2">
                                            <span className="font-bold text-orange">Child:</span> &quot;MeBao, how do I solve this math problem?&quot;
                                        </p>
                                        <p className="text-slate text-sm">→ MeBao looks at the textbook...</p>
                                    </div>
                                    <div className="bg-white p-4 rounded-xl shadow-soft">
                                        <p className="text-charcoal">
                                            <span className="font-bold text-clay">MeBao:</span> &quot;Great question! Let&apos;s think step by step.
                                            What do you think we should do first?&quot;
                                        </p>
                                    </div>
                                </div>
                                <div className="pt-6 space-y-3">
                                    <h4 className="font-semibold text-lg text-charcoal">Key Benefits:</h4>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-3">
                                            <span className="text-sage mt-1">✓</span>
                                            <span className="text-slate">Socratic method builds critical thinking</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-sage mt-1">✓</span>
                                            <span className="text-slate">KSSR & KBAT curriculum aligned</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-sage mt-1">✓</span>
                                            <span className="text-slate">Learn at their own pace, any time</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="relative h-96 bg-white rounded-3xl overflow-hidden shadow-soft group">
                                <img
                                    src="/education-scene.png"
                                    alt="Child learning with MeBao"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent flex items-end p-6">
                                    <div className="text-white">
                                        <p className="text-sm font-semibold mb-1">Interactive Learning in Action</p>
                                        <p className="text-xs text-gray-200">Real-world education scenario</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === "elderly" && (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="grid md:grid-cols-2 gap-8 items-center"
                        >
                            <div className="space-y-6">
                                <h3 className="text-3xl font-bold text-charcoal">Voice-First Elder Companion</h3>
                                <div className="space-y-4">
                                    <div className="bg-white p-4 rounded-xl shadow-soft">
                                        <p className="text-charcoal mb-2">
                                            <span className="font-bold text-orange">奶奶 (Hokkien):</span> &quot;Me宝，放一首旧歌。&quot;
                                        </p>
                                        <p className="text-slate text-sm italic">&quot;MeBao, play an old song.&quot;</p>
                                    </div>
                                    <div className="bg-white p-4 rounded-xl shadow-soft">
                                        <p className="text-charcoal">
                                            <span className="font-bold text-clay">MeBao:</span> &quot;好的！这是邓丽君的《月亮代表我的心》。
                                            记得吃药哦！&quot;
                                        </p>
                                        <p className="text-slate text-sm italic mt-2">
                                            &quot;Sure! Here&apos;s &apos;The Moon Represents My Heart&apos;. Don&apos;t forget your medicine!&quot;
                                        </p>
                                    </div>
                                </div>
                                <div className="pt-6 space-y-3">
                                    <h4 className="font-semibold text-lg text-charcoal">Key Benefits:</h4>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-3">
                                            <span className="text-sage mt-1">✓</span>
                                            <span className="text-slate">Multi-dialect support (Hokkien, Cantonese, etc.)</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-sage mt-1">✓</span>
                                            <span className="text-slate">Medication reminders & health tracking</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-sage mt-1">✓</span>
                                            <span className="text-slate">Reduces loneliness through conversation</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="relative h-96 bg-white rounded-3xl overflow-hidden shadow-soft group">
                                <img
                                    src="/elderly-care-scene.png"
                                    alt="Elderly using MeBao companion"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent flex items-end p-6">
                                    <div className="text-white">
                                        <p className="text-sm font-semibold mb-1">Companionship & Care</p>
                                        <p className="text-xs text-gray-200">Real-world elderly care scenario</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    );
}
