import { gql } from "apollo-boost";

export const LOGIN = gql`
  query Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      id
      email
    }
  }
`;

export const CROSSWORD_READ = gql`
  query CrosswordRead($id: ID!) {
    crosswordRead(id: $id) {
      id
      title
      grade
      answers
      grid
      definitions
    }
  }
`;
