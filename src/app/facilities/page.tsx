"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const facilities = [
    {
        category: "3D Printing & Scanning",
        items: [
            { name: "3D Printing", image: "/images/facilities/3d_printing.png", description: "Advanced FDM and Resin 3D printing capabilities." },
            { name: "3D Scanner", image: "/images/facilities/3d_scanner.png", description: "High-precision 3D scanning for reverse engineering." },
        ]
    },
    {
        category: "CNC & Fabrication",
        items: [
            { name: "CNC Laser Cutter", image: "/images/facilities/cnc_laser.png", description: "Precision cutting and engraving for various materials." },
            { name: "CNC Wood Router", image: "/images/facilities/cnc_router.png", description: "Computer-controlled cutting used for woodworking." },
            { name: "Vinyl Cutter", image: "/images/facilities/vinyl_cutter.png", description: "Precision vinyl cutting for stickers and decals." },
            { name: "Mechanical Handtools", image: "/images/facilities/handtools.png", description: "Comprehensive set of tools for manual fabrication." },
        ]
    },
    {
        category: "Electronics & Branding",
        items: [
            { name: "PCB Designing Set-up", image: "/images/facilities/pcb_design.png", description: "Complete workstation for PCB design and prototyping." },
            { name: "Sublimation Printing Set-up", image: "/images/facilities/sublimation.png", description: "Equipment for transferring designs onto materials." },
        ]
    }
];

export default function FacilitiesPage() {
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
                            Facilities & Equipment
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mt-4 text-lg leading-8 text-gray-600"
                        >
                            Explore our state-of-the-art tools and machinery available for your innovation journey.
                        </motion.p>
                    </div>

                    <div className="space-y-20">
                        {facilities.map((section, sectionIndex) => (
                            <motion.div
                                key={section.category}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
                            >
                                <h2 className="text-2xl font-bold tracking-tight text-primary-blue mb-8 border-b pb-4">{section.category}</h2>
                                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                                    {section.items.map((item, itemIndex) => (
                                        <motion.div
                                            key={item.name}
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            whileHover={{ scale: 1.02 }}
                                            transition={{ duration: 0.3, delay: itemIndex * 0.1 }}
                                            className="group relative overflow-hidden rounded-2xl bg-gray-100 shadow-sm hover:shadow-xl transition-all"
                                        >
                                            <div className="aspect-[3/2] w-full overflow-hidden bg-gray-200">
                                                <img src={item.image} alt={item.name} className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300" />
                                            </div>
                                            <div className="p-6">
                                                <h3 className="text-lg font-semibold leading-6 text-gray-900">
                                                    {item.name}
                                                </h3>
                                                <p className="mt-2 text-sm leading-6 text-gray-600">{item.description}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="mt-20 rounded-2xl bg-primary-blue/5 p-10 text-center"
                    >
                        <h3 className="text-lg font-semibold text-primary-blue">Need training on these machines?</h3>
                        <p className="mt-2 text-gray-600">We conduct regular workshops and certification programs. Check our Events page for upcoming sessions.</p>
                    </motion.div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
