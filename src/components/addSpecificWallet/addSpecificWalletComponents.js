import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import { palette } from "../../styles/theme";
import TextField from "@material-ui/core/TextField";
import { AddTransactionButton } from "../../components/buttons";

export const StyledForm = styled.form`
  margin-top: 30px;
`;

const StyledTypography = styled(Typography)`
  && {
    color: ${palette.primary.darkGray};
    font-size: 0.9rem;
    margin-bottom: 20px;
  }
`;

export const InformationText = () => {
  return (
    <StyledTypography>
      We are only requesting <b>view permissions</b>. This does not give us
      access to your private keys nor the ability to move your funds.
    </StyledTypography>
  );
};

const StyledTextField = styled(TextField)`
  && {
    width: 100%;
    margin-top: 20px;
  }
`;

export const ApiTextField = ({ label, ...rest }) => {
  return <StyledTextField variant="outlined" label={label} {...rest} />;
};

export const StyledAddTransactionButton = styled(AddTransactionButton)`
  margin-top: 25px;
`;
