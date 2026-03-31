import { AboutSection } from "@/components/sections/AboutSection";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { ImpactStats } from "@/components/sections/ImpactStats";
import { Mission } from "@/components/sections/Mission";
import { Navbar } from "@/components/sections/Navbar";
import { Programs } from "@/components/sections/Programs";
import { SocialMediaKit } from "@/components/sections/SocialMediaKit";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <Programs />
        <ImpactStats />
        <AboutSection />
        <SocialMediaKit />
      </main>
      <Footer />
    </div>
  );
}
