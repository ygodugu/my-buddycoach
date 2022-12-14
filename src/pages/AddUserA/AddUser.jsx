import React,{useState} from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./addUser.css";


const initialState = {
    firstName:"",
    middleName:"",
    lastName:"",
    emailID:"",
    mobileNumber:"",
    dateOfBirth:"",
  };

const AddUser = () => {

    const[state,setState] = useState(initialState);
 
  const {firstName,middleName,lastName,emailID,mobileNumber,dateOfBirth} = state;

  const {userID} = useParams();
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if( !firstName || !lastName || !emailID || !mobileNumber || !dateOfBirth) {
      window.alert("please provied the values into each input feild")
    } else {
      if(!userID) {
        console.log("firstName : " + firstName)
        console.log("middleName : " + middleName)
        console.log("lastName : " + lastName)
        console.log("emailID : " + emailID)
        console.log("mobileNumber : " + mobileNumber)
        console.log("dateOfBirth : " + dateOfBirth)
       fetch("http://192.168.0.118:8080/user", {  
        method : "post",
          headers: {
              'Accept': '*/*',
              'Content-Type': 'application/json',
              "Authorization": `${localStorage.getItem('token')}`
              },
      body: JSON.stringify ({
              firstName : firstName,
              middleName : middleName,
              lastName : lastName,
              emailID : emailID,
              mobileNumber : mobileNumber,
              dateOfBirth : dateOfBirth 
           }),
       })
      .then(() => {
        setState({firstName: "", middleName: "", lastName: "", emailID: "", mobileNumber: "", dateOfBirth: "" });
      })
      .catch((err) => (err.response.data));
      window.alert("User Added scucessfully ")
      } 
    }
  };
 
  const handleInputChange = (e) => {
    const {name,value} = e.target;
    setState({...state,[name]: value });
  };
  return (
    <div className="AddUser">
        <div style={{marignTop:"60px"}}>
          <form style={{
            margin:"auto",
            padding: "15px",
            maxWidth:"400px",
            alignItems:"center"
          }}
          onSubmit={handleSubmit}
          >
          <label htmlFor="firstName">FirstName</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="firstName"
            value={firstName}
            onChange={handleInputChange}
            />
          <label htmlFor="middleName">MiddleName</label>
          <input
            type="middleName"
            id="middleName"
            name="middleName"
            placeholder="middleName"
            value={middleName}
            onChange={handleInputChange}
            />
          <label htmlFor="lastName">LastName</label>
          <input
            type="lastName"
            id="lastName"
            name="lastName"
            placeholder="lastName"
            value={lastName}
            onChange={handleInputChange}
            />
          <label htmlFor="emailID">EmailID</label>
          <input
            type="emailID"
            id="emailID"
            name="emailID"
            placeholder="emailID"
            value={emailID}
            onChange={handleInputChange}
            />
          <label htmlFor="mobileNumber">MobileNumber</label>
          <input
            type="mobileNumber"
            id="mobileNumber"
            name="mobileNumber"
            placeholder="mobileNumber"
            value={mobileNumber}
            onChange={handleInputChange}
            />
          <label htmlFor="dateOfBirth">DateOfBirth</label>
          <input
            type="Date"
            id="dateOfBirth"
            name="dateOfBirth"
            placeholder="05/09/2022"
            value={dateOfBirth}
            onChange={handleInputChange}
            />
            <input type="submit" value="Save"/>
            <Link to="/User">
              <input  type="button" value="Go Back"/>
            </Link>
          </form>
        </div>
    </div>
  )
};
export default AddUser;
