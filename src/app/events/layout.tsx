
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Events & Workshops",
    description: "Stay updated with upcoming hackathons, training sessions, guest lectures, and workshops happening at OPJU IDEA LAB.",
};

export default function EventsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
