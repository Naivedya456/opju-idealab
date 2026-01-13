
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Facilities & Equipment",
    description: "Explore our advanced manufacturing tools including 3D Printers, CNC Machines, Laser Cutters, PCB Stations, and more available at OPJU IDEA LAB.",
};

export default function FacilitiesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
