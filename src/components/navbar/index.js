// React
import React from "react";
// Theme
import { breakPoints } from "../../styles/theme";
// Components
import NavBarDesktop from "./NavBarDesktop";
import NavBarMobile from "./NavBarMobile";

const NavBar = () => {
  return (
    <>
      {window.screen.width > breakPoints.screenWidth.small ? (
        <NavBarDesktop />
      ) : (
        <NavBarMobile />
      )}
    </>
  );
};

export default NavBar;
