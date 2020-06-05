import React from "react";

import { Link } from "react-router-dom";

import Default from "../../components/template/Default";
import FormLogin from "../../components/organisms/FormLogin";

interface ILogin {}

const Login: React.FC<ILogin> = () => {
  return (
    <Default>
      <FormLogin />
      <Link to="/register">Go to register.</Link>
    </Default>
  );
};

export default Login;
