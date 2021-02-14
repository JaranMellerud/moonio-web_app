import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { AutoCompleteSkeleton } from "../loadingComponents";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { createFilterOptions } from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import { AutocompleteCoinImage } from "../imageComponents";

const StyledAutocomplete = styled(Autocomplete)`
  margin-top: 20px;
`;

const CryptocurrencyAutocomplete = (props) => {
  const {
    loadingComponent,
    coins,
    coinsToRender,
    handleCryptocurrencyChange,
    activeCryptocurrency,
  } = props;

  const cryptocurrencies = coins.flatMap((coin) => {
    if (coinsToRender.some((coinToRender) => coinToRender.id === coin.id)) {
      return coin;
    } else {
      return [];
    }
  });

  return (
    <>
      {loadingComponent === "cryptocurrencyAutocomplete" ? (
        <AutoCompleteSkeleton />
      ) : (
        <StyledAutocomplete
          id="cryptocurrencySelect"
          key="cryptocurrencySelect"
          autoHighlight
          options={cryptocurrencies}
          filterOptions={createFilterOptions({ limit: 50 })}
          value={activeCryptocurrency ? activeCryptocurrency : ""}
          getOptionSelected={() => true}
          defaultValue={activeCryptocurrency ? activeCryptocurrency : ""}
          onChange={handleCryptocurrencyChange}
          getOptionLabel={(option) => (option.name ? option.name : "")}
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
            <TextField
              {...params}
              label="Type to find a cryptocurrency"
              variant="outlined"
              inputProps={{
                ...params.inputProps,
              }}
            />
          )}
        />
      )}
    </>
  );
};

CryptocurrencyAutocomplete.propTypes = {
  loadingComponent: PropTypes.string,
  coins: PropTypes.array.isRequired,
  activeCryptocurrency: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  handleCryptocurrencyChange: PropTypes.func.isRequired,
  coinsToRender: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  loadingComponent: state.ui.loading.loadingComponent,
  coins: state.data.coins,
});

export default connect(mapStateToProps, {})(CryptocurrencyAutocomplete);
