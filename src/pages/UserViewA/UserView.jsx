import React,{useState,useEffect} from "react";
import "./userView.css";
import {useParams, Link} from "react-router-dom"
import axios from "axios";


const UserView = () => {

    const [user, setUser] = useState({});

    const {userID} = useParams();
   
    useEffect(() => {
       axios.get(`http://192.168.0.118:8080/user/${userID}`)
       .then((resp) => setUser({...resp.data[0]}));
     }, [userID])
   
  return (
    <div className="view">
        <div style={{marginTop:"60px"}}>  
            <div className="card">
                <div className="card-header">
                    <p>Course Detailes</p>
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
    </div>
  )
}

export default UserView
