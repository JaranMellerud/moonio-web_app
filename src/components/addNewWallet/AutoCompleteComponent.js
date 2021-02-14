import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { createFilterOptions } from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";

const StyledAutocomplete = styled(Autocomplete)`
  margin-bottom: 20px;
`;

const AutoCompleteComponent = (props) => {
  const { wallets, activeWallet, onChange } = props;

  const findDefaultValue = () => {
    return wallets.find((wallet) => wallet.id === activeWallet);
  };

  return (
    <>
      <StyledAutocomplete
        id="walletSelect"
        key="walletSelect"
        options={wallets}
        autoHighlight
        filterOptions={createFilterOptions({ limit: 50 })}
        onChange={onChange}
        defaultValue={findDefaultValue() ? findDefaultValue() : ""}
        value={findDefaultValue() ? findDefaultValue() : ""}
        getOptionLabel={(option) => option.name}
        renderOption={(option) => (
          <React.Fragment>{option.name}</React.Fragment>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Type to find a wallet or exchange"
            variant="outlined"
            inputProps={{
              ...params.inputProps,
            }}
          />
        )}
      />
    </>
  );
};

AutoCompleteComponent.propTypes = {
  wallets: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AutoCompleteComponent;
