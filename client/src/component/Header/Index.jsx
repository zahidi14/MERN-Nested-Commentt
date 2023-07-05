import React from "react";
import "./head.scss";
import { Button } from "../misc";
import { Purzen } from "../../asset";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const log = useNavigate();
  const goLog = () => {
    log("/login");
  };

  return (
    <header>
      <nav>
        <div className="logo">
          <img src={Purzen} alt="logo" />
        </div>
        <div className="menu">
          <ul className="navi">
            <li>Home</li>
            <li>Profile</li>
          </ul>
          <Button name="Login" to="/login" onClick={goLog} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
