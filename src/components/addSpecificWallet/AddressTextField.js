import React from "react";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";

const StyledTextField = styled(TextField)`
  && {
    width: 100%;
  }
`;

const AddressTextField = ({
  activeCryptocurrency,
  handleAddressChange,
  coinsToRender,
  ...rest
}) => {
  const coinToRender = coinsToRender.find(
    (coinToRender) => coinToRender.id === activeCryptocurrency.id
  );

  return activeCryptocurrency !== "" ? (
    <StyledTextField
      variant="outlined"
      onChange={handleAddressChange}
      label={
        coinToRender
          ? coinToRender.typeOfAddress === "hd"
            ? "HD wallet address"
            : "Public address"
          : "Public address"
      }
      {...rest}
    />
  ) : (
    <></>
  );
};

export default AddressTextField;
