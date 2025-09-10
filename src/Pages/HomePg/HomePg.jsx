import { useEffect } from "react";
import HeroSection from "../../Components/HeroSection/HeroSection";
import BannerSection from "../../Components/BannerSection/BannerSection";
import FAQSection from "../../Components/FAQSection/FAQSection";
import Services from "../../Components/Services/Services";
import AboutSection from "../../Components/AboutSection/AboutSection";

export default function HomePg() {
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const section = document.getElementById(hash);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 100); // slight delay to ensure sections are rendered
      }
    }
  }, []);

  return (
    <div className="home-page">
      <HeroSection
        heading1="Transforming Ideas into Reality"
        heading2="Empowering businesses with next-gen AI and innovative digital solutions."
        buttonText="Reach Out"
        buttonLink="/contact-us"
        heading1Class="home-heading1"
        heading2Class="home-heading2"
        showFeatureCards={true} // cards will NOT render
      />
      <AboutSection id="about-us" />
      <BannerSection />
      <Services id="services" />
      <FAQSection />
    </div>
  );
}
