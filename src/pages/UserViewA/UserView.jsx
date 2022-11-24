import React,{useState,useEffect} from "react";
import "./userView.css";
import {useParams, Link} from "react-router-dom"
import axios from "axios";
import {toast} from "react-toastify";
import {DeleteForever,Visibility,BorderColor} from "@material-ui/icons";

const UserView = () => {

    const [user, setUser] = useState({});

    const [pageNumber, setpageNumber] =useState(1);

    const [ limit, setLimit] =useState(5);

    const {userID} = useParams();
   
    useEffect(() => {
       axios.get(`http://192.168.0.118:8080/user/${userID}?pageNumber=${pageNumber}&limit=${limit}`)
       .then((resp) => setUser(resp.data[0]));
     }, [pageNumber,limit])

     console.log(user)

     const deleteCourse = (conceptID) => {
        //  if(window.alert(" Are you sure that delete the course ?"));
        if (window.confirm('Are you sure you want to save this thing into the database?')) {
          axios.delete(`http://192.168.0.118:8080/conceptToCourse/${userID}/${conceptID}`);
          toast.success("concept delete scuccesfully");
          // Save it!
          console.log('Nothing was deleted .');
        } else {
          // Do nothing!
          console.log('Thing was not saved to the database.');
        }
         setTimeout(() => 500);
       }

       const deleteBadge = (badgeID) => {
        //  if(window.alert(" Are you sure that delete the course ?"));
        if (window.confirm('Are you sure you want to deleteBadge?')) {
          axios.delete(`http://192.168.0.118:8080/badgeToUser/${userID}/${badgeID}`);
          toast.success("badge delete scuccesfully");
          // Save it!
        } else {
          // Do nothing!
          console.log('Thing was not saved to the database.');
        }
         setTimeout(() => 500);
       }


  return (
    <div className="view">
        <div style={{marginTop:"40px"}}>  
            <div className="card">
                <div className="card-header">
                    <p>User Detailes</p>
                </div>
                {/* This is user details displaying code */}
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
        {/* This the display the concepts to user mappping Table  */}
        <div style={{marginTop:"40px"}}>  
            <div className="ConceptsTitleContainer">
                <h1 className="ConceptsTitle">Concepts</h1>
                    <Link to={`/AddConceptToUser/${userID}`}>
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
            <div style={{marginTop:"40px",marginBottom:"40px" }}>  
                <button className="PreviousButton"
                onClick={() => {setpageNumber(count => count - 1)}}
                >Previous</button>
                <button className="NextButton"
                onClick={() => {setpageNumber(count => count + 1)}}
                >Next</button>
            </div>

            {/* This is the badge to user displaying code  */}
            <div style={{marginTop:"40px"}}>  
                <div className="ConceptsTitleContainer">
                    <h1 className="ConceptsTitle">Badges</h1>
                        <Link to={`/AddBadgesToUser/${userID}`}>
                        <button className="ConceptsAddButton">Add Badges</button>
                    </Link>
                </div>
                    <table className="styled-table">
                        <thead>
                            <tr>
                                <th style={{textAlign:"center"}}>BadgeID</th>
                                <th style={{textAlign:"center"}}>BadgeName</th>
                                <th style={{textAlign:"center"}}>Action</th>
                            </tr>
                        </thead>
                            <tbody>
                            {
                                user?.badges?.map((badge,index) => {
                                return(
                                    <tr>
                                        <th scope='row'>{badge.badgeID}</th>
                                        <td>{badge.badgeName}</td>
                                    <td>
                                        <Link to={`/UpdateConcept/${badge.badgeID}`}>
                                            <button className="btn btn-edit"><BorderColor className="Icons" /></button>
                                        </Link>
                                            <button className="btn btn-delete" onClick={() => deleteBadge(badge.badgeID) }><DeleteForever className="Icons" /></button>
                                        <Link to={`/ConceptView/${badge.badgeID}`}>
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
  )
}

export default UserView;
