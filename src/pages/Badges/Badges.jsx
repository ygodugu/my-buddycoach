import React,{useState, useEffect}  from 'react'
import "./badges.css"
import { Link} from "react-router-dom";
import axios from "axios";

const Badges = () => {
    
const [data, setData] = useState([]);

const loadData = async () => {
    const response = await axios.get("http://192.168.0.118:8080/badge");
    setData(response.data);
  };
   useEffect(() => {
    loadData();
   },[]);

   const deleteCourse = (conceptID) => {
     if(window.confirm(" Are you sure that delete the badge ?"));
     axios.delete(`http://192.168.0.118:8080/badge/${badgeID}`);
     window.alert("concept delete scuccesfully");
     setTimeout(() => loadData(), 500);
   }

  return (
    
    <div className="BadgesList">
      <div style={{marginTop: "40px"}}>
        <div className="BadgesTitleContainer">
           <h1 className="BadgesTitle">BadgesList</h1>
              <Link to="/#">
                 <button className="BadgesAddButton">Add Badges</button>
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
                  <tr key={item.badgeID}>
                      <th scope='row'>{item.badgeID}</th>
                      <td>{item.conceptName}</td>
                      <td>{item.conceptDescription}</td>
                      <div>
                        <td><img src={item.conceptLogo} alt={item.conceptLogo} height="50px"/></td>
                      </div>
                      <td>
                        <Link to={`/#/${item.badgeID}`}>
                          <button className="btn btn-edit">Edit</button>
                        </Link>
                        <button className="btn btn-delete" onClick={() => deleteCourse(item.badgeID) }>Delete</button>
                        <Link to={`/#/${item.badgeID}`}>
                          <button className="btn btn-view">View</button>
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
