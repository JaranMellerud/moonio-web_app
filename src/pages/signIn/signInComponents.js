import styled from "styled-components";
import { palette } from "../../styles/theme";
import Typography from "@material-ui/core/Typography";

export const TermsOfServiceText = styled(Typography)`
  && {
    color: ${palette.primary.darkGray};
    margin-top: 20px;
  }
`;

export const ForgotPasswordText = styled(Typography)`
  && {
    font-weight: bold;
    font-size: 1rem;
  }
`;
