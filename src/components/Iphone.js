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
      <div>
        <Navbar />
          <Container >
            
        </Container>
      </div>
    );
  }
}

export default Iphone;
