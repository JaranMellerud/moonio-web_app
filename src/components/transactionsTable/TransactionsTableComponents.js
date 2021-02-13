// Styled components
import styled from "styled-components";
// Material UI
import TableCell from "@material-ui/core/TableCell";
import Typography from "@material-ui/core/Typography";
// Material UI Icons
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import SwapVertOutlinedIcon from "@material-ui/icons/SwapVertOutlined";
// Theme
import { palette } from "../../styles/theme";

export const TransactionTypeIconContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledArrowUpwardIcon = styled(ArrowUpwardIcon)`
  color: ${palette.primary.green};
`;

export const StyledArrowDownwardIcon = styled(ArrowDownwardIcon)`
  color: ${palette.primary.red};
`;

export const StyledSwapVertOutlinedIcon = styled(SwapVertOutlinedIcon)`
  color: ${palette.primary.darkGray};
`;

export const TransactionTypeText = styled(Typography)`
  && {
    margin-left: 10px;
  }
`;

export const AssetInOrOutCellContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const FiatImageContainer = styled.span`
  font-size: 23px;
  margin-right: 22px;
`;

export const TransactionDropDownCell = styled(TableCell)`
  && {
    width: 50px;
  }
`;
