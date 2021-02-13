// React
import React, { useState } from "react";
// Proptypes
import PropTypes from "prop-types";
// Components
import { PageHeader, SmallHeader } from "../../components/textComponents";
import { CenteredForm } from "../../components/containers";
import {
  SettingsGroupDiv,
  SettingsGroupItemDiv,
  SettingsGroupChoiceDiv,
  ChoiceText,
} from "./settingsComponents";
import { EditButton, SaveButton } from "../../components/buttons";
import DeleteAccountModal from "./DeleteAccountModal";
import ResetPasswordModal from "./ResetPasswordModal";
import { StyledAlert } from "../../components/infoComponents";
// Material UI
import Typography from "@material-ui/core/Typography";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
// Redux
import { connect } from "react-redux";
import { editBaseCurrency } from "../../redux/actions/userActions";
// Util
import { fiats } from "../../util/fiats";

const Settings = (props) => {
  const { user, baseCurrency, alert, editBaseCurrency } = props;
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [baseCurrencyInState, setBaseCurrencyInState] = useState("usd");

  const handleBaseCurrencyChange = (e, value) => {
    let newBaseCurrency = "usd";
    if (!value) {
      newBaseCurrency = fiats[0];
    } else {
      newBaseCurrency = value.id;
    }
    setBaseCurrencyInState(newBaseCurrency);
  };

  const handleEditBaseCurrencyClick = () => {
    setCurrencyOpen(false);
    editBaseCurrency(baseCurrencyInState);
    user.credentials.baseCurrency = baseCurrencyInState;
  };

  return (
    <CenteredForm>
      {alert && alert.page === "settings" && (
        <StyledAlert severity={alert.type}>{alert.text}</StyledAlert>
      )}
      <PageHeader>Settings</PageHeader>
      <SettingsGroupDiv>
        <SmallHeader>Settings</SmallHeader>
        <SettingsGroupItemDiv>
          <SettingsGroupChoiceDiv>
            <Typography>Currency</Typography>
            <ChoiceText>{baseCurrency.toUpperCase()}</ChoiceText>
          </SettingsGroupChoiceDiv>
          {currencyOpen ? (
            <div style={{ display: "flex" }}>
              <Autocomplete
                id="currencySelect"
                options={fiats}
                autoHighlight
                defaultValue={
                  fiats &&
                  user &&
                  fiats.find((fiat) => fiat.id === baseCurrency)
                }
                onChange={handleBaseCurrencyChange}
                getOptionLabel={(option) => option.name}
                renderOption={(option) => (
                  <React.Fragment>
                    <span>{option.image}&nbsp;&nbsp;</span>
                    {`${option.name} (${option.symbol.toUpperCase()})`}
                  </React.Fragment>
                )}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    inputProps={{
                      ...params.inputProps,
                    }}
                    style={{ width: "200px" }}
                  />
                )}
              />
              <SaveButton onClick={handleEditBaseCurrencyClick}>
                Save
              </SaveButton>
            </div>
          ) : (
            <EditButton
              value={true}
              onClick={(e) => setCurrencyOpen(e.currentTarget.value)}
            >
              Edit
            </EditButton>
          )}
        </SettingsGroupItemDiv>
      </SettingsGroupDiv>
      <SettingsGroupDiv>
        <SmallHeader>Account</SmallHeader>
        <SettingsGroupItemDiv>
          <SettingsGroupChoiceDiv>
            <Typography>Reset Password</Typography>
          </SettingsGroupChoiceDiv>
          <ResetPasswordModal />
        </SettingsGroupItemDiv>
        <SettingsGroupItemDiv>
          <SettingsGroupChoiceDiv>
            <Typography>Delete Account</Typography>
          </SettingsGroupChoiceDiv>
          <DeleteAccountModal />
        </SettingsGroupItemDiv>
      </SettingsGroupDiv>
    </CenteredForm>
  );
};

Settings.propTypes = {
  user: PropTypes.object.isRequired,
  userId: PropTypes.string.isRequired,
  baseCurrency: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired,
  alert: PropTypes.object.isRequired,
  editBaseCurrency: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  userId: state.user.credentials.userId,
  baseCurrency: state.user.credentials.baseCurrency,
  errors: state.ui.errors,
  alert: state.ui.alert,
});

const mapActionsToProps = {
  editBaseCurrency,
};

export default connect(mapStateToProps, mapActionsToProps)(Settings);
