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
                      <p> Apple Watch Series 4. Fundamentally redesigned and re‑engineered to help you be even more active, healthy, and connected.</p>
                    </span>
                    <span className="watch-shipping">
                      <p >Starts Shipping MM-DD-YYYY</p>
                    </span>
                    <svg className="background-logo" xmlns="http://www.w3.org/2000/svg" width="165.589" height="203.119" viewBox="0 0 165.589 203.119">
  <g id="Apple_Logo_Light_Gray" data-name="Apple Logo Light Gray" transform="translate(-386.5 -522.376)">
    <g id="Group_4" data-name="Group 4" transform="translate(386.5 522.376)" opacity="0.18">
      <g id="Group_1" data-name="Group 1" transform="translate(0)">
        <path id="Path_1" data-name="Path 1" d="M306.051,135.481c13.346-17.59,31.9-17.676,31.9-17.676s2.759,16.537-10.5,32.468C313.3,167.285,297.205,164.5,297.205,164.5S294.184,151.122,306.051,135.481Z" transform="translate(-214.687 -117.805)" fill="#ccc" fillRule="evenodd"/>
        <path id="Path_2" data-name="Path 2" d="M134.809,273.621c6.866,0,19.608-9.438,36.194-9.438,28.55,0,39.782,20.315,39.782,20.315a44.107,44.107,0,0,0-21.967,38.483c0,30.743,27.365,41.338,27.365,41.338s-19.129,53.842-44.967,53.842c-11.868,0-21.093-8-33.6-8-12.742,0-25.388,8.3-33.623,8.3-23.594,0-53.4-51.074-53.4-92.128,0-40.392,25.23-61.582,48.895-61.582C114.873,264.749,126.811,273.621,134.809,273.621Z" transform="translate(-50.594 -215.34)" fill="#ccc" fillRule="evenodd"/>
      </g>
    </g>
  </g>
</svg>
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
