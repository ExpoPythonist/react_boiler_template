import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
// import { Header, Footer } from '../components/common';

const AuthRoute = ({
  isAuthenticated,
  role_id,
  component: Component,
  ...rest
}) =>
  isAuthenticated && role_id ? (
    <Redirect to={"/"} />
  ) : (
    <Route
      {...rest}
      component={props => {
        return (
          <div>
            {/* <Header /> */}
            <Component {...props} />
            {/* <Footer /> */}
          </div>
        );
      }}
    />
  );

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.token,
  role_id: state.auth.user && state.auth.user.role_id
});

export default connect(mapStateToProps)(AuthRoute);
