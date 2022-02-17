import React from "react";
import "./Footer.scss";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Footer() {
  const style = { color: "grey", fontSize: "1.5em" };
  return (
    <div className="outer">
      <div className="footer container flex">
        <div className="footer-left-col">
          <ul>
            <li>
              <a
                target="_blank"
                href="https://linkedin.com/in/akos-szarvak
"
              >
                <FaLinkedin style={style}></FaLinkedin>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://github.com/akosszarvak">
                {" "}
                <FaGithub style={style}></FaGithub>
              </a>
            </li>
            <li>
              {" "}
              <a target="_blank" href="https://www.instagram.com/akos_szarvak/">
                <FaInstagram style={style}></FaInstagram>{" "}
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-right-col">&#169; 2022 Ákos Szarvák</div>
      </div>
    </div>
  );
}
