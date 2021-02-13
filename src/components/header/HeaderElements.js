// Styled Components
import styled from "styled-components";
// Assets
import headerBackgroundDesktop from "../../assets/header/header-background-desktop.png";
import headerBackgroundMobile from "../../assets/header/header-background-mobile.png";

export const HeaderContainer = styled.div`
  background-image: url(${headerBackgroundDesktop});
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 900px;
  width: 100%;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 820px) {
    background-image: url(${headerBackgroundMobile});
    min-height: 100%;
  }
`;

export const HeaderTextContainer = styled.div`
  margin-top: 200px;
  align-items: center;
  text-align: center;
  color: #fff;
  @media screen and (max-width: 820px) {
    margin-top: 50px;
    padding: 0 20px;
  }
`;

export const HeaderBigText = styled.h1`
  margin-bottom: 40px;
  font-size: 3.3rem;
`;

export const HeaderSmallText = styled.p`
  margin-bottom: 40px;
  font-size: 1.5rem;
  line-height: 1.5;
`;
