import React from "react";
import NavBar from "./NavBar";
import HeroSection from "./Hero/HeroSection";
import ShowCase from "@/components/LandingPage/ShowCase/ShowCase";
import AIHeroSection from "@/components/LandingPage/AIHeroSection/AIHeroSection";
import ExploreGallery from "./ExploreGallery/ExploreGallery";
import FaqWithImage from "./FaqWithImage/FaqWithImage";
import Footer from "./Footer/Footer";

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
