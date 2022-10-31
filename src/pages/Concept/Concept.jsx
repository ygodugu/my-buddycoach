import React,{useState, useEffect}  from 'react'
import "./concept.css"
import { Link} from "react-router-dom";
import {DeleteForever,Visibility,BorderColor} from "@material-ui/icons"
import axios from "axios";


const Concept = () => {

const [data, setData] = useState([]);

const loadData = async () => {
    const response = await axios.get("http://192.168.0.118:8080/concept");
    setData(response.data);
  };
   useEffect(() => {
    loadData();
   },[]);

   const deleteCourse = (conceptID) => {
     if(window.confirm(" Are you sure that delete the course ?"));
     axios.delete(`http://192.168.0.118:8080/concept/${conceptID}`);
     window.alert("concept delete scuccesfully");
     setTimeout(() => loadData(), 500);
   }
  return (
      <div className="ConceptsList">
      <div style={{marginTop: "40px"}}>
        <div className="ConceptsTitleContainer">
           <h1 className="ConceptsTitle">ConceptList</h1>
              <Link to="/AddConcept">
                 <button className="ConceptsAddButton">Add Concepts</button>
              </Link>
         </div>

          <table className="styled-table">
            <thead>
              <tr>
                  <th style={{textAlign:"center"}}>ConceptID</th>
                  <th style={{textAlign:"center"}}>ConceptName</th>
                  <th style={{textAlign:"center"}}>ConceptDescription</th>
                  <th style={{textAlign:"center"}}>ConceptLogo</th>
                  <th style={{textAlign:"center"}}>ResourceLink</th>
                  <th style={{textAlign:"center"}}>QuizLink</th>
                  <th style={{textAlign:"center"}}>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item,index) =>{
                return(
                  <tr key={item.courseID}>
                      <th scope='row'>{item.conceptID}</th>
                      <td>{item.conceptName}</td>
                      <td>{item.conceptDescription}</td>
                      <div>
                        <td><img src={item.conceptLogo} alt={item.conceptLogo} height="50px"/></td>
                      </div>
                      <td>
                        <a href={item.resourceLink} target="_blank" rel="noopener noreferrer" className='Link'>
                          <button className="btn btn-click">Click</button>
                        </a>
                      </td>
                      <td>
                        <a href={item.quizLink} target="_blank" rel="noopener noreferrer" className='Link' >
                          <button className="btn btn-click">click</button>
                        </a>
                      </td>
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
      </div>
  )
};

export default Concept
