import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

import illustration from "../../assets/programmer.svg";
import "./Hero.scss";
import "../../App.scss";

export default function Hero() {
  const style = { color: "grey", fontSize: "1.5em" };

  return (
    <div className="hero-container container flex">
      <div className="left-col">
        <div className="wrapper">
          <motion.h3
            initial={{ x: -2000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 1 }}
          >
            Hi, I'm Ákos Szarvák
          </motion.h3>
          <motion.h1
            className="main-title"
            initial={{ x: -2000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 1 }}
          >
            Freelance Developer
          </motion.h1>
          <motion.p
            initial={{ x: -2000 }}
            animate={{ x: 0 }}
            transition={{ type: "spring", duration: 0.7, delay: 0.6 }}
          >
            Helping people turn their ideas into sites and apps that work.
          </motion.p>{" "}
          <motion.div
            className="socials"
            initial={{ x: -2000 }}
            animate={{ x: 0 }}
            transition={{ type: "spring", duration: 0.7, delay: 0.6 }}
          >
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
          </motion.div>{" "}
          <Link to="/projects">
            <motion.div
              initial={{ x: -2000 }}
              animate={{ x: 0 }}
              transition={{ type: "spring", duration: 0.7, delay: 0.7 }}
            >
              <Button style="btn btn-primary btn-medium"> VIEW MY WORK</Button>
            </motion.div>
          </Link>
        </div>
      </div>

      <motion.div
        className="right-col"
        initial={{ x: 2000, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", duration: 1.6, stiffness: 80 }}
      >
        <img className="image" src={illustration} alt="profil picture" />
      </motion.div>
    </div>
  );
}
