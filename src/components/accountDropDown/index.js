// React
import React, { useState } from "react";
import { Link } from "react-router-dom";
// Proptypes
import PropTypes from "prop-types";
// Redux
import { connect } from "react-redux";
import { signOutUser } from "../../redux/actions/userActions";
// Material UI
import MenuItem from "@material-ui/core/MenuItem";
import Divider from "@material-ui/core/Divider";
// Components
import {
  StyledIconButton,
  EmailAndIconContainer,
  EmailText,
  UserIcon,
  StyledMenu,
  StyledMenuItem,
} from "./AccountDropDownComponents";
// Theme
import { breakPoints } from "../../styles/theme";

const AccountDropDown = (props) => {
  const { user, signOutUser } = props;
  const [anchorEl, setAnchorEl] = useState(null);

  const closeDropDown = () => {
    setAnchorEl(null);
  };

  const handleDropDownClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSignOutClick = () => {
    closeDropDown();
    signOutUser();
  };

  const handleSettingsClick = () => {
    closeDropDown();
  };
  return (
    <>
      <StyledIconButton
        onClick={handleDropDownClick}
        aria-controls="simple-menu"
        aria-haspopup="true"
      >
        <EmailAndIconContainer active={Boolean(anchorEl)}>
          {window.screen.width > breakPoints.screenWidth.small && (
            <EmailText>{user.credentials.email}</EmailText>
          )}
          <UserIcon />
        </EmailAndIconContainer>
      </StyledIconButton>
      <StyledMenu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={closeDropDown}
        PaperProps={{
          style: {
            width: 350,
          },
        }}
      >
        <Link to="/user/settings">
          <StyledMenuItem onClick={handleSettingsClick}>
            Settings
          </StyledMenuItem>
        </Link>
        <Divider />
        <MenuItem onClick={handleSignOutClick}>Sign Out</MenuItem>
      </StyledMenu>
    </>
  );
};

AccountDropDown.propTypes = {
  user: PropTypes.object.isRequired,
  signOutUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapActionsToProps = {
  signOutUser,
};

export default connect(mapStateToProps, mapActionsToProps)(AccountDropDown);
