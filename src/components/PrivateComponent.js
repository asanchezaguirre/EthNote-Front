import React, { Component } from "react";

import { Route, Redirect } from "react-router-dom";

import isLoggedIn from "../utils/isLoggedIn";

export default class PrivateRoute extends Component {
  render() {
    const { path, exact, component } = this.props;
    const PrivateComponent = component;

    return (
      <Route path={path} exact={exact} component={props => {
        if (isLoggedIn()) {
          return <PrivateComponent {...props} />
        }

        const redirectTo = window.encodeURIComponent(this.props.path);

        return <Redirect to={`/login?redirectTo=${ redirectTo }`} />
      }} />
    );
  }
}
