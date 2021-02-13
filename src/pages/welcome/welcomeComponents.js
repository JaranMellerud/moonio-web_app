import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { palette } from "../../styles/theme";

export const WelcomeBackground = styled(Paper)`
  && {
    padding: 20px;
  }
`;

export const WelcomeContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const StyledWelcomeText = styled(Typography)`
  && {
    color: ${palette.primary.dark};
    font-weight: bold;
    margin-bottom: 30px;
    text-align: center;
  }
`;

export const WelcomeText = ({ children }) => {
  return <StyledWelcomeText variant="h3">{children}</StyledWelcomeText>;
};

export const AddTransactionsText = styled(Typography)`
  && {
    font-weight: bold;
    margin-bottom: 30px;
    text-align: center;
  }
`;

export const StyledLink = styled(Link)`
  && {
    color: ${palette.primary.dark};
  }
`;

export const OrText = styled(Typography)`
  && {
    margin: 15px 0;
  }
`;
