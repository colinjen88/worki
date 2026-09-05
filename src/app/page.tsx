"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CoreExpertise } from "@/components/CoreExpertise";
import { WorksSection } from "@/components/WorksSection";
import { WhyMe } from "@/components/WhyMe";
import { Footer } from "@/components/Footer";
import { VideoModal } from "@/components/VideoModal";

export default function Home() {
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 z-[70] transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      <Navbar />

      <main id="main-content" className="relative z-10">
        <Hero />
        <CoreExpertise />
        <WorksSection onOpenVideo={(url) => setActiveVideoUrl(url)} />
        <WhyMe />
      </main>

      <Footer />

      <VideoModal
        isOpen={!!activeVideoUrl}
        videoUrl={activeVideoUrl}
        onClose={() => setActiveVideoUrl(null)}
      />
    </>
  );
}
