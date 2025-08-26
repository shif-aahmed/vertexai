import Navbar from "../Components/NavBar/NavBar";
import HeroSection from "../Components/HeroSection/HeroSection";
// import FeaturedPodcasts from "../Components/FeaturedPodcasts/FeaturedPodcasts";
import Highlights from "../Components/Highlights/Highlights";
import AwardsSection from "../Components/AwardsSection/AwardsSection";
import BannerSection from "../Components/BannerSection/BannerSection";
import BlogSection from "../Components/BlogSection/BlogSection";
import Capabilities from "../Components/Capabilities/Capabilities";
import Services from "../Components/Services/Services";
import Footer from "../Components/Footer/Footer";

export default function HomePg() {
  return (
    <div className="home-page">
      <Navbar />
      <HeroSection />
      <Services />
      <Capabilities />
      <BannerSection />
      {/* <FeaturedPodcasts /> */}
      <Highlights />
      <AwardsSection />
      <BlogSection />
      
      <Footer />
    </div>
  );
}
