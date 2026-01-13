import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Stats } from "@/components/home/Stats";
import { AboutPreview } from "@/components/home/AboutPreview";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { EventsPreview } from "@/components/home/EventsPreview";
import { AchievementsHighlight } from "@/components/home/AchievementsHighlight";
import { CallToAction } from "@/components/home/CallToAction";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Stats />
        <AboutPreview />
        <FeaturedProjects />
        <EventsPreview />
        {/* <AchievementsHighlight /> */}
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
