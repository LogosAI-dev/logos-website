"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
    type: "demo" | "partner" | "pilot" | "newsletter";
}

export default function ContactModal({ isOpen, onClose, type }: ContactModalProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        organization: "",
        phone: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const titles = {
        demo: "Schedule a Demo",
        partner: "Become a Partner",
        pilot: "Join Our Pilot Program",
        newsletter: "Subscribe to Updates",
    };

    const descriptions = {
        demo: "Book a personalized demo of MeBao to see how it can help your students or elderly family members.",
        partner: "Partner with Logos Technology to bring AI-powered education and care to your community.",
        pilot: "Join our pilot program and be among the first to experience MeBao's transformative capabilities.",
        newsletter: "Stay updated on our latest developments, partnerships, and product launches.",
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1500));

            // TODO: Replace with actual API endpoint
            console.log("Form submitted:", { type, ...formData });

            setSubmitStatus("success");

            // Reset form after 2 seconds
            setTimeout(() => {
                setFormData({ name: "", email: "", organization: "", phone: "", message: "" });
                setSubmitStatus("idle");
                onClose();
            }, 2000);
        } catch (error) {
            setSubmitStatus("error");
            setTimeout(() => setSubmitStatus("idle"), 3000);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-charcoal/60 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close button */}
                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-beige hover:bg-orange hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110 text-charcoal"
                            >
                                <span className="text-2xl">×</span>
                            </button>

                            {/* Header */}
                            <div className="mb-8">
                                <h2 className="text-3xl lg:text-4xl font-bold mb-3">
                                    <span className="gradient-text">{titles[type]}</span>
                                </h2>
                                <p className="text-slate text-lg">{descriptions[type]}</p>
                            </div>

                            {/* Success/Error Messages */}
                            {submitStatus === "success" && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mb-6 p-4 bg-sage/10 border border-sage/30 rounded-2xl"
                                >
                                    <div className="flex items-center gap-3">
                                        <svg className="w-8 h-8 text-sage" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <div>
                                            <h3 className="font-bold text-sage">Success!</h3>
                                            <p className="text-sm text-slate">We'll get back to you within 24 hours.</p>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {submitStatus === "error" && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mb-6 p-4 bg-clay/10 border border-clay/30 rounded-2xl"
                                >
                                    <div className="flex items-center gap-3">
                                        <svg className="w-8 h-8 text-clay" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                        </svg>
                                        <div>
                                            <h3 className="font-bold text-clay">Error</h3>
                                            <p className="text-sm text-slate">Something went wrong. Please try again.</p>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    {/* Name */}
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-semibold mb-2 text-charcoal">
                                            Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl bg-beige border border-beige text-charcoal placeholder-silver focus:outline-none focus:ring-2 focus:ring-orange transition-all"
                                            placeholder="Your full name"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold mb-2 text-charcoal">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl bg-beige border border-beige text-charcoal placeholder-silver focus:outline-none focus:ring-2 focus:ring-orange transition-all"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    {/* Organization */}
                                    <div>
                                        <label htmlFor="organization" className="block text-sm font-semibold mb-2 text-charcoal">
                                            Organization
                                        </label>
                                        <input
                                            type="text"
                                            id="organization"
                                            name="organization"
                                            value={formData.organization}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl bg-beige border border-beige text-charcoal placeholder-silver focus:outline-none focus:ring-2 focus:ring-orange transition-all"
                                            placeholder="School, NGO, etc."
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-charcoal">
                                            Phone
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl bg-beige border border-beige text-charcoal placeholder-silver focus:outline-none focus:ring-2 focus:ring-orange transition-all"
                                            placeholder="+60 12-345 6789"
                                        />
                                    </div>
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold mb-2 text-charcoal">
                                        Message {type !== "newsletter" && "*"}
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required={type !== "newsletter"}
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-xl bg-beige border border-beige text-charcoal placeholder-silver focus:outline-none focus:ring-2 focus:ring-orange transition-all resize-none"
                                        placeholder={
                                            type === "demo"
                                                ? "Tell us about your needs and preferred time..."
                                                : type === "partner"
                                                    ? "Describe your organization and partnership interests..."
                                                    : type === "pilot"
                                                        ? "Why are you interested in our pilot program?..."
                                                        : "Any specific topics you'd like to hear about?"
                                        }
                                    />
                                </div>

                                {/* Submit Button */}
                                <div className="flex gap-4 pt-4">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting || submitStatus === "success"}
                                        className="flex-1 px-8 py-4 bg-orange hover:bg-clay rounded-full font-semibold text-lg text-white hover:scale-105 hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                                    >
                                        {isSubmitting ? (
                                            <span className="flex items-center justify-center gap-2">
                                                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                </svg>
                                                Submitting...
                                            </span>
                                        ) : submitStatus === "success" ? (
                                            <span className="flex items-center justify-center gap-2">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                Submitted
                                            </span>
                                        ) : (
                                            "Submit"
                                        )}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={onClose}
                                        className="px-8 py-4 bg-beige text-charcoal border border-beige hover:border-orange hover:text-orange rounded-full font-semibold text-lg transition-all duration-300"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>

                            {/* Privacy Notice */}
                            <p className="text-xs text-silver text-center mt-6 flex items-center justify-center gap-2">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 5 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                </svg>
                                Your information is secure. We'll never share your details with third parties.
                            </p>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
