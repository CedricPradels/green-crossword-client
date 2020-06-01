import React from "react";

import Default from "../../components/template/Default";
import FormRegister from "../../components/organisms/FormRegister";

interface IRegister {}

const Register: React.FC<IRegister> = () => {
  return (
    <Default>
      <FormRegister />
    </Default>
  );
};

export default Register;
