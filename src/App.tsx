import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LandingPage from "./pages/Landing";
import HomePage from "./pages/Home";
import DetailPage from "./pages/Detail";

import { Header } from "./components/Header";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/home">
          <HomePage />
        </Route>
        <Route path="/detail/:id">
          <DetailPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
