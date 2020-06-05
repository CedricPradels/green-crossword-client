import React from "react";

import styled from "styled-components";

import { useToken } from "../../../providers/token";

import { useHistory } from "react-router-dom";

const StyledHeader = styled.header`
  height: 50px;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-column-gap: 10px;
  background-color: white;
`;

const Title = styled.div``;

const UserButton = styled.button``;

const LoginButton = styled(UserButton)``;
const LogoutButton = styled(UserButton)``;

interface IHeader {}

const Header: React.FC<IHeader> = () => {
  const history = useHistory();
  const { token, setToken } = useToken();

  const clearToken = () => setToken("");

  const redirectToLogin = () => history.push("/login");

  return (
    <StyledHeader>
      <div></div>
      <Title>GreenForm</Title>
      {token ? (
        <LogoutButton onClick={clearToken}>Logout</LogoutButton>
      ) : (
        <LoginButton onClick={redirectToLogin}>Login</LoginButton>
      )}
    </StyledHeader>
  );
};

export default Header;
