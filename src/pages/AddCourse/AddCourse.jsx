import React,{useState} from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./addCourse.css";
 
const initialState = {
  courseName:"",
  courseDescription:"",
  courseLogo:"",
};
 
const AddCourse = () => {
  const[state,setState] = useState(initialState);
 
  const {courseName,courseDescription,courseLogo} = state;

  const {courseID} = useParams();
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if( !courseName || !courseDescription || !courseLogo ) {
      window.alert("please provied the values into each input feild")
    } else {
      if(!courseID) {
        console.log("courseName : " + courseName)
        console.log("courseDescription : " + courseDescription)
        console.log("courseLogo : " + courseLogo)
       axios.post("http://192.168.0.118:8080/course", {  
        courseName : courseName,
        courseDescription : courseDescription,
        courseLogo : courseLogo
       })
      .then(() => {
        setState({courseName: "", courseDescription: "", courseLogo: "" });
      })
      .catch((err) =>(err.response.data));
      window.alert("Course Added scucessfully")
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
          <label htmlFor="courseName">CourseName</label>
          <input
            type="text"
            id="courseName"
            name="courseName"
            placeholder="HTML"
            value={courseName || ""}
            onChange={handleInputChange}
            />
          <label htmlFor="CourseDescription">CourseDescription</label>
          <input
            type="courseDescription"
            id="courseDescription"
            name="courseDescription"
            placeholder="Hyper-Text-Markup-Language"
            value={courseDescription}
            onChange={handleInputChange}
            />
          <label htmlFor="CourseLogo">CourseLogoLink</label>
          <input
            type="courseLogo"
            id="courseLogo"
            name="courseLogo"
            placeholder="LogoLINK(255)"
            value={courseLogo}
            onChange={handleInputChange}
            />
            <input type="submit" value="Save"/>
            <Link to="/Course">
              <input  type="button" value="Go Back"/>
            </Link>
          </form>
        </div>
    </div>
  )
}
 
export default AddCourse;
