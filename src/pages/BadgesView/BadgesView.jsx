import React,{useState,useEffect} from "react";
import "./badgesView.css";
import {useParams, Link} from "react-router-dom"
import axios from "axios";


const UserView = () => {

    const [Badge, setBadge] = useState({});

    const {badgeID} = useParams();
   
    useEffect(() => {
       axios.get(`http://192.168.0.118:8080/badge/${badgeID}`,
       {
        headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json',
            "Authorization": `${localStorage.getItem('token')}`
            },
        })
       .then((resp) => setBadge({...resp.data[0]}));
     }, [badgeID])
   
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
                        <span>{Badge.badgeID }</span> {"\n"}{"\n"}
                               
                        <strong>BadgeDescription :  </strong>
                        <span>{Badge.badgeDescription }</span> {"\n"}{"\n"}
                                
                        <strong>BadgeRules :  </strong>
                        <span>{Badge.badgeRules }</span> {"\n"}{"\n"}
                                
                        <strong>BadgeCount : </strong>
                        <span>{Badge.badgeCount }</span> {"\n"}{"\n"}
                                
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

export default UserView;
