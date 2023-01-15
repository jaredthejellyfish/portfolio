import React from "react";
import { WavyLink } from "react-wavy-transitions";
import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import NavbarDropdown from "./NavbarDropdown";
import {useLocation} from "react-router-dom";

import "./navbar.scss";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  let location = useLocation();

  if(location.pathname === '/404'){
    return null;
  }

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
            <WavyLink to="/" color="#212121" duration={1100} direction="down">
              HOME
            </WavyLink>
            <WavyLink
              to="/about"
              color="#212121"
              duration={1100}
              direction="up"
            >
              ABOUT
            </WavyLink>
            <WavyLink
              to="/contact"
              color="#212121"
              duration={1100}
              direction="down"
            >
              CONTACT
            </WavyLink>
            <WavyLink
              to="/work"
              color="#212121"
              duration={1100}
              direction="up"
            >
              WORK
            </WavyLink>
          </div>

          <Hamburger
            rounded
            toggled={isOpen}
            toggle={setOpen}
            color="#FFFFFF"
          />
        </div>
      </nav>
      {isOpen ? <NavbarDropdown /> : null}
    </>
  );
};

export default Navbar;
