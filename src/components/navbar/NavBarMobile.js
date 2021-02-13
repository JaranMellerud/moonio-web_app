// React
import React from "react";
// React Router DOM
import { Link } from "react-router-dom";
// Clsx
import clsx from "clsx";
// PropTypes
import PropTypes from "prop-types";
// Assets
import Button from "@material-ui/core/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
// Material UI
import Divider from "@material-ui/core/Divider";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import withStyles from "@material-ui/core/styles/withStyles";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
// Redux
import { signOutUser } from "../../redux/actions/userActions";
import { connect } from "react-redux";
// Components
import { NavBarLogo } from "../imageComponents";
import { NavBarLogoWrapper } from "./NavBarComponents";
import { NavBarContainer } from "./NavBarComponents";

const styles = (theme) => ({
  ...theme.spreadThis,
});

const useStyles = makeStyles({
  list: {
    width: 250,
    display: "flex",
    justifyContent: window.screen.width < 500 ? "center" : "normal",
  },
  fullList: {
    width: "auto",
  },
  listItem: {
    textAlign: "center",
  },
  menuButton: {
    color: "#fafcff",
    height: "35px",
    width: "auto",
    margin: "0 0 0 10px",
  },
});

const NavBarMobile = (props) => {
  const specialClasses = useStyles();
  const { authenticated, signOutUser } = props;
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const handleSignOutClick = () => {
    signOutUser();
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(specialClasses.list, {
        [specialClasses.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List style={{ width: "100%" }}>
        {authenticated ? (
          <>
            <Link to="/portfolio">
              <ListItem className={specialClasses.listItem}>
                <ListItemText>Portfolio</ListItemText>
              </ListItem>
            </Link>
            <Link to="/transactions">
              <ListItem className={specialClasses.listItem}>
                <ListItemText>Transactions</ListItemText>
              </ListItem>
            </Link>
            <Divider />
            <Link to="/user/settings">
              <ListItem className={specialClasses.listItem}>
                <ListItemText>Settings</ListItemText>
              </ListItem>
            </Link>
            <ListItem
              className={specialClasses.listItem}
              onClick={handleSignOutClick}
            >
              <ListItemText>Sign Out</ListItemText>
            </ListItem>
          </>
        ) : (
          <>
            <Link to="/signin">
              <ListItem className={specialClasses.listItem}>
                <ListItemText>Sign In</ListItemText>
              </ListItem>
            </Link>
          </>
        )}
      </List>
    </div>
  );

  return (
    <div>
      {["top"].map((anchor) => (
        <NavBarContainer key={anchor}>
          <NavBarLogoWrapper>
            <NavBarLogo />
          </NavBarLogoWrapper>
          <div style={{ marginRight: "10px" }}>
            <React.Fragment key={anchor}>
              <Button onClick={toggleDrawer(anchor, true)}>
                <FontAwesomeIcon
                  icon={faBars}
                  style={{ height: "30px", width: "auto", color: "white" }}
                />
              </Button>
              <SwipeableDrawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
                onOpen={toggleDrawer(anchor, true)}
              >
                {list(anchor)}
              </SwipeableDrawer>
            </React.Fragment>
          </div>
        </NavBarContainer>
      ))}
    </div>
  );
};

NavBarMobile.propTypes = { signOutUser: PropTypes.func.isRequired };

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated,
});

const mapActionsToProps = {
  signOutUser,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(NavBarMobile));
