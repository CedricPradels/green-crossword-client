import React from "react";

import styled from "styled-components";

const StyledLabel = styled.label``;

interface ILabel {
  htmlFor: string;
  children: React.ReactNode;
}

const Label: React.FC<ILabel> = ({ htmlFor, children }) => {
  return <StyledLabel htmlFor={htmlFor}>{children}</StyledLabel>;
};

export default Label;
