import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import ReactFormInputValidation from "react-form-input-validation";
import "animate.css";
import { ReactComponent as PhoneSvg } from "../loader/loader/iphone_blue.svg";
import { ReactComponent as MacSvg } from "../loader/loader/mac_blue.svg";
import { ReactComponent as WatchSvg } from "../loader/loader/watch_blue.svg";

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        email: "",
        password: "",
      },
      loader: false,
      errors: {}, //it will have errors if email or password invalid
      signin: "", //it will have sign in error if user is not authenticated
    };
    this.form = new ReactFormInputValidation(this); // Rules for validation of form by "ReactFormInputValidation" pacakge
    this.form.useRules({
      email: "required|email",
      password: "required",
    });
    this.form.onformsubmit = (fields) => {
      this.setState({ signin: "" });
      // On submit this action will take place
      if (
        // if fields are matched to this, user will go to home page
        fields.email === "ugcmedia@gmail.com" &&
        fields.password === "123456"
      ) {
        localStorage.setItem("apple-token", "apple-store-token");
        this.setState({ loader: true });
        setTimeout(() => {
          this.props.history.push("/prehome");
        }, 3000);
      } else {
        // else error will be shown at the top
        setTimeout(() => {
          this.setState({ signin: "Unable to login!!" });
        }, 500);
      }
    };
  }
  componentDidMount() {
    let token = localStorage.getItem("apple-token");
    if (token && token != null) {
      this.props.history.push("/prehome");
    }
    let err = this.props.location.search;
    if (err.includes(403)) {
      this.setState({ signin: "Login to Continue!!" });
    }
  }

  render() {
    return this.state.loader ? (
      <div className="login-card">
        <div className="signing-in" style={{ position: "relative" }}>
          {/* <i className="fa fa-spinner fa-spin loader"></i> */}
          <div className="mac-loader-div">
            <MacSvg />
          </div>
          <div className="phone-loader-div">
            <PhoneSvg />
          </div>
          <div className="watch-loader-div">
            <WatchSvg />
          </div>
          <p style={{ position: "absolute", bottom: 20 }}>Signing in...</p>
        </div>
      </div>
    ) : (
      <div>
        <div className="login-card">
          <div className="login-form">
            <h2 className="title">Sign-In</h2>
            <form className="form" onSubmit={this.form.handleSubmit}>
              <div className="error-top-container">
                <span className="error-top">
                  {this.state.signin ? this.state.signin : ""}
                </span>
              </div>
              <label htmlFor="email" className="field-label">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="text"
                placeholder="Enter Email"
                onBlur={this.form.handleBlurEvent}
                onChange={this.form.handleChangeEvent}
                value={this.state.fields.email}
              />
              <div className="error-container">
                <span className="error">
                  {this.state.errors.email ? this.state.errors.email : ""}
                </span>
              </div>
              <label htmlFor="password" className="field-label">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter Password"
                onBlur={this.form.handleBlurEvent}
                onChange={this.form.handleChangeEvent}
                value={this.state.fields.password}
              />
              <div className="error-container">
                <span className="error">
                  {this.state.errors.password ? this.state.errors.password : ""}
                </span>
              </div>
              <input type="submit" value="Sign-In" className="sign-in" />
            </form>
          </div>
          <div className="sign-up">
            Not registered?
            <Link to="/signup" className="sign-up-link">
              &nbsp; Sign-Up
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SignInForm);
