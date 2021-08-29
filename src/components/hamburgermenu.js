import { Squash as Hamburger } from "hamburger-react";
import StyledNav from "./NavMenu.styled";
import { useState } from "react";

const HamburgerNav = () => {
  const [isNavOpen, toggleNav] = useState(false);
  const setOpen = () => {
    toggleNav(!isNavOpen);
  };
  return (
    <div className="hamburger-menu">
      <Hamburger toggled={isNavOpen} toggle={setOpen} />

      <StyledNav showNav={isNavOpen}>
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
  );
};

export default HamburgerNav;
