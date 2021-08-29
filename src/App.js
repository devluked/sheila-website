import logo from "./logo.svg";
import React from "react";
import "./assets/css/style.css";
import Home from "./pages/home";
import HamburgerNav from "./components/hamburgermenu";
import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";

function App() {
  const [isNavOpen, toggleNav] = useState(false);
  const setOpen = () => {
    toggleNav(!isNavOpen);
  };
  return (
    <div className="App">
      <div onClick={() => toggleNav(!isNavOpen)}>
        <Hamburger />
      </div>
      <HamburgerNav isNavOpen={isNavOpen} />

      <Home />
    </div>
  );
}

export default App;
