import React from "react";

import styled from "styled-components";

const StyledInput = styled.input``;

interface IInput {
  id: string;
  value: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: "number" | "text" | "password" | "email";
}

const Input: React.FC<IInput> = ({ ...rest }) => {
  return <StyledInput {...rest} />;
};

export default Input;
