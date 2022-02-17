import React, { useState } from "react";
import "./Navbar.scss";

import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdFingerprint } from "react-icons/md";
import { Button } from "../Button/Button";

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
    <div className="navbar">
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
        {/* <Link className="nav-links" to="/projects" onClick={closeMobileMenu}>
          blog
        </Link> */}
      </div>
    </div>
  );
}

export default Navbar;
