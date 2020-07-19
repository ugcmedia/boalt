import React from "react";
import { NavLink } from "react-router-dom";
import iphone from "../images/iphone.png";
import mac from "../images/mac.png";
import watch from "../images/watch.png";

const Icons = () => {
  return (
    <div className="vertical-icons">
      <NavLink to="/iphone" activeClassName="icon-active">
        <img
          id="iphone"
          src={iphone}
          alt="iPhone"
          className="iphone-icon-vertical"
        />
      </NavLink>
      <NavLink to="/macbook" activeClassName="icon-active">
        <img src={mac} alt="MacBook" className="mac-icon-vertical" />
      </NavLink>
      <NavLink to="/watch" activeClassName="icon-active">
        <img src={watch} alt="Watch" className="watch-icon-vertical" />
      </NavLink>
    </div>
  );
};

export default Icons;
