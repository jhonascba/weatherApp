import styled from "styled-components";
import { headerBackgroundColor, colorLogo } from "../../UI/variables";

export const HeaderStyled = styled.header`
  background-color: ${headerBackgroundColor};
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Logo = styled.h1`
  font-family: "Pacifico", cursive;
  text-decoration: none;
  color: ${colorLogo};
  padding-left: 2rem;
  font-size: 1.5rem;
  font-weight: 400;
`;