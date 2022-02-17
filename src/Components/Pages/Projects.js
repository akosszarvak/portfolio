import React from "react";
import Project from "../Project/Project";
import {
  projectObjOne,
  projectObjTwo,
  projectObjThree,
  projectObjFour,
  projectObjFive,
} from "../Data/Data";

export default function Projects() {
  return (
    <>
      <div className="outer">
        <Project {...projectObjFive}></Project>
        <Project {...projectObjFour}></Project>
        <Project {...projectObjOne}></Project>
        <Project {...projectObjTwo}></Project>
        <Project {...projectObjThree}></Project>
      </div>
    </>
  );
}
