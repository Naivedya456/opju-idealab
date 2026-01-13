"use client";

import { useState } from "react";
import Link from "next/link";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail } from "lucide-react";

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="bg-primary-blue shadow-md relative z-50 font-sans">
            {/* Top Bar - OPJU Style */}
            <div className="bg-dark-charcoal text-white py-1 px-4 text-xs font-medium hidden lg:block border-b border-white/10">
                <div className="mx-auto max-w-7xl flex justify-between items-center">
                    <div className="flex gap-4">
                        <a href="tel:+911234567890" className="flex items-center gap-1 hover:text-primary-orange transition-colors"><Phone className="h-3 w-3" /> +91 12345 67890</a>
                        <a href="mailto:idealab@opju.ac.in" className="flex items-center gap-1 hover:text-primary-orange transition-colors"><Mail className="h-3 w-3" /> idealab@opju.ac.in</a>
                    </div>
                    <div className="flex gap-4 items-center">
                        <div className="flex gap-2 border-r border-gray-600 pr-4">
                            <Link href="https://opju.ac.in" className="hover:text-primary-orange transition-colors">Main Website</Link>
                            {/* <Link href="#" className="hover:text-primary-orange transition-colors">Alumni</Link> */}
                        </div>
                        {/* <div className="flex gap-3 text-gray-400">
                            <a href="#" className="hover:text-primary-orange transition-colors"><Facebook className="h-3 w-3" /></a>
                            <a href="#" className="hover:text-primary-orange transition-colors"><Twitter className="h-3 w-3" /></a>
                            <a href="#" className="hover:text-primary-orange transition-colors"><Linkedin className="h-3 w-3" /></a>
                            <a href="#" className="hover:text-primary-orange transition-colors"><Instagram className="h-3 w-3" /></a>
                        </div> */}
                    </div>
                </div>
            </div>

            <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1 items-center gap-4">
                    <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-4">
                        <img src="/opju.png" alt="OP Jindal University" className="h-16 w-auto" />
                        <div className="h-12 w-[1px] bg-white/20 mx-2 hidden sm:block"></div>
                        <img src="/naac.png" alt="NAAC A Grade" className="h-14 w-auto hidden sm:block" />

                        <div className="h-12 w-[1px] bg-white/20 mx-2 hidden sm:block"></div>
                        <img src="/idealab.png" alt="AICTE IDEA LAB" className="h-14 w-auto" />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-8 items-center">
                    {['Facilities', 'Innovation', 'Events', 'Team', 'Contact'].map((item) => (
                        <Link
                            key={item}
                            href={`/${item.toLowerCase()}`}
                            className="text-sm font-bold uppercase text-white hover:text-primary-orange transition-colors tracking-wide"
                        >
                            {item}
                        </Link>
                    ))}
                </Popover.Group>
            </nav>

            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-50" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">OPJU IDEA LAB</span>
                            <img src="/opju.png" alt="OPJU" className="h-10 w-auto" />
                        </Link>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {['Facilities', 'Innovation', 'Events', 'Team'].map((item) => (
                                    <Link
                                        key={item}
                                        href={`/${item.toLowerCase()}`}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item}
                                    </Link>
                                ))}
                            </div>
                            <div className="py-6">
                                <Link href="/contact" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    );
}
