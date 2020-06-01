import React from "react";

import styled from "styled-components";

const StyledTitle = styled.div``;
const Title1 = styled.h1``;
const Title2 = styled.h2``;
const Title3 = styled.h3``;

interface ITitle {
  children: React.ReactNode;
  level: number;
}

const Title: React.FC<ITitle> = ({ children, level }) => {
  return (
    <StyledTitle>
      {level === 1 && <Title1>{children}</Title1>}
      {level === 2 && <Title2>{children}</Title2>}
      {level === 3 && <Title3>{children}</Title3>}
    </StyledTitle>
  );
};

export default Title;
