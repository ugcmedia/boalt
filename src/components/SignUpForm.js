import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import ReactFormInputValidation from "react-form-input-validation";

import { ReactComponent as PhoneSvg } from "../loader/loader/iphone_blue.svg";
import { ReactComponent as MacSvg } from "../loader/loader/mac_blue.svg";
import { ReactComponent as WatchSvg } from "../loader/loader/watch_blue.svg";

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        name: "",
        email: "",
        password: "",
      },
      signingUp: false,
      loader: false,
      errors: {}, //it will have errors if email or password invalid
      signup: "",
    };
    this.form = new ReactFormInputValidation(this);
    // Rules for validation of form by "ReactFormInputValidation" pacakge
    this.form.useRules({
      name: "required",
      email: "required|email",
      password: "required",
    });
    // On submit this action will take place
    this.form.onformsubmit = (fields) => {
      if (fields.password.length < 6) {
        this.setState({
          signup: "password must be equal to or greater than 6 characters",
        });
      } else {
        localStorage.setItem("apple-token", "apple-store-token");
        this.setState({ signingUp: true });
        setTimeout(() => {
          this.setState({ signingUp: false });
          this.setState({ loader: true });
          setTimeout(() => {
            this.setState({
              fields: {
                name: "",
                email: "",
                password: "",
              },
            });
            this.props.history.push("/prehome");
          }, 3000);
        }, 4000);
      }
    };
  }

  render() {
    if (this.state.loader) {
      return (
        <div className="signup-card">
          <div className="line-loader">
            <div className="bar"></div>
          </div>
          <div className="signing-up" style={{ position: "absolute" }}>
            <div style={{ position: "absolute", top: 70 }}>
              <MacSvg />
            </div>
            <div style={{ position: "absolute", bottom: 140, left: 140 }}>
              <PhoneSvg />
            </div>
            <div style={{ position: "absolute", bottom: 130, right: 140 }}>
              <WatchSvg />
            </div>

            <h4 style={{ position: "absolute", bottom: 80 }}>
              Welcome {this.state.fields.name}
            </h4>
            <p style={{ position: "absolute", bottom: 20 }}>
              Get ready to take off! Logging in...
            </p>
          </div>
        </div>
      );
    } else if (this.state.signingUp) {
      return (
        <div className="signup-card">
          <div className="line-loader">
            <div className="bar"></div>
          </div>
          <div className="signing-up" style={{ position: "absolute" }}>
            <div className="mac-loader-div">
              <MacSvg />
            </div>
            <div className="phone-loader-div">
              <PhoneSvg />
            </div>
            <div className="watch-loader-div">
              <WatchSvg />
            </div>
            <div style={{ position: "absolute", bottom: 20 }}>
              <h4>Welcome {this.state.fields.name}</h4>
              <div className="dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <p>Signing you Up...</p>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="signup-card">
            <div className="signup-form">
              <h2 className="signup-title">Sign-Up</h2>
              <form className="form" onSubmit={this.form.handleSubmit}>
                <label htmlFor="name" className="sign-up-field-labels">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter Full Name"
                  onBlur={this.form.handleBlurEvent}
                  onChange={this.form.handleChangeEvent}
                  value={this.state.fields.name}
                />
                <div className="error-container">
                  <span className="error">
                    {this.state.errors.name ? this.state.errors.name : ""}
                  </span>
                </div>
                <label htmlFor="email" className="sign-up-field-labels">
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
                <label htmlFor="password" className="sign-up-field-labels">
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
                    {this.state.errors.password
                      ? this.state.errors.password
                      : ""}
                  </span>
                  <span className="error">
                    {this.state.signup ? this.state.signup : ""}
                  </span>
                </div>
                <input type="submit" value="Sign-Up" className="sign-up-btn" />
              </form>
            </div>
            <div className="sign-in-for-sign-up">
              Already registered?
              <Link to="/" className="sign-in-link">
                &nbsp; Sign-In
              </Link>
            </div>
          </div>
        </div>
      );
    }
    // return this.state.loader ? (
    //   <div className="signup-card">
    //       <div className="signing-up">
    //       <i className="fa fa-spinner fa-spin loader"></i>
    //       <p>Signing Up...</p>
    //       </div>
    //   </div>
    // ) : (
    //   <div>
    //     <div className="signup-card">
    //       <div className="signup-form">
    //         <h2 className="signup-title">Sign-Up</h2>
    //         <form className="form" onSubmit={this.form.handleSubmit}>
    //           <label htmlFor="name" className="sign-up-field-labels">
    //             Name
    //           </label>
    //           <input
    //             id="name"
    //             name="name"
    //             type="text"
    //             placeholder="Enter Full Name"
    //             onBlur={this.form.handleBlurEvent}
    //             onChange={this.form.handleChangeEvent}
    //             value={this.state.fields.name}
    //           />
    //           <div className="error-container">
    //             <span className="error">
    //               {this.state.errors.name ? this.state.errors.name : ""}
    //             </span>
    //           </div>
    //           <label htmlFor="email" className="sign-up-field-labels">
    //             Email
    //           </label>
    //           <input
    //             id="email"
    //             name="email"
    //             type="text"
    //             placeholder="Enter Email"
    //             onBlur={this.form.handleBlurEvent}
    //             onChange={this.form.handleChangeEvent}
    //             value={this.state.fields.email}
    //           />
    //           <div className="error-container">
    //             <span className="error">
    //               {this.state.errors.email ? this.state.errors.email : ""}
    //             </span>
    //           </div>
    //           <label htmlFor="password" className="sign-up-field-labels">
    //             Password
    //           </label>
    //           <input
    //             id="password"
    //             name="password"
    //             type="password"
    //             placeholder="Enter Password"
    //             onBlur={this.form.handleBlurEvent}
    //             onChange={this.form.handleChangeEvent}
    //             value={this.state.fields.password}
    //           />
    //           <div className="error-container">
    //             <span className="error">
    //               {this.state.errors.password ? this.state.errors.password : ""}
    //             </span>
    //             <span className="error">
    //               {this.state.signup ? this.state.signup : ""}
    //             </span>
    //           </div>
    //           <input type="submit" value="Sign-Up" className="sign-up-btn" />
    //         </form>
    //       </div>
    //       <div className="sign-in-for-sign-up">
    //         Already registered?
    //         <Link to="/" className="sign-in-link">
    //           &nbsp; Sign-In
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // );
  }
}

export default withRouter(SignUpForm);
