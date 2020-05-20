import React, { Component } from "react";

class EmailPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      minLengthError: false,
      requiredError: false,
      valid: true,
    };
  }

  minLength = 5;
  handleInput = (e) => {
    let value = e.target.value;
    console.log(this.state.value);
    this.setState(() => ({ value }));
    if (this.props.onInput) this.props.onInput(value);
    if (this.props.submitted) this.checkValidity(value);
  };

  checkValidity = (value) => {
    if (value.length == 0) {
      this.setState(() => ({
        minLengthError: false,
        requiredError: true,
        valid: false,
      }));
    } else if (value.length < 5) {
      this.setState(() => ({
        minLengthError: true,
        requiredError: false,
        valid: false,
      }));
    } else {
      this.setState(() => ({
        minLengthError: false,
        requiredError: false,
        valid: true,
      }));
    }
  };

  errorJsx = () => {
    if (this.state.minLengthError) {
      return <div>Password should be minimum of characters!</div>;
    } else if (this.state.requiredError) {
      return <div className="error-msg">password is required!</div>;
    }
  };

  render() {
    return (
      <>
        <div className="form-group input-ico pwd form-label">
          <label htmlFor="password">Password</label>
          <input
            onInput={(e) => {
              this.handleInput(e);
            }}
            className={[
              "form-input",
              this.state.valid ? "" : "is-invalid",
            ].join(" ")}
            type="password"
            maxLength="20"
          />
          <div
            className={[
              "form-valid-error",
              this.state.valid ? "d-none" : "",
            ].join(" ")}
          >
            {this.errorJsx()}
          </div>
        </div>
      </>
    );
  }
}

export default EmailPassword;
