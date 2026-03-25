import styled from "styled-components";

export const ButtonComponent = styled.button`
  padding: 10px 40px;
  border: 1px solid grey;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  color: black;
  background-color: #e6e6e6;

  &:hover {
    background-color: #dad7d7;
    transition: 0.3s ease-in;
  }
`;
