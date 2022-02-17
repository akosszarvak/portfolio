import React from "react";
import "./Project.scss";
import "../../App.scss";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Project({
  topLine,
  headLine,
  description,
  button1,
  button2,
  img,
  link1,
  link2,
  alt,
  imgStart,
}) {
  const style = { color: "grey", fontSize: "1em", margin: "0 5px 0 0" };
  return (
    <div className="project-container container flex">
      <div className="row">
        <div className="left-col-proj">
          <div className="text-wrapper">
            <div className="top-line">{topLine}</div>
            <h1 className="head-line">{headLine}</h1>
            <p className="desc">{description}</p>
            <div className="button-div">
              {" "}
              <a target="_blank" href={link1}>
                <Button style="btn-transparent">
                  {" "}
                  <FaExternalLinkAlt style={style} />
                  {button1}
                </Button>
              </a>
              <a target="_blank" href={link2}>
                <Button style="btn-transparent">
                  <FaExternalLinkAlt style={style} />
                  {button2}
                </Button>
              </a>
            </div>
          </div>
        </div>
        <div className="right-col-proj">
          <img className="image" src={img} alt={img}></img>
        </div>
      </div>
    </div>
  );
}
