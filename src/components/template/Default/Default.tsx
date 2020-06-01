import React from "react";

import styled from "styled-components";

const StyledDefault = styled.main``;

interface IDefault {
  children: React.ReactNode;
}

const Default: React.FC<IDefault> = ({ children }) => {
  return <StyledDefault>{children}</StyledDefault>;
};

export default Default;
