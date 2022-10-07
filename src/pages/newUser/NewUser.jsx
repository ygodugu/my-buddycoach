import React from "react";
import "./newUser.css"

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
            <label>Username</label>
            <input type="text" placeholder="Yashwanth" />
        </div>
        <div className="newUserItem">
            <label>Fullname</label>
            <input type="text" placeholder="Yashwanth Godugu" />
        </div>
        <div className="newUserItem">
            <label>Email</label>
            <input type="Email" placeholder="yashwanth@gmil.com" />
        </div>
        <div className="newUserItem">
            <label>Password</label>
            <input type="Password" placeholder="password" />
        </div>
        <div className="newUserItem">
            <label>Phone</label>
            <input type="Password" placeholder="91+ 80741410111" />
        </div>
        <div className="newUserItem">
            <label>Address</label>
            <input type="Password" placeholder="Hyderbad | Telagana state " />
        </div>
        <div className="newUserItem">
            <label>Gender</label>
            <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male"/>
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female"/>
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other"/>
            <label for="other">Other</label>
        </div>
        </div>
        <div className="newUserItem">
        <label>Active</label>
        <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
        </select>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
}
