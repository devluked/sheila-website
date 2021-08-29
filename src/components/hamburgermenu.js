import StyledNav from "./NavMenu.styled";
import { useState } from "react";

const HamburgerNav = (props) => {
  return (
    <>
      <div className="hamburger-menu">
        <StyledNav showNav={props.isNavOpen}>
          <p>
            <a>Home</a>
          </p>
          <p>
            <a>Contact</a>
          </p>
          <p>
            <a>Pricing</a>
          </p>
          <p>
            <a>Biography</a>
          </p>
        </StyledNav>
      </div>
    </>
  );
};

export default HamburgerNav;
