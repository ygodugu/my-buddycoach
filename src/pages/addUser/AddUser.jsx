import React from "react";
import "./addUser.css";

export default function AddUser() {
  return (
    <div className="AddUser">
      <h1 className="AddUserTitle">Add User</h1>
      <form className="AddUserForm">
        <div className="AddUserItem">
            <label>FirstName</label>
            <input type="text" placeholder="Yashwanth" />
        </div>
        <div className="AddUserItem">
            <label>MiddleName</label>
            <input type="text" placeholder="Yashwanth Godugu" />
        </div>
        <div className="AddUserItem">
            <label>LastName</label>
            <input type="text" placeholder="Yashwanth Godugu" />
        </div>
        <div className="AddUserItem">
            <label>Email</label>
            <input type="Email" placeholder="yashwanth@gmil.com" />
        </div>
        <div className="AddUserItem">
            <label>MobileNumber</label>
            <input type="int" placeholder="8074141011" />
        </div>
        <div className="AddUserItem">
            <label>UserTypeId</label>
            <input type="int" placeholder="1234" />
        </div>
        <div className="AddUserItem">
            <label>Date Of Birth</label>
            <input type="date" placeholder="03-04-2000" />
        </div>
        <div className="AddUserItem">
            <label>Password</label>
            <input type="Password" placeholder="password" />
        </div>
        <div className="AddUserItem">
            <label>PIN</label>
            <input type="Password" placeholder="4567" />
        </div>
        <button className="AddUserButton">Update </button>
      </form>
    </div>
  );
}
  
