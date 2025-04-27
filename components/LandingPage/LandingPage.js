import React from "react";
import NavBar from "./NavBar";
import HeroSection from "./Hero/HeroSection";
import ShowCase from "@/components/LandingPage/ShowCase/ShowCase"
import AIHeroSection from "@/components/LandingPage/AIHeroSection/AIHeroSection"
import ExploreGallery from "./ExploreGallery/ExploreGallery";
import FaqWithImage from "./FaqWithImage/FaqWithImage";

const LandingPage = () => {
  return <div>
    <NavBar />
    <HeroSection />
    <ShowCase />
    <AIHeroSection />
    <ExploreGallery />
    <FaqWithImage />
  </div>;
};

export default LandingPage;
