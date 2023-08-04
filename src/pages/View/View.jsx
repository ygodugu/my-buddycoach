import React,{useState,useEffect} from "react";
import "./view.css";
import {useParams, Link} from "react-router-dom"
import axios from "axios";
import {toast} from "react-toastify";
import {DeleteForever,Visibility,BorderColor} from "@material-ui/icons";


function View() {

    const [course, setCourse] = useState([]);

    const [pageNumber, setpageNumber] =useState(1);

    const [ limit, setLimit] =useState(5);


    const {courseID} = useParams();
    
    useEffect(() => {
       axios.get(`http://192.168.0.101:8080/course/${courseID}`,
       {
        headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json',
            "Authorization": `${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                pageNumber : pageNumber,
                limit : limit,
                })
    })
       .then((resp) => setCourse(resp.data[0]))
     }, [])


     const deleteCourse = (conceptID) => {
        //  if(window.alert(" Are you sure that delete the course ?"));
        if (window.confirm('Are you sure you want to save this thing into the database?')) {
          axios.delete(`http://192.168.0.101:8080/conceptToCourse/${courseID}/${conceptID}`,
          {
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json',
                "Authorization": `${localStorage.getItem('token')}`
                },
        });
          toast.success("concept delete scuccesfully");
          // Save it!
          console.log('Nothing was deleted .');
        } else {
          // Do nothing!
          console.log('Thing was not saved to the database.');
        }
         setTimeout(() => 500);
       }
    
    return (
        <div className="view">
            <div style={{marginTop:"40px"}}>  
                <div className="card-header">
                    <p>Course Detailes</p>
                </div>
                    <div style={{ whiteSpace: "pre-line"}}>
                        <div key={courseID}>
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
                    </div>
                        <hr/><hr/>

             <div style={{marginTop:"40px"}}>  
                <div className="ConceptsTitleContainer">
                    <h1 className="ConceptsTitle">Concepts</h1>
                        <Link to={`/AddConceptToCourse/${courseID}`}>
                            <button className="ConceptsAddButton">Add Concepts</button>
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
                <div style={{marginTop:"40px",marginBottom:"40px" }}>  
                    <button className="PreviousButton"
                     onClick={() => {setpageNumber(count => count - 1)}}
                    >Previous</button>
                    <button className="NextButton"
                     onClick={() => {setpageNumber(count => count + 1)}}
                    >Next</button>
                </div>
            </div>
        </div>
    );
}
export default View;
