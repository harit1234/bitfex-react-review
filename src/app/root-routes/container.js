import React, { Component } from "react";
import { withRouter, Switch, Route, Redirect, Link } from "react-router-dom";
import ProtectedRoute from "./protectedRoute";
import Login from "../logged-out-routes/login/login";

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }

  redirectCheck = () => {
    if (this.state.isLoggedIn) {
      return <Redirect to="/dashboard"></Redirect>;
    } else {
      return <Redirect to="/login"></Redirect>;
    }
  };

  goToRoot = () => {
    this.props.history.push("/");
  };

  login = () => {
    this.setState(() => ({ isLoggedIn: true }));
    this.goToRoot();
  };

  logOut = () => {
    this.setState(() => ({ isLoggedIn: false }));
    this.goToRoot();
  };

  render() {
    console.log("root rendered with", this.state.isLoggedIn);
    return (
      <>
        <Switch>
          <ProtectedRoute isLoggedIn={this.state.isLoggedIn} path="/dashboard">
            <div>
              dashboard
              <button
                onClick={() => {
                  this.logOut();
                }}
              >
                LogOut
              </button>
            </div>
          </ProtectedRoute>
          <Route path="/home">
            <div>
              home
              <button
                onClick={() => {
                  this.login();
                }}
              >
                Login
              </button>
            </div>
          </Route>
          <Route to="/login">
            <Login />
          </Route>
          <Route to="/">{this.redirectCheck()}</Route>
        </Switch>
      </>
    );
  }
}

export default withRouter(AppContainer);
