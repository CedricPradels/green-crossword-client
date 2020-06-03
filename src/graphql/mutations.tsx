import { gql } from "apollo-boost";

export const REGISTER = gql`
  mutation Register($email: String!, $password: String!) {
    register(email: $email, password: $password) {
      token
      id
      email
    }
  }
`;

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      id
      email
    }
  }
`;

export const CROSSWORD_CREATE = gql`
  mutation CrosswordCreate {
    createCrossword {
      id
    }
  }
`;
