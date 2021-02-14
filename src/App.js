// React
import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
// Redux
import { Provider as StateProvider } from "react-redux";
import store from "./redux/store";
// Util
import AuthRoute from "./util/AuthRoute";
import HasTransactionsRoute from "./util/HasTransactionsRoute";
import HasNotTransactionsRoute from "./util/HasNotTransactionsRoute";
import NonAuthRoute from "./util/NonAuthRoute";
import AuthProvider from "./util/AuthProvider";
// Pages
import Portfolio from "./pages/Portfolio";
import Transactions from "./pages/transactions";
import AddTransaction from "./pages/addTransaction";
import EditTransaction from "./pages/EditTransaction";
import Settings from "./pages/settings";
import SignIn from "./pages/signIn";
import Home from "./pages/Home";
import Welcome from "./pages/welcome";
import ForgotPassword from "./pages/forgotPassword";
import ImportTransactions from "./pages/importTransactions";
// Components
import { MarginWrapper } from "./components/containers";
import NavBar from "./components/navbar";
// Styling
import "./styles/App.css";
import "./styles/firebaseui-styling.global.css";

function App() {
  return (
    <StateProvider store={store}>
      <AuthProvider>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <NonAuthRoute exact path="/" component={Home} />
            <MarginWrapper>
              <NonAuthRoute exact path="/sign_in" component={SignIn} />
              <NonAuthRoute
                exact
                path="/forgot_password"
                component={ForgotPassword}
              />
              <HasNotTransactionsRoute
                exact
                path="/welcome"
                component={Welcome}
              />
              <AuthRoute exact path="/user/settings" component={Settings} />
              <HasTransactionsRoute
                exact
                path="/portfolio"
                component={Portfolio}
              />
              <HasTransactionsRoute
                exact
                path="/transactions"
                component={Transactions}
              />

              <AuthRoute
                exact
                path="/add_transaction"
                component={AddTransaction}
              />
              <AuthRoute
                exact
                path="/import_transactions"
                component={ImportTransactions}
              />
              <AuthRoute
                exact
                path="/import_transactions/:wallet"
                component={ImportTransactions}
              />
              <AuthRoute
                exact
                path="/edit_transaction/:id"
                component={EditTransaction}
              />
            </MarginWrapper>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </StateProvider>
  );
}

export default App;
