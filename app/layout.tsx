import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Logos Technology | AI Knowledge Infrastructure for Southeast Asia",
    description: "Powered by Logos Engine™. Bridging the gap between raw data and human understanding for the 3-9s and the elderly.",
    keywords: "AI Education Malaysia, KSSR AI Tutor, Elderly Companion Robot, Visual RAG Infrastructure, MeBao, AI Knowledge Infrastructure",
    openGraph: {
        title: "Logos Technology | AI Knowledge Infrastructure",
        description: "Powered by Logos Engine™. Transforming education and elderly care in Southeast Asia.",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
