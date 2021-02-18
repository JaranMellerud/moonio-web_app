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
import { connectBinanceExchangeAccount } from "../../../redux/actions/connectAccountActions";
import { ErrorText } from "../../textComponents";

const Kraken = (props) => {
  const { connectBinanceExchangeAccount, errors } = props;
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
            connectBinanceExchangeAccount(apiKey, apiSecret, history);
          }}
        >
          Add Exchange
        </StyledAddTransactionButton>
      </StyledForm>
    </>
  );
};

Kraken.propTypes = {
  connectBinanceExchangeAccount: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.ui.errors,
});

const mapActionsToProps = {
  connectBinanceExchangeAccount,
};

export default connect(mapStateToProps, mapActionsToProps)(Kraken);
