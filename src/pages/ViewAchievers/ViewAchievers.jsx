import React,{useState,useEffect} from "react";
import "./viewAchievers.css";
import {useParams, Link} from "react-router-dom"
import axios from "axios";


function View() {

    const [course, setCourse] = useState([]);

    const {achieverID} = useParams();
    
    useEffect(() => {
       axios.get(``)
       .then((resp) => {setCourse(resp.data[0]);console.log(course)})
     }, [])

    return (
        <div className="view">
            <div style={{marginTop:"40px"}}>  
                <div className="card-header">
                    <p>Course Detailes</p>
                </div>
                    <div style={{ whiteSpace: "pre-line"}}>
                        <div key={achieverID}>
                            <strong>achieverID: </strong>
                            <span>{course.courseID}</span>{"\n"}{"\n"}
                                
                            <strong>ConceptUserMappingID : </strong>
                            <span>{course.conceptUserMappingID }</span>{"\n"}{"\n"}
                                    
                            <strong>Date: </strong>
                            <span>{course.date }</span>{"\n"}{"\n"}
                                    
                            <Link to="/Achievers">
                                <button className="btn btn-edit">Goback</button>
                            </Link>
                        </div>
                    </div>
                    <hr/><hr/>
            </div>
        </div>
    );
}
export default View;
