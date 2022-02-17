import React from "react";
import "./About.scss";
import "../../App.scss";

export default function About() {
  return (
    <>
      <div className="about container flex">
        <div className="about-right-col">
          <h1>More about me</h1>
          <p>
            In the past 3 years I worked for different companies, dabbled in
            freelancing and gained a lot of experience. I enjoy working on
            projects that adds value to daily life.
          </p>
          <p>
            I like working on my own projects, but love helping other people to
            bring their ideas to life.
          </p>
        </div>
        <div className="about-left-col">
          <h1>my skills</h1>

          <ul className="skills">
            <li className="skill">ReactJs</li>
            <li className="skill">JavaScript</li>
            <li className="skill">C#</li>
          </ul>
          <ul>
            <li className="skill">NodeJs</li>
            <li className="skill">Unity</li>
            <li className="skill">HTML/CSS</li>
          </ul>
        </div>
      </div>
    </>
  );
}
