import React from "react";
import {
  PageHeaderContainer,
  BackgroundPaper,
} from "../../components/containers";
import { PageHeader } from "../../components/textComponents";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const ImportTransactions = () => {
  return (
    <>
      <PageHeaderContainer>
        <PageHeader>Import Transactions</PageHeader>
      </PageHeaderContainer>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <BackgroundPaper>
            <Typography>Add new wallet</Typography>
          </BackgroundPaper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography>How to add</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default ImportTransactions;
