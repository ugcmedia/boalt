import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import logo from "../assets/images/AppleLogo.png";

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.handleSignOut = () => {
      localStorage.removeItem("apple-token");
      this.props.history.push("/");
    };
  }

  render() {
    return (
      <div className="nav">
        <div className="nav-logo-container">
          <NavLink to="/prehome">
            <img src={logo} alt="logo" className="nav-logo" />
          </NavLink>
        </div>
        <div className="nav-links">
          <NavLink
            to="/iphone"
            className="nav-link iphone"
            activeClassName="navbar-link-active"
          >
            iPhone
          </NavLink>
          <NavLink
            to="/macbook"
            className="nav-link macbook"
            activeClassName="navbar-link-active"
          >
            MacBook Pro
          </NavLink>
          <NavLink to="#" className="nav-link watch">
            Watch
          </NavLink>
          <NavLink to="#" className="nav-link notify">
            Notify me
          </NavLink>

          <div className="nav-link sign-out-btn">
            <svg
              className="svg"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
            <span className="sign-out-text" onClick={this.handleSignOut}>
              Sign-Out
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Navbar);
