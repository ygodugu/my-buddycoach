import React,{useState} from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./addConcept.css";

const initialState = {
    conceptName:"",
    conceptDescription:"",
    conceptLogo:"",
    resourceLink:"",
    quizLink:"",
  };

const AddConcept = () => {

  const[state,setState] = useState(initialState);
 
  const {conceptName,conceptDescription,conceptLogo,resourceLink,quizLink} = state;

  const {conceptID} = useParams();
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if( !conceptName || !conceptDescription || !conceptLogo || !resourceLink || !quizLink) {
      window.alert("please provied the values into each input feild")
    } else {
      if(!conceptID) {
        console.log("conceptName : " + conceptName)
        console.log("conceptDescription : " + conceptDescription)
        console.log("conceptLogo : " + conceptLogo)
        console.log("resourceLink : " + resourceLink)
        console.log("quizLink : " + quizLink)
       axios.post("http://192.168.0.118:8080/concept", {  
        conceptName : conceptName,
        conceptDescription : conceptDescription,
        conceptLogo : conceptLogo,
        resourceLink : resourceLink,
        quizLink : quizLink
       })
      .then(() => {
        setState({conceptName: "", conceptDescription: "", conceptLogo: "", resourceLink: "", quizLink: "" });
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
    <div className="AddCourse">
        <div style={{marignTop:"40px"}}>
          <form style={{
            margin:"auto",
            padding: "15px",
            maxWidth:"400px",
            alignItems:"center"
          }}
          onSubmit={handleSubmit}
          >
          <label htmlFor="conceptName">conceptName</label>
          <input
            type="text"
            id="conceptName"
            name="conceptName"
            placeholder="HTML Tables"
            value={conceptName || ""}
            onChange={handleInputChange}
            />
          <label htmlFor="conceptDescription">conceptDescription</label>
          <input
            type="conceptDescription"
            id="conceptDescription"
            name="conceptDescription"
            placeholder="HTML tables allow web developers to arrange data into rows and columns."
            value={conceptDescription}
            onChange={handleInputChange}
            />
          <label htmlFor="conceptLogo">conceptLogoLink</label>
          <input
            type="conceptLogo"
            id="conceptLogo"
            name="conceptLogo"
            placeholder="LogoLINK(255)"
            value={conceptLogo}
            onChange={handleInputChange}
            />
          <label htmlFor="resourceLink">resourceLink</label>
          <input
            type="resourceLink"
            id="resourceLink"
            name="resourceLink"
            placeholder="resourceLink(255)"
            value={resourceLink}
            onChange={handleInputChange}
            />
          <label htmlFor="quizLink">quizLink</label>
          <input
            type="quizLink"
            id="quizLink"
            name="quizLink"
            placeholder="quizLink(255)"
            value={quizLink}
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
}

export default AddConcept;
