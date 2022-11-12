import React,{useState,useEffect} from "react";
import "./view.css";
import {useParams, Link} from "react-router-dom"
import axios from "axios";
import Table from "./Table";
import {DeleteForever,Visibility,BorderColor} from "@material-ui/icons";


function View() {
    const [data, setData] = useState([]);

    const {courseID} = useParams();

    const loadData = async () => {
        const response = await axios.get(`http://192.168.0.118:8080/course/${courseID}`);
        setData(response.data);
        console.log(response.data)
    };

    useEffect(() => {
        loadData();
        },[courseID]);

    const deleteCourse = (conceptID) => {
        if(window.confirm(" Are you sure that delete the course ?"));
        axios.delete(`http://192.168.0.118:8080/concept/${conceptID}`);
        window.alert("concept delete scuccesfully");
        setTimeout(() => loadData(), 500);
    }

    return (
        <div className="view">
            <div style={{marginTop:"60px"}}>  
                    <div className="card-header">
                        <p>Course Detailes</p>
                    </div>
                    <div className="container">
                        <div style={{ whiteSpace: "pre-line" }}>
                            <strong>CourseID: </strong>
                            <span>{data.courseID}</span>{"\n"}{"\n"}
                        
                            <strong>courseName: </strong>
                            <span>{data.courseName}</span>{"\n"}{"\n"}
                            
                            <strong>courseDescription: </strong>
                            <span>{data.courseDescription}</span>{"\n"}{"\n"}
                            
                            <strong>courseLogo: </strong>
                            <span>{<img src={data.courseLogo} alt={data.courseLogo} height="50px"/>}</span>{"\n"}{"\n"}{"\n"}
                        
                            <Link to="/Course">
                                <button className="btn btn-edit">Goback</button>
                            </Link>
                        </div>
                    </div>
            </div>
            <hr/><hr/>
            <div className="ConceptsTitleContainer">
                <h1 className="ConceptsTitle">Concepts</h1>
                    <Link to={`/AddconceptTocourse/${courseID}`}>
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
                        {data.map((item,index) =>{
                            return(
                            <tr>
                                <th scope='row'>{item.conceptID}</th>
                                <td>{item.conceptName}</td>
                                <td>
                                    <Link to={`/UpdateConcept/${item.conceptID}`}>
                                    <button className="btn btn-edit"><BorderColor className="Icons" /></button>
                                    </Link>
                                    <button className="btn btn-delete" onClick={() => deleteCourse(item.conceptID) }><DeleteForever className="Icons" /></button>
                                    <Link to={`/ConceptView/${item.conceptID}`}>
                                    <button className="btn btn-view"><Visibility className="Icons"/></button>
                                    </Link>
                                </td>
                            </tr>
                            )
                        })}
                    </tbody>
                </table>
        </div>
    );
}
export default View;
