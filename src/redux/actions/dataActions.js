import axios from "axios";
import {
  LOADING_UI,
  SET_ERRORS,
  CLEAR_ERRORS,
  CLEAR_ERRORS_BUT_NOT_ALERT,
  SET_TRANSACTIONS,
  SET_COINS,
  SHOW_ALERT,
  REMOVE_TRANSACTION_FROM_STATE,
  SET_STATICPORTFOLIO,
  SET_TIMESERIESPORTFOLIO,
  SET_USER_HAS_TRANSACTIONS,
} from "../types";

export const checkIfUserHasTransactions = () => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .get(`/api/user_has_transactions`)
    .then((res) => {
      dispatch({
        type: SET_USER_HAS_TRANSACTIONS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.error(err);
    });
};

export const getAllTransactions = (loadingComponent) => (dispatch) => {
  dispatch({ type: LOADING_UI, payload: loadingComponent });
  axios
    .get(`/api/transactions`)
    .then((res) => {
      dispatch({
        type: SET_TRANSACTIONS,
        payload: res.data,
      });
      dispatch({ type: CLEAR_ERRORS_BUT_NOT_ALERT });
    })
    .catch((err) => console.error(err));
};

export const deleteTransaction = (transactionId, loadingComponent) => (
  dispatch
) => {
  dispatch({ type: LOADING_UI, payload: loadingComponent });
  axios
    .delete(`/api/transactions/${transactionId}`)
    .then(() => {
      dispatch({ type: CLEAR_ERRORS });
      dispatch({ type: REMOVE_TRANSACTION_FROM_STATE, payload: transactionId });
      dispatch({
        type: SHOW_ALERT,
        payload: {
          type: "success",
          text: "Transaction deleted successfully",
          page: "transactions",
        },
      });
    })
    .catch((err) => {
      dispatch({
        type: SHOW_ALERT,
        payload: {
          type: "error",
          text: "Could not delete the transaction. Try again later",
          page: "transactions",
        },
      });
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const addTransaction = (loadingComponent, transaction, history) => (
  dispatch
) => {
  dispatch({ type: LOADING_UI, payload: loadingComponent });
  axios
    .post("/api/addTransaction, transaction")
    .then(() => {
      dispatch({ type: SET_USER_HAS_TRANSACTIONS, payload: true });
      dispatch({ type: CLEAR_ERRORS });
      history.push("/transactions");
      dispatch({
        type: SHOW_ALERT,
        payload: {
          type: "success",
          text: "Transaction added successfully",
          page: "transactions",
        },
      });
    })
    .catch((err) => {
      dispatch({
        type: SHOW_ALERT,
        payload: {
          type: "error",
          text: "Could not add the transaction. Try again later",
          page: "transactions",
        },
      });
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const editTransaction = (
  loadingComponent,
  transaction,
  transactionId,
  history
) => (dispatch) => {
  dispatch({ type: LOADING_UI, payload: loadingComponent });
  axios
    .post(`/api/transactions/${transactionId}`, transaction)
    .then(() => {
      dispatch({ type: CLEAR_ERRORS });
      dispatch({
        type: SHOW_ALERT,
        payload: {
          type: "success",
          text: "Transaction edited successfully",
          page: "transactions",
        },
      });
      history.push({
        pathname: "/transactions",
      });
    })
    .catch((err) => {
      dispatch({
        type: SHOW_ALERT,
        payload: {
          type: "error",
          text: "Could not edit the transaction. Try again later",
          page: "transactions",
        },
      });
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
      history.push({
        pathname: "/transactions",
      });
    });
};

export const getAllCoins = (loadingComponent) => (dispatch) => {
  dispatch({ type: LOADING_UI, payload: loadingComponent });
  axios
    .get(`/api/coins`)
    .then((res) => {
      dispatch({
        type: SET_COINS,
        payload: res.data,
      });
      dispatch({ type: CLEAR_ERRORS });
    })
    .catch((err) => console.error(err));
};

export const getStaticPortfolio = (loadingComponent, baseCurrency) => (
  dispatch
) => {
  dispatch({ type: LOADING_UI, payload: loadingComponent });
  axios
    .get(`/api/static_portfolio/${baseCurrency}`)
    .then((res) => {
      dispatch({
        type: SET_STATICPORTFOLIO,
        payload: res.data,
      });
      dispatch({ type: CLEAR_ERRORS });
    })
    .catch((err) => console.error(err));
};

export const getTimeSeriesPortfolio = (
  loadingComponent,
  baseCurrency,
  timeFormat
) => (dispatch) => {
  dispatch({ type: LOADING_UI, payload: loadingComponent });
  axios
    .get(`/api/time_series_portfolio/${baseCurrency}/${timeFormat}`)
    .then((res) => {
      dispatch({
        type: SET_TIMESERIESPORTFOLIO,
        payload: res.data,
      });
      dispatch({ type: CLEAR_ERRORS });
    })
    .catch((err) => console.error(err));
};

export const destroyChart = (chartInstance, loadingComponent) => (dispatch) => {
  dispatch({ type: LOADING_UI, payload: loadingComponent });
  chartInstance.destroy();
  dispatch({ type: CLEAR_ERRORS });
};
