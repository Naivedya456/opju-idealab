import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center mb-16">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h1>
                        <p className="mt-4 text-lg leading-8 text-gray-600">
                            Get in touch with us for collaborations, inquiries, or visits.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                            <dl className="space-y-6 text-base text-gray-600">
                                <div className="flex gap-4">
                                    <dt className="flex-none">
                                        <span className="sr-only">Address</span>
                                        <MapPin className="h-6 w-6 text-primary-orange" aria-hidden="true" />
                                    </dt>
                                    <dd>
                                        OP Jindal University,<br />
                                        Punjipathra, Raigarh, <br />
                                        Chhattisgarh 496109
                                    </dd>
                                </div>
                                <div className="flex gap-4">
                                    <dt className="flex-none">
                                        <span className="sr-only">Telephone</span>
                                        <Phone className="h-6 w-6 text-primary-orange" aria-hidden="true" />
                                    </dt>
                                    <dd>
                                        <a href="tel:+917008001521" className="hover:text-primary-blue">+91 7008001521</a>
                                    </dd>
                                </div>
                                <div className="flex gap-4">
                                    <dt className="flex-none">
                                        <span className="sr-only">Email</span>
                                        <Mail className="h-6 w-6 text-primary-orange" aria-hidden="true" />
                                    </dt>
                                    <dd>
                                        <a href="mailto:idealab@opju.ac.in" className="hover:text-primary-blue">idealab@opju.ac.in</a>
                                    </dd>
                                </div>
                            </dl>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                            <h2 className="text-xl font-bold text-gray-900 mb-6">Visit Us</h2>
                            <p className="text-gray-600 mb-4">The IDEA LAB is open for visits and project discussions during working hours.</p>
                            <div className="p-4 bg-primary-blue/5 rounded-lg">
                                <h3 className="font-semibold text-gray-900">Working Hours</h3>
                                <p className="text-gray-600 mt-2">Monday - Friday: 9:00 AM - 5:00 PM</p>
                                <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
