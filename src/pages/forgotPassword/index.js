import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { CenteredForm } from "../../components/containers";
import { StyledAlert } from "../../components/infoComponents";
import { PageHeader } from "../../components/textComponents";
import {
  EmailTextField,
  FormContainer,
  HeaderContainer,
  ButtonContainer,
} from "./forgotPasswordComponents";
import { AddTransactionButton } from "../../components/buttons";
import { sendPasswordForgotEmail } from "../../redux/actions/userActions";

const ForgotPassword = (props) => {
  const { sendPasswordForgotEmail, errors, alert } = props;
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    if (errors) {
      setFormErrors(errors);
    }
  }, [errors]);

  const handleEmailChange = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const resetPasswordClick = () => {
    sendPasswordForgotEmail(email, history);
  };

  return (
    <CenteredForm>
      {alert && alert.page === "forgot_password" && (
        <StyledAlert severity={alert.type}>{alert.text}</StyledAlert>
      )}
      <HeaderContainer>
        <PageHeader>Forgot Password</PageHeader>
      </HeaderContainer>
      <FormContainer>
        <EmailTextField
          id="outlined-basic"
          label="Your email address"
          variant="outlined"
          error={formErrors.email}
          helperText={formErrors.email}
          value={email}
          onChange={handleEmailChange}
        />
        <ButtonContainer>
          <AddTransactionButton onClick={resetPasswordClick}>
            Send password reset email
          </AddTransactionButton>
        </ButtonContainer>
      </FormContainer>
    </CenteredForm>
  );
};

ForgotPassword.propTypes = {
  sendPasswordForgotEmail: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  alert: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.ui.errors,
  alert: state.ui.alert,
});

const mapActionsToProps = {
  sendPasswordForgotEmail,
};

export default connect(mapStateToProps, mapActionsToProps)(ForgotPassword);
