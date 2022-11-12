import React,{useState} from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./profileDetailes.css";

const initialState = {
    firstName:"",
    middleName:"",
    lastName:"",
    mobileNumber:"",
    dateOfBirth:"",
  };

const ProfileDetailes = () => {

  const[state,setState] = useState(initialState);
 
  const {firstName,middleName,lastName,mobileNumber,dateOfBirth} = state;

  const {badgeID} = useParams();
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if( !firstName || !middleName || !lastName ||!mobileNumber || !dateOfBirth) {
      window.alert("please provied the values into each input feild")
    } else {
      if(!badgeID) {
        console.log("firstName : " + firstName)
        console.log("middleName : " + middleName)
        console.log("lastName : " + lastName)
        console.log("mobileNumber : " + mobileNumber)
        console.log("dateOfBirth : " + dateOfBirth)
       axios.post("http://192.168.0.118:8082/personal_details", {  
        firstName : firstName,
        middleName : middleName,
        lastName : lastName,
        mobileNumber : mobileNumber,
        dateOfBirth : dateOfBirth,
       })
      .then(() => {
        setState({firstName: "", middleName: "", lastName: "", mobileNumber: "", dateOfBirth:"" });
      })
      .catch((err) =>(err.response.data));
      window.alert("Concept Added scucessfully")
      } 
    }
  };
 
  const handleInputChange = (e) => {
    const {name,value} = e.target;
    setState({...state,[name]: value });
  };
 
  return (
    <div className="AddProfileDetailes">
       <h2 className="tile">PersonalDetailes</h2>
        <div style={{marignTop:"40px"}}>
          <form style={{
            margin:"auto",
            padding: "15px",
            maxWidth:"400px",
            alignItems:"center"
          }}
          onSubmit={handleSubmit}
          >
          <label htmlFor="FirstName">FirstName</label>
          <input
            type="VARCHAR(64)"
            id="firstName"
            name="firstName"
            placeholder="firstName"
            value={firstName || ""}
            onChange={handleInputChange}
            />
          <label htmlFor="MiddleName">MiddleName</label>
          <input
            type="VARCHAR(64)"
            id="middleName"
            name="middleName"
            placeholder="middleName"
            value={middleName}
            onChange={handleInputChange}
            />
          <label htmlFor="lastName">LastName</label>
          <input
            type="VARCHAR(64)"
            id="lastName"
            name="lastName"
            placeholder="lastName"
            value={lastName }
            onChange={handleInputChange}
            />
          <label htmlFor="emailID">EmailID </label>
          <input
            type="text"
            id="emailID"
            name="emailID"
            placeholder="emailID"
            value=""
            onChange={handleInputChange}
            />
          <label htmlFor="mobileNumber">MobileNumber </label>
          <input
            type="number"
            id="mobileNumber"
            name="mobileNumber"
            placeholder="mobileNumber"
            value={mobileNumber }
            onChange={handleInputChange}
            />
          <label htmlFor="dateOfBirth">dateOfBirth </label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            placeholder="dateOfBirth"
            value={dateOfBirth }
            onChange={handleInputChange}
            />
            <input type="submit" value="Save"/>
            <Link to="/">
              <input  type="button" value="Go Back"/>
            </Link>
          </form>
        </div>
    </div>
  )
}

export default ProfileDetailes;
