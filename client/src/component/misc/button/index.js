import React from "react";
import "./button.scss";

const Button = ({ name, ...rest }) => {
  return (
    <button {...rest} className="button">
      {name}
    </button>
  );
};

export default Button;
