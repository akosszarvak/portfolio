import React from "react";
import "./About.scss";
import "../../App.scss";
import {
  FaReact,
  FaJs,
  FaNodeJs,
  FaUnity,
  FaLaravel,
  FaHashtag,
} from "react-icons/fa";
import { SiCsharp } from "react-icons/si";
import { motion } from "framer-motion";

export default function About() {
  const style = { color: "black", fontSize: "3em" };
  return (
    <>
      <div className="about container flex">
        <motion.div
          className="about-right-col"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1>About me</h1>
          <h3>software developer. entrepreneur.</h3>
          <p>I enjoy working on projects that add value to daily life.</p>
          <p>
            I worked on software for 3+ years and found a passion for problem
            solving. I build websites, apps and games. I'm currently working on
            a SaaS product, but I'm open to new opportunities.
          </p>{" "}
        </motion.div>
        <motion.div
          className="about-left-col"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1>My Toolbox</h1>

          <ul className="skills">
            <li className="skill">
              <FaReact style={style} alt="reactJs"></FaReact> <br /> ReactJs
            </li>
            <li className="skill">
              {" "}
              <FaJs style={style} alt="javascript"></FaJs> <br />
              JavaScript
            </li>
            <li className="skill">
              {" "}
              <SiCsharp style={style} alt="csharp"></SiCsharp> <br />
              C#
            </li>
          </ul>
          <ul>
            <li className="skill">
              <FaNodeJs style={style} alt="nodejs"></FaNodeJs> <br />
              NodeJs
            </li>
            <li className="skill">
              {" "}
              <FaUnity style={style} alt="unity"></FaUnity> <br />
              Unity
            </li>
            <li className="skill">
              {" "}
              <FaLaravel style={style} alt="laravel"></FaLaravel> <br />
              Laravel
            </li>
          </ul>
        </motion.div>
      </div>
    </>
  );
}
