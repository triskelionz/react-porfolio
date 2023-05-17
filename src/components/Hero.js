import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import heroImage from "../assets/home1.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="heroImg">
        <img src={heroImage} alt="homeImage" />
        <span className="homeImageHover"></span>
      </div>

      <div className="content">
        <h1>HI, I'M ZEYNEP </h1>
        <div className="text-animate">
          <h3>Fronted Developer</h3>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat.
        </p>
        <div className="btn-box">
          <Link to="/hireMe" className="btn-box-text">
            Hire Me
          </Link>
          <Link to="/let'sTalk" className="btn-box-text">
            Let's Talk
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
