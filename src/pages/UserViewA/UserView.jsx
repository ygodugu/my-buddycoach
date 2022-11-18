import React,{useState,useEffect} from "react";
import "./userView.css";
import {useParams, Link} from "react-router-dom"
import axios from "axios";
import {DeleteForever,Visibility,BorderColor} from "@material-ui/icons";

const UserView = () => {

    const [user, setUser] = useState({});

    const {userID} = useParams();
   
    useEffect(() => {
       axios.get(`http://192.168.0.118:8080/user/${userID}`)
       .then((resp) => setUser(resp.data[0]));
     }, [])

     console.log(user)


     const deleteCourse = (conceptID) => {
        if(window.confirm(" Are you sure that delete the course ?"));
        axios.delete(`http://192.168.0.118:8080/conceptToUser/${conceptID}`);
        alert("concept delete scuccesfully");
        setTimeout((loadData) => 500);
    }

  return (
    <div className="view">
        <div style={{marginTop:"40px"}}>  
            <div className="card">
                <div className="card-header">
                    <p>User Detailes</p>
                </div>
                <div className="container">
                    <div style={{ whiteSpace: "pre-line" }}>
                        <strong>ID:  </strong>
                        <span>{user.userID}</span> {"\n"}{"\n"}
                               
                        <strong>FirstName:  </strong>
                        <span>{user.firstName}</span> {"\n"}{"\n"}
                                
                        <strong>MiddleName:  </strong>
                        <span>{user.middleName}</span> {"\n"}{"\n"}
                                
                        <strong>LastName: </strong>
                        <span>{user.lastName}</span> {"\n"}{"\n"}
                                
                        <strong>EmailID:  </strong>
                        <span>{user.emailID}</span> {"\n"}{"\n"}
                               
                        <strong>MobileNumber:  </strong>
                        <span>{user.mobileNumber}</span> {"\n"}{"\n"}

                        <strong>DATE OF BIRTH:  </strong>
                        <span>{user.dateOfBirth}</span> {"\n"}{"\n"}

                        <Link to="/user">
                            <button className="btn btn-edit">Goback</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <div style={{marginTop:"40px"}}>  
            <div className="ConceptsTitleContainer">
                <h1 className="ConceptsTitle">Concepts</h1>
                    <Link to={`/AddConceptToUser/${userID}`}>
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
                                user?.concepts?.map((concept,index) => {
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
  )
}

export default UserView;
