import React from "react";
import Project from "../Project/Project";
import { projectObjOne, projectObjTwo } from "../Data/Data";

export default function Projects() {
  return (
    <>
      <div className="outer">
        <Project {...projectObjOne}></Project>
        <Project {...projectObjTwo}></Project>
        <Project {...projectObjOne}></Project>
      </div>
    </>
  );
}
