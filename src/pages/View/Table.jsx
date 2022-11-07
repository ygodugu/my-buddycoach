import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import "./table.css";
import {DeleteForever,Visibility,BorderColor} from "@material-ui/icons";


const Table = () => {

    const [data, setData] = useState([]);

        const loadData = async () => {
            const response = await axios.get("http://192.168.0.118:8080/concepts");
            setData(response.data);
            console.log(response.data);
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
            <div className="ConceptsList" >
                <div style={{marginTop: "40px"}}>
                    <div className="ConceptsTitleContainer">
                            <h1 className="ConceptsTitle">Concepts</h1>
                            <Link to="/AddconceptTocourse">
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
                                <tr key={item.courseID}>
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
            </div>    
            );
            };

export default Table;