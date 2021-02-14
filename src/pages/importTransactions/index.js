import React from "react";
import {
  PageHeaderContainer,
  BackgroundPaper,
} from "../../components/containers";
import { PageHeader } from "../../components/textComponents";
import Grid from "@material-ui/core/Grid";
import AddNewWallet from "../../components/addNewWallet";
import HowToAddWallet from "../../components/howToAddWallet";

const ImportTransactions = () => {
  return (
    <>
      <PageHeaderContainer>
        <PageHeader>Import Transactions</PageHeader>
      </PageHeaderContainer>
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

export default ImportTransactions;
