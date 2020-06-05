import React, { useState } from "react";

import { useHistory } from "react-router-dom";

import { useToken } from "../../../providers/token";

import styled from "styled-components";

import { useMutation } from "@apollo/react-hooks";
import { LOGIN } from "../../../graphql/mutations";

import Form from "../../molecules/Form";
import InputAndLabel from "../../molecules/InputAndLabel";

const StyledFormLogin = styled.div``;

interface IFormLogin {}

interface IInputFields {
  Email: string;
  Password: string;
}

const FormLogin: React.FC<IFormLogin> = () => {
  const history = useHistory();
  const { setToken } = useToken();

  const [inputFields, setInputFields] = useState<IInputFields>({
    Email: "",
    Password: "",
  });
  const [login, { loading }] = useMutation(LOGIN);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { Email: email, Password: password } = inputFields;

    try {
      const response = await login({ variables: { email, password } });

      setToken(response.data.login.token);

      history.push("/");
    } catch (error) {
      console.log(error);
      resetInputFields();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputFields({ ...inputFields, [e.target.name]: e.target.value });

  const resetInputFields = () => setInputFields({ Password: "", Email: "" });

  return (
    <StyledFormLogin>
      <Form
        title="Login"
        button="Submit"
        loading={loading}
        onSubmit={handleSubmit}
      >
        <InputAndLabel
          title="Email"
          type="email"
          value={inputFields.Email}
          onChange={handleChange}
        />
        <InputAndLabel
          title="Password"
          type="password"
          value={inputFields.Password}
          onChange={handleChange}
        />
      </Form>
    </StyledFormLogin>
  );
};

export default FormLogin;
