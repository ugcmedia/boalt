import React from "react";
import { Container, Row, Col } from "reactstrap";
import Navbar from "./Navbar";
import Icons from "./Icons";
import Mac from "../images/laptop.png";

class Macbook extends React.Component {
  render() {
    return (
      <div className="mac">
        <Navbar animate={false} />
        <Icons />
        <Container>
          <div>
            <Row>
              <Col lg="12">
                <div className="inner-container">
                  <Row>
                    <Col lg="6">
                      <div className="mac-title-part">
                        <span className="mac-title">
                          <p>MacBook Pro</p>
                        </span>
                        <span className="mac-title-sub">
                          <p>More Power. More Pro</p>
                        </span>
                        <span className="mac-title-description">
                          <div className="mac-desc">
                            <div>
                              <p className="tech-compute">8-Core</p>
                              <p className="tech-detail">Intel Processor</p>
                            </div>
                            <div className="right-desc">
                              <p className="tech-compute">32GB</p>
                              <p className="tech-detail">Memory</p>
                            </div>
                          </div>
                        </span>
                        <span className="mac-shipping">
                          <p>Starts Shipping MM-DD-YYYY</p>
                        </span>
                      </div>
                    </Col>
                    <Col className="col" lg="6">
                      <div className="mac-image-part">
                        <img src={Mac} alt="iPhone" className="mac-image" />
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

export default Macbook;
