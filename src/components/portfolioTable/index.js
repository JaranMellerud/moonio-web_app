// React
import React, { useState, useEffect } from "react";
// Redux
import { connect } from "react-redux";
import { getStaticPortfolio } from "../../redux/actions/dataActions";
// Proptypes
import PropTypes from "prop-types";
// Lodash
import orderBy from "lodash/orderBy";
// Material UI
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Typography from "@material-ui/core/Typography";
// Components
import { CoinImage } from "../imageComponents";
import {
  StyledTableHead,
  StyledTableHeadCell,
  TableHeadText,
} from "../tableComponents";
import { TableCellLoadingSkeleton } from "../loadingComponents";
import {
  TableCellDiv,
  CoinTextDiv,
  CoinNameText,
  ReturnSpanContainer,
  ReturnSpan,
  QuantityOwnedText,
  ShareOfPortfolioLine,
} from "./portfolioTableComponents";

const PortfolioTable = (props) => {
  const {
    staticPortfolio,
    loadingComponent,
    baseCurrency,
    getStaticPortfolio,
  } = props;
  const [columnToSort, setColumnToSort] = useState("shareOfPortfolio");
  const [sortDirection, setSortDirection] = useState("desc");

  useEffect(() => {
    getStaticPortfolio("PortfolioTable", baseCurrency);
  }, [getStaticPortfolio, baseCurrency]);

  // creating the headers of the transactions table
  const tableHeaders = [
    { columnId: "name", children: "Name" },
    { columnId: "currentPrice", children: "Price" },
    { columnId: "priceChangePercentage24h", children: "24h" },
    { columnId: "valueOwned", children: "Holdings" },
    { columnId: "shareOfPortfolio", children: "Share" },
  ];

  // sorts the table by column
  const invertDirection = {
    asc: "desc",
    desc: "asc",
  };
  const handleSort = (columnName) => {
    setColumnToSort(columnName);
    setSortDirection(
      columnToSort === columnName ? invertDirection[sortDirection] : "asc"
    );
  };

  // Filtering out coins in which the user currently doesn't own anything
  const filteredCoins =
    staticPortfolio && staticPortfolio.coins
      ? staticPortfolio.coins.filter((coin) => coin.valueOwned > 2)
      : [];

  return (
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
          {loadingComponent === "PortfolioTable" ||
          !staticPortfolio ||
          !staticPortfolio.coins ? (
            <TableCellLoadingSkeleton columns={5} />
          ) : (
            <>
              {orderBy(filteredCoins, columnToSort, sortDirection).map(
                (coin) => (
                  <TableRow key={coin.id} id={`${coin.id}-row`}>
                    <TableCell>
                      <TableCellDiv>
                        <CoinImage src={coin.image} alt={coin.name} />
                        <CoinTextDiv>
                          <CoinNameText>{coin.name}</CoinNameText>
                          <Typography>{coin.symbol.toUpperCase()}</Typography>
                        </CoinTextDiv>
                      </TableCellDiv>
                    </TableCell>
                    <TableCell>
                      <Typography>
                        {baseCurrency.toUpperCase()}{" "}
                        {coin.currentPrice.toLocaleString()}
                      </Typography>
                    </TableCell>
                    <ReturnSpanContainer>
                      <ReturnSpan number={coin.priceChangePercentage24h} />
                    </ReturnSpanContainer>
                    <TableCell>
                      <Typography>
                        {baseCurrency.toUpperCase()}{" "}
                        {coin.valueOwned.toLocaleString(undefined, {
                          maximumFractionDigits: 0,
                          minimumFractionDigits: 0,
                        })}
                      </Typography>
                      <QuantityOwnedText>
                        {coin.quantityOwned.toLocaleString()}{" "}
                        {coin.symbol.toUpperCase()}
                      </QuantityOwnedText>
                    </TableCell>
                    <TableCell>
                      <ShareOfPortfolioLine
                        shareOfPortfolio={coin.shareOfPortfolio}
                      />
                    </TableCell>
                  </TableRow>
                )
              )}
            </>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

PortfolioTable.propTypes = {
  staticPortfolio: PropTypes.object.isRequired,
  baseCurrency: PropTypes.string.isRequired,
  loadingComponent: PropTypes.string,
  getStaticPortfolio: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  staticPortfolio: state.data.staticPortfolio,
  baseCurrency: state.user.credentials.baseCurrency,
  loadingComponent: state.ui.loading.loadingComponent,
});

const mapActionsToProps = {
  getStaticPortfolio,
};

export default connect(mapStateToProps, mapActionsToProps)(PortfolioTable);
