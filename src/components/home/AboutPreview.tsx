"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function AboutPreview() {
    return (
        <div className="relative overflow-hidden bg-slate-50 py-24 sm:py-32">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] bg-blue-100 rounded-full blur-3xl opacity-50" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
                    <div className="lg:pr-8 lg:pt-4">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase">Who We Are</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                                A Hub of <span className="text-gradient">Unlimited Possibilities</span>
                            </p>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                The AICTE IDEA LAB at OP Jindal University isn't just a lab—it's an ecosystem. We bridge the gap between theoretical knowledge and real-world application.
                            </p>

                            <ul className="mt-8 space-y-4 text-gray-600">
                                {['24/7 Access to Equipment', 'Industry Expert Mentorship', 'Project Incubation Support'].map((item, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + (i * 0.1) }}
                                        className="flex items-center gap-3"
                                    >
                                        <div className="h-2 w-2 rounded-full bg-blue-500" />
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>

                            <div className="mt-10">
                                <Button asChild className="bg-slate-900 text-white hover:bg-slate-800 h-12 px-8">
                                    <Link href="/about">
                                        Read Our Story <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative lg:order-last"
                    >
                        {/* Main Image */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-900/10">
                            <img
                                src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80"
                                alt="Robotics Lab"
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />
                        </div>

                        {/* Floating Card Detail */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="absolute -bottom-10 -left-10 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block border border-gray-100"
                        >
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-xl">
                                    A+
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Accredited by</p>
                                    <p className="font-bold text-gray-900">AICTE, Govt. of India</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
