import React from "react";
import { Input, Break, Button } from "../../component";
import { regBack, Logo } from "../../asset";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="cont">
      <div className="left">
        <img src={regBack} alt="tes" />
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
        <p>Enter the Information for registering</p>
        <Break height={30} />
        <Input label="Full Name" placeholder="Full Name" />
        <Break height={20} />
        <Input label="Username" placeholder="Username" />
        <Break height={20} />
        <Input label="Password" placeholder="Password" type="password" />
        <Break height={20} />
        <Button name="Register" />
        <Break height={20} />
        <p>
          Sudah Punya akun?{" "}
          <Link to="/login" className="link">
            Login disini
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
