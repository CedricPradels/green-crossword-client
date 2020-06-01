import React from "react";

import Default from "../../components/template/Default";
import FormLogin from "../../components/organisms/FormLogin";

interface ILogin {}

const Login: React.FC<ILogin> = () => {
  return (
    <Default>
      <FormLogin />
    </Default>
  );
};

export default Login;
