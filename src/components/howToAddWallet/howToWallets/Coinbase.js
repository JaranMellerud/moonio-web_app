import React from "react";
import { HowToHeader, HowToText } from "../howToAddWalletComponents";

const Coinbase = () => {
  return (
    <>
      <HowToHeader>How to add your Coinbase account</HowToHeader>
      <HowToText>
        1. Click "<b>Continue with Coinbase</b>"
      </HowToText>
      <HowToText>
        2. This will redirect you to Coinbase to grant Moonio{" "}
        <b>read-only access</b> to your account. This <b>does not</b> give us
        access to move your funds
      </HowToText>
    </>
  );
};

export default Coinbase;
