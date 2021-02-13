import React from "react";
import _ from "lodash";
import CircularProgress from "@material-ui/core/CircularProgress";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";
import AutoCompleteComponent from "./addTransactionForm/AutoCompleteComponent";

export const AutoCompleteSkeleton = () => {
  return (
    <AutoCompleteComponent>
      <Skeleton />
    </AutoCompleteComponent>
  );
};

const LoadingProgressCircularPageContainer = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoadingProgressCircularPage = () => {
  return (
    <>
      <LoadingProgressCircularPageContainer>
        <CircularProgress />
      </LoadingProgressCircularPageContainer>
    </>
  );
};

export const TableCellLoadingSkeleton = ({ columns }) => {
  return (
    <TableRow>
      {_.times(columns, (time) => {
        return (
          <TableCell key={time}>
            <Skeleton count={2} height={40} />
          </TableCell>
        );
      })}
    </TableRow>
  );
};
