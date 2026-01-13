"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const projects = [
    {
        id: 1,
        title: "Smart Irrigation System",
        description: "IoT based automated irrigation system for efficient water usage in agriculture.",
        image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        team: "EcoTech Team",
    },
    {
        id: 2,
        title: "Autonomous Drone",
        description: "AI-powered drone for surveillance and delivery in remote areas.",
        image: "/images/projects/autonomous_drone.png",
        team: "SkyHigh Innovators",
    },
    {
        id: 3,
        title: "Electric Bike Prototype",
        description: "Sustainable urban mobility solution with regenerative braking.",
        image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        team: "Green Riders",
    },
    {
        id: 4,
        title: "Health Monitoring Band",
        description: "Wearable device for real-time patient health tracking.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        team: "MedTech Sol",
    },
];

export function FeaturedProjects() {
    return (
        <div className="bg-gray-50 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                    >
                        Featured Projects
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-2 text-lg leading-8 text-gray-600"
                    >
                        Showcasing the brilliance and creativity of our student innovators.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, staggerChildren: 0.2 }}
                    className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
                >
                    {projects.slice(0, 3).map((project, index) => (
                        <motion.article
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col items-start justify-between bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-transparent hover:border-gray-100"
                            whileHover={{ y: -10 }}
                        >
                            <div className="relative w-full">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="aspect-[16/9] w-full bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2] transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                            </div>
                            <div className="max-w-xl p-6">
                                <div className="flex items-center gap-x-4 text-xs">
                                    <time dateTime="2024" className="text-gray-500">
                                        2024
                                    </time>
                                    <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                                        Hardware
                                    </span>
                                </div>
                                <div className="group relative">
                                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-primary-blue transition-colors">
                                        <Link href="/innovation">
                                            <span className="absolute inset-0" />
                                            {project.title}
                                        </Link>
                                    </h3>
                                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                                        {project.description}
                                    </p>
                                </div>
                                <div className="relative mt-8 flex items-center gap-x-4">
                                    <div className="text-sm leading-6">
                                        <p className="font-semibold text-gray-900">
                                            <span className="absolute inset-0" />
                                            {project.team}
                                        </p>
                                        <p className="text-gray-600">Student Team</p>
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-12 text-center"
                >
                    <Button asChild>
                        <Link href="/innovation">View All Projects <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                </motion.div>
            </div>
        </div>
    );
}
