import React from "react";
import Hero from "../Components/HeroSection/Hero";
import Project from "../Components/Project/Project";
import About from "../Components/About/About";
import "./Home.scss";

import {
  projectObjOne,
  projectObjTwo,
  projectObjThree,
  projectObjSix,
  projectObjSeven,
} from "../Data/Data";
import ContactMe from "../Components/ContactMe/ContactMe";
import Contact from "../Components/ContactMe/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="outer">
        <Project {...projectObjSeven}></Project>
        <Project {...projectObjThree}></Project>
        <Project {...projectObjSix}></Project>
      </div>
      <About />
      <Contact id={"contact"} />
    </>
  );
}
