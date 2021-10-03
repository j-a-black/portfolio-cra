import React from "react";

import { IconContext } from "react-icons";
import { AiFillCheckCircle } from "react-icons/ai";

import "./About.scss";
import { skills } from "../../data";

const About = () => {
  return (
    <section className="flex-col-center" id="about">
      <h2 className="heading-sec">
        <span className="heading-sec__title">ABOUT</span>
        <span className="heading-sec__sub">
          I make things for the web using:
        </span>
      </h2>

      {skills.map((skill) => (
        <div key={skill} className="skill-content">
          <IconContext.Provider value={{ className: "skill-content__icon" }}>
            <span>
              <AiFillCheckCircle />
            </span>
          </IconContext.Provider>
          <span className="skill-content__text">{skill}</span>
        </div>
      ))}
    </section>
  );
};

export default About;
