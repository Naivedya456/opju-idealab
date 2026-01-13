
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Innovation & Projects",
    description: "Showcasing groundbreaking student projects in IoT, Robotics, Sustainable Tech, and Automation developed at OPJU IDEA LAB.",
};

export default function InnovationLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
