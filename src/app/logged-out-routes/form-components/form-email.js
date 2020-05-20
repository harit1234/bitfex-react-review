import React, { Component } from "react";

class EmailInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      patternError: false,
      requiredError: false,
      valid: true,
    };
  }

  emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  handleInput = (e) => {
    let value = e.target.value;
    console.log(this.state.value);
    this.setState(() => ({ value }));
    if (this.props.onInput) this.props.onInput(value);
    if (this.props.submitted) this.checkValidity(value);
  };

  checkValidity = (value) => {
    if (value.length == 0) {
      console.log(value, "has zero length");
      this.setState(() => ({
        patternError: false,
        requiredError: true,
        valid: false,
      }));
    } else if (!this.emailRegex.test(value)) {
      this.setState(() => ({
        patternError: true,
        requiredError: false,
        valid: false,
      }));
    } else {
      this.setState(() => ({
        patternError: false,
        requiredError: false,
        valid: true,
      }));
    }
  };

  errorJsx = () => {
    if (this.state.patternError) {
      return (
        <div className="error-msg">
          Please enter your valid username or email!
        </div>
      );
    } else if (this.state.requiredError) {
      return <div className="error-msg">Username is required!</div>;
    }
  };

  render() {
    return (
      <>
        <div className="form-group input-ico email form-label">
          <label htmlFor="emailAddress">Email</label>
          <input
            onInput={(e) => {
              this.handleInput(e);
            }}
            className={[
              "form-input",
              this.state.valid ? "" : "is-invalid",
            ].join(" ")}
            type="text"
            maxLength="50"
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

export default EmailInput;
