import React from "react";
import { Break, Button, Input } from "../../component";
import "./login.scss";
import { Logo, logBack } from "../../asset";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="cont">
      <div className="left">
        <img src={logBack} alt="tes" />
      </div>
      <div className="right">
        <div className="logoMain">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <Break height={20} />
        <h1>Hello </h1>
        <Break height={10} />
        <p>Enter the Information you entered while registering</p>
        <Break height={30} />
        <Input label="Username" placeholder="Username" />
        <Break height={20} />
        <Input label="Password" placeholder="Password" type="password" />
        <Break height={20} />
        <Button name="Login" />
        <Break height={20} />
        <p>
          Not Registered?{" "}
          <Link to="/register" className="link">
            SignUp here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
