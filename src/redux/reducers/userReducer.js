import {
  SET_USER,
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  SET_USER_HAS_TRANSACTIONS,
} from "../types";

const initialState = {
  authenticated: false,
  hasTransactions: false,
  credentials: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true,
      };
    case SET_UNAUTHENTICATED:
      return initialState;
    case SET_USER:
      return {
        ...state,
        authenticated: true,
        ...action.payload,
      };
    case SET_USER_HAS_TRANSACTIONS:
      return {
        ...state,
        hasTransactions: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
