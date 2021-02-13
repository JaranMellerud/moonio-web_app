// React
import React from "react";
// Components
import { PageHeader } from "../../components/textComponents";
import AddTransactionForm from "../../components/addTransactionForm";
import { StyledPageHeaderContainer } from "./addTransactionComponents";

const AddTransaction = () => {
  return (
    <>
      <StyledPageHeaderContainer>
        <PageHeader>Add Transaction</PageHeader>
      </StyledPageHeaderContainer>
      <AddTransactionForm />
    </>
  );
};

export default AddTransaction;
