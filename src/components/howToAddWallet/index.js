import React, { createElement } from "react";
import { useParams } from "react-router-dom";
import { HowToHeader, HowToText } from "./howToAddWalletComponents";
import howToWallets from "./howToWallets";

const HowToAddWallet = () => {
  const { wallet } = useParams();

  const howToWalletToRender = howToWallets.find((howToWallet) => {
    return howToWallet.id === wallet;
  });

  return (
    <>
      {howToWalletToRender ? (
        <>{createElement(howToWalletToRender.component)}</>
      ) : (
        <>
          <HowToHeader>How to add your wallet</HowToHeader>
          <HowToText>1. Choose an exchange or wallet from the list</HowToText>
          <HowToText>2. Follow further instructions</HowToText>
        </>
      )}
    </>
  );
};

export default HowToAddWallet;
