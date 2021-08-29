import logo from "./logo.svg";
import React from "react";
import "./assets/css/style.css";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Pricing from "./pages/pricing";
import HamburgerNav from "./components/hamburgermenu";
import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [isNavOpen, toggleNav] = useState(false);
  const setOpen = () => {
    toggleNav(!isNavOpen);
  };
  return (
    <Router>
      <div className="App">
        <div onClick={() => toggleNav(!isNavOpen)}>
          <Hamburger />
        </div>
        <HamburgerNav isNavOpen={isNavOpen} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/pricing">
            <Pricing />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
