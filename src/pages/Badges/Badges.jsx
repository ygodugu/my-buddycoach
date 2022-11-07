import React,{useState, useEffect}  from 'react'
import "./badges.css"
import { Link } from "react-router-dom";
import axios from "axios";
import {DeleteForever,Visibility,BorderColor} from "@material-ui/icons"


const Badges = () => {
    
const [data, setData] = useState([]);

const loadData = async () => {
    const response = await axios.get("http://192.168.0.118:8080/badges");
    setData(response.data);
  };
   useEffect(() => {
    loadData();
   },[]);

   const deleteCourse = (badgeID) => {
     if(window.confirm(" Are you sure that delete the badge ?"));
     axios.delete(` http://192.168.0.118:8080/badge/${badgeID}`);
     window.alert("concept delete scuccesfully");
     setTimeout(() => loadData(), 500);
   }

  return (
    
    <div className="BadgesList">
      <div style={{marginTop: "40px"}}>
        <div className="BadgesTitleContainer">
           <h1 className="BadgesTitle">BadgesList</h1>
              <Link to="/AddBadges">
                 <button className="BadgesAddButton">Add Badges</button>
              </Link>
         </div>

          <table className="styled-table">
            <thead>
              <tr>
                  <th style={{textAlign:"center"}}>BadgeID</th>
                  <th style={{textAlign:"center"}}>BadgeName</th>
                  <th style={{textAlign:"center"}}>BadgeDescription</th>
                  <th style={{textAlign:"center"}}>BadgeRules</th>
                  <th style={{textAlign:"center"}}>BadgeCount</th>
                  <th style={{textAlign:"center"}}>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item,index) =>{
                return(
                  <tr key={item.badgeID}>
                      <th scope='row'>{item.badgeID}</th>
                      <td>{item.badgeName}</td>
                      <td>{item.badgeDescription}</td>
                      <td>{item.badgeRules }</td>
                      <td>{item.badgeCount }</td>
                      <td>
                        <Link to={`/UpdateBadges/${item.badgeID}`}>
                          <button className="btn btn-edit"><BorderColor className="Icons" /></button>
                        </Link>
                        <button className="btn btn-delete" onClick={() => deleteCourse(item.badgeID) }><DeleteForever className="Icons" /></button>
                        <Link to={`/BadgesView/${item.badgeID}`}>
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
}

export default Badges
