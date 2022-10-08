import React,{useState,useEffect} from "react";
import "./conceptView.css";
import {useParams, Link} from "react-router-dom"
import axios from "axios";


const ConceptView = () => {

    const [concept, setconcept] = useState({});

    const {conceptID} = useParams();
   
    useEffect(() => {
       axios.get(`http://192.168.0.118:8080/concept/${conceptID}`)
       .then((resp) => setconcept({...resp.data[0]}));
     }, [conceptID])
   
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
                            <span>{concept.conceptID}</span>
                            <br />
                            <br />
                            <strong>conceptName:</strong>
                            <span>{concept.conceptName}</span>
                            <br />
                            <br />
                            <strong>conceptDescription:</strong>
                            <span>{concept.conceptDescription}</span>
                            <br />
                            <br />
                            <strong>conceptLogo:</strong>
                            <span>{concept.conceptLogo}</span>
                            <br />
                            <br />
                            <strong>resourceLink:</strong>
                            <span>{concept.resourceLink}</span>
                            <br />
                            <br />
                            <strong>quizLink:</strong>
                            <span>{concept.quizLink}</span>
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
}

export default ConceptView;
