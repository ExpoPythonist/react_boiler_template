import React from "react";
import { connect } from "react-redux";
import { Router, Switch, Route } from "react-router-dom";
// Routes
import AuthRoute from "../ProtectedRoute/AuthRoute";
import PrivateRoute from "../ProtectedRoute/PrivateRoute";
// import PublicRoute from "../ProtectedRoute/PublicRoute";

import {
  Auth,
  Public,
  AppComponentRoute
} from "./Router";

// Components
import { NotFound } from "../../components/views/NotFound";

const createHistory = require("history").createBrowserHistory;

export const history = createHistory();

const routerHander = [
  {
    results: AppComponentRoute,
  },

];

class Routes extends React.Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <Switch>
              {Public.map((R, k) => {
                return (
                  <Route
                    key={k}
                    path={R.path}
                    component={R.component}
                    exact={R.exact}
                  />
                );
              })}

              {routerHander.map(Handler => {
                return Handler.results.map((R, k) => {
                  return (
                    <PrivateRoute
                      key={k}
                      path={R.path}
                      component={R.component}
                      exact={R.exact}
                    />
                  );
                });
              })}

              {Auth.map((R, k) => {
                return (
                  <AuthRoute
                    key={k}
                    path={R.path}
                    component={R.component}
                    exact={R.exact}
                  />
                );
              })}
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.token,
});

export const AppRouter = connect(mapStateToProps)(Routes);
