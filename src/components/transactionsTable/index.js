// React
import React from "react";
// Lodash
import orderBy from "lodash/orderBy";
// Redux
import { connect } from "react-redux";
import { getAllTransactions } from "../../redux/actions/dataActions";
// Proptypes
import PropTypes from "prop-types";
// Material UI
import TableContainer from "@material-ui/core/TableContainer";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
// Components
import { TableCellLoadingSkeleton } from "../loadingComponents";
import {
  TransactionTypeIconContainer,
  StyledArrowUpwardIcon,
  StyledArrowDownwardIcon,
  StyledSwapVertOutlinedIcon,
  TransactionTypeText,
  TransactionDropDownCell,
} from "./TransactionsTableComponents";
import AssetInOrOutCell from "./AssetInOrOutCell";
import TransactionsDropDown from "./TransactionsDropDown";
import {
  StyledTableHead,
  StyledTableHeadCell,
  TableHeadText,
} from "../tableComponents";

const TransactionsTable = (props) => {
  const { transactions, getAllTransactions, loadingComponent } = props;
  const [columnToSort, setColumnToSort] = React.useState("transactionDate");
  const [sortDirection, setSortDirection] = React.useState("desc");

  const tableHeaders = [
    { columnId: "date", children: "Date" },
    { columnId: "inAsset", children: "In" },
    { columnId: "outAsset", children: "Out" },
    { columnId: "feesQuantity", children: "Fees" },
    { columnId: "feesAsset", children: "Type" },
    { columnId: "actions", children: "" },
  ];

  const capitalizeFirstLetter = (string) => {
    const capitalizedFirstLetterString =
      string[0].toUpperCase() + string.slice(1);
    return capitalizedFirstLetterString;
  };

  // Sorts the table by the column set by the columnToSort state
  const handleSort = (columnName) => {
    const invertDirection = {
      asc: "desc",
      desc: "asc",
    };
    setColumnToSort(columnName);
    setSortDirection(
      columnToSort === columnName ? invertDirection[sortDirection] : "asc"
    );
  };

  const removeTransactionFromTable = (transactionId) => {
    const transactionRow = document.getElementById(`${transactionId}-row`);
    transactionRow.remove();
  };

  // Fetching transactionsdata from database
  React.useEffect(() => {
    getAllTransactions("TransactionsTable");
  }, [getAllTransactions]);

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="custom pagination table">
          <StyledTableHead>
            <TableRow key="tableHeader">
              {tableHeaders.map((tableHeader) => {
                return (
                  <StyledTableHeadCell
                    key={tableHeader.columnId}
                    onClick={() => handleSort(tableHeader.columnId)}
                  >
                    <TableHeadText>{tableHeader.children}</TableHeadText>
                  </StyledTableHeadCell>
                );
              })}
            </TableRow>
          </StyledTableHead>
          <TableBody>
            {loadingComponent === "TransactionsTable" || !transactions ? (
              <TableCellLoadingSkeleton columns={6} />
            ) : (
              <>
                {orderBy(transactions, columnToSort, sortDirection).map(
                  (transaction) => (
                    <TableRow key={transaction.id} id={`${transaction.id}-row`}>
                      <TableCell>
                        <Typography>
                          {transaction.date.slice(0, 10) +
                            " " +
                            transaction.date.slice(11, 16)}
                        </Typography>
                      </TableCell>
                      <AssetInOrOutCell
                        inOrOut="in"
                        asset={transaction.inAsset}
                        assetSymbol={transaction.inAssetSymbol}
                        assetImage={transaction.inAssetImage}
                        quantity={transaction.inQuantity}
                      />
                      <AssetInOrOutCell
                        inOrOut="out"
                        asset={transaction.outAsset}
                        assetSymbol={transaction.outAssetSymbol}
                        assetImage={transaction.outAssetImage}
                        quantity={transaction.outQuantity}
                      />
                      <AssetInOrOutCell
                        inOrOut="out"
                        asset={transaction.feesAsset}
                        assetSymbol={transaction.feesAssetSymbol}
                        assetImage={transaction.feesAssetImage}
                        quantity={transaction.feesQuantity}
                      />
                      <TableCell>
                        <TransactionTypeIconContainer>
                          {transaction.type === "buy" && (
                            <StyledArrowUpwardIcon />
                          )}
                          {transaction.type === "sell" && (
                            <StyledArrowDownwardIcon />
                          )}
                          {transaction.type === "swap" && (
                            <StyledSwapVertOutlinedIcon />
                          )}
                          {transaction.type === "send" && (
                            <StyledArrowDownwardIcon />
                          )}
                          {transaction.type === "receive" && (
                            <StyledArrowUpwardIcon />
                          )}
                          <TransactionTypeText>
                            {capitalizeFirstLetter(transaction.type)}
                          </TransactionTypeText>
                        </TransactionTypeIconContainer>
                      </TableCell>
                      <TransactionDropDownCell>
                        <TransactionsDropDown
                          transaction={transaction}
                          removeTransactionFromTable={
                            removeTransactionFromTable
                          }
                        />
                      </TransactionDropDownCell>
                    </TableRow>
                  )
                )}
              </>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

TransactionsTable.propTypes = {
  transactions: PropTypes.array.isRequired,
  getAllTransactions: PropTypes.func.isRequired,
  loadingComponent: PropTypes.string,
};

const mapStateToProps = (state) => ({
  transactions: state.data.transactions,
  loadingComponent: state.ui.loading.loadingComponent,
});

const mapActionsToProps = {
  getAllTransactions,
};

export default connect(mapStateToProps, mapActionsToProps)(TransactionsTable);
