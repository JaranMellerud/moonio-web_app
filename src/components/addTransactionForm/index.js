// React
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
// PropTypes
import PropTypes from "prop-types";
// Material UI
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// Redux
import { connect } from "react-redux";
import {
  addTransaction,
  editTransaction,
  getAllCoins,
} from "../../redux/actions/dataActions";
// Components
import { AutoCompleteSkeleton } from "../loadingComponents";
import AutoCompleteComponent from "./AutoCompleteComponent";
import { ErrorText } from "../textComponents";
import {
  StyledTextField,
  AssetTypeInOutContainer,
  FiatInOutContainer,
  AssetTypeOutContainer,
  AddTransactionFormDivider,
  AssetContainer,
  ArrowIconContainer,
  StyledArrowIcon,
  FeesContainer,
  FeesTypeContainer,
  StyledAddTransactionButton,
} from "./AddTransactionFormComponents";
import { FormFieldHeader, StyledCheckbox } from "../formComponents";

const assetTypes = {
  crypto: "crypto",
  fiat: "fiat",
  none: "none",
};

const AddTransactionForm = (props) => {
  const {
    transaction,
    edit,
    editTransaction,
    addTransaction,
    coins,
    loadingComponent,
    errors,
    getAllCoins,
  } = props;
  const history = useHistory();
  const transactionId = transaction ? transaction.id : null;
  const [date, setDate] = useState(
    transaction ? transaction.date : new Date().toISOString().slice(0, 16)
  );
  const [outQuantity, setOutQuantity] = useState(
    transaction ? transaction.outQuantity : ""
  );
  const [outAsset, setOutAsset] = useState(
    transaction ? transaction.outAsset : ""
  );
  const [outType, setOutType] = useState(
    transaction ? transaction.outType : assetTypes.crypto
  );
  const [inQuantity, setInQuantity] = useState(
    transaction ? transaction.inQuantity : ""
  );
  const [inAsset, setInAsset] = useState(
    transaction ? transaction.inAsset : ""
  );
  const [inType, setInType] = useState(
    transaction ? transaction.inType : assetTypes.crypto
  );
  const [feesQuantity, setFeesQuantity] = useState(
    transaction && transaction.feesQuantity !== null
      ? transaction.feesQuantity
      : ""
  );
  const [feesAsset, setFeesAsset] = useState(
    transaction && transaction.feesAsset !== null ? transaction.feesAsset : ""
  );
  const [feesType, setFeesType] = useState(
    transaction && transaction.feesType !== null
      ? transaction.feesType
      : assetTypes.none
  );
  const [formErrors, setFormErrors] = useState({});
  useEffect(() => {
    if (errors) {
      setFormErrors(errors);
    }
  }, [errors]);

  const handleOutTypeChange = (event) => {
    if (outType === event.target.name) {
      return;
    }
    setOutType(event.target.name);
  };
  const handleInTypeChange = (event) => {
    if (inType === event.target.name) {
      return;
    }
    setInType(event.target.name);
  };
  const handleFeesTypeChange = (event) => {
    if (feesType === event.target.name) {
      return;
    }
    setFeesType(event.target.name);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleOutQuantityChange = (event) => {
    setOutQuantity(event.target.value);
  };
  const handleInQuantityChange = (event) => {
    setInQuantity(event.target.value);
  };
  const handleFeesQuantityChange = (event) => {
    setFeesQuantity(event.target.value);
  };

  const handleOutAssetChange = (event, value) => {
    if (!value) {
      return;
    }
    setOutAsset(value.id);
  };
  const handleInAssetChange = (event, value) => {
    if (!value) {
      return;
    }
    setInAsset(value.id);
  };
  const handleFeesAssetChange = (event, value) => {
    if (!value) {
      return;
    }
    setFeesAsset(value.id);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // checking if values should be none or not before submitting
    let inAssetSubmit = inAsset;
    let inQuantitySubmit = inQuantity;
    let inTypeSubmit = inType;
    let outAssetSubmit = outAsset;
    let outQuantitySubmit = outQuantity;
    let outTypeSubmit = outType;
    let feesAssetSubmit = feesAsset;
    let feesQuantitySubmit = feesQuantity;
    let feesTypeSubmit = feesType;
    if (inType === "none") {
      inAssetSubmit = null;
      inQuantitySubmit = null;
      inTypeSubmit = null;
    }
    if (outType === "none") {
      outAssetSubmit = null;
      outQuantitySubmit = null;
      outTypeSubmit = null;
    }
    if (feesType === "none") {
      feesAssetSubmit = null;
      feesQuantitySubmit = null;
      feesTypeSubmit = null;
    }
    if (inAsset === "") {
      inAssetSubmit = null;
    }
    if (outAsset === "") {
      outAssetSubmit = null;
    }
    if (feesAsset === "") {
      feesAssetSubmit = null;
    }
    const transaction = {
      id: transactionId,
      date: date,
      type: determineTransactionType(outTypeSubmit, inTypeSubmit),
      outQuantity: outQuantitySubmit,
      outAsset: outAssetSubmit,
      outType: outTypeSubmit,
      inQuantity: inQuantitySubmit,
      inAsset: inAssetSubmit,
      inType: inTypeSubmit,
      feesQuantity: feesQuantitySubmit,
      feesAsset: feesAssetSubmit,
      feesType: feesTypeSubmit,
    };

    if (edit) {
      editTransaction(
        "addTransactionButton",
        transaction,
        transactionId,
        history
      );
    } else {
      addTransaction("addTransactionButton", transaction, history);
    }
  };

  // Fetching coindata from database <- coinGecko
  React.useEffect(() => {
    getAllCoins("assetSelect");
  }, [getAllCoins]);

  return (
    <Grid container>
      <Grid item sm />
      <Grid item sm={6}>
        <form noValidate>
          <FormFieldHeader>Transaction Date</FormFieldHeader>
          <StyledTextField
            onChange={handleDateChange}
            helperText={formErrors.date ? formErrors.date : ""}
            error={formErrors && formErrors.date ? true : false}
            id="date"
            name="date"
            type="datetime-local"
            InputLabelProps={{ shrink: true, required: true }}
            variant="outlined"
            value={date}
            fullWidth
          />
          <AssetTypeInOutContainer>
            <FiatInOutContainer>
              <FormFieldHeader>Asset Out</FormFieldHeader>
              <FormGroup row>
                <FormControlLabel
                  control={
                    <StyledCheckbox
                      color="primary"
                      checked={outType === assetTypes.crypto}
                      onChange={handleOutTypeChange}
                      name={assetTypes.crypto}
                    />
                  }
                  label="Crypto"
                />
                <FormControlLabel
                  control={
                    <StyledCheckbox
                      color="primary"
                      checked={outType === assetTypes.fiat}
                      onChange={handleOutTypeChange}
                      name={assetTypes.fiat}
                    />
                  }
                  label="Fiat"
                />
                <FormControlLabel
                  control={
                    <StyledCheckbox
                      color="primary"
                      checked={outType === assetTypes.none}
                      onChange={handleOutTypeChange}
                      name={assetTypes.none}
                    />
                  }
                  label="None"
                />
              </FormGroup>
            </FiatInOutContainer>
            <AssetTypeOutContainer>
              <FormFieldHeader>Asset In</FormFieldHeader>
              <FormGroup row>
                <FormControlLabel
                  control={
                    <StyledCheckbox
                      color="primary"
                      checked={inType === assetTypes.crypto}
                      onChange={handleInTypeChange}
                      name={assetTypes.crypto}
                    />
                  }
                  label="Crypto"
                />
                <FormControlLabel
                  control={
                    <StyledCheckbox
                      color="primary"
                      checked={inType === assetTypes.fiat}
                      onChange={handleInTypeChange}
                      name={assetTypes.fiat}
                    />
                  }
                  label="Fiat"
                />
                <FormControlLabel
                  control={
                    <StyledCheckbox
                      color="primary"
                      checked={inType === assetTypes.none}
                      onChange={handleInTypeChange}
                      name={assetTypes.none}
                    />
                  }
                  label="None"
                />
              </FormGroup>
            </AssetTypeOutContainer>
          </AssetTypeInOutContainer>
          <AddTransactionFormDivider>
            <AssetContainer>
              {loadingComponent === "assetSelect" ? (
                <AutoCompleteSkeleton />
              ) : (
                <AutoCompleteComponent
                  transaction={transaction}
                  coins={coins}
                  id="outAssetSelect"
                  type={outType}
                  inOrOut="out"
                  onChange={handleOutAssetChange}
                />
              )}
              <StyledTextField
                onChange={handleOutQuantityChange}
                id="outQuantity"
                name="outQuantity"
                type="number"
                variant="outlined"
                value={outType === "none" ? "" : outQuantity}
                label="Quantity"
                disabled={outType === "none"}
                fullWidth
              />
            </AssetContainer>
            <ArrowIconContainer>
              <StyledArrowIcon />
            </ArrowIconContainer>
            <AssetContainer>
              {loadingComponent === "assetSelect" ? (
                <AutoCompleteSkeleton />
              ) : (
                <AutoCompleteComponent
                  transaction={transaction}
                  coins={coins}
                  id="inAssetSelect"
                  type={inType}
                  inOrOut="in"
                  onChange={handleInAssetChange}
                />
              )}
              <StyledTextField
                onChange={handleInQuantityChange}
                id="inQuantity"
                name="inQuantity"
                type="number"
                variant="outlined"
                disabled={inType === "none"}
                value={inType === "none" ? "" : inQuantity}
                label="Quantity"
                fullWidth
              />
            </AssetContainer>
          </AddTransactionFormDivider>
          <FeesContainer>
            <FeesTypeContainer>
              <FormFieldHeader>Fees paid with</FormFieldHeader>
              <FormGroup row>
                <FormControlLabel
                  control={
                    <StyledCheckbox
                      color="primary"
                      checked={feesType === assetTypes.none}
                      onChange={handleFeesTypeChange}
                      name={assetTypes.none}
                    />
                  }
                  label="No Fees"
                />
                <FormControlLabel
                  control={
                    <StyledCheckbox
                      color="primary"
                      checked={feesType === assetTypes.fiat}
                      onChange={handleFeesTypeChange}
                      name={assetTypes.fiat}
                    />
                  }
                  label="Fiat"
                />
                <FormControlLabel
                  control={
                    <StyledCheckbox
                      color="primary"
                      checked={feesType === assetTypes.crypto}
                      onChange={handleFeesTypeChange}
                      name={assetTypes.crypto}
                    />
                  }
                  label="Crypto"
                />
              </FormGroup>
            </FeesTypeContainer>
            <AutoCompleteComponent
              transaction={transaction}
              coins={coins}
              id="feesAssetSelect"
              type={feesType}
              onChange={handleFeesAssetChange}
            />
            <StyledTextField
              onChange={handleFeesQuantityChange}
              id="feesQuantity"
              name="feesQuantity"
              type="number"
              variant="outlined"
              label="Quantity"
              disabled={feesType === "none"}
              value={feesType === "none" ? "" : feesQuantity}
              fullWidth
            />
            {formErrors.general && <ErrorText>{formErrors.general}</ErrorText>}
            <StyledAddTransactionButton
              onClick={handleSubmit}
              type="button"
              style={
                loadingComponent === "addTransactionButton"
                  ? {
                      paddingTop: "5px",
                      paddingBottom: "5px",
                    }
                  : {}
              }
              disabled={loadingComponent === "addTransactionButton"}
            >
              {loadingComponent !== "addTransactionButton" ? (
                <span>{edit ? "Edit Transaction" : "Add Transaction"}</span>
              ) : (
                <CircularProgress />
              )}
            </StyledAddTransactionButton>
          </FeesContainer>
        </form>
      </Grid>
      <Grid item sm />
    </Grid>
  );
};

AddTransactionForm.propTypes = {
  userId: PropTypes.string.isRequired,
  errors: PropTypes.object,
  loadingComponent: PropTypes.string.isRequired,
  coins: PropTypes.array.isRequired,
  addTransaction: PropTypes.func.isRequired,
  editTransaction: PropTypes.func.isRequired,
  getAllCoins: PropTypes.func.isRequired,
  transaction: PropTypes.object,
  edit: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  userId: state.user.credentials.userId,
  errors: state.ui.errors,
  loadingComponent: state.ui.loading.loadingComponent,
  coins: state.data.coins,
});

const mapActionsToProps = {
  addTransaction,
  editTransaction,
  getAllCoins,
};

export default connect(mapStateToProps, mapActionsToProps)(AddTransactionForm);

// Helpers
const determineTransactionType = (outType, inType) => {
  let transactionType;
  if (outType === inType) {
    transactionType = "swap";
  } else if (outType === "crypto" && inType === "fiat") {
    transactionType = "sell";
  } else if (outType === "fiat" && inType === "crypto") {
    transactionType = "buy";
  } else if (outType === "crypto" && inType === null) {
    transactionType = "send";
  } else if (outType === null && inType === "crypto") {
    transactionType = "receive";
  } else {
    transactionType = "invalid transactiontype";
  }
  return transactionType;
};
