import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

export const ErrorText = styled.p`
  color: red;
  font-size: 0.8rem;
  margin: 10px 0 10px 0;
`;

const StyledPageHeader = styled(Typography)`
  margin-bottom: 30px;
`;
export const PageHeader = (props) => {
  const { children } = props;
  return <StyledPageHeader variant="h3">{children}</StyledPageHeader>;
};

const StyledSmallHeader = styled(Typography)`
  && {
    margin-bottom: 10px;
    font-weight: bold;
  }
`;

export const SmallHeader = (props) => {
  const { children } = props;
  return <StyledSmallHeader variant="h6">{children}</StyledSmallHeader>;
};
