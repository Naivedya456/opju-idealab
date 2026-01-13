"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";

const teamData = [
    {
        sectionTitle: "Board of Directors",
        members: [
            {
                name: "Dr. RD Patidar",
                role: "Vice Chancellor, OPJU",
                image: "/images/team/1.png",
            },
            {
                name: "Mr. DK Saraogi",
                role: "ED, JSPL, Raigarh",
                image: "/images/team/2.png",
            },
            {
                name: "Mr. SS Rathi",
                role: "Plant Head, NSPL",
                image: "/images/team/3.png",
            },
        ],
    },
    {
        sectionTitle: "Office Bearers",
        members: [
            {
                name: "Dr. Deepayan Priyadarshi",
                role: "Chief Executive Officer",
                image: "/images/team/4.png",
            },
            {
                name: "Dr. Himanshu Vaishnaw",
                role: "Chief Marketing Officer",
                image: "/images/team/32.png",
            },
            {
                name: "Mr. Avimanyu Kumar",
                role: "Head of Finance",
                image: "/images/team/profile.png",
            },
        ],
    },
    {
        sectionTitle: "Technical Team",
        members: [
            {
                name: "Mr. Roshan Nahak",
                role: "Software Engineer",
                image: "/images/team/roshan.jpeg",
            },
            {
                name: "Mr. Dukhishyama Muduli",
                role: "Training Executive",
                image: "/images/team/dukhi.jpg",
            },
            {
                name: "Mr. Gyaneesh Bhatt",
                role: "Incubation Manager",
                image: "/images/team/gyanesh.jpeg",
            },
        ],
    },
    {
        sectionTitle: "External Advisory Committee",
        members: [
            {
                name: "Mr. Jussi Salonen",
                role: "Hub Master, (Start-up Support & Visitors Helsinki XR Center)",
                image: "/images/team/jussi.jpeg",
            },
            {
                name: "Mr. Anuj Batra",
                role: "Director, (Abstrat Partner)",
                image: "/images/team/7.jpg",
            },
            {
                name: "Mr. Vishal Pillai",
                role: "Program Manager Innovation Lead, (KPIT, Pune)",
                image: "/images/team/8.jpg",
            },
            {
                name: "Mr. Brahmanand Patil",
                role: "President & MD, Automotive Leadership, (VECTOR Informatik)",
                image: "/images/team/9.jpg",
            },
            {
                name: "Mr. Bhavesh Kumar",
                role: "Managing Director, (Vias3D India)",
                image: "/images/team/profile.png",
            },
            {
                name: "Mr. Subhranshu Panda",
                role: "Assistant Director, (EY Global Delivery Services India LLP)",
                image: "/images/team/profile.png",
            },
            {
                name: "Mr. Siddharth Samal",
                role: "Software Engineer, (Microsoft)",
                image: "/images/team/10.png",
            },
            {
                name: "Mr. Biswamadhab Mohanty",
                role: "Senior Software Engineer, (Microsoft)",
                image: "/images/team/11.png",
            },
            {
                name: "Mr. Gaurav Girija Shukla",
                role: "Founder, (Sangyaa PR, Raipur)",
                image: "/images/team/12.jpg",
            },
            {
                name: "Mr. Ravindra Singh Kshatri",
                role: "Founder, (Jivandeep Health Services)",
                image: "/images/team/ravindra.jpeg",
            },
        ],
    },
    {
        sectionTitle: "Internal Advisory Committee",
        members: [
            {
                name: "Dr. R Nayak",
                role: "Professor and Head - Computer Science Engineering, OPJU",
                image: "/images/team/15.png",
            },
            {
                name: "Dr. Shesadev Nayak",
                role: "Director - Career Development Center, OPJU",
                image: "/images/team/31.png",
            },
            {
                name: "Dr. Girish Mishra",
                role: "Associate Dean & Professor - School of Science, OPJU",
                image: "/images/team/16.png",
            },
            {
                name: "Dr. S. Das",
                role: "Steel Chair Professor and Head - Metallurgical Engineering, OPJU",
                image: "/images/team/17.png",
            },
        ],
    },
    {
        sectionTitle: "Innovation Ambassadors",
        members: [
            {
                name: "Prof Bhupendra Tripathi",
                role: "Assistant Professor(SOM)",
                image: "/images/team/19.png",
            },
            {
                name: "Dr. Vikas Kumar",
                role: "Assistant Professor(SOM)",
                image: "/images/team/21.png",
            },
            {
                name: "Dr. Trinath Talapneni",
                role: "Sr. Assistant Professor(SOE)",
                image: "/images/team/25.png",
            },
            {
                name: "Dr. Swapnasarit Kar",
                role: "Sr. Assistant Professor(SOE)",
                image: "/images/team/26.png",
            },
            {
                name: "Prof. Umashankar Pandey",
                role: "Sr. Assistant Professor(SOE)",
                image: "/images/team/27.png",
            },
            {
                name: "Dr. Sandeep Biswal",
                role: "Sr. Assistant Professor(SOE)",
                image: "/images/team/28.png",
            },
            {
                name: "Dr. Gopal Krishna",
                role: "Assistant Professor(SOE)",
                image: "/images/team/gopal_krishna.jpg",
            },
            {
                name: "Dr. Taniya Sengupta",
                role: "Assistant Professor(SOE)",
                image: "/images/team/taniya_sengupta.jpg",
            },
            {
                name: "Pradeep Kumar Shriwas",
                role: "Assistant Professor(SOE)",
                image: "/images/team/pradeep_shriwas.jpg",
            },
            {
                name: "Dr. Arti Vaish",
                role: "Assistant Professor(SOE)",
                image: "/images/team/arti_vaish.jpg",
            },
            {
                name: "Dr. Kavita Patel",
                role: "Assistant Professor(SOE)",
                image: "/images/team/kavita_patel.jpg",
            },
            {
                name: "Dr. Vatsala Chaturvedi",
                role: "Sr. Assistant Professor(SOE)",
                image: "/images/team/33.png",
            },
            {
                name: "Dr. Swati",
                role: "Assistant Professor(SOE)",
                image: "/images/team/swati.jpg",
            },
            {
                name: "Dr. Rekha Sharma",
                role: "Associate Professor(SOM)",
                image: "/images/team/22.png",
            },
            {
                name: "Dr. Pushpanjali Sarangi",
                role: "Assistant Professor(SOE)",
                image: "/images/team/pushpanjali_sarangi.jpg",
            },
            {
                name: "Dr. Shradha",
                role: "Assistant Professor(SOE)",
                image: "/images/team/shradha.jpg",
            },
            {
                name: "Dr. Prasenjit Biswas",
                role: "Sr. Assistant Professor(SOE)",
                image: "/images/team/34.jpg",
            },
            {
                name: "Dr. Nidhi Khobragade",
                role: "Assistant Professor(SOE)",
                image: "/images/team/35.jpg",
            },
            {
                name: "Rakesh Patidar",
                role: "Assistant Professor(SOE)",
                image: "/images/team/rakesh_patidar.jpg",
            },
            {
                name: "Dr. Sushree Diptimayee Swain",
                role: "Assistant Professor(SOE)",
                image: "/images/team/Sushree.png",
            },
            {
                name: "Dr. Sanjay Singh",
                role: "Professor (SOS)",
                image: "/images/team/29.png",
            },
            {
                name: "Dr. R.S. Singh",
                role: "Associate Professor(SOS)",
                image: "/images/team/30.png",
            },
        ],
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5 },
    },
};

export default function TeamPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 bg-white">
                {/* Hero Section */}
                <div className="bg-primary-blue py-16 sm:py-24">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">The Innovation Team</h1>
                            <p className="mt-6 text-lg leading-8 text-blue-100 max-w-2xl mx-auto">
                                Pioneering the future through innovation, research, and collaborative excellence since our establishment.
                            </p>
                        </motion.div>
                    </div>
                </div>

                <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-24">
                    {teamData.map((section, idx) => (
                        <motion.div
                            key={idx}
                            className="mb-20"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={containerVariants}
                        >
                            <div className="border-l-4 border-primary-orange pl-4 mb-10">
                                <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                                    {section.sectionTitle}
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
                                {section.members.map((member, index) => (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100"
                                    >
                                        <img
                                            className="h-16 w-16 rounded-full object-cover ring-2 ring-primary-blue/20"
                                            src={member.image}
                                            alt={member.name}
                                        />
                                        <div>
                                            <h3 className="text-sm font-bold text-gray-900 leading-tight">{member.name}</h3>
                                            <p className="text-xs font-medium text-primary-orange mt-1">{member.role}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}
