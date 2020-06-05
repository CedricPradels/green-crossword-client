import React from "react";

import { useHistory } from "react-router-dom";

import Default from "../../components/template/Default";

import Button from "../../components/atoms/Button";

interface IHome {}

const Home: React.FC<IHome> = () => {
  const history = useHistory();
  return (
    <Default>
      <Button onClick={() => history.push("/login")}>Créer</Button>
    </Default>
  );
};

export default Home;
