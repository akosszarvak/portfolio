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
              <Link to="/">
                <FaLinkedin style={style}></FaLinkedin>
              </Link>
            </li>
            <li>
              <Link to="/">
                {" "}
                <FaGithub style={style}></FaGithub>
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/">
                <FaInstagram style={style}></FaInstagram>{" "}
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-right-col">&#169; 2022 Ákos Szarvák</div>
      </div>
    </div>
  );
}
