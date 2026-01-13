"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Sparkles, Zap, Beaker } from "lucide-react";

export function Hero() {
    return (
        <div className="relative isolate overflow-hidden bg-gray-900 h-screen min-h-[600px] flex items-center justify-center">
            {/* Background Image with Parallax-like fixed position */}
            <div className="absolute inset-0 -z-10">
                <img
                    src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80"
                    alt="Innovation Lab Background"
                    className="h-full w-full object-cover object-center opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/50 to-gray-900" />
            </div>

            {/* Floating Graphic Elements - Decoration */}
            <motion.div
                animate={{ y: [0, -20, 0], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-10 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl hidden lg:block"
            />
            <motion.div
                animate={{ y: [0, 30, 0], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-1/4 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl hidden lg:block"
            />

            <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass bg-white/5 border-white/10 text-sm text-blue-200 mb-8"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    Empowering the Next Gen of Innovators
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-5xl font-extrabold tracking-tight text-white sm:text-7xl mb-6 drop-shadow-lg"
                >
                    Where Ideas <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Take Flight</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mt-6 text-lg leading-8 text-gray-300 max-w-2xl mx-auto"
                >
                    The AICTE IDEA LAB at OP Jindal University is your playground for innovation.
                    We provide the tools, you provide the vision. Join us to prototype the future.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0 h-12 px-8 text-lg shadow-lg shadow-blue-500/25 w-full sm:w-auto">
                        Start Innovating <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <Button size="lg" variant="outline" className="glass bg-white/5 border-white/20 text-white hover:bg-white/10 hover:text-white h-12 px-8 text-lg w-full sm:w-auto">
                        Explore Facilities
                    </Button>
                </motion.div>

                {/* Feature Pills */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
                >
                    {[
                        { icon: Sparkles, text: "Ideation Studio" },
                        { icon: Beaker, text: "Prototyping Lab" },
                        { icon: Zap, text: "Commercialization" },
                    ].map((feature, i) => (
                        <div key={i} className="flex items-center justify-center gap-3 text-gray-400 glass px-6 py-4 rounded-xl border-white/5">
                            <feature.icon className="h-5 w-5 text-blue-400" />
                            <span className="font-medium text-gray-200">{feature.text}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
