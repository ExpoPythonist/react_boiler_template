import React from 'react';
import { connect } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';
// Index Routes
import Hub from '../Routes/data/hub'

// Components
import BaseComponent from '../Components/common/BaseComponent';

const createHistory = require("history").createBrowserHistory

export const history = createHistory();

class Routes extends BaseComponent {
  render() {
    return (
      <div>
        <h1>Header</h1>
         <Router history={history}>
          <div>
            <Switch>
              {Hub.map((R, k) => {
                return (
                  <Route
                    key={k}
                    path={R.path}
                    component={R.component}
                    exact={R.exact}
                  />
                )
              })}
            </Switch>
          </div>
        </Router>
        <h1>Footer</h1>

      </div>
    )
  }
}


const mapStateToProps = (state) => ({
})


export default Routes