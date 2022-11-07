import React,{useState,useEffect} from "react";
import "./badgesView.css";
import {useParams, Link} from "react-router-dom"
import axios from "axios";


const UserView = () => {

    const [user, setUser] = useState({});

    const {userID} = useParams();
   
    useEffect(() => {
       axios.get(`http://192.168.0.118:8080/badge/${userID}`)
       .then((resp) => setUser({...resp.data[0]}));
     }, [userID])
   
  return (
    <div className="view">
        <div style={{marginTop:"60px"}}>  
            <div className="card">
                <div className="card-header">
                    <p>Badge Detailes</p>
                </div>
                <div className="container">
                    <div style={{ whiteSpace: "pre-line" }}>
                        <strong>ID:  </strong>
                        <span>{user.badgeID }</span> {"\n"}{"\n"}
                               
                        <strong>BadgeDescription :  </strong>
                        <span>{user.badgeDescription }</span> {"\n"}{"\n"}
                                
                        <strong>BadgeRules :  </strong>
                        <span>{user.badgeRules }</span> {"\n"}{"\n"}
                                
                        <strong>BadgeCount : </strong>
                        <span>{user.badgeCount }</span> {"\n"}{"\n"}
                                
                        <Link to="/Badges">
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
