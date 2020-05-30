import React from "react";

import styled from "styled-components";

const StyledHeader = styled.header``;

interface IHeader {}

const Header: React.FC<IHeader> = () => {
  return <StyledHeader></StyledHeader>;
};

export default Header;
