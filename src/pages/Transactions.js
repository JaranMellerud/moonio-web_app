// React
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// Components
import { AddTransactionButton } from "../components/buttons";
import TransactionsTable from "../components/transactionsTable";
import { PageHeader } from "../components/textComponents";
import { PageHeaderContainer } from "../components/containers";
import { StyledAlert } from "../components/infoComponents";

const Transactions = (props) => {
  const { alert } = props;
  return (
    <>
      {alert && alert.page === "transactions" && (
        <StyledAlert style={{ marginBottom: "25px" }} severity={alert.type}>
          {alert.text}
        </StyledAlert>
      )}
      <PageHeaderContainer>
        <PageHeader>Transactions</PageHeader>
        <Link to="add_transaction">
          <AddTransactionButton>Add Transaction</AddTransactionButton>
        </Link>
      </PageHeaderContainer>
      <TransactionsTable />
    </>
  );
};

const mapStateToProps = (state) => ({
  alert: state.ui.alert,
});

export default connect(mapStateToProps, {})(Transactions);
