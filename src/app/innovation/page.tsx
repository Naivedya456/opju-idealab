"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const ongoingProjects = [
    {
        title: "AI-Powered Traffic Control",
        description: "Using computer vision to optimize traffic flow in real-time.",
        team: "Visionary Squad",
        status: "Prototyping",
        image: "/images/innovation/ai_traffic_control.png",
    },
    {
        title: "Biodegradable Packaging",
        description: "Developing plant-based alternatives to single-use plastics.",
        team: "Green Future",
        status: "Testing",
        image: "/images/innovation/biodegradable_packaging.png",
    },
];

const completedProjects = [
    {
        title: "Smart Home Automation",
        description: "Voice-controlled home automation system using IoT.",
        team: "TechHome",
        year: "2023",
        image: "/images/innovation/smart_home_automation.png",
    },
    {
        title: "Solar Powered Water Purifier",
        description: "Low-cost water purification for rural areas.",
        team: "AquaPurify",
        year: "2023",
        image: "/images/innovation/solar_water_purifier.png",
    },
];

export default function InnovationPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center mb-16">
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                        >
                            Innovation & Projects
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mt-4 text-lg leading-8 text-gray-600"
                        >
                            Discover the groundbreaking projects developed by our student innovators.
                        </motion.p>
                    </div>

                    <div className="mb-20">
                        <h2 className="text-2xl font-bold tracking-tight text-primary-orange mb-8 flex items-center gap-3">
                            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                            Ongoing Projects
                        </h2>
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
                            {ongoingProjects.map((project, index) => (
                                <motion.div
                                    key={project.title}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    className="flex flex-col overflow-hidden rounded-xl border border-gray-200 shadow-sm bg-white hover:border-primary-blue/30 transition-colors"
                                >
                                    <div className="h-48 overflow-hidden bg-gray-100 relative border-b border-gray-100">
                                        <img src={project.image} alt={project.title} className="h-full w-full object-cover hover:scale-110 transition-transform duration-500" />
                                    </div>
                                    <div className="flex-1 p-6 flex flex-col justify-between">
                                        <div>
                                            <div className="flex items-center justify-between">
                                                <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                                                <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">{project.status}</span>
                                            </div>
                                            <p className="mt-4 text-gray-600">{project.description}</p>
                                            <p className="mt-2 text-sm text-gray-500 font-medium">Team: {project.team}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold tracking-tight text-primary-blue mb-8">Completed Projects</h2>
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {completedProjects.map((project, index) => (
                                <motion.div
                                    key={project.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="flex flex-col overflow-hidden rounded-xl shadow-lg border-t-4 border-primary-blue bg-white hover:transform hover:-translate-y-1 transition-transform duration-300"
                                >
                                    <div className="h-48 overflow-hidden bg-gray-200 relative">
                                        <img src={project.image} alt={project.title} className="h-full w-full object-cover hover:scale-110 transition-transform duration-500" />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-lg font-bold text-gray-900">{project.title}</h3>
                                        <p className="mt-2 text-sm text-gray-600">{project.description}</p>
                                        <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
                                            <span>Team: {project.team}</span>
                                            <span>Year: {project.year}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mt-24 text-center bg-primary-blue/5 p-10 rounded-2xl"
                    >
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Have an Idea?</h2>
                        <p className="mt-4 text-lg text-gray-600">Visit the IDEA LAB during working hours to discuss your project proposal with our coordinators.</p>
                    </motion.div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
