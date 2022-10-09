import React,{useState} from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "./addUser.css";


const initialState = {
    firstName:"",
    middleName:"",
    lastName:"",
    emailID:"",
    mobileNumber:"",
    DOB:"",
  };

const AddUser = () => {

    const[state,setState] = useState(initialState);
 
  const {firstName,middleName,lastName,emailID,mobileNumber,DOB} = state;

  const {userID} = useParams();
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if( !firstName || !middleName || !lastName || !emailID || !mobileNumber || !DOB) {
      toast.error("please provied the values into each input feild ")
    } else {
      if(!userID) {
        console.log("firstName : " + firstName)
        console.log("middleName : " + middleName)
        console.log("lastName : " + lastName)
        console.log("emailID : " + emailID)
        console.log("mobileNumber : " + mobileNumber)
        console.log("DOB : " + DOB)
       axios.post("http://192.168.0.118:8080/concept", {  
        firstName : firstName,
        middleName : middleName,
        lastName : lastName,
        emailID : emailID,
        mobileNumber : mobileNumber,
        DOB : DOB
       })
      .then(() => {
        setState({firstName: "", middleName: "", lastName: "", emailID: "", mobileNumber: "", DOB: "" });
      })
      .catch((err) => toast.error(err.response.data));
     
      toast.success("User  Added scucessfully ");
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
          <label htmlFor="firstName">firstName</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="firstName"
            value={firstName || ""}
            onChange={handleInputChange}
            />
          <label htmlFor="middleName">middleName</label>
          <input
            type="middleName"
            id="middleName"
            name="middleName"
            placeholder="middleName"
            value={middleName}
            onChange={handleInputChange}
            />
          <label htmlFor="lastName">lastName</label>
          <input
            type="lastName"
            id="lastName"
            name="lastName"
            placeholder="lastName"
            value={lastName}
            onChange={handleInputChange}
            />
          <label htmlFor="emailID">emailID</label>
          <input
            type="emailID"
            id="emailID"
            name="emailID"
            placeholder="emailID"
            value={emailID}
            onChange={handleInputChange}
            />
          <label htmlFor="mobileNumber">mobileNumber</label>
          <input
            type="mobileNumber"
            id="mobileNumber"
            name="mobileNumber"
            placeholder="mobileNumber"
            value={mobileNumber}
            onChange={handleInputChange}
            />
          <label htmlFor="DOB">DOB</label>
          <input
            type="DOB"
            id="DOB"
            name="DOB"
            placeholder="05/09/2022"
            value={DOB}
            onChange={handleInputChange}
            />
            <input type="submit" value="Save"/>
            <Link to="/Concept">
              <input  type="button" value="Go Back"/>
            </Link>
          </form>
        </div>
    </div>
  )
};
export default AddUser;
