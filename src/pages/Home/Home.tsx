import React from "react";

import { useHistory } from "react-router-dom";

import { useMutation } from "@apollo/react-hooks";

import { CROSSWORD_CREATE } from "../../graphql/mutations";

import Default from "../../components/template/Default";

import Button from "../../components/atoms/Button";

interface IHome {}

const Home: React.FC<IHome> = () => {
  const history = useHistory();
  const [createCrossword, { loading: loadingCreateCrossword }] = useMutation(
    CROSSWORD_CREATE
  );

  const handleClickCreateCrossword = async () => {
    try {
      const response = await createCrossword();
      const crosswordId = response.data.createCrossword.id;

      history.push(`/${crosswordId}/edit`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Default>
      <Button
        disabled={loadingCreateCrossword}
        onClick={handleClickCreateCrossword}
      >
        Créer
      </Button>
    </Default>
  );
};

export default Home;
