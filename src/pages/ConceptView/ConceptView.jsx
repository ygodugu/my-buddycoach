import React,{useState,useEffect} from "react";
import "./conceptView.css";
import {useParams, Link} from "react-router-dom"
import axios from "axios";


const ConceptView = () => {

    const [concept, setConcept] = useState({});

    const {conceptID} = useParams();
   
    useEffect(() => {
        debugger
       axios.get(`http://192.168.0.118:8080/concept/${conceptID}`,
       {
        headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json',
            "Authorization": `${localStorage.getItem('token')}`
            },
        })
       .then((resp) => setConcept({...resp.data[0]}));
     }, [conceptID])
   
  return (
            <div className="view">
                <div style={{marginTop:"60px"}}>  
                    <div className="card">
                        <div className="card-header">
                            <p>Course Detailes</p>
                        </div>
                        <div className="container">
                            <div style={{ whiteSpace: "pre-line" }}>
                                <strong>ID:</strong>
                                <span>{concept.conceptID}</span> {"\n"}{"\n"}
                               
                                <strong>conceptName:</strong>
                                <span>{concept.conceptName}</span> {"\n"}{"\n"}
                                
                                <strong>conceptDescription:</strong>
                                <span>{concept.conceptDescription}</span> {"\n"}{"\n"}
                                
                                <strong>conceptLogo:</strong>
                                <span>{<img src={concept.conceptLogo} alt={concept.conceptLogo} height="50px"/> }</span> {"\n"}{"\n"}
                                
                                <strong>resourceLink:</strong>
                                <span>{concept.resourceLink}</span> {"\n"}{"\n"}
                               
                                <strong>quizLink:</strong>
                                <span>{concept.quizLink}</span> {"\n"}{"\n"}
                               
                                <Link to="/Concept">
                                    <button className="btn btn-edit">Goback</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  );
}

export default ConceptView;
