import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const HasNotTransactionsRoute = ({
  component: Component,
  authenticated,
  hasTransactions,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      authenticated === false ? (
        <Redirect to="/" />
      ) : hasTransactions ? (
        <Redirect to="/portfolio" />
      ) : (
        <Component {...props} />
      )
    }
  />
);

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated,
  hasTransactions: state.user.hasTransactions,
});

HasNotTransactionsRoute.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  hasTransactions: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(HasNotTransactionsRoute);
