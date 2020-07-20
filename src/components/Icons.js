import React from "react";
import { NavLink, withRouter  } from "react-router-dom";
import mac from "../images/mac.png";

class Icons extends React.Component{
  constructor(props) {
    super(props);
    this.getNavLinkClass = path => {
      let output = "";
      if(path === "/iphone"){
        output = "iphone-icon-vertical"
      }else if (path === "/mac"){
        output = "mac-icon-vertical"
      }else if (path === "/watch"){
        output = "watch-icon-vertical"
      }
      if(this.props.location.pathname === path){
        output = output + "icon-active";
      }
      return output
    };
  }
  
  render() {
    return (
      <div className="vertical-icons">
        <NavLink to="/iphone" >
        <svg className="iphone-icon-vertical" id="Iphone_icon" data-name="Iphone icon" xmlns="http://www.w3.org/2000/svg" width="15.363" height="29.137" viewBox="0 0 15.363 29.137">
    <path id="icon" d="M312.163,47.111a.253.253,0,1,1-.254.253A.253.253,0,0,1,312.163,47.111Zm2.373,25.377a1.47,1.47,0,1,1,1.469-1.47A1.472,1.472,0,0,1,314.536,72.489Zm0-2.277a.807.807,0,1,0,.807.807A.808.808,0,0,0,314.536,70.212Zm5.905-1.16h-11.92V49.185h11.92Zm1.589-19.1h-.1v-2.4a2.678,2.678,0,0,0-2.675-2.672h-9.549a2.678,2.678,0,0,0-2.675,2.672v1.685H307a.2.2,0,0,0-.2.2V50.4a.2.2,0,0,0,.2.2h.033v2.036H307a.2.2,0,0,0-.2.2v1.848a.2.2,0,0,0,.2.2h.033v.632H307a.2.2,0,0,0-.2.2v1.848a.2.2,0,0,0,.2.2h.033V71.346a2.678,2.678,0,0,0,2.675,2.672h9.549a2.678,2.678,0,0,0,2.675-2.672V52.2h.1a.133.133,0,0,0,.133-.132v-1.98A.133.133,0,0,0,322.031,49.95Zm-1.093,21.4a1.684,1.684,0,0,1-1.682,1.679h-9.549a1.684,1.684,0,0,1-1.682-1.679V47.553a1.684,1.684,0,0,1,1.682-1.679h9.549a1.684,1.684,0,0,1,1.682,1.679ZM317.054,47.2h-4.133v.331h4.133Z" transform="translate(-306.8 -44.881)" fill="#707070" fillRule="evenodd"/>
  </svg>
        </NavLink>
        <NavLink to="/macbook" >
        {/* <svg className="mac-icon-vertical"  id="Mac_Icon" data-name="Mac Icon" xmlns="http://www.w3.org/2000/svg" width="39.07" height="22.833" viewBox="0 0 39.07 22.833">
    <path id="icon" d="M175.525,210.945a.222.222,0,1,0,.228.222A.225.225,0,0,0,175.525,210.945Zm-14.333.781v17.211h28.376V211.726Zm28.044,16.88H161.523V212.057h27.713Zm-13.711-17.661a.222.222,0,1,0,.228.222A.225.225,0,0,0,175.525,210.945Zm-14.333.781v17.211h28.376V211.726Zm28.044,16.88H161.523V212.057h27.713Zm-13.711-17.661a.222.222,0,1,0,.228.222A.225.225,0,0,0,175.525,210.945Zm-14.333.781v17.211h28.376V211.726Zm30.273,18.244V211.346a1.666,1.666,0,0,0-1.682-1.646H161.119a1.669,1.669,0,0,0-1.685,1.646V229.97H156v1.523l.262.139c.066.036,1.725.9,6.44.9h25.667c4.715,0,6.374-.864,6.44-.9l.262-.139V229.97Zm-31.038-18.625a.674.674,0,0,1,.692-.652h28.664a.671.671,0,0,1,.689.652V229.97H160.427Zm27.942,20.194H162.7a19.693,19.693,0,0,1-5.4-.576h14.886c.026.073.152.265.738.265h4.9c.586,0,.712-.192.738-.265h15.2A19.714,19.714,0,0,1,188.369,231.54Z" transform="translate(-156 -209.7)" fill="#fff"/>
  </svg> */}
  
          <img src={mac} alt="MacBook" className="mac-icon-vertical" />
        </NavLink>
        <NavLink to="/watch" >
        <svg className="watch-icon-vertical" id="Apple_Watch" data-name="Apple Watch" xmlns="http://www.w3.org/2000/svg" width="18.552" height="30.892" viewBox="0 0 18.552 30.892">
    <path id="icon" d="M74.052,340.041v-3.215H73.7a4.792,4.792,0,0,0-2.377-3.808c-.122-.086-.685-.566-.685-2.569v-1.162A1.937,1.937,0,0,0,68.7,327.35H60.513a1.937,1.937,0,0,0-1.937,1.937v1.162c0,2-.563,2.483-.685,2.569a4.792,4.792,0,0,0-2.391,4.149v11.257a4.806,4.806,0,0,0,2.473,4.2c.175.159.6.738.6,2.52V356.3a1.937,1.937,0,0,0,1.937,1.937H68.7a1.937,1.937,0,0,0,1.937-1.937v-1.162c0-1.8.454-2.381.636-2.54a4.8,4.8,0,0,0,2.44-4.179v-1.142h.341v-4.2h-.341v-3.036Zm-14.482-9.592v-1.162a.945.945,0,0,1,.944-.944H68.7a.945.945,0,0,1,.944.944v1.162a7.161,7.161,0,0,0,.245,2.016,4.747,4.747,0,0,0-.977-.1H60.3a4.747,4.747,0,0,0-.977.1A7.161,7.161,0,0,0,59.569,330.449Zm10.072,24.694V356.3a.945.945,0,0,1-.944.944H60.513a.945.945,0,0,1-.944-.944v-1.162a7.316,7.316,0,0,0-.238-2.013,4.942,4.942,0,0,0,.97.1H68.91a4.951,4.951,0,0,0,.973-.1A7.171,7.171,0,0,0,69.641,355.143Zm3.076-6.718a3.8,3.8,0,0,1-1.768,3.212c-.086.056-.172.106-.262.156a3.791,3.791,0,0,1-1.778.44H60.3a3.777,3.777,0,0,1-1.775-.44q-.119-.065-.238-.139h0a3.81,3.81,0,0,1-1.791-3.228V337.167a3.812,3.812,0,0,1,3.808-3.808H68.91a3.789,3.789,0,0,1,1.94.533.287.287,0,0,1,.033.02,3.808,3.808,0,0,1,1.834,3.255ZM60.467,334.187a3.149,3.149,0,0,0-3.145,3.145v10.926a3.149,3.149,0,0,0,3.145,3.146h8.278a3.149,3.149,0,0,0,3.145-3.146V337.333a3.149,3.149,0,0,0-3.145-3.145Z" transform="translate(-55.5 -327.35)" fill="#707070"/>
  </svg>
  
        </NavLink>
      </div>
    );
  }
}



export default withRouter(Icons);
