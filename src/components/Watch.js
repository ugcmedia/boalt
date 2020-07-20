import React from "react";
import { Container, Row, Col } from 'reactstrap';
import Navbar from "./Navbar";
import Icons from "./Icons";
import WhiteWatch from "../images/white-watch.png";
import BlackWatch from "../images/black-watch.png";

class Iphone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      white: true,
    };
  }
  handle = () => {
    this.setState({ white: !this.state.white });
  };

  render() {
    let white_btn = this.state.white ? "active white-circle-container" : "white-circle-container";
    let black_btn = !this.state.white ? "active black-circle-container" : "black-circle-container";
    let transition = this.state.white ? "watch-image fade-in" : "watch-image fade-out"
    let watch = this.state.white ? WhiteWatch : BlackWatch;
    return (
      <div className="watch">
        <Navbar />
        <Icons/>
          <Container >
            <div>
              <Row>
                <Col xs="12" lg="6">
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
                <Col xs="12" lg="6">
                <div className="watch-image-part">
                  <img src={watch} alt="iPhone" className={transition} />
                </div>
                <div className="switch-part">
                    <div className="toggle-btns">
                        <div className={white_btn}  onClick={this.handle}>
                            <div className="white-circle">
                            </div>
                        </div>
                        <div className={black_btn}  onClick={this.handle}>
                            <div className="black-circle">
                            </div>
                        </div>
                    </div>
                </div>
                </Col>
              </Row>
            </div>
            <div>
              <Row>
                <Col lg="12">
                  <div className="bottom-part">
                      <p className="price-tag">From $699</p>
                      <p className="buy-now">Buy Now</p>
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
