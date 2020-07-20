import React from "react";
import { Redirect,withRouter } from "react-router-dom";
import apple from "../images/apple.png";

class PreHome extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      redirect: false,
      holder: [],
      number: ""
    };
  }

  goHome(){
    // console.log("click");
  }
  randomize(){
    var randomm=Math.floor(Math.random()*9999);
    var num;
    if(randomm===0 ){num="0000"}
    else if(randomm<10  ){num="000"+randomm;}
    else if(randomm<100 ){num="00"+randomm;}
    else if(randomm<1000){num="0"+randomm;}
    else{num=randomm}
    this.setState({ number: num }, () => {
      this.sliceNum();
    }); 
  }
  sliceNum(){
    let array = [];
    for(var i=0;i<4;i++){
      let value= this.state.number.toString().slice(i,i+1);
      array.push(value)
    }
    this.setState({ holder: [...this.state.holder, array] }, () => {
      this.turnTheSlot();
    })
  }
  reset(){
     this.setState({ holder: []});
   }
  turnTheSlot(){
    for(var i=0; i<4; i++){
      var value = this.state.holder[i];
      console.log((this.state.holder[i]));
      var margin= 100 * value;
      // $("#"+i+"").css("margin-top","-"+margin+"px");
    }
  }

  go(){
    this.randomize()
    // this.turnTheSlot();
    // this.reset();
  }

  componentDidMount() {
    this.go()
  }

  render() {
    return this.state.redirect ? (
      <Redirect to="/home" />
    ) : (
      <div className="pre-home" onClick={this.goHome()}>
        <div className="pre-nav">
        <svg className="pre-nav-logo" xmlns="http://www.w3.org/2000/svg" width="31.961" height="39.205" viewBox="0 0 31.961 39.205">
  <g id="Group_3" data-name="Group 3" transform="translate(256 -1333)">
    <g id="Group_1" data-name="Group 1" transform="translate(-256 1333)">
      <path id="Path_1" data-name="Path 1" d="M298.635,121.217a8.391,8.391,0,0,1,6.157-3.412,8.372,8.372,0,0,1-2.026,6.267c-2.732,3.283-5.838,2.746-5.838,2.746A7.281,7.281,0,0,1,298.635,121.217Z" transform="translate(-281 -117.805)" fill="#fff" fillRule="evenodd"/>
      <path id="Path_2" data-name="Path 2" d="M66.849,266c1.325,0,3.785-1.822,6.986-1.822a8.75,8.75,0,0,1,7.678,3.921,8.513,8.513,0,0,0-4.24,7.428,8.73,8.73,0,0,0,5.282,7.979S78.863,293.9,73.876,293.9c-2.291,0-4.071-1.544-6.485-1.544-2.459,0-4.9,1.6-6.49,1.6-4.554,0-10.307-9.858-10.307-17.782,0-7.8,4.87-11.886,9.437-11.886C63,264.292,65.305,266,66.849,266Z" transform="translate(-50.594 -254.756)" fill="#fff" fillRule="evenodd"/>
    </g>
  </g>
</svg>
        </div>
        <div className="pre-home-page">
          <img onClick={this.goHome()} src={apple} alt="apple" className="pre-apple" />
          <div className="counter">
            <div>
              <div className="holder">
                <div className="digitHolder" id="1">
                  0<br/>1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7<br/>8<br/>9
                </div>
              </div>
              <div className="holder">
                <div className="digitHolder" id="2">
                  0<br/>1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7<br/>8<br/>9
                </div>
              </div>
              <div className="holder">
                <div className="digitHolder" id="3">
                  0<br/>1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7<br/>8<br/>9
                </div>
              </div>
              <div className="holder">
                <div className="digitHolder" id="4">
                  0<br/>1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7<br/>8<br/>9
                </div>
              </div>
            </div>
            {/* <CountUp
              className="year first-digit"
              duration={3}
              start={1}
              separator=" "
              end={2}
            />
            <CountUp
              className="year second-digit"
              duration={3}
              start={20}
              separator=" "
              end={0}
            />
            <CountUp
              className="year third-digit"
              duration={3}
              start={30}
              separator=" "
              end={1}
            />
            <CountUp
              className="year fourth-digit"
              duration={3}
              start={50}
              separator=" "
              end={9}
            /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(PreHome);
