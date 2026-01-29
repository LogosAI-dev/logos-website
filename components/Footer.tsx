"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import ContactModal from "./ContactModal";

export default function Footer() {
    const [modalOpen, setModalOpen] = useState(false);
    const [email, setEmail] = useState("");
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        company: [
            { name: "About Us", href: "#" },
            { name: "Careers", href: "#" },
            { name: "Press Kit", href: "#" },
            { name: "Blog", href: "#" },
        ],
        product: [
            { name: "MeBao Device", href: "#" },
            { name: "Pricing", href: "#" },
            { name: "Features", href: "#" },
            { name: "FAQs", href: "#" },
        ],
        partners: [
            { name: "Become a Partner", href: "#", onClick: (e: React.MouseEvent) => { e.preventDefault(); setModalOpen(true); } },
            { name: "Schools & Kindergartens", href: "#" },
            { name: "Nursing Homes", href: "#" },
            { name: "Investor Relations", href: "#" },
        ],
        legal: [
            { name: "Privacy Policy", href: "#" },
            { name: "Terms of Service", href: "#" },
            { name: "Data Protection", href: "#" },
            { name: "Cookie Policy", href: "#" },
        ],
    };

    const socialLinks = [
        { name: "LinkedIn", initial: "in", href: "#", hoverColor: "hover:bg-orange hover:text-white" },
        { name: "Twitter", initial: "𝕏", href: "#", hoverColor: "hover:bg-orange hover:text-white" },
        { name: "Facebook", initial: "f", href: "#", hoverColor: "hover:bg-orange hover:text-white" },
        { name: "Instagram", initial: "＠", href: "#", hoverColor: "hover:bg-orange hover:text-white" },
        { name: "YouTube", initial: "▶", href: "#", hoverColor: "hover:bg-orange hover:text-white" },
    ];

    const handleNewsletterSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setModalOpen(true);
        }
    };

    return (
        <>
            <footer className="relative bg-charcoal pt-20 pb-10 overflow-hidden">
                {/* Subtle pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle, #FFFFFF 1px, transparent 1px)',
                        backgroundSize: '30px 30px'
                    }}></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    {/* Top Section - Brand & Newsletter */}
                    <div className="mb-16">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            {/* Brand */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-4xl font-bold mb-4 text-white">
                                    <span className="text-orange">Logos</span> Technology
                                </h3>
                                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                                    Building AI that <span className="text-orange font-semibold">feels human</span>.
                                    <br />
                                    From classrooms to living rooms, bridging generations with warmth and intelligence.
                                </p>
                                <div className="flex items-center gap-4 text-gray-400">
                                    <div className="flex items-center gap-2">
                                        <span className="text-sage">●</span>
                                        <span className="text-sm">Pilot Running</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm">Location: Kuala Lumpur, Malaysia</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Newsletter Signup */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/10"
                            >
                                <h4 className="text-2xl font-bold mb-3 text-white">Stay Updated</h4>
                                <p className="text-gray-400 mb-6">
                                    Get the latest news on MeBao product launches and partnerships
                                </p>
                                <form onSubmit={handleNewsletterSubmit} className="flex gap-3">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="your@email.com"
                                        required
                                        className="flex-1 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange"
                                    />
                                    <button
                                        type="submit"
                                        className="px-8 py-3 bg-orange hover:bg-clay rounded-full font-semibold text-white hover:scale-105 transition-all duration-200"
                                    >
                                        Subscribe
                                    </button>
                                </form>
                            </motion.div>
                        </div>
                    </div>

                    {/* Links Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="grid md:grid-cols-4 gap-8 mb-16"
                    >
                        <div>
                            <h5 className="font-bold text-lg mb-4 text-orange">Company</h5>
                            <ul className="space-y-3">
                                {footerLinks.company.map((link, index) => (
                                    <li key={index}>
                                        <a href={link.href} className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h5 className="font-bold text-lg mb-4 text-clay">Product</h5>
                            <ul className="space-y-3">
                                {footerLinks.product.map((link, index) => (
                                    <li key={index}>
                                        <a href={link.href} className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h5 className="font-bold text-lg mb-4 text-sage">Partners</h5>
                            <ul className="space-y-3">
                                {footerLinks.partners.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href={link.href}
                                            onClick={link.onClick}
                                            className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200 cursor-pointer"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h5 className="font-bold text-lg mb-4 text-gray-300">Legal</h5>
                            <ul className="space-y-3">
                                {footerLinks.legal.map((link, index) => (
                                    <li key={index}>
                                        <a href={link.href} className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Bottom Section - Social & Copyright */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="pt-8 border-t border-white/10"
                    >
                        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                            {/* Social Links */}
                            <div className="flex gap-4">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        className={`w-12 h-12 rounded-full bg-white/10 border border-white/10 flex items-center justify-center ${social.hoverColor} transition-all duration-200 hover:scale-110 text-gray-300`}
                                        title={social.name}
                                    >
                                        <span className="text-lg font-bold">
                                            {social.initial}
                                        </span>
                                    </a>
                                ))}
                            </div>

                            {/* Copyright */}
                            <div className="text-center md:text-right">
                                <p className="text-gray-400 text-sm mb-2">
                                    © {currentYear} Logos Technology Sdn. Bhd. All rights reserved.
                                </p>
                                <p className="text-gray-500 text-xs">
                                    Made in Malaysia • Powered by Logos Engine™
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </footer>

            <ContactModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                type="partner"
            />
        </>
    );
}
