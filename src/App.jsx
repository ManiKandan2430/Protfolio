import React from "react";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import NavBar from "./components/NavBar";
import LogoSection from "./sections/LogoSection";
import SkillsSection from "./sections/SkillsSection";
import TechStack from "./sections/TechStack";
import Contact from "./sections/Contact";
import Footer from './sections/Footer'

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowcaseSection />
      <LogoSection />
      <SkillsSection />
      <TechStack />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
