import logo from "./logo.svg";
import "./assets/css/style.css";
import Home from "./pages/home";
import HamburgerNav from "./components/hamburgermenu";
import { useState } from "react";

function App() {
  const [isZindex, toggleZindex] = useState(true);
  return (
    <div className="App">
      <div onClick={() => toggleZindex(!isZindex)}>
        <HamburgerNav />
      </div>
      <Home hidden={isZindex} />
    </div>
  );
}

export default App;
