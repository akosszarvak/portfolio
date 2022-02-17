import React from "react";

import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

import profil from "./profil.jpg";
import portrait from "./portrait.png";
import "./Hero.scss";
import "../../App.scss";

export default function Hero() {
  const style = { color: "grey", fontSize: "1.5em" };

  return (
    <div className="hero-container container flex">
      {" "}
      <div className="left-col">
        <img className="image" src={portrait} alt="profil picture" />
      </div>
      <div className="right-col">
        <div className="wrapper">
          <h2 className="main-title">Hi, I am</h2>
          <h1 className="main-title">Ákos Szarvák.</h1>
          <p>
            I'm a Software Developer based in Hungary, focusing on building
            websites, apps and games. I'm currently working on my startup, but
            open to new opportunities.
          </p>{" "}
          <div className="socials">
            <ul>
              <li>
                <Link to="/">
                  <FaLinkedin style={style} alt="linkedIn"></FaLinkedin>
                </Link>
              </li>
              <li>
                <Link to="/">
                  {" "}
                  <FaGithub style={style} alt="github"></FaGithub>
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/">
                  <FaInstagram style={style} alt="instagram"></FaInstagram>{" "}
                </Link>
              </li>
            </ul>{" "}
          </div>{" "}
          <Link to="/projects">
            {" "}
            <Button style="btn btn-primary btn-medium"> view my work</Button>
          </Link>
          {/* <Button>WRITE ME</Button> */}
        </div>
      </div>
    </div>
  );
}
