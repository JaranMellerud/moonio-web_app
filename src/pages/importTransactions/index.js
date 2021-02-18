import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  PageHeaderContainer,
  BackgroundPaper,
} from "../../components/containers";
import { PageHeader } from "../../components/textComponents";
import Grid from "@material-ui/core/Grid";
import AddNewWallet from "../../components/addNewWallet";
import HowToAddWallet from "../../components/howToAddWallet";
import { StyledAlert } from "../../components/infoComponents";
import { AddTransactionButton } from "../../components/buttons";
import {
  HeaderContainer,
  ButtonContainer,
} from "./importTransactionsComponents";

const ImportTransactions = (props) => {
  const { alert } = props;
  return (
    <>
      {alert && alert.page === "import_transactions" && (
        <StyledAlert severity={alert.type}>{alert.text}</StyledAlert>
      )}
      <HeaderContainer>
        <PageHeaderContainer>
          <PageHeader>Import Transactions</PageHeader>
        </PageHeaderContainer>
        <ButtonContainer>
          <AddTransactionButton>Sync Wallets</AddTransactionButton>
        </ButtonContainer>
      </HeaderContainer>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <BackgroundPaper>
            <AddNewWallet />
          </BackgroundPaper>
        </Grid>
        <Grid item xs={12} md={6}>
          <HowToAddWallet />
        </Grid>
      </Grid>
    </>
  );
};

ImportTransactions.propTypes = {
  alert: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  alert: state.ui.alert,
});

export default connect(mapStateToProps, {})(ImportTransactions);
