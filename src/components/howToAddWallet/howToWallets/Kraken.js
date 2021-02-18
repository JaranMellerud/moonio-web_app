import React from "react";
import {
  HowToHeader,
  HowToText,
  IndentedHowToText,
  ExternalWalletLink,
} from "../howToAddWalletComponents";

const Kraken = () => {
  return (
    <>
      <HowToHeader>How to add your Kraken account</HowToHeader>
      <HowToText>
        1. Navigate to{" "}
        <ExternalWalletLink href="https://www.kraken.com/" target="_blank">
          Kraken
        </ExternalWalletLink>{" "}
        and log in
      </HowToText>
      <HowToText>
        2. Navigate to <b>Security</b> &gt; <b>API</b>
      </HowToText>
      <HowToText>
        3. Click the <b>Generate New Key</b> button
      </HowToText>
      <HowToText>
        4. Enable the following <b>permissions</b>
      </HowToText>
      <IndentedHowToText>1. Query Funds</IndentedHowToText>
      <IndentedHowToText>2. Query Closed Orders &#38; Trades</IndentedHowToText>
      <IndentedHowToText>3. Query Ledger Entries</IndentedHowToText>
      <HowToText>
        5. Click the <b>Generate Key</b> button
      </HowToText>
      <HowToText>
        6. Copy the <b>API Key</b> and <b>Private Key</b>
      </HowToText>
    </>
  );
};

export default Kraken;
