import styled from "styled-components";

const Button = styled.button`
  @media (max-width: 1200px) {
    width: 150px;
    font-size: 0.75rem;
    white-space: nowrap;
    padding: 15px 0;
    text-align: center;
    vertical-align: middle;
    margin: 1rem;
  }
  color: black;
  padding: 15px 40px;
  border-radius: 4px;
  font-weight: normal;
  text-transform: uppercase;
  transition: all 1s ease;
  width: 200px;

  &:hover {
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0 5px 15px red;
  }
`;

export default Button;
