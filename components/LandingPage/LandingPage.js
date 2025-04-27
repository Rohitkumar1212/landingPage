import React from "react";
import NavBar from "./NavBar";
import HeroSection from "./Hero/HeroSection";
import ShowCase from "@/components/LandingPage/ShowCase/ShowCase"

const LandingPage = () => {
  return <div>
    <NavBar />
    <HeroSection />
    <ShowCase />
  </div>;
};

export default LandingPage;
