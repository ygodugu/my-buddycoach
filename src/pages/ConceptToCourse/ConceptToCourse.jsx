import React,{useState, useEffect}  from 'react'
import "./conceptToCourse.css"
import { Link} from "react-router-dom";
import {toast} from "react-toastify";
import axios from "axios";

const ConceptToCourse = () => {

    const [data, setData] = useState([]);

    const loadData = async () => {
        const response = await axios.get("http://192.168.0.118:8080/conceptToCourse");
        setData(response.data);
    };
    useEffect(() => {
        loadData();
    },[]);

    const deleteCourse = (conceptCourseMappingID ) => {
        if(window.confirm(" Are you sure that delete the course ?"));
        axios.delete(`http://192.168.0.118:8080/conceptTocourse/${conceptCourseMappingID }`);
        toast.success("conceptToCourse delete scuccesfully");
        setTimeout(() => loadData(), 500);
    }
  return (
    <div className="ConceptToCourse">
      <div style={{marginTop: "40px"}}>
        <div className="ConceptToCourseTitleContainer">
           <h1 className="ConceptToCourseTitle">ConceptToCourse</h1>
              <Link to="/#">
                 <button className="ConceptsAddButton">Add ConceptToCourse</button>
              </Link>
         </div>

          <table className="styled-table">
            <thead>
              <tr>
                  <th style={{textAlign:"center"}}>ConceptCourseMappingID</th>
                  <th style={{textAlign:"center"}}>courseID</th>
                  <th style={{textAlign:"center"}}>conceptID</th>
                  <th style={{textAlign:"center"}}>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item,index) =>{
                return(
                  <tr key={item.conceptCourseMappingID }>
                      <th scope='row'>{item.conceptCourseMappingID }</th>
                      <td>{item.courseID}</td>
                      <td>{item.conceptID}</td>
                      <td>
                        <Link to={`/#/${item.conceptCourseMappingID }`}>
                          <button className="btn btn-edit">Edit</button>
                        </Link>
                        <button className="btn btn-delete" onClick={() => deleteCourse(item.conceptCourseMappingID ) }>Delete</button>
                        <Link to={`/#/${item.conceptCourseMappingID }`}>
                          <button className="btn btn-view">View</button>
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

export default ConceptToCourse;
