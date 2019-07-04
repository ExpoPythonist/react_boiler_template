import React from "react";
import { connect } from "react-redux";
import { Router, Switch, Route } from "react-router-dom";
// Check Application if Authenticated

// Routes
import AuthRoute from "./AuthRoute";
import HubRoute from "./HubRoute";
// import UserRoute from './UserRoute';
// import PubRoute from './PubRoute';
// import UnivRoute from './UnivRoute';
import PrivateRoute from "./PrivateRoute";

// import PublicRoute from './PublicRoute'

// Index Routes

import {
  Auth,
  Public,
  Hub,
  // User,
  // Publisher,
  // University,
  // Funder,
  // Consortia,
  // Private
} from "./Router";

// Components
import { NotFound } from "../../openaccess/components/views/NotFound";
import {
  HUB,
  // AUTHOR,
  // PUBLISHER,
  // INSTITUTION,
  // CONSORTIUM,
  // FUNDER
} from "../data/permission";

const createHistory = require("history").createBrowserHistory;

export const history = createHistory();

const routerHander = [
  {
    results: Hub,
    permission: {
      group: HUB
    }
  },
  // {
  //   results: [...User, ...Private],
  //   permission: {
  //     group: AUTHOR
  //   }
  // },
  // {
  //   results: Publisher,
  //   permission: {
  //     group: PUBLISHER
  //   }
  // },
  // {
  //   results: University,
  //   permission: {
  //     group: INSTITUTION
  //   }
  // },
  // {
  //   results: Funder,
  //   permission: {
  //     group: FUNDER
  //   }
  // },
  // {
  //   results: Consortia,
  //   permission: {
  //     group: CONSORTIUM
  //   }
  // }
];

class Routes extends React.Component {
  render() {
    let { group } = this.props;
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
                if (Handler.permission.group === group) {
                  return Handler.results.map((R, k) => {
                    return (
                      <HubRoute
                        key={k}
                        path={R.path} //article /artile
                        component={R.component}
                        exact={R.exact}
                        role={Handler.permission.role}
                        group={Handler.permission.group}
                      />
                    );
                  });
                } else {
                  return Handler.results.map((R, k) => {
                    return (
                      <PrivateRoute
                        key={k}
                        path={R.path}
                        component={R.component}
                        exact={R.exact}
                        group={Handler.permission.group}
                      />
                    );
                  });
                }
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
  role_id: state.auth.user && state.auth.user.role_id,
  group: state.auth.user && state.auth.group
});

export const AppRouter = connect(mapStateToProps)(Routes);
