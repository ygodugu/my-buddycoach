import React,{useState,useEffect} from "react";
import { useHistory,useParams,Link } from "react-router-dom";
import axios from "axios";
import "./updateUser.css";

const initialState = {
    firstName:"",
    middleName:"",
    lastName:"",
    emailID:"",
    mobileNumber:"",
    dateOfBirth:""
  };

const UpdateUser = () => {

    const[state,setState] = useState(initialState);
   
    const {firstName,middleName,lastName,emailID,mobileNumber,dateOfBirth} = state;
 
    const history = useHistory();

    const {userID} = useParams();

    useEffect(() => {
        axios.get(`http://192.168.0.118:8080/user/${userID}`)
        .then((resp) => setState({...resp.data[0] }));
    }, [userID]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if( !firstName || !lastName || !emailID || !mobileNumber || !dateOfBirth ) {
            window.alert("please provied the values into each input feild ")
        }

    else {
        console.log("firstName : " + firstName)
        console.log("middleName : " + middleName)
        console.log("lastName : " + lastName)
        console.log("emailID : " + emailID)
        console.log("mobileNumber : " + mobileNumber)
        console.log("dateOfBirth : " + dateOfBirth)
        axios.put(`http://192.168.0.118:8080/user/${userID}`, {     
        firstName : firstName,
        middleName : middleName,
        lastName : lastName,
        emailID : emailID,
        mobileNumber : mobileNumber,
        dateOfBirth : dateOfBirth
         })
        .then(() => {
          setState({firstName: "", middleName: "", lastName: "", emailID: "", mobileNumber: "", dateOfBirth:"" });
        })
        .catch((err) => console.log(err.response.data));
        window.alert(" Concept updated scucessfully ")
      }
       setTimeout(() => history.push("/User"), 500)
    };

    const handleInputChange = (e) => {
        const {name,value} = e.target;
        setState({...state,[name]: value });
      };

    return (
        <div className="UpdateUser">
            <div style={{marignTop:"40px"}}>
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
                value={firstName}
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
             <label htmlFor="dateOfBirth">dateOfBirth</label>
            <input
                type="Date"
                id="dateOfBirth"
                name="dateOfBirth"
                placeholder="mobdateOfBirthileNumber"
                value={dateOfBirth}
                onChange={handleInputChange}
                />
                <input type="submit" value={"UpdateUser"}/>
                <Link to="/User">
                <input  type="button" value="Go Back"/>
                </Link>
            </form>
            </div>
        </div>
    )
    };

export default UpdateUser
