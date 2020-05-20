import React, { Component } from "react";

class TwoFAInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  handleInput = (e) => {
    let value = e.target.value;
    console.log(this.state.value);
    this.setState(() => ({ value }));
    if (this.props.onInput) this.props.onInput(value);
  };

  render() {
    return (
      <>
        <div className="form-group input-ico ga">
          <label className="form-label">Two-Factor Code (if enabled)</label>
          <input
            onInput={(e) => {
              this.handleInput(e);
            }}
            type="text"
            className="form-input"
            placeholder="Google Authenticator"
            maxLength="6"
          />
        </div>
      </>
    );
  }
}

export default TwoFAInput;
