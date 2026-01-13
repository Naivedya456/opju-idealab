import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Award, Star } from "lucide-react";

const awards = [
    {
        title: "Best Innovation Hub 2023",
        organization: "State Government",
        date: "August 2023",
        description: "Awarded for exceptional contribution to student entrepreneurship."
    },
    {
        title: "National Patent Grant",
        organization: "Indian Patent Office",
        date: "July 2023",
        description: "Patent granted for 'Smart Waste Management System'."
    }
];

export default function AchievementsPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center mb-16">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Achievements</h1>
                        <p className="mt-4 text-lg leading-8 text-gray-600">
                            Celebrating excellence and recognition.
                        </p>
                    </div>

                    <div className="space-y-12">
                        {awards.map((award, index) => (
                            <div key={index} className="flex flex-col sm:flex-row gap-6 items-center bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                                <div className="bg-yellow-100 p-4 rounded-full">
                                    <Award className="h-8 w-8 text-yellow-600" />
                                </div>
                                <div className="text-center sm:text-left">
                                    <h3 className="text-xl font-bold text-gray-900">{award.title}</h3>
                                    <p className="text-sm text-primary-blue font-medium mt-1">{award.organization} | {award.date}</p>
                                    <p className="mt-4 text-gray-600">{award.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
