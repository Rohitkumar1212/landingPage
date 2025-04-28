import NavBar from "@/components/LandingPage/NavBar";
import HeroSection from "@/components/LandingPage/Hero/HeroSection";
import ShowCase from "@/components/LandingPage/ShowCase/ShowCase";
import AIHeroSection from "@/components/LandingPage/AIHeroSection/AIHeroSection";
import ExploreGallery from "@/components/LandingPage/ExploreGallery/ExploreGallery";
import FaqWithImage from "@/components/LandingPage/FaqWithImage/FaqWithImage";
import Footer from "@/components/LandingPage/Footer/Footer";

const LandingPage = () => {
  return <div className="overflow-hidden">
    <NavBar />
    <HeroSection />
    <ShowCase />
    <AIHeroSection />
    <ExploreGallery />
    <FaqWithImage />
    <Footer/>
  </div>;
};

export default LandingPage;
