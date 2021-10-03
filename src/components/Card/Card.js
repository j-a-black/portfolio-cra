import React from "react";

import "./Card.scss";
import Button from "../Button/Button";

const Card = ({ title, description, href, backgroundImage }) => {
  return (
    <div
      className="projects-content__card"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="projects-content__overlay">
        <div>
          <span className="projects-content__title">{title}</span>
          <span className="projects-content__description">{description}</span>
        </div>
        <div>
          <Button href={href} targetBlank="_blank" text="View Demo" />
        </div>
      </div>
    </div>
  );
};

export default Card;
