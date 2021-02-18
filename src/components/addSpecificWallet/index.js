import React, { createElement } from "react";
import addSpecificWalletWallets from "./howToAddComponents";

const AddSpecificWallet = (props) => {
  const { walletToRender } = props;

  const specificWalletToRender = addSpecificWalletWallets.find(
    (specificWallet) => {
      return specificWallet.id === walletToRender.id;
    }
  );

  return (
    <>
      {specificWalletToRender ? (
        <>
          {createElement(specificWalletToRender.component, {
            id: specificWalletToRender.id,
            name: specificWalletToRender.name,
          })}
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default AddSpecificWallet;
