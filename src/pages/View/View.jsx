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
<div className="container mt-3">
    <div className="view">
        <div style={{marginTop:"60px"}}>  
            <div className="card">
                <div className="card-header">
                    <p>Course Detailes</p>
                </div>
                 <div className="container">
                    <strong>ID:</strong>
                    <span>{user.courseID}</span>
                    <br />
                    <br />
                    <strong>courseName:</strong>
                    <span>{user.courseName}</span>
                    <br />
                    <br />
                    <strong>courseDescription:</strong>
                    <span>{user.courseDescription}</span>
                    <br />
                    <br />
                    <strong>courseLogo:</strong>
                    <span>{user.courseLogo}</span>
                    <br />
                    <br />
                    <Link to="/Course">
                        <button className="btn btn-edit">Goback</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
</div>
);
};

export default View;