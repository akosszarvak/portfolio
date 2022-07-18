import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdFingerprint } from "react-icons/md";
import { Button } from "../Button/Button";
import { motion } from "framer-motion";
import "./Navbar.scss";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 768) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  return (
    <motion.div
      className="navbar"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.6 }}
    >
      <div className="nav-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          {/* <MdFingerprint className="navbar-icon" /> */}
          SZÁ
        </Link>
      </div>
      <div className="menu-icon" onClick={handleClick}>
        {click ? <FaTimes /> : <FaBars />}
      </div>

      <div className={click ? "nav-menu active" : "nav-menu"}>
        <Link className="nav-links" to="/ " onClick={closeMobileMenu}>
          home
        </Link>
        <Link className="nav-links" to="/projects" onClick={closeMobileMenu}>
          projects
        </Link>
        {/* <Link
          className="nav-links"
          to="/home/#contact"
          onClick={closeMobileMenu}
        >
          contact
        </Link> */}
      </div>
    </motion.div>
  );
}

export default Navbar;
