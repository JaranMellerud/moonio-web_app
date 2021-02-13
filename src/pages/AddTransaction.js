// React
import React from "react";
// Components
import { PageHeader } from "../components/textComponents";
import AddTransactionForm from "../components/addTransactionForm";
import { CenteredPageHeaderContainer } from "../components/containers";

const AddTransaction = () => {
  return (
    <>
      <CenteredPageHeaderContainer>
        <PageHeader>Add Transaction</PageHeader>
      </CenteredPageHeaderContainer>
      <AddTransactionForm />
    </>
  );
};

export default AddTransaction;
