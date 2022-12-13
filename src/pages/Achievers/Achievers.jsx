import React,{useState, useEffect} from 'react';
import "./achievers.css";
import { Link} from "react-router-dom";
import {toast} from "react-toastify";
import {DeleteForever,Visibility,BorderColor} from "@material-ui/icons"
import axios from "axios";
 

const Course = () => {
   const [data, setData] = useState([]);

   const loadData = async () => {
    const response = await axios.get("");
    setData(response.data);
  };
   useEffect(() => {
    loadData();
   },[]);

   const deleteCourse = (courseID) => {
    //  if(window.alert(" Are you sure that delete the course ?"));
    if (window.confirm('')) {
      axios.delete(``);
      toast.success("");
      // Save it!
      console.log('');
    } else {
      // Do nothing!
      console.log('');
    }
     setTimeout(() => loadData(), 500);
   }

  return (
    <div className="CourseList">
      <div style={{marginTop: "40px"}}>
        <div className="CourseTitleContainer">
           <h1 className="CourseTitle">AchieverList</h1>
              <Link to="/AddAchievers">
                 <button className="CourseAddButton">Add Achiever</button>
              </Link>
         </div>

          <table className="styled-table">
            <thead>
              <tr>
                  <th style={{textAlign:"center"}}>achieverID</th>
                  <th style={{textAlign:"center"}}>conceptUserMappingID</th>
                  <th style={{textAlign:"center"}}>Date</th>
                  <th style={{textAlign:"center"}}>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item,index) =>{
                return(
                  <tr key={item.achieverID}>
                      <th scope='row'>{item.achieverID}</th>
                      <td>{item.achieverID}</td>
                      <td>{item.conceptUserMappingID}</td>
                      <td>
                        <Link to={`/UpdateAchievers`}>
                          <button className="btn btn-edit"><BorderColor className="Icons" /></button>
                        </Link>
                        <button className="btn btn-delete" onClick={() => deleteCourse(item.achieverID) }><DeleteForever className="Icons" /></button>
                        <Link to={`/View/${item.achieverID}`}>
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
