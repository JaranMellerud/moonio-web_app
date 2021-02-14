import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  StyledForm,
  InformationText,
  StyledAddTransactionButton,
} from "../addSpecificWalletComponents";
import CryptocurrencyAutocomplete from "../CryptocurrencyAutocomplete";
import { getAllCoins } from "../../../redux/actions/dataActions";
import AddressTextField from "../AddressTextField";

const Ledger = (props) => {
  const { coins, getAllCoins } = props;
  const [activeCryptocurrency, setActiveCryptocurrency] = useState("");
  const [activeAddress, setActiveAddress] = useState("");

  const coinsToRender = [
    { id: "bitcoin", typeOfAddress: "hd" },
    { id: "ethereum", typeOfAddress: "public" },
    { id: "ripple", typeOfAddress: "public" },
    { id: "cardano", typeOfAddress: "public" },
    { id: "litecoin", typeOfAddress: "hd" },
    { id: "bitcoin-cash", typeOfAddress: "hd" },
    { id: "stellar", typeOfAddress: "public" },
    { id: "dogecoin", typeOfAddress: "hd" },
    { id: "eos", typeOfAddress: "public" },
    { id: "bitcoin-sv", typeOfAddress: "public" },
  ];

  // Fetching coindata from database <- coinGecko
  useEffect(() => {
    if (!coins || coins.length === 0) {
      getAllCoins("cryptocurrencyAutocomplete");
    }
  }, [coins, getAllCoins]);

  const handleCryptocurrencyChange = (event, value) => {
    if (!value) {
      return;
    }
    setActiveCryptocurrency(value);
  };

  const handleAddressChange = (event) => {
    setActiveAddress(event.target.value);
  };
  console.log(activeAddress);

  return (
    <>
      <StyledForm noValidate autoComplete="off">
        <InformationText />
        <CryptocurrencyAutocomplete
          coinsToRender={coinsToRender}
          activeCryptocurrency={activeCryptocurrency}
          handleCryptocurrencyChange={handleCryptocurrencyChange}
        />
        <AddressTextField
          coinsToRender={coinsToRender}
          activeCryptocurrency={activeCryptocurrency}
          handleAddressChange={handleAddressChange}
        />
        <StyledAddTransactionButton>Add Wallet</StyledAddTransactionButton>
      </StyledForm>
    </>
  );
};

Ledger.propTypes = {
  getAllCoins: PropTypes.func.isRequired,
  coins: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  coins: state.data.coins,
});

const mapActionsToProps = {
  getAllCoins,
};

export default connect(mapStateToProps, mapActionsToProps)(Ledger);
