import { palette } from "../styles/theme";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import styled from "styled-components";

export const StyledTableHead = styled(TableHead)`
  background-color: ${palette.primary.dark};
`;

export const StyledTableHeadCell = styled(TableCell)`
  cursor: pointer;
  color: ${palette.primary.contrastText};
  font-weight: bold;
  font-size: 1.1rem;
`;

export const TableHeadText = styled.p`
  color: ${palette.primary.contrastText};
  font-weight: bold;
  font-size: 1.1rem;
`;
