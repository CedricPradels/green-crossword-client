import React, { useState } from "react";

import { useHistory } from "react-router-dom";

import styled from "styled-components";

import Form from "../../molecules/Form";
import InputAndLabel from "../../molecules/InputAndLabel";

import { useMutation } from "@apollo/react-hooks";
import { REGISTER } from "../../../graphql/mutations";

const StyledFormRegister = styled.div``;

interface IFormRegister {}

interface IInputFields {
  ["Email"]: string;
  ["Password"]: string;
  ["Confirm"]: string;
}

const FormRegister: React.FC<IFormRegister> = () => {
  const history = useHistory();

  const [register, { loading }] = useMutation(REGISTER);

  const [inputFields, setInputFields] = useState<IInputFields>({
    Email: "",
    Password: "",
    Confirm: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setInputFields({ ...inputFields, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { Confirm: confirm, Email: email, Password: password } = inputFields;

    if (confirm === password) {
      try {
        await register({ variables: { email, password } });

        history.push("/login");
      } catch (error) {
        resetInputFields();
      }
    } else {
      resetInputFields();
    }
  };

  const resetInputFields = () =>
    // TO BE IMPROVED : TS ERROR ITARATE OVER KEY
    setInputFields({
      Email: "",
      Password: "",
      Confirm: "",
    });

  return (
    <StyledFormRegister>
      <Form
        loading={loading}
        onSubmit={handleSubmit}
        button={"Create account"}
        title={"Register"}
      >
        <InputAndLabel
          title={"Email"}
          type={"email"}
          value={inputFields.Email}
          onChange={handleChange}
        />
        <InputAndLabel
          title={"Password"}
          type={"password"}
          value={inputFields.Password}
          onChange={handleChange}
        />
        <InputAndLabel
          title={"Confirm"}
          type={"password"}
          value={inputFields["Confirm"]}
          onChange={handleChange}
        />
      </Form>
    </StyledFormRegister>
  );
};

export default FormRegister;
