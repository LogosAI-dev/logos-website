"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import ContactModal from "./ContactModal";

export default function Trust() {
    const [isVisible, setIsVisible] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalType, setModalType] = useState<"demo" | "partner" | "pilot" | "newsletter">("pilot");
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

    const partners = [
        { name: "Education Partners", icon: "academic", count: "Growing Network", desc: "Schools & Kindergartens" },
        { name: "Community Partners", icon: "community", count: "Active Collaborations", desc: "NGOs & Elder Care" },
    ];

    const trustMetrics = [
        { icon: "lock", title: "Knowledge Verified", desc: "Appropriate knowledge for children and elders" },
        { icon: "support", title: "Truthful and reliable", desc: "Becoming your best friend" },
        { icon: "curriculum", title: "Privacy", desc: "No monitoring, no recording" },
        { icon: "local", title: "24/7 Support", desc: "Always here for families" },
    ];

    const getIconSVG = (iconType: string) => {
        switch (iconType) {
            case "academic":
                return (
                    <svg className="w-10 h-10 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                );
            case "community":
                return (
                    <svg className="w-10 h-10 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                );
            case "lock":
                return (
                    <svg className="w-8 h-8 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                );
            case "support":
                return (
                    <svg className="w-8 h-8 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                );
            case "curriculum":
                return (
                    <svg className="w-8 h-8 text-clay" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                );
            case "local":
                return (
                    <svg className="w-8 h-8 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                );
            default:
                return null;
        }
    };

    return (
        <>
            <section ref={ref} className="relative py-24 bg-beige overflow-hidden">
                {/* Decorative blobs */}
                <div className="absolute top-20 left-20 w-80 h-80 bg-orange/5 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-20 w-64 h-64 bg-sage/5 rounded-full blur-3xl" />

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-charcoal">
                            Building Trust Through{" "}
                            <span className="gradient-text">Community Impact</span>
                        </h2>
                        <p className="text-xl text-slate max-w-3xl mx-auto">
                            Working with Malaysia's education institutions and community organizations to bring AI to every family
                        </p>
                    </motion.div>

                    {/* Partnership Categories */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto"
                    >
                        {partners.map((partner, index) => (
                            <div
                                key={index}
                                className="bg-white p-10 rounded-3xl text-center shadow-soft hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                            >
                                <div className="mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    {getIconSVG(partner.icon)}
                                </div>
                                <h3 className="text-2xl font-bold mb-3 text-charcoal">{partner.name}</h3>
                                <div className="text-orange font-semibold text-xl mb-2">{partner.count}</div>
                                <p className="text-slate">{partner.desc}</p>
                            </div>
                        ))}
                    </motion.div>

                    {/* Trust Metrics */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12"
                    >
                        {trustMetrics.map((metric, index) => (
                            <motion.div
                                key={index}
                                className="bg-white p-6 rounded-2xl text-center shadow-soft group hover:shadow-lg transition-all duration-300"
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                                    {getIconSVG(metric.icon)}
                                </div>
                                <h4 className="font-bold text-lg mb-1 text-charcoal">{metric.title}</h4>
                                <p className="text-sm text-slate">{metric.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Pilot Program Highlight */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="max-w-4xl mx-auto mb-12"
                    >
                        <div className="bg-white p-10 rounded-3xl text-center shadow-soft">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-orange/10 flex items-center justify-center">
                                <svg className="w-8 h-8 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-3xl font-bold mb-4">
                                <span className="gradient-text">Currently in Pilot Phase</span>
                            </h3>
                            <p className="text-xl text-slate mb-6 leading-relaxed">
                                We're working closely with select schools, kindergartens, and elder care facilities
                                to refine MeBao before our official launch.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <div className="flex items-center gap-2 text-sage">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="font-semibold">Real-world Testing</span>
                                </div>
                                <div className="flex items-center gap-2 text-clay">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="font-semibold">Continuous Improvement</span>
                                </div>
                                <div className="flex items-center gap-2 text-orange">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="font-semibold">Community Feedback</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <button
                            onClick={() => {
                                setModalType("pilot");
                                setModalOpen(true);
                            }}
                            className="px-8 py-4 bg-orange hover:bg-clay rounded-full font-semibold text-lg text-white hover:scale-105 hover:shadow-lg transition-all duration-300"
                        >
                            Join Our Pilot Program
                        </button>
                        <button
                            onClick={() => {
                                setModalType("demo");
                                setModalOpen(true);
                            }}
                            className="px-8 py-4 bg-white text-charcoal border border-beige hover:border-orange hover:text-orange rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-soft"
                        >
                            Schedule a Demo
                        </button>
                    </motion.div>
                </div>
            </section>

            <ContactModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                type={modalType}
            />
        </>
    );
}
