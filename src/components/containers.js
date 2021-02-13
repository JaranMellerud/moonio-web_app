import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

export const PageHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 0 25px 0;
`;

export const CenteredPageHeaderContainer = styled(PageHeaderContainer)`
  justify-content: center;
`;

export const CenteredForm = (props) => {
  const { children } = props;
  return (
    <Grid container style={{ justifyContent: "center" }}>
      <Grid item sm />
      <Grid item sm={6} style={{ textAlign: "center" }}>
        {children}
      </Grid>
      <Grid item sm />
    </Grid>
  );
};

const StyledMarginWrap = styled.div`
  padding: 60px 20px 60px 20px;
  margin: 0 auto 0 auto;
  max-width: 1200px;
`;

export const MarginWrapper = (props) => {
  const { children } = props;
  return <StyledMarginWrap>{children}</StyledMarginWrap>;
};

export const BackgroundPaper = styled(Paper)`
  padding: 20px;
`;
