import React from "react";

import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: black;
  color: white;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface IFooter {}

const Footer: React.FC<IFooter> = () => {
  return <StyledFooter>GreenForm is made by Cédric Pradels</StyledFooter>;
};

export default Footer;
