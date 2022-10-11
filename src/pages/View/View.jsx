import React,{useState,useEffect} from "react";
import "./view.css";
import {useParams, Link} from "react-router-dom"
import axios from "axios";


function View() {
 const [user, setUser] = useState({});

 const {courseID} = useParams();

 useEffect(() => {
    axios.get(`http://192.168.0.118:8080/course/${courseID}`)
    .then((resp) => setUser({...resp.data[0]}));
  }, [courseID])

  return (
    <div className="view">
        <div style={{marginTop:"60px"}}>  
            <div className="card">
                <div className="card-header">
                    <p>Course Detailes</p>
                </div>
                 <div className="container">
                    <strong>ID: </strong>
                    <span>{user.courseID}</span>   {"\n"}   {"\n"}
                 
                    <strong>courseName: </strong>
                    <span>{user.courseName}</span>   {"\n"}   {"\n"}
                    
                    <strong>courseDescription: </strong>
                    <span>{user.courseDescription}</span>   {"\n"}   {"\n"}
                    
                    <strong>courseLogo: </strong>
                    <span>{user.courseLogo}</span>   {"\n"}   {"\n"}
                   
                    <Link to="/Course">
                        <button className="btn btn-edit">Goback</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
);
};

export default View;