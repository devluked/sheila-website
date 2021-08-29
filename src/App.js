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
        <Hamburger toggled={isNavOpen} toggle={setOpen} />
      </div>
      <HamburgerNav isNavOpen={isNavOpen} />

      <Home hidden={isNavOpen} />
    </div>
  );
}

export default App;
