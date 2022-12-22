import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Squash as Hamburger } from "hamburger-react";

import "./navbar.scss";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <nav>
        <div className="navbar-container" data-controller="navbar">
          <img
            className="navbar-logo"
            alt="logo"
            src="https://jaredthejelly.imgix.net/micro-logo.png"
          />
          <div className="navbar-links-container">
            <Link to="/">HOME</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/contact">CONTACT</Link>
            <Link to="/work">WORK</Link>
          </div>

          <Hamburger
            rounded
            toggled={isOpen}
            toggle={setOpen}
            color="#FFFFFF"
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
