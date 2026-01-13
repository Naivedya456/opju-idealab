import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function AboutPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center mb-16">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About IDEA LAB</h1>
                        <p className="mt-4 text-lg leading-8 text-gray-600">
                            Fostering a culture of innovation and entrepreneurship.
                        </p>
                    </div>

                    <div className="space-y-16">
                        <section>
                            <h2 className="text-2xl font-bold text-primary-blue mb-4">Vision & Mission</h2>
                            <p className="text-lg text-gray-600 mb-4">
                                To empower students and faculty to translate their creative ideas into tangible products and viable business models.
                            </p>
                            <p className="text-lg text-gray-600">
                                We aim to create an ecosystem that supports ideation, prototyping, and commercialization, contributing to the self-reliance of our nation.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-primary-blue mb-4">AICTE Mandate</h2>
                            <p className="text-lg text-gray-600">
                                The AICTE IDEA (Idea Development, Evaluation & Application) Lab is a scheme aimed at encouraging students to application of science, technology engineering and mathematics (STEM) fundamentals towards enhanced hands-on experience, learning by doing and even product visualization.
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
