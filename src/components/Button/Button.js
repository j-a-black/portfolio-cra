import React from "react";

import "./Button.scss";

const Button = ({ text, href, targetBlank }) => {
  return (
    <div className="button">
      <a href={href} target={targetBlank}>
        {text}
      </a>
    </div>
  );
};

export default Button;
