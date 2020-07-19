import React from "react";
import Navbar from "./Navbar";
import Icons from "./Icons";
import Mac from "../images/laptop.png";
import AppleProducts from "../images/shutterstock_-2.png";

const Macbook = () => {
  return (
    <div>
      <Navbar />
      <Icons />
      <div className="container">
        <div className="macbook-title-part">
          <div className="macbook-title">MacBook Pro</div>
          <div className="macbook-title-sub">More Power. More Pro</div>
          <div>
            <p className="inline macbook-specs">8-Core</p>
            <p className="inline macbook-specs">32GB</p>
          </div>
          <div>
            <p className="inline macbook-specs-description">Intel processor</p>
            <p className="inline macbook-specs-description">Memory</p>
          </div>
          <img src={Mac} alt="MacBook Pro" className="macbook-pro-image" />
        </div>
        <div className="bottom-part-mac">
          <div className="inline">
            <div className="buy-now-mac-container">
              <p className="buy-now-mac">Buy Now ></p>
            </div>
            <div className="apple-products">
              <img
                src={AppleProducts}
                alt="Apple Products"
                className="apple-products-image"
              />
            </div>
            <div className="subscription-form">
              <div>
                <label htmlFor="sub_email" className="subscribe-now">
                  Subscribe Now
                </label>
              </div>
              <input
                id="sub_email"
                name="email"
                type="text"
                placeholder="Enter the email address."
                className="subscription-email-input"
              />
              <input
                type="submit"
                value="Subscribe"
                className="subscription-button"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Macbook;
