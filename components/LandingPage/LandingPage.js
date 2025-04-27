import React from "react";
import NavBar from "./NavBar";
import HeroSection from "./Hero/HeroSection";
import ShowCase from "@/components/LandingPage/ShowCase/ShowCase"
import AIHeroSection from "@/components/LandingPage/AIHeroSection/AIHeroSection"
import ExploreGallery from "./ExploreGallery/ExploreGallery";

const LandingPage = () => {
  return <div>
    <NavBar />
    <HeroSection />
    <ShowCase />
    <AIHeroSection />
    <ExploreGallery />
  </div>;
};

export default LandingPage;
