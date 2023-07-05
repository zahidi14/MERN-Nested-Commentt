import React from "react";
import "./input.scss";

const Input = ({ label, ...rest }) => {
  return (
    <div className="inputCont">
      <label>{label}</label>
      <input {...rest}></input>
    </div>
  );
};

export default Input;
