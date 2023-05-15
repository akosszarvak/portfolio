import React, { useState } from "react";
import Hero from "../Components/HeroSection/Hero";
import Project from "../Components/Project/Project";
import About from "../Components/About/About";
import "./Home.scss";

import { projectObjThree, projectObjSix, projectObjSeven } from "../Data/Data";
import Contact from "../Components/ContactMe/Contact";
import { motion } from "framer-motion";

const defaultProjects = [projectObjSeven, projectObjThree, projectObjSix];

export default function Home() {
  const [projects, setProjects] = useState(defaultProjects);
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
    >
      <Hero />
      <div className="outer">
        {projects.map((project) => (
          <motion.div
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Project {...project} />
          </motion.div>
        ))}
      </div>
      <About />
      <Contact id={"contact"} />
    </motion.div>
  );
}
