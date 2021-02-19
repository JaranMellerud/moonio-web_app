import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  StyledForm,
  InformationText,
  ApiTextField,
  StyledAddTransactionButton,
} from "../addSpecificWalletComponents";
import { connectAccountWithApiKey } from "../../../redux/actions/connectAccountActions";
import { ErrorText } from "../../textComponents";

const AddApiKey = (props) => {
  const { id, name, connectAccountWithApiKey, errors } = props;
  const history = useHistory();
  const [apiKey, setApiKey] = useState("");
  const [apiSecret, setApiSecret] = useState("");
  const [formErrors, setFormErrors] = useState(null);
  useEffect(() => {
    if (errors) {
      setFormErrors(errors);
    }
  }, [errors]);

  return (
    <>
      <StyledForm noValidate autoComplete="off">
        <InformationText />
        <ApiTextField
          label="API Key"
          value={apiKey}
          onChange={(event) => setApiKey(event.target.value)}
        />
        <ApiTextField
          label="API Secret"
          value={apiSecret}
          onChange={(event) => setApiSecret(event.target.value)}
        />
        <>{formErrors && <ErrorText>{formErrors}</ErrorText>}</>
        <StyledAddTransactionButton
          onClick={(event) => {
            event.preventDefault();
            connectAccountWithApiKey(
              id,
              name,
              apiKey,
              apiSecret,
              "addExchangeButton",
              history
            );
          }}
        >
          <span>Add Exchange</span>
        </StyledAddTransactionButton>
      </StyledForm>
    </>
  );
};

AddApiKey.propTypes = {
  connectAccountWithApiKey: PropTypes.func.isRequired,
  errors: PropTypes.object,
  loadingComponent: PropTypes.string,
};

const mapStateToProps = (state) => ({
  errors: state.ui.errors,
  loadingComponent: state.ui.loading.loadingComponent,
});

const mapActionsToProps = {
  connectAccountWithApiKey,
};

export default connect(mapStateToProps, mapActionsToProps)(AddApiKey);
