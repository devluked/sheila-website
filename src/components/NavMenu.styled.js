import styled, { keyframes } from "styled-components";

const StyledNav = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.6s linear;
    opacity: ${({ showNav }) => (showNav ? "0.9" : "0")};
    z-index: ${({ showNav }) => (showNav ? 4 : -1)};
    background-color: gray;
    background: gray;
    height: 100%;
    width: 100vw;

    p {
      font-size: 3rem;
      color: white;

    }
    a {

        transition: all 1s ease;

        &:hover {

            color: red;
        }

    }
  }
`;

export default StyledNav;
