import Link from "next/link";
import { Calendar, MapPin, Clock } from "lucide-react";

const events = [
    {
        id: 1,
        title: "IoT Workshop for Beginners",
        date: "Feb 15, 2026",
        time: "10:00 AM - 4:00 PM",
        location: "IDEA Lab Main Hall",
        description: "Hands-on session on Arduino and ESP8266 programming.",
        type: "Workshop",
    },
    {
        id: 2,
        title: "3D Printing Masterclass",
        date: "Feb 22, 2026",
        time: "2:00 PM - 5:00 PM",
        location: "Prototyping Lab",
        description: "Learn the basics of 3D modeling and printing.",
        type: "Training",
    },
    {
        id: 3,
        title: "Innovation Hackathon 2026",
        date: "Coming Soon",
        time: "TBA",
        location: "Campus Auditorium",
        description: "24-hour hackathon to solve real-world problems.",
        type: "Hackathon",
    },
];

export function EventsPreview() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Upcoming Events</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Join our workshops, seminars, and hackathons to skill up.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {events.map((event) => (
                        <article key={event.id} className="flex flex-col items-start justify-between bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-x-4 text-xs">
                                <time dateTime={event.date} className="text-gray-500 font-medium">
                                    {event.date}
                                </time>
                                <span className="relative z-10 rounded-full bg-blue-50 px-3 py-1.5 font-medium text-primary-blue hover:bg-blue-100">
                                    {event.type}
                                </span>
                            </div>
                            <div className="group relative">
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-primary-blue transition-colors">
                                    <Link href="/events">
                                        <span className="absolute inset-0" />
                                        {event.title}
                                    </Link>
                                </h3>
                                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                                    {event.description}
                                </p>
                            </div>
                            <div className="mt-6 flex flex-col gap-2 text-sm text-gray-500 w-full">
                                <div className="flex items-center gap-2">
                                    <Clock className="h-4 w-4 text-gray-400" />
                                    {event.time}
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin className="h-4 w-4 text-gray-400" />
                                    {event.location}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}
