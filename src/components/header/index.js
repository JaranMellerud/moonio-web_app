// React
import React from "react";
import { Link } from "react-router-dom";
// Components
import {
  HeaderContainer,
  HeaderTextContainer,
  HeaderBigText,
  HeaderSmallText,
} from "./HeaderElements";
import { MainButton } from "../buttons";

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <HeaderTextContainer>
          <HeaderBigText>Track and analyze your crypto portfolio</HeaderBigText>
          <HeaderSmallText>
            Accurately tracking your crypto portfolio is easy with Moonio. We do
            it for you so you can get better <br />
            control over your investments with less time and effort
          </HeaderSmallText>
          <Link to="/sign_in">
            <MainButton>Get Started</MainButton>
          </Link>
        </HeaderTextContainer>
      </HeaderContainer>
    </>
  );
};

export default Header;
