import React,{useState} from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./academicDetails.css";

const initialState = {
    higherEducationalQualification:"",
    schoolOrInstituteName:"",
    degree:"",
    fieldOfStudy:"",
    startDate:"",
    endDate:"",
    grade:"",
    activities:"",
    description:"",
    addCertificate:"",
  };

const ProfileDetailes = () => {

  const[state,setState] = useState(initialState);
 
  const {higherEducationalQualification,schoolOrInstituteName,degree,fieldOfStudy,startDate,endDate,grade,activities,description,addCertificate} = state;

  const {badgeID} = useParams();
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if( !higherEducationalQualification || !schoolOrInstituteName || !degree || !fieldOfStudy || !startDate || !endDate ||! grade ||!activities ||!description ||!addCertificate) {
      window.alert("please provied the values into each input feild")
    } else {
      if(!badgeID) {
        console.log("higherEducationalQualification : " + higherEducationalQualification)
        console.log("schoolOrInstituteName : " + schoolOrInstituteName)
        console.log("degree : " + degree)
        console.log("fieldOfStudy : " + fieldOfStudy)
        console.log("startDate : " + startDate)
        console.log("endDate : " + endDate)
        console.log("grade : " + grade)
        console.log("activities : " + activities)
        console.log("description : " + description)
        console.log("addCertificate : " + addCertificate)
       axios.post("http://192.168.0.118:8080/", {  
        higherEducationalQualification : higherEducationalQualification,
        schoolOrInstituteName : schoolOrInstituteName,
        degree : degree,
        fieldOfStudy : fieldOfStudy,
        startDate : startDate,
        endDate : endDate,
        grade : grade,
        activities : activities,
        description : description,
        addCertificate : addCertificate,
       })
      .then(() => {
        setState({higherEducationalQualification: "", schoolOrInstituteName: "", degree: "", fieldOfStudy: "", startDate: "", endDate:"", grade:"",activities:"",description:"",addCertificate:"" });
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
       <h2 className="tile">AcademicDetails</h2>
        <div style={{marignTop:"40px"}}>
          <form style={{
            margin:"auto",
            padding: "15px",
            maxWidth:"400px",
            alignItems:"center"
          }}
          onSubmit={handleSubmit}
          >
          <label htmlFor="higherEducationalQualification">HigherEducationalQualification</label>
          <input
            type="TEXT"
            id="higherEducationalQualification"
            name="higherEducationalQualification"
            placeholder=""
            value={higherEducationalQualification || ""}
            onChange={handleInputChange}
            />
          <label htmlFor="schoolOrInstituteName">SchoolOrInstituteName</label>
          <input
            type="TEXT"
            id="schoolOrInstituteName"
            name="schoolOrInstituteName"
            placeholder=""
            value={schoolOrInstituteName || ""}
            onChange={handleInputChange}
            />
          <label htmlFor="degree">Degree</label>
          <input
            type="VARCHAR(64)"
            id="degree"
            name="degree"
            placeholder=""
            value={degree }
            onChange={handleInputChange || ""}
            />
          <label htmlFor="fieldOfStudy">FieldOfStudy </label>
          <input
            type="VARCHAR(64)"
            id="fieldOfStudy"
            name="fieldOfStudy"
            placeholder=""
            value={fieldOfStudy || ""}
            onChange={handleInputChange}
            />
          <label htmlFor="startDate">StartDate </label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            placeholder=""
            value={startDate || ""}
            onChange={handleInputChange}
            />
          <label htmlFor="endDate">EndDate </label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            placeholder=""
            value={endDate || ""}
            onChange={handleInputChange}
            />
          <label htmlFor="grade">Grade </label>
          <input
            type="VARCHAR(64)"
            id="grade"
            name="grade"
            placeholder=""
            value={grade || ""}
            onChange={handleInputChange}
            />
          <label htmlFor="activities">Activities </label>
          <input
            type="TEXT"
            id="activities"
            name="activities"
            placeholder=""
            value={activities || ""}
            onChange={handleInputChange}
            />
          <label htmlFor="description">Description </label>
          <input
            type="TEXT"
            id="description"
            name="description"
            placeholder=""
            value={description || ""}
            onChange={handleInputChange}
            />
          <label htmlFor="addCertificate">AddCertificate </label>
          <input
            type="FILE"
            id="addCertificate"
            name="addCertificate"
            placeholder=""
            value={addCertificate || ""}
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
