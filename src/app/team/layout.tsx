
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Team & Mentors",
    description: "Meet the dedicated faculty mentors, industry experts, and student ambassadors driving innovation at OPJU IDEA LAB.",
};

export default function TeamLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
