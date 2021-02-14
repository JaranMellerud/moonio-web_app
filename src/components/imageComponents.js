import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import moonioLogoWhite from "../assets/logo/moonio-logo-white.png";
import moonioLogoSmall from "../assets/logo/moonio-logo-small.png";

export const CoinImage = styled.img`
  height: 30px;
  width: auto;
  margin-right: 20px;
`;

export const AutocompleteCoinImage = styled.img`
  && {
    height: 25px;
    width: auto;
    margin-right: 20px;
  }
`;

const NavBarLogoImage = styled.img`
  height: 90px;
  width: auto;
  margin-left: 10px;
`;

export const NavBarLogo = () => {
  return (
    <Link to="/">
      <NavBarLogoImage src={moonioLogoWhite} alt="Moonio" />
    </Link>
  );
};

const SignInLogoImage = styled.img`
  height: 70px;
  width: auto;
  margin: 0 0 10px 0;
`;

export const SignInLogo = () => {
  return <SignInLogoImage src={moonioLogoSmall} alt="Moonio" />;
};
