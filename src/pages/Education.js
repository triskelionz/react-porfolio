import React from "react";
import "./Education.css";
import Navbar from "../components/Navbar";

const Education = () => {
  return (
    <div>
      <Navbar />
      <div className="education">
        <h2 className="heading-edu">
          My <span>Journey</span>
        </h2>

        <div className="education-content">
          <div className="education-edu">
            <h3> Education</h3>
            <h4>2007-2011</h4>
            <h5>Master Degree -University</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
       

        <div className="education-ex">
          <h3> Experience</h3>
          <h4>2007-2011</h4>
          <h5>Web Developer- Company</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        </div>

      </div>
    </div>
  );
};

export default Education;
