import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Background Colors
                cream: "#FDFBF7",
                beige: "#F3EFEA",
                // Brand Colors
                orange: "#FF6B35",
                clay: "#E85D2A",
                sage: "#4A6C58",
                // Text Colors
                charcoal: "#2D3436",
                slate: "#636E72",
                silver: "#B2BEC3",
            },
            fontFamily: {
                sans: ["Inter", "system-ui", "sans-serif"],
            },
            animation: {
                "fade-in": "fadeIn 0.8s ease-out forwards",
                "slide-up": "slideUp 0.6s ease-out forwards",
                "glow": "glow 2s ease-in-out infinite alternate",
                "float": "float 3s ease-in-out infinite",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                slideUp: {
                    "0%": { transform: "translateY(30px)", opacity: "0" },
                    "100%": { transform: "translateY(0)", opacity: "1" },
                },
                glow: {
                    "0%": { boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" },
                    "100%": { boxShadow: "0 0 40px rgba(139, 92, 246, 0.8)" },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-20px)" },
                },
            },
        },
    },
    plugins: [],
};

export default config;
