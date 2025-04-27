import React from "react";
import NavBar from "./NavBar";
import HeroSection from "./Hero/HeroSection";
import ShowCase from "@/components/LandingPage/ShowCase/ShowCase"
import AIHeroSection from "@/components/LandingPage/AIHeroSection/AIHeroSection"

const LandingPage = () => {
  return <div>
    <NavBar />
    <HeroSection />
    <ShowCase />
    <AIHeroSection />
  </div>;
};

export default LandingPage;
