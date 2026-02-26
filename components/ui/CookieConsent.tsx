"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CookieIcon, XIcon } from "@phosphor-icons/react/dist/ssr";


export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            // Small delay for better UX on initial load
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookie-consent", "accepted");
        window.dispatchEvent(new Event("cookie-consent-update"));
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem("cookie-consent", "declined");
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="fixed bottom-6 left-6 z-[100] max-w-[calc(100vw-3rem)] md:max-w-md"
                >
                    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-near-black/80 p-6 backdrop-blur-xl shadow-2xl">
                        {/* Enchanted background glow */}
                        <div className="absolute -top-10 -left-10 h-32 w-32 bg-purple-500/20 blur-3xl rounded-full pointer-events-none" />
                        <div className="absolute -bottom-10 -right-10 h-32 w-32 bg-blue-500/20 blur-3xl rounded-full pointer-events-none" />

                        <div className="relative z-10 flex flex-col gap-4">
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10">
                                        <CookieIcon className="h-5 w-5 text-purple-400" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white font-display">
                                        Cookies & Magic
                                    </h3>
                                </div>
                                <button
                                    onClick={handleDecline}
                                    className="rounded-full p-1 text-white/50 hover:bg-white/10 hover:text-white transition-colors"
                                >
                                    <XIcon className="h-5 w-5" />
                                    <span className="sr-only">Close</span>
                                </button>
                            </div>

                            <p className="text-sm text-gray-300 leading-relaxed">
                                We use cookies to enhance your experience and analyze our traffic.
                                Just enough to make the magic work, no creepy tracking.
                            </p>

                            <div className="flex gap-3 pt-2">
                                <button
                                    onClick={handleAccept}
                                    className="flex-1 rounded-full bg-white text-black px-4 py-2.5 text-sm font-medium hover:bg-gray-200 transition-colors shadow-lg shadow-white/10"
                                >
                                    Accept All
                                </button>
                                <button
                                    onClick={handleDecline}
                                    className="flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white hover:bg-white/10 transition-colors"
                                >
                                    Necessary Only
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
