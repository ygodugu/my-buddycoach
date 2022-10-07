import React from "react";
import "./user.css";
import img from "./ImgUser/Y1.JPG";
import img1 from './ImgUser/Y2.jpg';
import { Link } from "react-router-dom";
import {CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish} from '@material-ui/icons/index'

export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
        <div className="userShowTop">
          <img src={img} alt="img" className="userShowImg" />
          <div className="userShowTopTitle">
            <span className="userShowUsername">Yashwanth</span>
            <span className="userShowUserTitle">Software Engineer</span>
          </div>
        </div>
        <div className="userShowBottom">
          <span className="userShowTitle">Account Detailes</span>
          <div className="userShowInfo">
          <PermIdentity className="userShowIcons"/>
          <span className="userShowInfoTitle">annabeck99</span>
          </div>
          <div className="userShowInfo">
          <CalendarToday className="userShowIcons"/>
          <span className="userShowInfoTitle">10.12.1999</span>
          </div>
          <span className="userShowTitle">Contact Detailes</span>
          <div className="userShowInfo">
          <PhoneAndroid className="userShowIcons"/>
          <span className="userShowInfoTitle"> 91+ 8074141011</span>
          </div>
          <div className="userShowInfo">
          <MailOutline className="userShowIcons"/>
          <span className="userShowInfoTitle">annabeck99@gmail.com</span>
          </div>
          <div className="userShowInfo">
          <LocationSearching className="userShowIcons"/>
          <span className="userShowInfoTitle">Hyderbad | Andhra Pradesh </span>
          </div>
        </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <from action=""className="userUdateFrom">
          <div className="userUpdateLeft">
            <div className="userUddateItem">
              <lable>Username</lable>
              <input type="text" placeholder="annabeck99" className="userUdateInput" />
            </div>
            <div className="userUddateItem">
              <lable>Full Name</lable>
              <input type="text" placeholder="yashwanth" className="userUdateInput" />
            </div>
            <div className="userUddateItem">
              <lable>Email</lable>
              <input type="text" placeholder="annabeck99@gmail.com" className="userUdateInput" />
            </div>
            <div className="userUddateItem">
              <lable>Phone</lable>
              <input type="text" placeholder="8074141011" className="userUdateInput" />
            </div>
            <div className="userUddateItem">
              <lable>Address</lable>
              <input type="text" placeholder="Hyderbad | Andhra Pradesh" className="userUdateInput" />
            </div>
          </div>
          <div className="userUpdateRight">
            <div className="userUpdateUpload">
              <img className="userUpDateImg"  src={img1} alt="img1" />
              <label htmlFor="file"><Publish className="userUpdateIcon"/></label>
              <input type="file" id="file" style={{display: "none"}} />
            </div>
            <button className="userUpdateButton">Update</button>
          </div>
          </from>
          </div> 
      </div>
    </div>
  );
}
