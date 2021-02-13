// React
import { Link } from "react-router-dom";
// Styled components
import styled from "styled-components";
// Theme
import { palette } from "../../styles/theme";

export const NavBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  background-color: ${palette.primary.dark};
`;

export const NavBarMobileContainer = styled.div``;

export const NavBarLogoContainer = styled.div`
  width: 33%;
`;

export const NavBarLogoWrapper = styled.div`
  margin-left: 20px;
`;

export const NavBarAppFunctionalityContainer = styled.div`
  width: 33%;
  display: flex;
  justify-content: center;
`;

export const NavBarAppFunctionalityItems = styled.ul`
  display: flex;
  align-items: center;
`;

export const NavBarDesktopListItem = styled.li`
  margin-right: 20px;
`;

export const NavBarDesktopItemLink = styled(Link)`
  color: ${palette.primary.contrastText};
  font-size: 1.3rem;
  margin-right: 10px;
`;

export const NavBarProfileContainer = styled.div`
  width: 33%;
`;

export const NavBarProfileWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const NavBarSignInContainer = styled.div`
  width: 50%;
`;

export const NavBarSignInWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 20px;
`;
