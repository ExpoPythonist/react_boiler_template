import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { AuthHeader } from "../../components/components/common";

const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  return isAuthenticated ? (
    <Route
      {...rest}
      component={props => (
        <div id="wrapper" className="HubRoute">
          <AuthHeader />
          <Component {...props} />
        </div>
      )}
    />
  ) : (
      <Redirect to="/signin" />
    );
};

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.token,
  // role_id: state.auth.user && state.auth.user.role_id
});

export default connect(mapStateToProps)(PrivateRoute);
