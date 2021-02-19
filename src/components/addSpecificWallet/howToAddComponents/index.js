import AddApiKey from "./AddApiKey";
import AddAddress from "./AddAddress";

const addSpecificWalletWallets = [
  { id: "binance", name: "Binance", type: "exchange", component: AddApiKey },
  { id: "coinbase", name: "Coinbase", type: "exchange", component: AddApiKey },
  { id: "kraken", name: "Kraken", type: "exchange", component: AddApiKey },
  {
    id: "ledger",
    name: "Ledger",
    type: "wallet",
    component: AddAddress,
  },
];

export default addSpecificWalletWallets;
