import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { useToken } from "./providers/token";

import Header from "./components/organisms/Header";
import Footer from "./components/organisms/Footer";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Edit from "./pages/Edit";
import Home from "./pages/Home";

import { ApolloProvider } from "@apollo/react-hooks";
import client from "./graphql/client";

function App() {
  const { token } = useToken();

  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        {token ? ( // PROTECTED ROUTES
          <Switch>
            <Route path="/:crosswordId/edit">
              <Edit />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        ) : (
          // FREE ROUTES
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        )}
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
