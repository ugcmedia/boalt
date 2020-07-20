import React from "react";
import { Container, Row, Col } from 'reactstrap';
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
      <div className="watch">
        <Navbar />
          <Container >
            <div>
              <Row>
                <Col lg="6">
                  <div className="watch-title-part">
                    <span className="watch-title">
                      <p >Apple Watch</p>
                    </span>
                    <span className="watch-title-sub">
                      <p >Change Starts Within.</p>
                    </span>
                    <span className="watch-title-description">
                      <p > Apple Watch Series 4. Fundamentally redesigned and re‑engineered to help you be even more active, healthy, and connected.</p>
                    </span>
                    <span className="watch-shipping">
                      <p >Starts Shipping MM-DD-YYYY</p>
                    </span>
                  </div>
                </Col>
                <Col lg="6">
                <div className="watch-image-part">
                  <img src={iphone_image} alt="iPhone" className="watch-image" />
                </div>
                </Col>
              </Row>
            </div>
            <div>
              <Row>
                <Col lg="8">
                  <div className="bottom-part">
                    <div>
                      <p className="price-tag">From $699</p>
                      <p className="buy-now">Buy Now</p>
                    </div>
                    <div className="switch-part">
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
                      <div className="toggle-line" onClick={this.handle}>
                        <div className={btn_class} onClick={this.handle}></div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row> 
            </div>
        </Container>
      </div>
    );
  }
}

export default Iphone;
