import React from "react";
import PropTypes from "prop-types";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { createFilterOptions } from "@material-ui/lab/Autocomplete";
import { connect } from "react-redux";
import { fiats } from "../../util/fiats";
import { StyledTextField, CoinImage } from "./AddTransactionFormComponents";

const AutoCompleteComponent = (props) => {
  const { transaction, inOrOut, coins, id, type, onChange } = props;

  const findDefaultValue = () => {
    if (type === "crypto" && transaction) {
      if (inOrOut === "in") {
        return coins.find((coin) => coin.id === transaction.inAsset);
      } else if (inOrOut === "out") {
        return coins.find((coin) => coin.id === transaction.outAsset);
      }
    } else if (type === "fiat" && transaction) {
      if (inOrOut === "in") {
        return fiats.find((fiat) => fiat.id === transaction.inAsset);
      } else if (inOrOut === "out") {
        return fiats.find((fiat) => fiat.id === transaction.outAsset);
      }
    } else {
      return undefined;
    }
  };

  return (
    <>
      <Autocomplete
        id={id}
        key={type}
        disabled={type === "none"}
        options={type === "crypto" ? coins : fiats}
        autoHighlight
        filterOptions={createFilterOptions({ limit: 50 })}
        defaultValue={findDefaultValue()}
        onChange={onChange}
        getOptionLabel={(option) => option.name}
        renderOption={(option) =>
          type === "crypto" ? (
            <React.Fragment>
              <span>
                <CoinImage alt={option.name} src={option.image} />
                &nbsp;&nbsp;
              </span>
              {`${option.name} (${option.symbol.toUpperCase()})`}
            </React.Fragment>
          ) : (
            <React.Fragment>
              <span>{option.image}&nbsp;&nbsp;</span>
              {option.name} ({option.symbol})
            </React.Fragment>
          )
        }
        renderInput={(params) => (
          <StyledTextField
            {...params}
            label="Asset"
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
  coins: PropTypes.array.isRequired,
  transaction: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  coins: state.data.coins,
});

export default connect(mapStateToProps, {})(AutoCompleteComponent);
