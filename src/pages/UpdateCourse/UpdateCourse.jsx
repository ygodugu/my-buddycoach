import React,{useState,useEffect} from "react";
import { useHistory,useParams,Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "./update.css";

const initialState = {
  courseName:"",
  courseDescription:"",
  courseLogo:"",
};

const UpdateCourse = () => {

    const[state,setState] = useState(initialState);
   
    const {courseName,courseDescription,courseLogo} = state;
   
    const history = useHistory();

    const {courseID} = useParams();

    useEffect(() => {
      axios.get(`http://192.168.0.118:8080/course/${courseID}`)
      .then((resp) => setState({...resp.data[0] }));
    }, [courseID])
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if( !courseName || !courseDescription || !courseLogo ) {
        toast.error("please provied the values into each input feild ")
      }
        else {
          console.log("courseName : " + courseName)
          console.log("courseDescription : " + courseDescription)
          console.log("courseLogo : " + courseLogo)
          axios.put(`http://192.168.0.118:8080/course/${courseID}`, { 
            method: "PUT",
            headers: {
              'Accept': '*/*',
              'Content-Type': 'application/x-www-form-urlencoded',
              'Authorization': 'this-can-be-anything',
            },      
            courseName : courseName,
            courseDescription : courseDescription,
            courseLogo : courseLogo
           })
          .then(() => {
            setState({courseName: "", courseDescription: "", courseLogo: "" });
          })
          .catch((err) => console.log(err.response.data));
          toast.success(" Course updated scucessfully ");
        }
         setTimeout(() => history.push("/Course"), 500)
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
            <label htmlFor="courseName">courseName</label>
            <input
              type="text"
              id="courseName"
              name="courseName"
              placeholder="HTML"
              value={courseName}
              onChange={handleInputChange}
              />
            <label htmlFor="CourseDescription">courseDescription</label>
            <input
              type="courseDescription"
              id="courseDescription"
              name="courseDescription"
              placeholder="Hyper-Text-Markup-Language"
              value={courseDescription}
              onChange={handleInputChange}
              />
            <label htmlFor="CourseLogo">courseLogoLink</label>
            <input
              type="courseLogo"
              id="courseLogo"
              name="courseLogo"
              placeholder="LogoLINK(255)"
              value={courseLogo}
              onChange={handleInputChange}
              />
              <input type="submit" value={'UpdateCourse'}  />
              <Link to="/Course">
                <input  type="button" value="Go Back"/>
              </Link>
            </form>
          </div>
      </div>
    )
  };
   
export default UpdateCourse;
