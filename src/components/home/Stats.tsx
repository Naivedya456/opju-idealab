"use client";

import { Trophy, Users, Lightbulb, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export function Stats() {
    const stats = [
        { id: 1, name: 'Projects Completed', value: '150+', icon: Trophy, color: "text-yellow-500", bg: "bg-yellow-500/10" },
        { id: 2, name: 'Students Benefited', value: '500+', icon: Users, color: "text-blue-500", bg: "bg-blue-500/10" },
        { id: 3, name: 'Equipment Available', value: '25+', icon: Lightbulb, color: "text-green-500", bg: "bg-green-500/10" },
        { id: 4, name: 'Workshops Conducted', value: '40+', icon: Calendar, color: "text-purple-500", bg: "bg-purple-500/10" },
    ]

    return (
        <div className="relative py-24 sm:py-32 overflow-hidden">
            {/* Decorative blobs */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-3xl rounded-full -z-10" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl"
                        >
                            Our Impact in <span className="text-gradient">Numbers</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mt-4 text-lg leading-8 text-gray-600 max-w-xl mx-auto"
                        >
                            Driving innovation and fostering creativity across the campus through tangible results and active participation.
                        </motion.p>
                    </div>

                    <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="glass glass-hover p-8 rounded-2xl flex flex-col items-center text-center relative overflow-hidden group"
                            >
                                <div className={`p-4 rounded-xl ${stat.bg} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
                                </div>
                                <dt className="text-sm font-semibold leading-6 text-gray-500 uppercase tracking-wider">{stat.name}</dt>
                                <dd className="text-4xl font-bold tracking-tight text-gray-900 mt-2">{stat.value}</dd>

                                {/* Hover shine effect */}
                                {/* Hover shine effect removed to fix diagonal line issue */}
                            </motion.div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
}
