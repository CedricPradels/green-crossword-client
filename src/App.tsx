import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/organisms/Header";
import Footer from "./components/organisms/Footer";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Answer from "./pages/Answer";
import Answers from "./pages/Answers";
import Create from "./pages/Create";
import Results from "./pages/Results";
import Result from "./pages/Result";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/:crosswordId/answer">
            <Answer />
          </Route>
          <Route path="/:crosswordId/answers">
            <Answers />
          </Route>
          <Route path="./:crosswordId/create">
            <Create />
          </Route>
          <Route path="./:crosswordId/results">
            <Results />
          </Route>
          <Route path="./:crosswordId/result">
            <Result />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
