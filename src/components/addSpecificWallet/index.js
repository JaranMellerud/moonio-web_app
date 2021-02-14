import React, { createElement } from "react";
import addSpecificWalletWallets from "./addSpecificWalletWallets";

const AddSpecificWallet = (props) => {
  const { activeWallet } = props;

  const specificWalletToRender = addSpecificWalletWallets.find(
    (specificWallet) => {
      return specificWallet.id === activeWallet;
    }
  );

  return (
    <>
      {activeWallet ? (
        <>{createElement(specificWalletToRender.component)}</>
      ) : (
        <></>
      )}
    </>
  );
};

export default AddSpecificWallet;
