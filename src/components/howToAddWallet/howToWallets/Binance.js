import React from "react";
import {
  HowToHeader,
  HowToText,
  IndentedHowToText,
  ExternalWalletLink,
} from "../howToAddWalletComponents";

const Binance = () => {
  return (
    <>
      <HowToHeader>How to add your Binance account</HowToHeader>
      <HowToText>
        1. Open the Binance{" "}
        <ExternalWalletLink
          href="https://www.binance.com/en/usercenter/settings/api-management"
          target="_blank"
        >
          API
        </ExternalWalletLink>{" "}
        page
      </HowToText>
      <HowToText>
        2. <b>Create a new API key</b> by entering a label, such as "
        <b>Moonio</b>", and clicking the <b>Create New Key</b> button
      </HowToText>
      <HowToText>
        3. If applicable, enter your <b>two-factor authentication code</b>
      </HowToText>
      <HowToText>
        4. Copy the <b>API Key</b> and <b>Secret</b>
      </HowToText>
      <HowToText>
        5. RECOMMENDED. Disable trading access for this API key
      </HowToText>
      <IndentedHowToText>
        1. Click the <b>Edit</b> button
      </IndentedHowToText>
      <IndentedHowToText>
        2. Disable the <b>Enable Trading</b> permission
      </IndentedHowToText>
      <IndentedHowToText>
        3. Click <b>Save</b>
      </IndentedHowToText>
      <IndentedHowToText>
        4. If applicable, enter your <b>two-factor authentication code</b>
      </IndentedHowToText>
    </>
  );
};

export default Binance;
