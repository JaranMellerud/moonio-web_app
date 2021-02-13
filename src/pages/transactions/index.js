// React
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// Components
import { AddTransactionButton } from "../../components/buttons";
import TransactionsTable from "../../components/transactionsTable";
import { PageHeader } from "../../components/textComponents";
import { PageHeaderContainer } from "../../components/containers";
import { StyledAlert } from "../../components/infoComponents";
import { StyledLink } from "./transactionsComponents";

const Transactions = (props) => {
  const { alert } = props;
  return (
    <>
      {alert && alert.page === "transactions" && (
        <StyledAlert severity={alert.type}>{alert.text}</StyledAlert>
      )}
      <PageHeaderContainer>
        <PageHeader>Transactions</PageHeader>
        <div>
          <Link to="import_transactions">
            <AddTransactionButton>Import Transactions</AddTransactionButton>
          </Link>
          <StyledLink to="add_transaction">
            <AddTransactionButton>Add Transaction</AddTransactionButton>
          </StyledLink>
        </div>
      </PageHeaderContainer>
      <TransactionsTable />
    </>
  );
};

const mapStateToProps = (state) => ({
  alert: state.ui.alert,
});

export default connect(mapStateToProps, {})(Transactions);
