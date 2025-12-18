import React from "react";
import Link from "next/link";
import { TechIcons } from "../ui/TechIcons"; // Assuming TechIcons might have social icons or I can use simple text/similar

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-near-black border-t border-white/5 pt-16 pb-8 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
                    {/* Brand / Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-black uppercase tracking-tighter text-white">
                            CodeHunter <span className="text-hunter-green">Lab</span>
                        </h3>
                        <div className="flex flex-col space-y-1 text-gray-400">
                            <span className="font-medium text-white">Albert Garcia</span>
                            <a
                                href="mailto:albert@codehunterlab.com"
                                className="hover:text-hunter-orange transition-colors"
                            >
                                albert@codehunterlab.com
                            </a>
                        </div>
                    </div>

                    {/* Navigation / Links (Optional, can keep simple as per request only naming data) */}
                    <div className="flex gap-6">
                        {/* Social placeholders or links if we had them. 
                For now, keeping it minimal as requested. 
            */}
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-gray-500 uppercase tracking-wider">
                    <p>&copy; {currentYear} CodeHunter Lab. All rights reserved.</p>
                    <p className="mt-2 md:mt-0">
                        Designed & Engineered by <span className="text-hunter-green">Albert Garcia</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
