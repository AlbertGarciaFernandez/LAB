"use client";

import React, { useState } from "react";
import { m } from "framer-motion";

const projectTypes = [
    "Web App / Product",
    "Infrastructure / DevOps",
    "AI & Automation",
    "Strategic Consulting",
];


export const ContactForm: React.FC = () => {
    const [selectedType, setSelectedType] = useState<string | null>(null);
    const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormState("submitting");

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name"),
            company: formData.get("company"),
            role: formData.get("role"),
            budget: formData.get("budget"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            ai_goal: formData.get("ai_goal"),
            message: formData.get("message"),
            project_type: selectedType || "Not Specified",
            _subject: "New Lead from CodeHunter Lab",
            _template: "table",
        };

        try {
            const response = await fetch("https://formsubmit.co/ajax/fdcaf086cf2933714fd96d0622e5525b", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setFormState("success");
            } else {
                setFormState("error");
            }
        } catch {
            setFormState("error");
        }
    };

    if (formState === "success") {
        return (
            <m.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-2xl mx-auto p-12 rounded-2xl bg-surface-dark border border-hunter-green/30 text-center"
            >
                <div className="w-20 h-20 bg-hunter-green/20 rounded-full flex items-center justify-center mx-auto mb-6 text-hunter-green text-4xl">
                    ✓
                </div>
                <h3 className="text-3xl font-black text-white mb-4 uppercase tracking-tight">System Initiated</h3>
                <p className="text-gray-400 text-lg">
                    We received your transmission. We&apos;ll be in touch shortly to discuss your {selectedType || "project"}.
                </p>
                <button
                    onClick={() => setFormState("idle")}
                    className="mt-8 text-sm text-hunter-green hover:text-white transition-colors underline underline-offset-4"
                >
                    Send another message
                </button>
            </m.div>
        );
    }

    return (
        <div className="w-full max-w-4xl mx-auto mt-16">
            <form onSubmit={handleSubmit} className="space-y-16">
                {/* Project Type Selection - Minimal Chips */}
                <div className="space-y-6 text-center">
                    <p className="text-sm font-mono uppercase tracking-widest text-hunter-green">
                        01 / Select Protocol
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        {projectTypes.map((type) => (
                            <button
                                key={type}
                                type="button"
                                onClick={() => setSelectedType(type)}
                                className={`px-6 py-3 rounded-full text-sm font-display font-medium transition-all duration-300 border backdrop-blur-sm ${selectedType === type
                                    ? "bg-hunter-orange text-near-black border-hunter-orange shadow-[0_0_20px_rgba(255,122,60,0.3)]"
                                    : "bg-white/5 border-white/10 text-gray-400 hover:border-white/30 hover:text-white"
                                    }`}
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Inputs - Minimal Bottom Border */}
                <div className="space-y-12">
                    <div className="text-center">
                        <p className="text-sm font-mono uppercase tracking-widest text-hunter-green">
                            02 / Input Data
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Full Name */}
                        <div className="group relative">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                required
                                autoComplete="name"
                                aria-required="true"
                                className="w-full bg-transparent border-b border-white/20 py-4 text-xl text-white focus:outline-none focus:border-hunter-green transition-colors placeholder:text-gray-600 peer"
                                placeholder=" "
                            />
                            <label
                                htmlFor="name"
                                className="absolute left-0 top-4 text-gray-500 text-xl transition-all duration-300 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-hunter-green peer-valid:-top-6 peer-valid:text-xs peer-valid:text-gray-400 pointer-events-none"
                            >
                                Full Name *
                            </label>
                        </div>

                        {/* Company */}
                        <div className="group relative">
                            <input
                                type="text"
                                name="company"
                                id="company"
                                required
                                className="w-full bg-transparent border-b border-white/20 py-4 text-xl text-white focus:outline-none focus:border-hunter-green transition-colors placeholder:text-gray-600 peer"
                                placeholder=" "
                            />
                            <label
                                htmlFor="company"
                                className="absolute left-0 top-4 text-gray-500 text-xl transition-all duration-300 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-hunter-green peer-valid:-top-6 peer-valid:text-xs peer-valid:text-gray-400 pointer-events-none"
                            >
                                Company *
                            </label>
                        </div>

                        {/* Role */}
                        <div className="group relative">
                            <input
                                type="text"
                                name="role"
                                id="role"
                                required
                                className="w-full bg-transparent border-b border-white/20 py-4 text-xl text-white focus:outline-none focus:border-hunter-green transition-colors placeholder:text-gray-600 peer"
                                placeholder=" "
                            />
                            <label
                                htmlFor="role"
                                className="absolute left-0 top-4 text-gray-500 text-xl transition-all duration-300 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-hunter-green peer-valid:-top-6 peer-valid:text-xs peer-valid:text-gray-400 pointer-events-none"
                            >
                                Role / Title *
                            </label>
                        </div>

                        {/* Budget / Goal Dropdown */}
                        <div className="group relative">
                            <select
                                name="budget"
                                id="budget"
                                required
                                defaultValue=""
                                className="w-full bg-transparent border-b border-white/20 py-4 text-xl text-white focus:outline-none focus:border-hunter-green transition-colors appearance-none cursor-pointer peer [&>option]:bg-near-black [&>option]:text-white"
                            >
                                <option value="" disabled hidden></option>
                                <option value="< €5k">Under €5k</option>
                                <option value="€5k – €15k">€5k – €15k</option>
                                <option value="€15k – €30k">€15k – €30k</option>
                                <option value="€30k – €60k">€30k – €60k</option>
                                <option value="> €60k">Over €60k</option>
                                <option value="Not sure yet">Not sure yet</option>
                            </select>
                            <label
                                htmlFor="budget"
                                className="absolute left-0 top-4 text-gray-500 text-xl transition-all duration-300 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-hunter-green peer-valid:-top-6 peer-valid:text-xs peer-valid:text-gray-400 pointer-events-none"
                            >
                                Approximate Budget *
                            </label>
                            <span className="absolute right-0 top-4 text-gray-500 pointer-events-none">▾</span>
                        </div>

                        {/* Email */}
                        <div className="group relative">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                required
                                autoComplete="email"
                                aria-required="true"
                                className="w-full bg-transparent border-b border-white/20 py-4 text-xl text-white focus:outline-none focus:border-hunter-green transition-colors placeholder:text-gray-600 peer"
                                placeholder=" "
                            />
                            <label
                                htmlFor="email"
                                className="absolute left-0 top-4 text-gray-500 text-xl transition-all duration-300 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-hunter-green peer-valid:-top-6 peer-valid:text-xs peer-valid:text-gray-400 pointer-events-none"
                            >
                                Corporate Email *
                            </label>
                        </div>

                        {/* Phone */}
                        <div className="group relative">
                            <input
                                type="tel"
                                name="phone"
                                id="phone"
                                autoComplete="tel"
                                className="w-full bg-transparent border-b border-white/20 py-4 text-xl text-white focus:outline-none focus:border-hunter-green transition-colors placeholder:text-gray-600 peer"
                                placeholder=" "
                            />
                            <label
                                htmlFor="phone"
                                className="absolute left-0 top-4 text-gray-500 text-xl transition-all duration-300 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-hunter-green peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-gray-400 pointer-events-none"
                            >
                                Phone
                            </label>
                        </div>
                    </div>

                    {/* AI Improvement Goal */}
                    <div className="group relative">
                        <input
                            type="text"
                            name="ai_goal"
                            id="ai_goal"
                            required
                            className="w-full bg-transparent border-b border-white/20 py-4 text-xl text-white focus:outline-none focus:border-hunter-green transition-colors placeholder:text-gray-600 peer"
                            placeholder=" "
                        />
                        <label
                            htmlFor="ai_goal"
                            className="absolute left-0 top-4 text-gray-500 text-xl transition-all duration-300 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-hunter-green peer-valid:-top-6 peer-valid:text-xs peer-valid:text-gray-400 pointer-events-none"
                        >
                            What would you like to improve with AI? *
                        </label>
                    </div>

                    {/* Mission Brief / Challenge */}
                    <div className="group relative">
                        <textarea
                            name="message"
                            id="message"
                            rows={1}
                            required
                            className="w-full bg-transparent border-b border-white/20 py-4 text-xl text-white focus:outline-none focus:border-hunter-green transition-colors placeholder:text-gray-600 resize-none peer max-h-60 overflow-y-auto custom-scrollbar"
                            placeholder=" "
                            onInput={(e) => {
                                e.currentTarget.style.height = 'auto';
                                e.currentTarget.style.height = e.currentTarget.scrollHeight + 'px';
                            }}
                        ></textarea>
                        <label
                            htmlFor="message"
                            className="absolute left-0 top-4 text-gray-500 text-xl transition-all duration-300 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-hunter-green peer-valid:-top-6 peer-valid:text-xs peer-valid:text-gray-400 pointer-events-none"
                        >
                            Briefly describe your main challenges or areas to optimize... *
                        </label>
                    </div>
                </div>

                {/* Honeypot antispam – hidden from real users */}
                <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

                {/* Submit Button */}
                <div className="flex justify-center pt-8">
                    <m.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        disabled={formState === "submitting"}
                        className="group relative px-12 py-5 bg-white text-near-black font-black text-xl uppercase tracking-widest rounded-full overflow-hidden transition-all hover:bg-hunter-green hover:shadow-[0_0_30px_rgba(0,230,162,0.4)] disabled:opacity-50 disabled:cursor-wait"
                    >
                        <span className="relative z-10 flex items-center gap-3">
                            {formState === "submitting" ? "Transmitting..." : "Initialize Sequence"}
                            {formState !== "submitting" && (
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            )}
                        </span>
                    </m.button>
                </div>

                {formState === "error" && (
                    <p className="text-red-500 text-center text-sm">Transmission failed. Please try again or email directly.</p>
                )}
            </form>
        </div>
    );
};
