import React from 'react';
import { connect } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';
// Check Application if Authenticated

// Routes
import HubRoute from './HubRoute';
import PrivateRoute from './PrivateRoute';


// Index Routes

import {
  Auth,
  Public,
  Hub
} from './data';


// Components
import BaseComponent from '../../core/components/BaseComponent';
import { NotFound } from '../components/views/NotFound';


const createHistory = require("history").createBrowserHistory

export const history = createHistory();


const routerHander = [
  {
    results: Hub,
    permission: {
      group: HUB,
    },
  },
  {
    results: [...User, ...Private],
    permission: {
      group: AUTHOR,
    },
  }
]

class Routes extends BaseComponent {
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
                )
              })}

              {routerHander.map(Handler => {
                if (Handler.permission.group === group){
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
                    )
                  })
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
                    )
                  })
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
                )
              })}
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.token,
  role_id: state.auth.user && state.auth.user.role_id,
  group: state.auth.user && state.auth.group
})


export const AppRouter =  connect(mapStateToProps)(Routes)