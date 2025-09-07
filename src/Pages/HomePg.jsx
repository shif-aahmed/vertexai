import Navbar from "../Components/NavBar/NavBar";
import HeroSection from "../Components/HeroSection/HeroSection";
// import Universe from "../Components/Universe/Universe";
import Highlights from "../Components/Highlights/Highlights";
import AwardsSection from "../Components/AwardsSection/AwardsSection";
import BannerSection from "../Components/BannerSection/BannerSection";
import BlogSection from "../Components/BlogSection/BlogSection";
// import Capabilities from "../Components/Capabilities/Capabilities";
import Services from "../Components/Services/Services";
import Footer from "../Components/Footer/Footer";
import AboutSection from "../Components/AboutSection/AboutSection";

export default function HomePg() {
  return (
    <div className="home-page">
      <HeroSection />
            <Navbar />

      <AboutSection/>

            {/* <Universe /> */}
      {/* <Capabilities /> */}
      <BannerSection />
            <Services />
      {/* <Highlights /> */}
      {/* <AwardsSection /> */}
      {/* <BlogSection /> */}
      
      <Footer />
    </div>
  );
}
