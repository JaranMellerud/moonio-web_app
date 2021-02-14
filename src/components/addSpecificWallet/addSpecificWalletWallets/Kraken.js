import React from "react";
import {
  StyledForm,
  InformationText,
  ApiTextField,
  StyledAddTransactionButton,
} from "../addSpecificWalletComponents";

const Kraken = () => {
  return (
    <>
      <StyledForm noValidate autoComplete="off">
        <InformationText />
        <ApiTextField label="API Key" />
        <ApiTextField label="API Secret" />
        <StyledAddTransactionButton>Add Exchange</StyledAddTransactionButton>
      </StyledForm>
    </>
  );
};

export default Kraken;
