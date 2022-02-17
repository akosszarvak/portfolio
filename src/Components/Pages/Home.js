import React from "react";
import Hero from "../HeroSection/Hero";
import Project from "../Project/Project";
import About from "../About/About";
import "./Home.scss";

import { projectObjOne, projectObjTwo } from "../Data/Data";
import ContactMe from "../ContactMe/ContactMe";
import Contact from "../ContactMe/Contact";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <div className="outer">
        <Project {...projectObjOne}></Project>
        <Project {...projectObjTwo}></Project>
        <Project {...projectObjOne}></Project>
      </div>
      <About></About>
      <Contact></Contact>
    </>
  );
}
