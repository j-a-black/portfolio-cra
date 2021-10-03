import React from "react";

// import Button from "../Button/Button";

import "./Hero.scss";

const Hero = ({ title, content }) => {
  return (
    <div className="hero-image">
      <div className="hero-text">
        <span>{title}</span>
        <span>{content}</span>
        {/* <br />
        <Button text="Go To Projects" href="#projects" /> */}
      </div>
    </div>
  );
};

export default Hero;
