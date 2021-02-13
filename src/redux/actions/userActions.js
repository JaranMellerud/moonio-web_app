import axios from "axios";
import { app } from "../../util/fbConfig";
import {
  SET_USER,
  SET_ERRORS,
  CLEAR_ERRORS,
  LOADING_UI,
  SET_UNAUTHENTICATED,
  SHOW_ALERT,
} from "../types";
import { checkIfUserHasTransactions } from "./dataActions";
import { validateEmail } from "../../util/validators";

export const signUpUser = (history, idToken) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post("/api/signup", { idToken: idToken })
    .then((res) => {
      setAuthorizationHeader(res.data.idToken);
      dispatch(getUserData(history, "/transactions"));
      dispatch({ type: CLEAR_ERRORS });
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const signInUser = (history, idToken) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  setAuthorizationHeader(idToken);
  dispatch(checkIfUserHasTransactions());
  dispatch(getUserData(history, "/portfolio"));
  dispatch({ type: CLEAR_ERRORS });
};

export const signOutUser = () => (dispatch) => {
  delete axios.defaults.headers.common["Authorization"];
  dispatch({ type: SET_UNAUTHENTICATED });
  app
    .auth()
    .signOut()
    .then(() => {
      return;
    })
    .catch((err) => console.error(("Sign out error", err)));
};

export const getUserData = (history, redirectUrl) => (dispatch) => {
  axios
    .get("/api/user")
    .then((res) => {
      dispatch({
        type: SET_USER,
        payload: res.data,
      });
      if (redirectUrl && history) {
        history.push(redirectUrl);
      }
    })
    .catch((err) => console.error(err));
};

const setAuthorizationHeader = (token) => {
  const FBIdToken = `Bearer ${token}`;
  axios.defaults.headers.common["Authorization"] = FBIdToken;
};

/* USER SETTINGS */
export const editBaseCurrency = (newBaseCurrency) => (dispatch) => {
  axios
    .put(`/api/base_currency`, {
      baseCurrency: newBaseCurrency,
    })
    .then(() => {
      dispatch({ type: CLEAR_ERRORS });
      dispatch({
        type: SHOW_ALERT,
        payload: {
          type: "success",
          text: "Currency updated successfully",
          page: "settings",
        },
      });
    })
    .catch((err) => {
      console.error(err);
      dispatch({
        type: SHOW_ALERT,
        payload: {
          type: "error",
          text: "Could not change currency. Try again later",
          page: "settings",
        },
      });
    });
};

export const sendPasswordResetEmail = (email) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  app
    .auth()
    .sendPasswordResetEmail(email)
    .then(() => {
      delete axios.defaults.headers.common["Authorization"];
      dispatch({ type: SET_UNAUTHENTICATED });
      dispatch({ type: CLEAR_ERRORS });
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const sendPasswordForgotEmail = (email, history) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  if (validateEmail(email) === false) {
    let errors = {};
    errors.email = "Invalid email address";
    dispatch({ type: SET_ERRORS, payload: errors });
    return;
  }
  app
    .auth()
    .sendPasswordResetEmail(email)
    .then(() => {
      dispatch({ type: CLEAR_ERRORS });
      dispatch({
        type: SHOW_ALERT,
        payload: {
          type: "success",
          text: `A reset password email has been sent to '${email}'. Open that email and follow the instructions to reset your password.`,
          page: "forgot_password",
        },
      });
    })
    .catch(() => {
      dispatch({
        type: SHOW_ALERT,
        payload: {
          type: "error",
          text: "Something wrong happened. Try again later",
          page: "forgot_password",
        },
      });
    });
};

export const deleteAccount = () => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .delete("/api/delete_account")
    .then(() => {
      delete axios.defaults.headers.common["Authorization"];
      dispatch({ type: SET_UNAUTHENTICATED });
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    });
};
