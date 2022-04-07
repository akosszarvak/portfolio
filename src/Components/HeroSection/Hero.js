import React from "react";

import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

import illustration from "../../assets/programmer.svg";
import "./Hero.scss";
import "../../App.scss";

export default function Hero() {
  const style = { color: "grey", fontSize: "1.5em" };

  return (
    <div className="hero-container container flex">
      <div className="left-col">
        {/* <img className="image" src={portrait} alt="profil picture" /> */}

        <div className="wrapper">
          <h3>Hi, I'm Ákos Szarvák</h3>
          <h1 className="main-title">Freelance Developer</h1>
          <p>
            Helping people turn their ideas into sites and apps that work.
          </p>{" "}
          <div className="socials">
            <ul>
              <li>
                <a target="_blank" href="www.linkedin.com/in/akos-szarvak">
                  <FaLinkedin style={style} alt="linkedIn"></FaLinkedin>
                </a>
              </li>
              <li>
                <a target="_blank" href="https://github.com/akosszarvak">
                  {" "}
                  <FaGithub style={style} alt="github"></FaGithub>
                </a>
              </li>
              <li>
                {" "}
                <a
                  target="_blank"
                  href="https://www.instagram.com/akos_szarvak/"
                >
                  <FaInstagram style={style} alt="instagram"></FaInstagram>{" "}
                </a>
              </li>
            </ul>{" "}
          </div>{" "}
          <Link to="/projects">
            {" "}
            <Button style="btn btn-primary btn-medium"> VIEW MY WORK</Button>
          </Link>
        </div>
      </div>

      <div className="right-col">
        <img className="image" src={illustration} alt="profil picture" />
      </div>
    </div>
  );
}
