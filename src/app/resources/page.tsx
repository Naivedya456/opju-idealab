import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function ResourcesPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center mb-16">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Resources</h1>
                        <p className="mt-4 text-lg leading-8 text-gray-600">
                            Download guidelines, templates, and learning materials.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {["Project Proposal Template", "Equipment Safety Guide", "Idea Lab Brochure", "Mentorship Application Form"].map((item) => (
                            <div key={item} className="flex items-center justify-between p-6 bg-gray-50 rounded-xl border border-gray-100 hover:border-primary-blue/50 transition-colors">
                                <span className="font-semibold text-gray-800">{item}</span>
                                <Button variant="ghost" size="icon">
                                    <Download className="h-5 w-5 text-gray-500" />
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
