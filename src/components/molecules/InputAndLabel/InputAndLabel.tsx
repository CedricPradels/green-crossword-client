import React from "react";

import styled from "styled-components";

import Label from "../../atoms/Label";
import Input from "../../atoms/Input";

const StyledInputAndLabel = styled.div``;

interface IInputAndLabel {
  title: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: "number" | "text" | "password" | "email";
}

const InputAndLabel: React.FC<IInputAndLabel> = ({
  title,
  children,
  ...rest
}) => {
  return (
    <StyledInputAndLabel>
      <Label htmlFor={title}>{title}</Label>
      <Input id={title} name={title} {...rest}></Input>
    </StyledInputAndLabel>
  );
};

export default InputAndLabel;
