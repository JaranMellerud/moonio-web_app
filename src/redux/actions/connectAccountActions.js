import axios from "axios";
import { LOADING_UI, SET_ERRORS, CLEAR_ERRORS, SHOW_ALERT } from "../types";

export const connectAccountWithApiKey = (
  id,
  name,
  apiKey,
  apiSecret,
  loadingComponent,
  history
) => (dispatch) => {
  dispatch({ type: LOADING_UI, payload: loadingComponent });
  axios
    .post(`/api/connect_account/${id}`, {
      apiKey: apiKey,
      apiSecret: apiSecret,
    })
    .then(() => {
      dispatch({ type: CLEAR_ERRORS });
      history.push("/import_transactions");
      dispatch({
        type: SHOW_ALERT,
        payload: {
          type: "success",
          text: `Your ${name} account was added. Please give us some time to synchronise your transactions`,
          page: "import_transactions",
        },
      });
    })
    .catch((err) => {
      if (err.response.status === 400) {
        dispatch({
          type: SET_ERRORS,
          payload: err.response.data,
        });
      } else {
        dispatch({
          type: SHOW_ALERT,
          payload: {
            type: "error",
            text: `Error in adding your ${name} account`,
            page: "import_transactions",
          },
        });
      }
    });
};

export const connectWalletWithHdAddress = (coin, hdAddress, walletId) => (
  dispatch
) => {
  console.log(coin, hdAddress, walletId);
};

export const connectWalletWithPublicAddress = (
  coin,
  publicAddress,
  walletId
) => (dispatch) => {};
