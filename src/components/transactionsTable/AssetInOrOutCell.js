// React
import React from "react";
// Material UI
import TableCell from "@material-ui/core/TableCell";
import Typography from "@material-ui/core/Typography";
// Proptypes
import PropTypes from "prop-types";
import {
  AssetInOrOutCellContainer,
  FiatImageContainer,
} from "./TransactionsTableComponents";
import { CoinImage } from "../imageComponents";
// Util
import { checkIfFiat, getFiatImage } from "../../util/fiats";

const AssetInOrOutCell = (props) => {
  const { inOrOut, asset, assetSymbol, assetImage, quantity } = props;
  const mathSymbol = inOrOut === "out" ? "-" : "+";
  const isFiat = checkIfFiat(asset);
  const isCrypto = checkIfFiat(asset) === false && asset !== "" ? true : false;
  const fiatImage = getFiatImage(asset);

  const formatNumber = (number) => {
    let formattedNumber;
    try {
      if (number.includes(".")) {
        const numberOfDecimalsNeeded = number.split(".")[1].length;
        formattedNumber = parseFloat(number).toLocaleString(undefined, {
          minimumFractionDigits: numberOfDecimalsNeeded,
          maximumFractionDigits: numberOfDecimalsNeeded,
        });
      } else {
        formattedNumber = parseInt(number).toLocaleString();
      }
    } catch (err) {
      console.error(err);
    }

    return formattedNumber;
  };

  return (
    <TableCell>
      <AssetInOrOutCellContainer>
        {quantity === 0 && <></>}
        {isFiat && (
          <>
            <FiatImageContainer>{fiatImage}</FiatImageContainer>
            <Typography>{`${mathSymbol} ${formatNumber(
              quantity
            )} ${asset.toUpperCase()}`}</Typography>
          </>
        )}
        {isCrypto &&
          (assetSymbol ? (
            <>
              <CoinImage
                src={inOrOut === "out" ? assetImage : assetImage}
                alt={inOrOut === "out" ? asset : asset}
              />
              <Typography>{`${mathSymbol} ${formatNumber(
                quantity
              )} ${assetSymbol.toUpperCase()}`}</Typography>
            </>
          ) : (
            <></>
          ))}
      </AssetInOrOutCellContainer>
    </TableCell>
  );
};

AssetInOrOutCell.propTypes = {
  asset: PropTypes.string,
  inOrOut: PropTypes.string.isRequired,
  quantity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default AssetInOrOutCell;
