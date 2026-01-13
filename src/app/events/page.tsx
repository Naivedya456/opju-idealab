"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const events = [
    {
        title: "Workshop on Artificial Intelligence",
        date: "March 10, 2026",
        type: "Workshop",
        location: "Auditorium",
        description: "An introductory workshop on AI and Machine Learning.",
    },
    {
        title: "Hackathon: Code for Good",
        date: "Coming Soon",
        type: "Hackathon",
        location: "IDEA Lab",
        description: "24-hour coding challenge to solve social issues.",
    },
    {
        title: "Guest Lecture: Future of Robotics",
        date: "April 15, 2026",
        type: "Seminar",
        location: "Seminar Hall",
        description: "Lecture by industry expert on the latest trends in robotics.",
    },
];

export default function EventsPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center mb-16">
                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                        >
                            Events & Workshops
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mt-4 text-lg leading-8 text-gray-600"
                        >
                            Stay updated with the latest events, workshops, and seminars happening at IDEA LAB.
                        </motion.p>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-2">
                        {events.map((event, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                                className="flex flex-col sm:flex-row gap-6 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-primary-blue/30 transition-all cursor-pointer"
                            >
                                <div className="flex-none sm:w-32 flex flex-col items-center justify-center bg-blue-50 rounded-xl p-4 text-center">
                                    <span className="text-sm font-semibold text-primary-blue uppercase">{event.type}</span>
                                    <span className="text-xs text-gray-500 mt-1">{event.date}</span>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-gray-900">{event.title}</h3>
                                    <p className="mt-2 text-gray-600">{event.description}</p>
                                    <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
                                        <span>📍 {event.location}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
