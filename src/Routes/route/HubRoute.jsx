import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { AuthHeader } from "../../components/common";
import { NotFound } from "../../components/views";

const HubRoute = ({
  isAuthenticated,
  role_id,
  group_id,
  role,
  group,
  component: Component,
  ...rest
}) => {
  if (isAuthenticated) {
    if (group === group_id) {
      return (
        <Route
          {...rest}
          component={props => (
            <div id="wrapper" className="HubRoute">
              <AuthHeader />
              <Component {...props} />
              {/* <AuthFooter /> */}
            </div>
          )}
        />
      );
    } else {
      return (
        <div id="wrapper" className="HubRoute">
          <AuthHeader />
          <Route {...rest} component={NotFound} />
          {/* <AuthFooter /> */}
        </div>
      );
    }
  } else {
    return <Redirect to="/signin" />;
  }
};

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.token,
  role_id: state.auth.user && state.auth.user.role_id,
  group_id: state.auth.user && state.auth.group
});

export default connect(mapStateToProps)(HubRoute);
