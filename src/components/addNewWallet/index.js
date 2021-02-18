import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { WalletContainer } from "./addNewWalletComponents";
import { SmallHeader } from "../../components/textComponents";
import { AutoCompleteSkeleton } from "../../components/loadingComponents";
import AutoCompleteComponent from "./AutoCompleteComponent";
import wallets from "../../util/wallets";
import AddSpecificWallet from "../addSpecificWallet";

const AddNewWallet = (props) => {
  const { loadingComponent } = props;
  const history = useHistory();
  const { wallet } = useParams();
  const [activeWallet, setActiveWallet] = useState(wallet ? wallet : "");
  const [walletToRender, setWalletToRender] = useState("");

  useEffect(() => {
    if (activeWallet) {
      setWalletToRender(
        wallets.find((wallet) => {
          return wallet.id === activeWallet;
        })
      );
    }
  }, [activeWallet]);

  const handleWalletChange = (event, value) => {
    if (!value) {
      return;
    }
    setActiveWallet(value.id);
    history.push(`/import_transactions/${value.id}`);
  };

  return (
    <>
      <SmallHeader>Add new wallet</SmallHeader>
      <WalletContainer>
        {loadingComponent === "walletSelect" ? (
          <AutoCompleteSkeleton />
        ) : (
          <AutoCompleteComponent
            wallets={wallets}
            onChange={handleWalletChange}
            activeWallet={activeWallet}
          />
        )}
        <AddSpecificWallet walletToRender={walletToRender} />
      </WalletContainer>
    </>
  );
};

const mapStateToProps = (state) => ({
  loadingComponent: state.ui.loading.loadingComponent,
});

const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(AddNewWallet);
