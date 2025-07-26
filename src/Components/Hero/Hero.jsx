import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Better education for a better world</h1>
        <p>
          Our mission is to empower individuals through innovative education, 
          fostering personal growth and lifelong learning.
        </p>
      </div>
    </div>
  );
};

export default Hero;
