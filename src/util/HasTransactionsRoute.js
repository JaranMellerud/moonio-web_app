import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const HasTransactionsRoute = ({
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
      ) : hasTransactions === false ? (
        <Redirect to="/welcome" />
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

HasTransactionsRoute.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  hasTransactions: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(HasTransactionsRoute);
