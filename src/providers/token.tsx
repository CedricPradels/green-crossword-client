import React, { createContext, useContext, useState } from "react";

type TToken = string;
type TSetToken = React.Dispatch<React.SetStateAction<TToken>>;

interface IToken {
  token: TToken;
  setToken: TSetToken;
}

const TokenContext = createContext({} as IToken);

interface ITokenProvider {
  children: React.ReactNode;
}

export const TokenProvider: React.FC<ITokenProvider> = ({ children }) => {
  const [token, setToken] = useState<TToken>("");

  const value = { token, setToken };

  return (
    <TokenContext.Provider value={value}>{children}</TokenContext.Provider>
  );
};

export const useToken = () => {
  const context = useContext(TokenContext);
  if (!context) throw new Error("You probably forgot <TokenProvider>.");

  return context;
};
