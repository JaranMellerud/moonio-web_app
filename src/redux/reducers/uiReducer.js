import {
  SET_ERRORS,
  CLEAR_ERRORS,
  LOADING_UI,
  SHOW_ALERT,
  CLEAR_ERRORS_BUT_NOT_ALERT,
} from "../types";

const initialState = {
  loading: { isLoading: false, loadingComponent: "" },
  errors: null,
  alert: null,
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERRORS:
      return {
        ...state,
        loading: { isLoading: false, loadingComponent: "" },
        errors: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        loading: { isLoading: false, loadingComponent: "" },
        errors: null,
        alert: null,
      };
    case CLEAR_ERRORS_BUT_NOT_ALERT:
      return {
        ...state,
        loading: { isLoading: false, loadingComponent: "" },
        errors: null,
      };
    case LOADING_UI:
      return {
        ...state,
        loading: { isLoading: true, loadingComponent: action.payload },
      };
    case SHOW_ALERT:
      return {
        ...state,
        alert: {
          type: action.payload.type,
          text: action.payload.text,
          page: action.payload.page,
        },
      };
    default:
      return state;
  }
};

export default uiReducer;
