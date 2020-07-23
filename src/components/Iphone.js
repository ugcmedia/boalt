import React from "react";
import { Container, Row, Col } from "reactstrap";
import axios from "axios";
import Navbar from "./Navbar";
import Icons from "./Icons";
import iPhoneFront from "../images/iphone-front.jpg";
import iPhoneRare from "../images/iphone-rear.jpg";
import iPhoneFrontThumbnail from "../images/iPhoneFrontThumbnail.png";
import iPhoneRareThumbnail from "../images/iPhoneRareThumbnail.png";

import ReactSlider from "react-slider";

class Iphone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      front: true,
      slideValue: 0,
    };
  }

  // to toggle iphone with slider
  handleChange = (s) => {
    this.setState(
      {
        slideValue: s,
      },
      () => {
        if (this.state.slideValue === 0) {
          this.clickedFront(s);
        } else if (this.state.slideValue === 99) {
          this.clickedBack(s);
        }
      }
    );
    console.log(s);
  };
// to toggle iphone with thumbnails
  clickedFront = (a = null) => {
    this.setState({ clicked: true });
    setTimeout(() => {
      this.setState({ front: true, slideValue: a ? a : 0 });
      setTimeout(() => {
        this.setState({ clicked: false });
      }, 900);
    }, 500);
  };
  clickedBack = (a = null) => {
    this.setState({ clicked: true });
    setTimeout(() => {
      this.setState({ front: false, slideValue: a ? a : 0 });
      setTimeout(() => {
        this.setState({ clicked: false });
      }, 900);
    }, 500);
  };

  // section responsible for hadling endpoint JSON data
  componentDidMount(){
    axios.get("https://boalt-interview.herokuapp.com/api/shipping-dates", {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      responseType: 'json',
      }
    ).then(res=> console.log(res))
  }

  render() {
    let btn_class = this.state.front ? "default-btn" : "clicked-btn";
    let iphone_image = this.state.front ? iPhoneFront : iPhoneRare;
    let transition = this.state.front
      ? "iphone-image slide-in"
      : "iphone-image slide-in";
    const { slideValue } = this.state;
    return (
      <div className="iphone">
        <Navbar animate={false} />
        <Icons />
        <Container>
          <div className="iphone-container-div">
            <Row>
              <Col lg="6">
                <div className="iphone-title-part">
                  <span className="iphone-title">
                    <p>iPhone</p>
                  </span>
                  <span className="iphone-title-sub">
                    <p>The Ultimate iPhone</p>
                  </span>
                  <span className="iphone-title-description">
                    <p>
                      {" "}
                      The future is here. Join the iPhone Upgrade Program to get
                      the latest iPhone - NOW!
                    </p>
                  </span>
                  <span className="iphone-shipping">
                    <p>Starts Shipping MM-DD-YYYY</p>
                  </span>
                  <svg
                    className="background-logo"
                    xmlns="http://www.w3.org/2000/svg"
                    width="165.589"
                    height="203.119"
                    viewBox="0 0 165.589 203.119"
                  >
                    <g
                      id="Apple_Logo_Light_Gray"
                      data-name="Apple Logo Light Gray"
                      transform="translate(-386.5 -522.376)"
                    >
                      <g
                        id="Group_4"
                        data-name="Group 4"
                        transform="translate(386.5 522.376)"
                        opacity="0.18"
                      >
                        <g
                          id="Group_1"
                          data-name="Group 1"
                          transform="translate(0)"
                        >
                          <path
                            id="Path_1"
                            data-name="Path 1"
                            d="M306.051,135.481c13.346-17.59,31.9-17.676,31.9-17.676s2.759,16.537-10.5,32.468C313.3,167.285,297.205,164.5,297.205,164.5S294.184,151.122,306.051,135.481Z"
                            transform="translate(-214.687 -117.805)"
                            fill="#ccc"
                            fillRule="evenodd"
                          />
                          <path
                            id="Path_2"
                            data-name="Path 2"
                            d="M134.809,273.621c6.866,0,19.608-9.438,36.194-9.438,28.55,0,39.782,20.315,39.782,20.315a44.107,44.107,0,0,0-21.967,38.483c0,30.743,27.365,41.338,27.365,41.338s-19.129,53.842-44.967,53.842c-11.868,0-21.093-8-33.6-8-12.742,0-25.388,8.3-33.623,8.3-23.594,0-53.4-51.074-53.4-92.128,0-40.392,25.23-61.582,48.895-61.582C114.873,264.749,126.811,273.621,134.809,273.621Z"
                            transform="translate(-50.594 -215.34)"
                            fill="#ccc"
                            fillRule="evenodd"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </Col>
              <Col lg="6">
                <div className="iphone-image-part">
                  {this.state.clicked ? (
                    <img
                      src={iphone_image}
                      alt="iPhone"
                      className={transition}
                    />
                  ) : (
                    <img
                      src={iphone_image}
                      alt="iPhone"
                      className="iphone-image"
                    />
                  )}
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
                      onClick={() => this.clickedFront(0)}
                      src={iPhoneFrontThumbnail}
                      alt="iPhone Front"
                      className="iphone-front"
                    />
                    <img
                      onClick={() => this.clickedBack(99)}
                      src={iPhoneRareThumbnail}
                      alt="iPhone Rare"
                      className="iphone-rare"
                    />
                    <div className="mySlider_parent">
                      <ReactSlider
                        className="horizontal-slider"
                        thumbClassName="example-thumb"
                        trackClassName="example-track"
                        thumbActiveClassName="mythumb"
                        withTracks={true}
                        max={99}
                        // defaultValue={0}
                        value={slideValue}
                        onChange={(s) => this.handleChange(s)}
                        renderThumb={(props, state) => {
                          // console.log(state);
                          return (
                            <div>
                              <div {...props}>
                                <div className="mySlider">
                                  <span className="sliderValue">
                                    {state.valueNow}
                                  </span>
                                </div>
                              </div>
                            </div>
                          );
                        }}
                      />
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
