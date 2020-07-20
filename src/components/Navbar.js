import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import logo from "../images/AppleLogo.png";

const NavLinks = (props) => {
  if (props.small) {
      return <p>This text is displayed</p>
  }else{
    return
  }
}



class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.handleSignOut = () => {
      localStorage.removeItem("apple-token");
      this.props.history.push("/");
    };
  }
  state = {
    small: false,
  };
  componentDidMount() {
    window.addEventListener('resize', ()=>{
      console.log(typeof(window.innerHeight));
      if(window.innerHeight < 720 ){
      console.log(window.innerHeight);
        this.setState({small: true})
      }
    });
  }

  render() {
    return (
      <div className="nav">
        <div className="nav-logo-container">
          <NavLink to="/prehome">
          <svg className="nav-logo" xmlns="http://www.w3.org/2000/svg" width="31.961" height="39.205" viewBox="0 0 31.961 39.205">
  <g id="Group_3" data-name="Group 3" transform="translate(256 -1333)">
    <g id="Group_1" data-name="Group 1" transform="translate(-256 1333)">
      <path id="Path_1" data-name="Path 1" d="M298.635,121.217a8.391,8.391,0,0,1,6.157-3.412,8.372,8.372,0,0,1-2.026,6.267c-2.732,3.283-5.838,2.746-5.838,2.746A7.281,7.281,0,0,1,298.635,121.217Z" transform="translate(-281 -117.805)" fill="#fff" fillRule="evenodd"/>
      <path id="Path_2" data-name="Path 2" d="M66.849,266c1.325,0,3.785-1.822,6.986-1.822a8.75,8.75,0,0,1,7.678,3.921,8.513,8.513,0,0,0-4.24,7.428,8.73,8.73,0,0,0,5.282,7.979S78.863,293.9,73.876,293.9c-2.291,0-4.071-1.544-6.485-1.544-2.459,0-4.9,1.6-6.49,1.6-4.554,0-10.307-9.858-10.307-17.782,0-7.8,4.87-11.886,9.437-11.886C63,264.292,65.305,266,66.849,266Z" transform="translate(-50.594 -254.756)" fill="#fff" fillRule="evenodd"/>
    </g>
  </g>
</svg>
          </NavLink>
        </div>
        <div className="nav-links">

          <NavLink
            to="/iphone"
            className="nav-link iphone"
            activeClassName="navbar-link-active"
          >
            {this.state.small ? <text>I</text>: <span>
            iPhone
            </span> }
          </NavLink>
          <NavLink
            to="/macbook"
            className="nav-link macbook"
            activeClassName="navbar-link-active"
          >
            MacBook Pro
          </NavLink>
          <NavLink
            to="/watch"
            className="nav-link watch"
            activeClassName="navbar-link-active"
          >
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
