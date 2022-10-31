import React,{useState, useEffect} from 'react';
import "./course.css";
import { Link} from "react-router-dom";
import {DeleteForever,Visibility,BorderColor} from "@material-ui/icons"
import axios from "axios";
 

const Course = () => {
   const [data, setData] = useState([]);

   const loadData = async () => {
    const response = await axios.get("http://192.168.0.118:8080/course");
    setData(response.data);
  };
   useEffect(() => {
    loadData();
   },[]);

   const deleteCourse = (courseID) => {
     if(window.confirm(" Are you sure that delete the course ?"));
     axios.delete(`http://192.168.0.118:8080/course/${courseID}`);
     setTimeout(() => loadData(), 500);
   }

  return (
    <div className="CourseList">
      <div style={{marginTop: "40px"}}>
        <div className="CourseTitleContainer">
           <h1 className="CourseTitle">CourseList</h1>
              <Link to="/AddCourse">
                 <button className="CourseAddButton">Add Cources</button>
              </Link>
         </div>

          <table className="styled-table">
            <thead>
              <tr>
                  <th style={{textAlign:"center"}}>CourseID</th>
                  <th style={{textAlign:"center"}}>CourseName</th>
                  <th style={{textAlign:"center"}}>CourseDescription</th>
                  <th style={{textAlign:"center"}}>CourseLogo</th>
                  <th style={{textAlign:"center"}}>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item,index) =>{
                return(
                  <tr key={item.courseID}>
                      <th scope='row'>{item.courseID}</th>
                      <td>{item.courseName}</td>
                      <td>{item.courseDescription}</td>
                      <div>
                        <td><img src={item.courseLogo} alt={item.courseLogo} height="50px"/></td>
                      </div>
                      <td>
                        <Link to={`/UpdateCourse/${item.courseID}`}>
                          <button className="btn btn-edit"><BorderColor className="Icons" /></button>
                        </Link>
                        <button className="btn btn-delete" onClick={() => deleteCourse(item.courseID) }><DeleteForever className="Icons" /></button>
                        <Link to={`/View/${item.courseID}`}>
                          <button className="btn btn-view"><Visibility className="Icons"/></button>
                        </Link>
                      </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
      </div>
    </div>
  );
}

export default Course;
