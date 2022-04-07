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

export default function About() {
  const style = { color: "black", fontSize: "3em" };
  return (
    <>
      <div className="about container flex">
        <div className="about-right-col">
          <h1>About me</h1>
          <h3>software developer. entrepreneur.</h3>
          <p>I enjoy working on projects that add value to daily life.</p>
          <p>
            I worked on software for 3+ years and found a passion for problem
            solving. I build websites, apps and games. I'm currently working on
            a SaaS product, but I'm open to new opportunities.
          </p>{" "}
        </div>
        <div className="about-left-col">
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
        </div>
      </div>
    </>
  );
}
