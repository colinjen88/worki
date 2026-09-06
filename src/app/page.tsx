"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CoreExpertise } from "@/components/CoreExpertise";
import { FeaturedCaseStudies } from "@/components/FeaturedCaseStudies";
import { WorksSection } from "@/components/WorksSection";
import { WhyMe } from "@/components/WhyMe";
import { Footer } from "@/components/Footer";
import { VideoModal } from "@/components/VideoModal";
import { BackToTop } from "@/components/BackToTop";

export default function Home() {
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);

  return (
    <div className="site-shell">
      <Navbar />
      <main id="main-content">
        <Hero />
        <CoreExpertise />
        <FeaturedCaseStudies />
        <WorksSection onOpenVideo={setActiveVideoUrl} />
        <WhyMe />
      </main>
      <Footer />
      <BackToTop />
      <VideoModal
        isOpen={Boolean(activeVideoUrl)}
        videoUrl={activeVideoUrl}
        onClose={() => setActiveVideoUrl(null)}
      />
    </div>
  );
}
