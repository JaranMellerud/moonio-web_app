import React from "react";
import {
  HowToHeader,
  HowToText,
  IndentedHowToText,
} from "../howToAddWalletComponents";

const Ledger = () => {
  return (
    <>
      <HowToHeader>How to add your Ledger wallet</HowToHeader>
      <HowToText>1. Connect your ledger device</HowToText>
      <HowToText>2. Login to Ledger Live desktop app</HowToText>
      <HowToText>
        3. Open the Ledger wallet for the coin of your choice
      </HowToText>
      <HowToText>4. Select the relevant account (left hand side)</HowToText>
      <HowToText>
        5. For <b>Bitcoin</b>, <b>Bitcoin Cash</b>, <b>Dash</b>, <b>Dogecoin</b>
        , <b>Litecoin</b> and <b>Zcash</b> wallets:
      </HowToText>
      <IndentedHowToText>
        1. Click the wrench icon (top right side)
      </IndentedHowToText>
      <IndentedHowToText>
        2. Click <b>Advanced Logs</b>
      </IndentedHowToText>
      <IndentedHowToText>
        3. Copy the HD wallet address prefixed with "xpub" between the quotes
        and paste it
      </IndentedHowToText>
      <HowToText>6. For all other coins:</HowToText>
      <IndentedHowToText>
        1. View the list of transactions and addresses in the wallet
      </IndentedHowToText>
      <IndentedHowToText>2. Copy each address</IndentedHowToText>
    </>
  );
};

export default Ledger;
