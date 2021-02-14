import Binance from "./Binance";
import Coinbase from "./Coinbase";
import Kraken from "./Kraken";
import Ledger from "./Ledger";

const addSpecificWalletWallets = [
  { id: "binance", name: "Binance", component: Binance },
  { id: "coinbase", name: "Coinbase", component: Coinbase },
  { id: "kraken", name: "Kraken", component: Kraken },
  { id: "ledger", name: "Ledger", component: Ledger },
];

export default addSpecificWalletWallets;
