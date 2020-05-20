import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css";
import "../form-pages.css";
import EmailInput from "../form-components/form-email";
import PasswordInput from "../form-components/form-password";
import TwoFAInput from "../form-components/form-2fa";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="wrapper">
          <div className="frm-wrapper">
            <section className="frm-block">
              <div className="container">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="frm-outer">
                      <ul className="frm-tabs">
                        <li>
                          <a className="active"> Log In</a>
                        </li>
                        <li>
                          <a>Register</a>
                        </li>
                      </ul>
                      <div className="frm-body">
                        <form>
                          <div className="auth-error d-none">
                            <p>{}</p>
                          </div>
                          <EmailInput submitted={true} />
                          {/* <div className="form-group input-ico pwd">
                            <label htmlFor="password" className="form-label">
                              Password
                            </label>
                            <input
                              className="form-input is-invalid"
                              type="password"
                              maxLength="20"
                            />
                            <div className="form-valid-error">
                              <div>Password is required!</div>
                              <div>
                                Password should be minimum of characters!
                              </div>
                            </div>
                          </div> */}
                          <PasswordInput submitted={true} />
                          <TwoFAInput />
                          {/* <div className="form-group row ng-captcha-container">
                            <div className="form-valid-error">
                              <div>Please confirm you are not a robot!</div>
                            </div>
                          </div> */}
                          <div className="text-center">
                            <button
                              className="form-button login-btn"
                              type="submit"
                            >
                              Log In
                            </button>
                          </div>
                          <div className="frm-footer">
                            <div className="sign">
                              <a>Forgot Password or Two-Factor Device?</a>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
