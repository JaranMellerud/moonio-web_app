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
import { AutocompleteCoinImage } from "../../imageComponents";
import {
  connectWalletWithHdAddress,
  connectWalletWithPublicAddress,
} from "../../../redux/actions/connectAccountActions";
import { ErrorText } from "../../textComponents";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const AddAddress = (props) => {
  const {
    id,
    name,
    connectWalletWithHdAddress,
    connectWalletWithPublicAddress,
    errors,
    coins,
  } = props;
  const history = useHistory();
  const [activeCrypto, setActiveCrypto] = useState("");
  const [hdAddress, setHdAddress] = useState("");
  const [publicAddress, setPublicAddress] = useState("");
  const [formErrors, setFormErrors] = useState(null);
  useEffect(() => {
    if (errors) {
      setFormErrors(errors);
    }
  }, [errors]);

  const coinsOptions = [
    {
      id: "bitcoin",
      symbol: "btc",
      name: "Bitcoin",
      image: coins.find((coin) => coin.id === "bitcoin")["image"],
      hdOrPublic: "hd",
    },
    {
      id: "ethereum",
      symbol: "eth",
      name: "Ethereum",
      image: coins.find((coin) => coin.id === "ethereum")["image"],
      hdOrPublic: "public",
    },
    {
      id: "cardano",
      symbol: "ada",
      name: "Cardano",
      image: coins.find((coin) => coin.id === "cardano")["image"],
      hdOrPublic: "public",
    },
    {
      id: "ripple",
      symbol: "xrp",
      name: "Ripple",
      image: coins.find((coin) => coin.id === "ripple")["image"],
      hdOrPublic: "public",
    },
    {
      id: "litecoin",
      symbol: "ltc",
      name: "Litecoin",
      image: coins.find((coin) => coin.id === "litecoin")["image"],
      hdOrPublic: "hd",
    },
    {
      id: "bitcoin-cash",
      symbol: "bch",
      name: "Bitcoin Cash",
      image: coins.find((coin) => coin.id === "bitcoin-cash")["image"],
      hdOrPublic: "hd",
    },
    {
      id: "stellar",
      symbol: "xlm",
      name: "Stellar",
      image: coins.find((coin) => coin.id === "stellar")["image"],
      hdOrPublic: "public",
    },

    {
      id: "dogecoin",
      symbol: "doge",
      name: "Dogecoin",
      image: coins.find((coin) => coin.id === "dogecoin")["image"],
      hdOrPublic: "hd",
    },
    {
      id: "eos",
      symbol: "eos",
      name: "EOS",
      image: coins.find((coin) => coin.id === "eos")["image"],
      hdOrPublic: "public",
    },
    {
      id: "bitcoin-cash-sv",
      symbol: "bsv",
      name: "Bitcoin SV",
      image: coins.find((coin) => coin.id === "bitcoin-cash-sv")["image"],
      hdOrPublic: "public",
    },
    {
      id: "zcash",
      symbol: "zec",
      name: "Zcash",
      image: coins.find((coin) => coin.id === "zcash")["image"],
      hdOrPublic: "hd",
    },
    {
      id: "tezos",
      symbol: "xtz",
      name: "Tezos",
      image: coins.find((coin) => coin.id === "tezos")["image"],
      hdOrPublic: "public",
    },
    {
      id: "dash",
      symbol: "dash",
      name: "Dash",
      image: coins.find((coin) => coin.id === "dash")["image"],
      hdOrPublic: "hd",
    },
    {
      id: "ethereum-classic",
      symbol: "etc",
      name: "Ethereum Classic",
      image: coins.find((coin) => coin.id === "ethereum-classic")["image"],
      hdOrPublic: "public",
    },
    {
      id: "nem",
      symbol: "xem",
      name: "NEM",
      image: coins.find((coin) => coin.id === "nem")["image"],
      hdOrPublic: "public",
    },
    {
      id: "neo",
      symbol: "neo",
      name: "NEO",
      image: coins.find((coin) => coin.id === "neo")["image"],
      hdOrPublic: "public",
    },
    {
      id: "qtum",
      symbol: "qtum",
      name: "QTUM",
      image: coins.find((coin) => coin.id === "qtum")["image"],
      hdOrPublic: "public",
    },
    {
      id: "tron",
      symbol: "trx",
      name: "Tron",
      image: coins.find((coin) => coin.id === "tron")["image"],
      hdOrPublic: "public",
    },
    {
      id: "vechain",
      symbol: "vet",
      name: "VeChain",
      image: coins.find((coin) => coin.id === "vechain")["image"],
      hdOrPublic: "public",
    },
  ];

  return (
    <>
      <StyledForm noValidate autoComplete="off">
        <InformationText />
        <Autocomplete
          options={coinsOptions}
          getOptionLabel={(option) => option.name}
          onChange={(event, value) => {
            if (!value) {
              return;
            }
            setActiveCrypto(value);
          }}
          renderOption={(option) => (
            <React.Fragment>
              <span>
                <AutocompleteCoinImage alt={option.name} src={option.image} />
                &nbsp;&nbsp;
              </span>
              {`${option.name} (${option.symbol.toUpperCase()})`}
            </React.Fragment>
          )}
          renderInput={(params) => (
            <TextField {...params} label="Cryptocurrency" variant="outlined" />
          )}
        />
        {activeCrypto && (
          <ApiTextField
            label={
              activeCrypto.hdOrPublic === "hd" ? "HD Address" : "Public Address"
            }
            value={activeCrypto.hdOrPublic === "hd" ? hdAddress : publicAddress}
            onChange={
              activeCrypto.hdOrPublic === "hd"
                ? (event) => setHdAddress(event.target.value)
                : (event) => setPublicAddress(event.target.value)
            }
          />
        )}
        <>{formErrors && <ErrorText>{formErrors}</ErrorText>}</>
        <StyledAddTransactionButton
          onClick={
            activeCrypto.hdOrPublic === "hd"
              ? (event) => {
                  event.preventDefault();
                  connectWalletWithHdAddress(activeCrypto, hdAddress, "ledger");
                }
              : (event) => {
                  event.preventDefault();
                  connectWalletWithPublicAddress(
                    activeCrypto,
                    publicAddress,
                    "ledger"
                  );
                }
          }
        >
          <span>Add Wallet</span>
        </StyledAddTransactionButton>
      </StyledForm>
    </>
  );
};

AddAddress.propTypes = {
  connectWalletWithHdAddress: PropTypes.func.isRequired,
  connectWalletWithPublicAddress: PropTypes.func.isRequired,
  errors: PropTypes.object,
  loadingComponent: PropTypes.string,
  coins: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.ui.errors,
  loadingComponent: state.ui.loading.loadingComponent,
  coins: state.data.coins,
});

const mapActionsToProps = {
  connectWalletWithHdAddress,
  connectWalletWithPublicAddress,
};

export default connect(mapStateToProps, mapActionsToProps)(AddAddress);
