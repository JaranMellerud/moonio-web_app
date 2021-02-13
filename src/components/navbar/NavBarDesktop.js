// React
import React from "react";
import { Link } from "react-router-dom";
// PropTypes
import PropTypes from "prop-types";
// Redux
import { connect } from "react-redux";
// Components
import {
  NavBarContainer,
  NavBarLogoContainer,
  NavBarLogoWrapper,
  NavBarAppFunctionalityContainer,
  NavBarAppFunctionalityItems,
  NavBarDesktopListItem,
  NavBarDesktopItemLink,
  NavBarProfileContainer,
  NavBarProfileWrapper,
  NavBarSignInContainer,
  NavBarSignInWrapper,
} from "./NavBarComponents";
import AccountDropDown from "../accountDropDown";
import { SecondaryButton } from "../buttons";
import { NavBarLogo } from "../imageComponents";

const NavBar = (props) => {
  const { authenticated } = props;
  return (
    <>
      {authenticated ? (
        <NavBarContainer>
          <NavBarLogoContainer>
            <NavBarLogoWrapper>
              <NavBarLogo />
            </NavBarLogoWrapper>
          </NavBarLogoContainer>
          <NavBarAppFunctionalityContainer>
            <NavBarAppFunctionalityItems>
              <NavBarDesktopListItem>
                <NavBarDesktopItemLink to="/portfolio">
                  Portfolio
                </NavBarDesktopItemLink>
              </NavBarDesktopListItem>
              <NavBarDesktopListItem>
                <NavBarDesktopItemLink to="/transactions">
                  Transactions
                </NavBarDesktopItemLink>
              </NavBarDesktopListItem>
            </NavBarAppFunctionalityItems>
          </NavBarAppFunctionalityContainer>
          <NavBarProfileContainer>
            <NavBarProfileWrapper>
              <NavBarDesktopListItem>
                <AccountDropDown />
              </NavBarDesktopListItem>
            </NavBarProfileWrapper>
          </NavBarProfileContainer>
        </NavBarContainer>
      ) : (
        <NavBarContainer>
          <NavBarLogoContainer>
            <NavBarLogoWrapper>
              <NavBarLogo />
            </NavBarLogoWrapper>
          </NavBarLogoContainer>
          <NavBarSignInContainer>
            <NavBarSignInWrapper>
              <NavBarDesktopListItem>
                <Link to="/sign_in">
                  <SecondaryButton>Sign In</SecondaryButton>
                </Link>
              </NavBarDesktopListItem>
            </NavBarSignInWrapper>
          </NavBarSignInContainer>
        </NavBarContainer>
      )}
    </>
  );
};

NavBar.propTypes = {
  authenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated,
});

export default connect(mapStateToProps, {})(NavBar);
