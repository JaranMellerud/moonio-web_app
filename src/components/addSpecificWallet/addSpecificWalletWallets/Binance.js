import React from "react";
import { connect } from "react-redux";
import {
  StyledForm,
  InformationText,
  ApiTextField,
  StyledAddTransactionButton,
} from "../addSpecificWalletComponents";
import { getBinancePortfolio } from "../../../redux/actions/dataActions";

const Binance = (props) => {
  const { getBinancePortfolio } = props;

  const handleAddExchangeClick = () => {
    getBinancePortfolio();
  };

  return (
    <>
      <StyledForm noValidate autoComplete="off">
        <InformationText />
        <ApiTextField label="API Key" />
        <ApiTextField label="API Secret" />
        <StyledAddTransactionButton onClick={handleAddExchangeClick}>
          Add Exchange
        </StyledAddTransactionButton>
      </StyledForm>
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapActionsToProps = {
  getBinancePortfolio,
};

export default connect(mapStateToProps, mapActionsToProps)(Binance);
