import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaCodepen,
  FaHackerrank,
} from "react-icons/fa";
import "./socials.scss";

const Socials = () => {
  return (
    <ul>
      <li>
        <a
          href="https://www.instagram.com/photoniks_/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram className="socials-icon" size="38px" />
        </a>
        <a
          href="https://github.com/jaredthejellyfish"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="socials-icon" size="35px" />
        </a>

        <a
          href="https://www.linkedin.com/in/gerard-almenara/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="socials-icon" size="35px" />
        </a>

        <a
          href="https://codepen.io/jaredthejellyfish"
          target="_blank"
          rel="noreferrer"
        >
          <FaCodepen className="socials-icon" size="35px" />
        </a>

        <a
          href="https://www.hackerrank.com/jaredthejelly"
          target="_blank"
          rel="noreferrer"
        >
          <FaHackerrank className="socials-icon" size="35px" />
        </a>
      </li>
    </ul>
  );
};

export default Socials;
