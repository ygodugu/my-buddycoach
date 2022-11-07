import React,{useState} from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./addBadges.css";

const initialState = {
    badgeName:"",
    badgeDescription:"",
    badgeRules:"",
    badgeCount:"",
    badgeStatus:"",
  };

const AddConcept = () => {

  const[state,setState] = useState(initialState);
 
  const {badgeName,badgeDescription,badgeRules,badgeCount,badgeStatus} = state;

  const {badgeID} = useParams();
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if( !badgeName || !badgeDescription || !badgeRules || !badgeCount || !badgeStatus) {
      window.alert("please provied the values into each input feild")
    } else {
      if(!badgeID) {
        console.log("conceptName : " + badgeName)
        console.log("conceptDescription : " + badgeDescription)
        console.log("conceptLogo : " + badgeRules)
        console.log("resourceLink : " + badgeCount)
        console.log("quizLink : " + badgeStatus)
       axios.post("http://192.168.0.118:8080/badges", {  
        badgeName : badgeName,
        badgeDescription : badgeDescription,
        badgeRules : badgeRules,
        badgeCount : badgeCount,
        badgeStatus : badgeStatus
       })
      .then(() => {
        setState({badgeName: "", badgeDescription: "", badgeRules: "", badgeCount: "", badgeStatus: "" });
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
    <div className="AddBadges">
        <div style={{marignTop:"40px"}}>
          <form style={{
            margin:"auto",
            padding: "15px",
            maxWidth:"400px",
            alignItems:"center"
          }}
          onSubmit={handleSubmit}
          >
          <label htmlFor="conceptName">BadgeName</label>
          <input
            type="VARCHAR(64)"
            id="badgeName"
            name="badgeName"
            placeholder="Director General of Police"
            value={badgeName || ""}
            onChange={handleInputChange}
            />
          <label htmlFor="conceptDescription">BadgeDescription</label>
          <input
            type="TEXT"
            id="badgeDescription"
            name="badgeDescription"
            placeholder="To Identify Oneself In An Official Way.."
            value={badgeDescription}
            onChange={handleInputChange}
            />
          <label htmlFor="conceptLogo">BadgeRules</label>
          <input
            type="TEXT"
            id="badgeRules"
            name="badgeRules"
            placeholder="PSV or Public Service Vehicle Badge"
            value={badgeRules}
            onChange={handleInputChange}
            />
          <label htmlFor="resourceLink">BadgeCount</label>
          <input
            type="INT(11)"
            id="badgeCount"
            name="badgeCount"
            placeholder="Number of badgeCount"
            value={badgeCount}
            onChange={handleInputChange}
            />
          <label htmlFor="quizLink">BadgeStatus</label>
          <input
            type="TINYINT(1)"
            id="badgeStatus"
            name="badgeStatus"
            placeholder="Active or Diactive"
            value={badgeStatus}
            onChange={handleInputChange}
            />
            <input type="submit" value="Save"/>
            <Link to="/Badges">
              <input  type="button" value="Go Back"/>
            </Link>
          </form>
        </div>
    </div>
  )
}

export default AddConcept;
