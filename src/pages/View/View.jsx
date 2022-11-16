import React,{useState,useEffect} from "react";
import "./view.css";
import {useParams, Link} from "react-router-dom"
import axios from "axios";
import {DeleteForever,Visibility,BorderColor} from "@material-ui/icons";


function View() {
    const [course, setCourse] = useState({});

    const {courseID} = useParams();

    useEffect(() => {
       axios.get(`http://192.168.0.118:8080/course/${courseID}`)
       .then((resp) => setCourse(resp.data[0]));
     }, [])

    const deleteCourse = (conceptID) => {
        if(window.confirm(" Are you sure that delete the course ?"));
        axios.delete(`http://192.168.0.118:8080/conceptToCourse/${conceptID}`);
        alert("concept delete scuccesfully");
        setTimeout((loadData) => 500);
    }

    return (
        <div className="view">
            <div style={{marginTop:"40px"}}>  
                <div className="card-header">
                    <p>Course Detailes</p>
                </div>
                    <div style={{ whiteSpace: "pre-line"}}>
                        <strong>CourseID: </strong>
                        <span>{course.courseID}</span>{"\n"}{"\n"}
                            
                        <strong>courseName: </strong>
                        <span>{course.courseName}</span>{"\n"}{"\n"}
                                
                        <strong>courseDescription: </strong>
                        <span>{course.courseDescription}</span>{"\n"}{"\n"}
                                
                        <strong>courseLogo: </strong>
                        <span>{<img src={course.courseLogo} alt={course.courseLogo} height="50px"/>}</span>{"\n"}{"\n"}{"\n"}
                        <Link to="/Course">
                            <button className="btn btn-edit">Goback</button>
                        </Link>
                    </div>
                        <hr/><hr/>

                    <div style={{marginTop:"40px"}}>  
                        <div className="ConceptsTitleContainer">
                            <h1 className="ConceptsTitle">Concepts</h1>
                                <Link to={`/AddConceptToCourse/${courseID}`}>
                                    <button className="ConceptsAddButton">Concepts</button>
                                </Link>
                            </div>
                                <table className="styled-table">
                                    <thead>
                                        <tr>
                                            <th style={{textAlign:"center"}}>ConceptID</th>
                                            <th style={{textAlign:"center"}}>ConceptName</th>
                                            <th style={{textAlign:"center"}}>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            course?.concepts?.map((concept,index) => {
                                                return(
                                                    <tr>
                                                        <th scope='row'>{concept.conceptID}</th>
                                                        <td>{concept.conceptName}</td>
                                                        <td>
                                                            <Link to={`/UpdateConcept/${concept.conceptID}`}>
                                                                <button className="btn btn-edit"><BorderColor className="Icons" /></button>
                                                            </Link>
                                                                <button className="btn btn-delete" onClick={() => deleteCourse(concept.conceptID) }><DeleteForever className="Icons" /></button>
                                                            <Link to={`/ConceptView/${concept.conceptID}`}>
                                                                <button className="btn btn-view"><Visibility className="Icons"/></button>
                                                             </Link>
                                                            </td>
                                                    </tr> 
                                                    )
                                            }) 
                                        }
                                    </tbody> 
                                </table>
                    </div>
                </div>
        </div>
    );
}
export default View;
