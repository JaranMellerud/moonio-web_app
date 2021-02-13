// React
import React from "react";
import { Link } from "react-router-dom";
// PropTypes
import PropTypes from "prop-types";
// Redux
import { connect } from "react-redux";
// Firebase UI
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase/app";
// Components
import { CenteredForm } from "../../components/containers";
import { PageHeader } from "../../components/textComponents";
import { TermsOfServiceText, ForgotPasswordText } from "./signInComponents";
import { BackgroundPaper } from "../../components/containers";
import { SignInLogo } from "../../components/imageComponents";

const SignIn = () => {
  // Configure FirebaseUI.
  const uiConfig = {
    signInFlow: "popup",
    signInSuccessUrl: "/transactions",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      // Returns false so that it doesn't redirect when logged in
      signInSuccessWithAuthResult: () => false,
    },
  };

  return (
    <>
      <CenteredForm>
        <BackgroundPaper>
          <SignInLogo />
          <PageHeader>Welcome to Moonio</PageHeader>
          <br />
          <br />
          <br />

          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
          <Link to="/forgot_password">
            <ForgotPasswordText>Forgot your password?</ForgotPasswordText>
          </Link>
          <TermsOfServiceText>
            By continuing, you agree to Moonio's
            <br />
            <Link to="/terms_of_service">Terms of Service</Link> and
            <Link to="/privacy_policy"> Privacy Policy</Link>
          </TermsOfServiceText>

          <TermsOfServiceText>,</TermsOfServiceText>
        </BackgroundPaper>
      </CenteredForm>
    </>
  );
};

SignIn.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isLoading: state.ui.loading.isLoading,
});

export default connect(mapStateToProps, {})(SignIn);
