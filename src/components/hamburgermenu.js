import StyledNav from "./NavMenu.styled";
import { useState } from "react";
import Home from "../pages/home";

const HamburgerNav = (props) => {
  const [currentPage, togglePage] = useState("home");
  return (
    <>
      <div className="hamburger-menu">
        <StyledNav showNav={props.isNavOpen}>
          <p>
            <a href="/">Home</a>
          </p>
          <p>
            <a href="/contact">Contact</a>
          </p>
          <p>
            <a href="/pricing">Pricing</a>
          </p>
          {/*<p>
            <a href="/about">About Me</a>
          </p>*/}
        </StyledNav>
      </div>
    </>
  );
};

export default HamburgerNav;
