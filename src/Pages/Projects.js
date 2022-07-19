import React, { useState } from "react";
import Project from "../Components/Project/Project";
import {
  projectObjOne,
  projectObjTwo,
  projectObjThree,
  projectObjFour,
  projectObjFive,
  projectObjSix,
  projectObjSeven,
} from "../Data/Data";
import { motion } from "framer-motion";

const defaultProjects = [
  projectObjOne,
  projectObjTwo,
  projectObjThree,
  projectObjFour,
  projectObjSix,
  projectObjSeven,
];

export default function Projects() {
  const [projects, setProjects] = useState(defaultProjects);

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{
        x: window.innerWidth,
        transition: { duration: 0.3, type: "spring" },
      }}
    >
      <div className="outer">
        {projects.map((project) => (
          <motion.div
            initial={{ x: -2000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 1, delay: 0.3 }}
          >
            <Project {...project} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
