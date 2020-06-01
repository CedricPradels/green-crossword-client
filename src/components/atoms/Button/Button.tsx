import React from "react";

import styled from "styled-components";

const StyledButton = styled.button`
  cursor: pointer;

  &:disabled {
    transform: opacity(0.5);
    cursor: not-allowed;
  }
`;

interface IButton {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
  type?: "button" | "submit";
}

const Button: React.FC<IButton> = ({
  children,
  onClick,
  disabled = false,
  type = "button",
}) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled} type={type}>
      {children}
    </StyledButton>
  );
};

export default Button;
