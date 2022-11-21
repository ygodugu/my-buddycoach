import React,{useState} from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./profileDetailes.css";

const initialState = {
    firstName:"",
    middleName:"",
    lastName:"",
    emailID: "",
    mobileNumber:"",
    dateOfBirth:"",
  };

const ProfileDetailes = () => {

  const[state,setState] = useState(initialState);
 
  const {firstName,middleName,lastName,emailID,mobileNumber,dateOfBirth} = state;

  const {badgeID} = useParams();
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if( !firstName || !middleName || !lastName ||!emailID || !mobileNumber || !dateOfBirth) {
      window.alert("please provied the values into each input feild")
    } else {
      if(!badgeID) {
        console.log("firstName : " + firstName)
        console.log("middleName : " + middleName)
        console.log("lastName : " + lastName)
        console.log("emailID : " + emailID)
        console.log("mobileNumber : " + mobileNumber)
        console.log("dateOfBirth : " + dateOfBirth)
       axios.post("http://192.168.0.118:8082/personal_details", {  
        firstName : firstName,
        middleName : middleName,
        lastName : lastName,
        emailID  : emailID,
        mobileNumber : mobileNumber,
        dateOfBirth : dateOfBirth,
       })
      .then(() => {
        setState({firstName: "", middleName: "", lastName: "", emailID: "", mobileNumber: "", dateOfBirth:"" });
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
            <form className="AddUserForm">
                <div className="AddUserItem">
                    <label>FirstName</label>
                    <input 
                      id="firstName"
                      name="firstName"
                      type="text" 
                      placeholder="Yashwanth"
                      value={firstName || ""}
                      onChange={handleInputChange} 
                    />
                </div>
                <div className="AddUserItem">
                    <label>MiddleName</label>
                    <input 
                      id="middleName"
                      name="middleName"
                      type="text" 
                      placeholder="Yashwanth Godugu"
                      value={middleName || ""}
                      onChange={handleInputChange} 
                    />
                </div>
                <div className="AddUserItem">
                    <label>LastName</label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text" 
                      placeholder="Yashwanth Godugu"
                      value={lastName || "" }
                      onChange={handleInputChange}
                      />
                </div>
                <div className="AddUserItem">
                    <label>Email</label>
                    <input
                     id="emailID"
                     name="emailID"
                     type="Email" 
                     placeholder="yashwanth@gmil.com"
                     value={emailID || ""}
                     onChange={handleInputChange} 
                     />
                </div>
                <div className="AddUserItem">
                    <label>MobileNumber</label>
                    <input
                      id="mobileNumber"
                      name="mobileNumber"
                      type="int" 
                      placeholder="8074141011"
                      value={mobileNumber }
                      onChange={handleInputChange}
                      />
                </div>
                <div className="AddUserItem">
                    <label>Date Of Birth</label>
                    <input
                      id="dateOfBirth"
                      name="dateOfBirth" 
                      type="date" 
                      placeholder="03-04-2000" 
                      value={dateOfBirth }
                      onChange={handleInputChange}
                    />
                </div>
              </form>
              <button className="AddUserButton">Update </button>
        </div>
    </div>
  )
}

export default ProfileDetailes;


// const StateValues = {
//   higherEducationalQualification:"",
//   middleName:"",
//   lastName:"",
//   emailID: "",
//   mobileNumber:"",
//   dateOfBirth:"",
// };

// export const academicDetails = () => {

//   const[state,setState] = useState(StateValues);
 
//   const {firstName,middleName,lastName,emailID,mobileNumber,dateOfBirth} = state;

//   const {badgeID} = useParams();
 
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if( !firstName || !middleName || !lastName ||!emailID || !mobileNumber || !dateOfBirth) {
//       window.alert("please provied the values into each input feild")
//     } else {
//       if(!badgeID) {
//         console.log("firstName : " + firstName)
//         console.log("middleName : " + middleName)
//         console.log("lastName : " + lastName)
//         console.log("emailID : " + emailID)
//         console.log("mobileNumber : " + mobileNumber)
//         console.log("dateOfBirth : " + dateOfBirth)
//        axios.post("http://192.168.0.118:8082/personal_details", {  
//         firstName : firstName,
//         middleName : middleName,
//         lastName : lastName,
//         emailID  : emailID,
//         mobileNumber : mobileNumber,
//         dateOfBirth : dateOfBirth,
//        })
//       .then(() => {
//         setState({firstName: "", middleName: "", lastName: "", emailID: "", mobileNumber: "", dateOfBirth:"" });
//       })
//       .catch((err) =>(err.response.data));
//       window.alert("Concept Added scucessfully")
//       } 
//     }
//   };
 
//   const handleInputChange = (e) => {
//     const {name,value} = e.target;
//     setState({...state,[name]: value });
//   };
 
//   return (
//     <div className="AddProfileDetailes">
//        <h2 className="tile">PersonalDetailes</h2>
//           <div style={{marignTop:"40px"}}>
//             <form className="AddUserForm">
//                 <div className="AddUserItem">
//                     <label>FirstName</label>
//                     <input 
//                       id="firstName"
//                       name="firstName"
//                       type="text" 
//                       placeholder="Yashwanth"
//                       value={firstName || ""}
//                       onChange={handleInputChange} 
//                     />
//                 </div>
//                 <div className="AddUserItem">
//                     <label>MiddleName</label>
//                     <input 
//                       id="middleName"
//                       name="middleName"
//                       type="text" 
//                       placeholder="Yashwanth Godugu"
//                       value={middleName || ""}
//                       onChange={handleInputChange} 
//                     />
//                 </div>
//                 <div className="AddUserItem">
//                     <label>LastName</label>
//                     <input
//                       id="lastName"
//                       name="lastName"
//                       type="text" 
//                       placeholder="Yashwanth Godugu"
//                       value={lastName || "" }
//                       onChange={handleInputChange}
//                       />
//                 </div>
//                 <div className="AddUserItem">
//                     <label>Email</label>
//                     <input
//                      id="emailID"
//                      name="emailID"
//                      type="Email" 
//                      placeholder="yashwanth@gmil.com"
//                      value={emailID || ""}
//                      onChange={handleInputChange} 
//                      />
//                 </div>
//                 <div className="AddUserItem">
//                     <label>MobileNumber</label>
//                     <input
//                       id="mobileNumber"
//                       name="mobileNumber"
//                       type="int" 
//                       placeholder="8074141011"
//                       value={mobileNumber }
//                       onChange={handleInputChange}
//                       />
//                 </div>
//                 <div className="AddUserItem">
//                     <label>Date Of Birth</label>
//                     <input
//                       id="dateOfBirth"
//                       name="dateOfBirth" 
//                       type="date" 
//                       placeholder="03-04-2000" 
//                       value={dateOfBirth }
//                       onChange={handleInputChange}
//                     />
//                 </div>
//               </form>
//               <button className="AddUserButton">Update </button>
//         </div>
//     </div>
//   )
// }
 