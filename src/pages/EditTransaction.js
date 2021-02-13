import React from "react";
import { useLocation } from "react-router-dom";
import { PageHeader } from "../components/textComponents";
import AddTransactionForm from "../components/addTransactionForm";
import { CenteredPageHeaderContainer } from "../components/containers";

const EditTransaction = () => {
  const location = useLocation();
  const transaction = location.state.transaction;

  return (
    <>
      <CenteredPageHeaderContainer>
        <PageHeader>Edit Transaction</PageHeader>
      </CenteredPageHeaderContainer>
      <AddTransactionForm transaction={transaction} edit />
    </>
  );
};

export default EditTransaction;
