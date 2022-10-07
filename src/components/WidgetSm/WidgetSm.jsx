import React from "react"
import "./widgetSm.css"
import pic from "./ImgSm/Y1.JPG"
import pic1 from "./ImgSm/Y2.jpg"
import pic2 from "./ImgSm/Y3.jpg"
import pic3 from "./ImgSm/Profile.jpg"
import pic4 from "./ImgSm/Revanth.jpeg"
import {Visibility} from "@material-ui/icons"

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Member</span>
        <ul className="widgetSmList">
          <li className="widgetSmListItem">
            <img src={pic} alt="Profile" className="widgetSmImg" />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Yashwanth</span>
              <span className="widgetSmUserTitle">Softwrae Engineer</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcons"/>
              Display
            </button>
          </li>
          <li className="widgetSmListItem">
            <img src={pic1} alt="Profile" className="widgetSmImg" />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Yashwanth</span>
              <span className="widgetSmUserTitle">Softwrae Engineer</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcons"/>
              Display
            </button>
          </li>
          <li className="widgetSmListItem">
            <img src={pic2} alt="Profile" className="widgetSmImg" />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Yashwanth</span>
              <span className="widgetSmUserTitle">Softwrae Engineer</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcons"/>
              Display
            </button>
          </li>
          <li className="widgetSmListItem">
            <img src={pic3} alt="Profile" className="widgetSmImg" />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Yashwanth</span>
              <span className="widgetSmUserTitle">Softwrae Engineer</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcons"/>
              Display
            </button>
          </li>
           <li className="widgetSmListItem">
            <img src={pic4} alt="Profile" className="widgetSmImg" />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Yashwanth</span>
              <span className="widgetSmUserTitle">Softwrae Engineer</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcons"/>
              Display
            </button>
          </li>
        </ul>
    </div>
  );
}
