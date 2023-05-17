import React from "react";
import "./About.css";
import Navbar from "../components/Navbar";
import aboutImage from "../assets/image3.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <Navbar />

      <div className="about">
        <h2 className="heading">
          About <span>Me</span>
        </h2>
        <div className="about-img">
          <img src={aboutImage} alt="heroImage" />
          <span className="circle-spin"></span>
        </div>

        <div className="about-content">
          <h3> Fronted Developer!</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
          <div className="btn-box.btns">
            <Link to="/readmore" className="btn-box-text">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
