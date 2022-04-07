import React from "react";
import Hero from "../HeroSection/Hero";
import Project from "../Project/Project";
import About from "../About/About";
import "./Home.scss";

import {
  projectObjOne,
  projectObjTwo,
  projectObjThree,
  projectObjSix,
  projectObjSeven,
} from "../Data/Data";
import ContactMe from "../ContactMe/ContactMe";
import Contact from "../ContactMe/Contact";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <div className="outer">
        <Project {...projectObjSeven}></Project>
        <Project {...projectObjThree}></Project>
        <Project {...projectObjSix}></Project>
      </div>
      <About></About>
      <Contact id={"contact"}></Contact>
    </>
  );
}
