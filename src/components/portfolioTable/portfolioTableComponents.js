import React from "react";
import { palette } from "../../styles/theme";
import PropTypes from "prop-types";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import TableCell from "@material-ui/core/TableCell";

export const TableCellDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const CoinTextDiv = styled.div`
  justify-content: center;
`;

export const CoinNameText = styled(Typography)`
  && {
    font-weight: bold;
  }
`;

export const ReturnSpanContainer = styled(TableCell)`
  && {
    min-width: 100px;
  }
`;

export const QuantityOwnedText = styled(Typography)`
  && {
    color: ${palette.primary.darkGray};
  }
`;

const StyledSpan = styled.span`
  color: white;
  border-radius: 3px;
  padding: 5px;
  font-size: 0.8rem;
  font-weight: bold;
  background-color: ${(props) => props.backgroundColor};
`;

export const ReturnSpan = (props) => {
  const { number } = props;
  const isNegative = (number) => {
    if (number < 0) {
      return true;
    } else {
      return false;
    }
  };

  const backgroundColor = isNegative(number)
    ? palette.primary.red
    : palette.primary.green;

  return (
    <>
      {number === null ? (
        <span>?</span>
      ) : (
        <StyledSpan backgroundColor={backgroundColor}>
          {isNegative(number) === true
            ? "- " + number.toFixed(2).toLocaleString().split("-")[1]
            : "+ " + number.toFixed(2).toLocaleString()}
          %
        </StyledSpan>
      )}
    </>
  );
};

ReturnSpan.propTypes = {
  number: PropTypes.number,
};

const ShareOfPortfolioLineContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ShareOfPortfolioLineWrapper = styled.div`
  height: 10px;
  width: 150px;
  margin-right: 10px;
  background: #f1f1f1;
  border: gray solid 1px;
  border-radius: 10px;
  position: relative;
`;

const ShareOfPortfolioLineSpan = styled.span`
  display: block;
  height: 100%;
  background-color: ${palette.primary.dark};
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  width: ${(props) => props.shareOfPortfolio * 100 + "%"};
`;

export const ShareOfPortfolioLine = (props) => {
  const { shareOfPortfolio } = props;

  return (
    <ShareOfPortfolioLineContainer>
      <ShareOfPortfolioLineWrapper>
        <ShareOfPortfolioLineSpan shareOfPortfolio={shareOfPortfolio} />
      </ShareOfPortfolioLineWrapper>
      <Typography>{(shareOfPortfolio * 100).toFixed(1)}%</Typography>
    </ShareOfPortfolioLineContainer>
  );
};

ShareOfPortfolioLine.propTypes = {
  shareOfPortfolio: PropTypes.number.isRequired,
};
