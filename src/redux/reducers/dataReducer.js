import {
  SET_TRANSACTIONS,
  SET_COINS,
  SET_PORTFOLIO,
  REMOVE_TRANSACTION_FROM_STATE,
  SET_STATICPORTFOLIO,
  SET_TIMESERIESPORTFOLIO,
} from "../types";

const initialState = {
  transactions: [],
  coins: [],
  portfolio: {},
  staticPortfolio: {},
  timeSeriesPortfolio: {},
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload,
      };
    case SET_COINS:
      return {
        ...state,
        coins: action.payload,
      };
    case SET_STATICPORTFOLIO:
      return {
        ...state,
        staticPortfolio: action.payload,
      };
    case SET_TIMESERIESPORTFOLIO:
      return {
        ...state,
        timeSeriesPortfolio: action.payload,
      };
    case SET_PORTFOLIO:
      return {
        ...state,
        portfolio: action.payload,
      };
    case REMOVE_TRANSACTION_FROM_STATE:
      const transactionId = action.payload;
      const newTransactions = state.transactions.filter(
        (transaction) => transaction.id !== transactionId
      );
      return {
        ...state,
        transactions: newTransactions,
      };
    default:
      return state;
  }
};

export default dataReducer;
