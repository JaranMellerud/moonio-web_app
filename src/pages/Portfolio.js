// React
import React from "react";
// Components
import { PageHeader } from "../components/textComponents";
import PortfolioTable from "../components/portfolioTable";
import PortfolioChart from "../components/portfolioChart";
import PortfolioInfo from "../components/portfolioInfo";
import { PageHeaderContainer } from "../components/containers";
// Material UI
import Grid from "@material-ui/core/Grid";

const Portfolio = () => {
  return (
    <>
      <PageHeaderContainer>
        <PageHeader>Portfolio</PageHeader>
        <PortfolioInfo />
      </PageHeaderContainer>
      <div>
        <Grid container item spacing={3}>
          <Grid item xs={12}>
            <PortfolioChart />
          </Grid>
          <Grid item xs={12}>
            <PortfolioTable />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Portfolio;
