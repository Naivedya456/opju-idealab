"use client";

import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative z-10 bg-[#222222] text-gray-300 font-sans border-t-8 border-primary-orange">
            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Column 1: University Info */}
                    <div className="space-y-4">
                        <h3 className="text-white text-lg font-bold uppercase mb-4 border-l-4 border-primary-orange pl-3">Contact Us</h3>
                        <p className="text-sm leading-6">
                            <strong>OP Jindal University</strong><br />
                            Punjipathra, Raigarh<br />
                            Chhattisgarh - 496109
                        </p>
                        <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary-orange" /> 1800 1200 1000</div>
                            <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary-orange" /> info@opju.ac.in</div>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-white text-lg font-bold uppercase mb-4 border-l-4 border-primary-orange pl-3">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            {[
                                { name: 'About Us', href: '/about' },
                                { name: 'Facilities', href: '/facilities' },
                                { name: 'Innovation Projects', href: '/innovation' },
                                { name: 'Events & Workshops', href: '/events' },
                                { name: 'Student Team', href: '/team' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="hover:text-primary-orange hover:pl-1 transition-all no-underline">» {item.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Important Links */}
                    <div className="space-y-4">
                        <h3 className="text-white text-lg font-bold uppercase mb-4 border-l-4 border-primary-orange pl-3">Important Links</h3>
                        <ul className="space-y-2 text-sm">
                            {[
                                { name: 'AICTE Website', href: 'https://www.aicte-india.org/' },
                                { name: 'Ministry of Education', href: 'https://www.education.gov.in/' },
                                { name: 'Startup India', href: 'https://www.startupindia.gov.in/' },
                                { name: 'OPJU Main Site', href: 'https://www.opju.ac.in/' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} target="_blank" rel="noopener noreferrer" className="hover:text-primary-orange hover:pl-1 transition-all no-underline">» {item.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Newsletter/Map */}
                    <div className="space-y-4">
                        <h3 className="text-white text-lg font-bold uppercase mb-4 border-l-4 border-primary-orange pl-3">Locate Us</h3>
                        <div className="h-40 w-full bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
                            <iframe
                                className="pointer-events-none"
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                scrolling="no"
                                marginHeight={0}
                                marginWidth={0}
                                src="https://www.openstreetmap.org/export/embed.html?bbox=83.3300,22.0400,83.3700,22.0800&amp;layer=mapnik&amp;marker=22.06177,83.35035"
                                title="OP Jindal University Location"
                            ></iframe>
                        </div>
                        <div className="mt-2 text-xs text-gray-500 hover:text-primary-orange">
                            <a href="https://www.openstreetmap.org/?mlat=22.06177&amp;mlon=83.35035#map=15/22.06177/83.35035" target="_blank" rel="noopener noreferrer">View Larger Map</a>
                        </div>
                        {/* <div className="flex gap-4 mt-6">
                            <Link href="#" className="bg-gray-700 p-2 rounded-full hover:bg-primary-blue transition-colors text-white"><Facebook className="h-4 w-4" /></Link>
                            <Link href="#" className="bg-gray-700 p-2 rounded-full hover:bg-primary-blue transition-colors text-white"><Twitter className="h-4 w-4" /></Link>
                            <Link href="#" className="bg-gray-700 p-2 rounded-full hover:bg-primary-blue transition-colors text-white"><Linkedin className="h-4 w-4" /></Link>
                            <Link href="#" className="bg-gray-700 p-2 rounded-full hover:bg-primary-blue transition-colors text-white"><Instagram className="h-4 w-4" /></Link>
                        </div> */}
                    </div>
                </div>
            </div>

            {/* Copyright Bar */}
            <div className="bg-black/30 py-6 border-t border-gray-800">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-gray-500">
                        © {currentYear} OP Jindal University. All Rights Reserved.
                    </p>
                    <p className="text-xs text-gray-500">
                        Designed & Developed by <span className="text-primary-orange">IDEA LAB Team</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
