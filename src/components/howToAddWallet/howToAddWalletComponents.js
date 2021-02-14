import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import { palette } from "../../styles/theme";

export const HowToHeader = styled(Typography)`
  && {
    font-weight: bold;
    margin-bottom: 10px;
  }
`;

export const HowToText = styled(Typography)`
  && {
    color: ${palette.primary.darkGray};
    margin: 5px 0;
  }
`;

export const IndentedHowToText = styled(HowToText)`
  && {
    margin-left: 30px;
  }
`;

export const ExternalWalletLink = styled.a`
  color: blue;
  cursor: pointer;
`;
