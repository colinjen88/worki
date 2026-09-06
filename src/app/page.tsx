import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CoreExpertise } from "@/components/CoreExpertise";
import { FeaturedCaseStudies } from "@/components/FeaturedCaseStudies";
import { HomeWorks } from "@/components/HomeWorks";
import { WhyMe } from "@/components/WhyMe";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

const profileJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  name: "WANG 前端設計工程師作品集",
  url: "https://let.gowork.run/",
  inLanguage: "zh-TW",
  mainEntity: {
    "@type": "Person",
    name: "WANG",
    url: "https://let.gowork.run/",
    jobTitle: "前端設計工程師",
    knowsAbout: [
      "Frontend Engineering",
      "UI/UX Design",
      "Responsive Web Design",
      "Motion Design",
      "Search Engine Optimization",
    ],
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileJsonLd) }}
      />
      <div className="site-shell">
        <Navbar />
        <main id="main-content">
          <Hero />
          <CoreExpertise />
          <FeaturedCaseStudies />
          <HomeWorks />
          <WhyMe />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </>
  );
}
