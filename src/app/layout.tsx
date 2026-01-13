import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "AICTE IDEA LAB | OP Jindal University",
    template: "%s | OPJU IDEA LAB",
  },
  description: "OP Jindal University AICTE IDEA LAB - A state-of-the-art facility for students to Innovate, Ideate, and Implement. Exploring 3D Printing, IoT, Robotics, and more.",
  keywords: ["AICTE", "IDEA LAB", "OP Jindal University", "Innovation", "3D Printing", "IoT", "Robotics", "Engineering", "Projects", "Raigarh", "Chhattisgarh"],
  authors: [{ name: "OPJU IDEA LAB Team" }],
  creator: "OP Jindal University",
  publisher: "OP Jindal University",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://idealab.opju.ac.in",
    siteName: "OPJU AICTE IDEA LAB",
    title: "AICTE IDEA LAB | OP Jindal University",
    description: "Empowering young minds to turn ideas into reality with advanced manufacturing and digital fabrication tools.",
    images: [
      {
        url: "/idealab.png", // Assuming we will have this, or fallback
        width: 1200,
        height: 630,
        alt: "OPJU IDEA LAB",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AICTE IDEA LAB | OP Jindal University",
    description: "Where innovation meets implementation. Join us at OPJU IDEA LAB.",
    creator: "@OPJU_Raigarh",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(openSans.className, "antialiased min-h-screen flex flex-col bg-background")}>
        {children}
      </body>
    </html>
  );
}
