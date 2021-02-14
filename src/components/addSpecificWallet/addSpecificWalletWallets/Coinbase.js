import React from "react";
import {
  StyledForm,
  InformationText,
  StyledAddTransactionButton,
} from "../addSpecificWalletComponents";

const Coinbase = () => {
  return (
    <>
      <StyledForm noValidate autoComplete="off">
        <InformationText />
        <StyledAddTransactionButton>
          Continue with Coinbase
        </StyledAddTransactionButton>
      </StyledForm>
    </>
  );
};

export default Coinbase;
