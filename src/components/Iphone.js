import React from "react";
import Navbar from "./Navbar";
import Icons from "./Icons";
import iPhoneFront from "../images/iphone1.png";
import iPhoneRare from "../images/iphone4.png";
import iPhoneFrontThumbnail from "../images/apple-iphonexs-max-gold.png";
import iPhoneRareThumbnail from "../images/apple-iphonexs-max-gold-back-2.png";

class Iphone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      front: true,
    };
  }
  handle = () => {
    this.setState({ front: !this.state.front });
  };
  clickedFront = () => {
    this.setState({ front: true });
  };
  clickedBack = () => {
    this.setState({ front: false });
  };

  render() {
    let btn_class = this.state.front ? "default-btn" : "clicked-btn";
    let iphone_image = this.state.front ? iPhoneFront : iPhoneRare;
    return (
      <div>
        <Navbar />
        <div className="iphone-page-container">
          <div className="iphone-title-part">
            <p className="iphone-title">iPhone</p>
            <p className="iphone-title-sub">The Ultimate iPhone</p>
            <p className="iphone-title-description">
              The future is here. Join the iPhone Upgrade Program to get the
              latest iPhone - NOW!
            </p>
          </div>
          <div className="iphone-image-part">
            <img src={iphone_image} alt="iPhone" className="iphone-image" />
          </div>
          <Icons />
        </div>
        <div className="bottom-part">
          <div className="inline">
            <div>
              <div className="price-tag">From $699</div>
              <div className="buy-now">Buy Now ></div>
            </div>
            <img
              onClick={this.clickedFront}
              src={iPhoneFrontThumbnail}
              alt="iPhone Front"
              className="iphone-front"
            />
            <img
              onClick={this.clickedBack}
              src={iPhoneRareThumbnail}
              alt="iPhone Rare"
              className="iphone-rare"
            />
          </div>
          <div className="toggle-line" onClick={this.handle}>
            <div className={btn_class} onClick={this.handle}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Iphone;
