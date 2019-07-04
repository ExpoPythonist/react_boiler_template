import React from "react";
import {
  Provider
} from "react-redux";
import store from "../Redux/Store";
import {
  AppRouter
} from "../openaccess/route/Settings";
import {
  isLoggedIn
} from "../Redux/middlewares";

isLoggedIn(store);

class App extends React.Component {
  render() {
    return ( <
      Provider store = {
        store
      } >
      <
      AppRouter / >
      <
      /Provider>
    );
  }
}

export default App;