import React from "react";
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

export default function Projects() {
  return (
    <>
      <div className="outer">
        <Project {...projectObjSix}></Project>
        <Project {...projectObjSeven}></Project>
        <Project {...projectObjFour}></Project>
        <Project {...projectObjOne}></Project>
        <Project {...projectObjTwo}></Project>
        <Project {...projectObjThree}></Project>
        {/* <Project {...projectObjFive}></Project> */}
      </div>
    </>
  );
}
