import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { palette } from "../../styles/theme";
import {
  InfoSkeleton,
  InfoContainer,
  InnerInfoContainer,
  CurrencyText,
  ValueText,
  ReturnText,
} from "./portfolioInfoComponents";

const PortfolioInfo = (props) => {
  const { baseCurrency, loadingComponent, staticPortfolio } = props;

  const findWeightedAverageReturn24h = (coinList) => {
    let weightedAverageReturn = 0;
    coinList.forEach((coin) => {
      const weightedReturn =
        coin.shareOfPortfolio * coin.priceChangePercentage24h;
      weightedAverageReturn += weightedReturn;
    });
    return weightedAverageReturn;
  };

  const formatReturn = (returnNumber) => {
    let formattedString;
    const returnToString = returnNumber.toLocaleString(undefined, {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    if (returnToString[0] === "-") {
      formattedString = `- ${returnToString.split("-")[1]}`;
    } else {
      formattedString = `+ ${returnToString}`;
    }
    return formattedString;
  };

  return (
    <>
      {loadingComponent === "PortfolioTable" ||
      !staticPortfolio ||
      !staticPortfolio.totalValue ? (
        <InfoSkeleton count={1}>
          <Typography />
        </InfoSkeleton>
      ) : (
        <InfoContainer>
          <InnerInfoContainer>
            <CurrencyText variant="h6">
              {baseCurrency.toUpperCase()}
            </CurrencyText>
            <ValueText variant={window.screen.width < 500 ? "h5" : "h4"}>
              {staticPortfolio.totalValue.toLocaleString(undefined, {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </ValueText>
          </InnerInfoContainer>

          <ReturnText
            variant={window.screen.width < 500 ? "body1" : "h6"}
            color={
              findWeightedAverageReturn24h(staticPortfolio.coins) >= 0
                ? palette.primary.green
                : palette.primary.red
            }
          >
            {formatReturn(
              findWeightedAverageReturn24h(staticPortfolio.coins).toFixed(2)
            )}
            %
          </ReturnText>
        </InfoContainer>
      )}
    </>
  );
};

PortfolioInfo.propTypes = {
  staticPortfolio: PropTypes.object.isRequired,
  baseCurrency: PropTypes.string.isRequired,
  loadingComponent: PropTypes.string,
};

const mapStateToProps = (state) => ({
  staticPortfolio: state.data.staticPortfolio,
  baseCurrency: state.user.credentials.baseCurrency,
  loadingComponent: state.ui.loading.loadingComponent,
});

export default connect(mapStateToProps, {})(PortfolioInfo);
