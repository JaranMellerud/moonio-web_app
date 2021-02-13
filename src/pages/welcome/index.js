import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid"; // Material UI
import {
  WelcomeBackground,
  WelcomeContainer,
  WelcomeText,
  AddTransactionsText,
  StyledLink,
  OrText,
} from "./welcomeComponents";

const Welcome = () => {
  return (
    <Grid container>
      <Grid item md={3} />
      <Grid item xs={12} md={6}>
        <WelcomeBackground>
          <WelcomeContainer>
            <WelcomeText>
              Welcome to
              <br />
              Moonio
            </WelcomeText>
            <AddTransactionsText>
              Add your transactions to get started! You can either...
            </AddTransactionsText>
            <Typography>
              <StyledLink to={"/add_transaction"}>
                Add transaction manually
              </StyledLink>{" "}
            </Typography>
            <OrText>or</OrText>
            <Typography>
              <StyledLink to={"/connect_wallet"}>
                connect your wallets and exchanges
              </StyledLink>
            </Typography>
          </WelcomeContainer>
        </WelcomeBackground>
      </Grid>
      <Grid item md={3} />
    </Grid>
  );
};

export default Welcome;
