import styled from "styled-components";

const StyledNav = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: opacity 0.5s;
    opacity: ${({ showNav }) => (showNav ? "0.9" : "0")};
    background-color: gray;
    height: 100%;

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
