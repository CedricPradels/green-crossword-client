import React from "react";

import styled from "styled-components";

import Button from "../../atoms/Button";
import Title from "../../atoms/Title";

const StyledForm = styled.form``;

interface IForm {
  title: string;
  button: string;
  children: React.ReactNode;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  loading: boolean;
}

const Form: React.FC<IForm> = ({
  onSubmit,
  loading = false,
  button,
  title,
  children,
}) => {
  return (
    <StyledForm onSubmit={onSubmit}>
      <Title level={2}>{title}</Title>
      {children}
      <Button type={"submit"} disabled={loading}>
        {button}
      </Button>
    </StyledForm>
  );
};

export default Form;
