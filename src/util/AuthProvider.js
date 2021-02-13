// React
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
// Firebase
import { app } from "./fbConfig";
// PropTypes
import PropTypes from "prop-types";
// Redux
import { connect } from "react-redux";
import {
  signUpUser,
  signInUser,
  signOutUser,
} from "../redux/actions/userActions";

const AuthProvider = (props) => {
  const { children, signInUser, signUpUser, signOutUser } = props;
  const history = useHistory();

  const checkIfNewUser = (currentUser) => {
    const signUpTime = currentUser.metadata.creationTime;
    const signInTime = currentUser.metadata.lastSignInTime;
    const isNewUser = signUpTime === signInTime;
    return isNewUser;
  };

  useEffect(() => {
    app.auth().onAuthStateChanged(() => {
      const currentUser = app.auth().currentUser;
      if (currentUser) {
        const isNewUser = checkIfNewUser(currentUser);
        if (isNewUser) {
          currentUser.getIdToken(true).then((idToken) => {
            signUpUser(history, idToken);
          });
        } else {
          currentUser.getIdToken(true).then((idToken) => {
            signInUser(history, idToken);
          });
        }
      } else {
        signOutUser();
      }
    });
  });

  return <>{children}</>;
};

AuthProvider.propTypes = {
  signUpUser: PropTypes.func.isRequired,
  signInUser: PropTypes.func.isRequired,
  signOutUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({});

const mapActionsToProps = {
  signUpUser,
  signInUser,
  signOutUser,
};

export default connect(mapStateToProps, mapActionsToProps)(AuthProvider);
