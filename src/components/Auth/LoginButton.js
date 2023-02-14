import React from "react";
import { Link } from "react-router-dom";
import Btn from "../../components/Btn/Btn";

const LoginButton = () => {
  return (
    <div>
      <Btn url="/login" name="Login/Signup"></Btn>
    </div>
  );
};

export default LoginButton;
