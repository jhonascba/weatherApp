import React from "react";
import { HeaderStyled, Logo } from "./style";

const Header = () => {
  return (
    <>
      <HeaderStyled>
        <a href="/" onClick={event => event.preventDefault()}>
          <Logo>WeatherApp</Logo>
        </a>
      </HeaderStyled>
    </>
  );
};

export default Header;
