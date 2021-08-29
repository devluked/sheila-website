import styled from "styled-components";

const Button = styled.button`
  color: black;
  padding: 15px 40px;
  border-radius: 4px;
  font-weight: normal;
  text-transform: uppercase;
  transition: all 1s ease;
  margin: 1rem;
  width: 40%;

  &:hover {
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0 5px 15px rgba(145, 92, 182, 0.4);
  }
`;

export default Button;
