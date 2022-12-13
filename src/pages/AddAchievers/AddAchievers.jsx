import React,{useState} from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./addAchievers.css";

const initialState = {
    conceptUserMappingID:"",
    date:"",
  };

const AddBadges = () => {

  const[state,setState] = useState(initialState);
 
  const {conceptUserMappingID,date} = state;

  const {achieverID} = useParams();
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if( !conceptUserMappingID || !date) {
      window.alert("please provied the values into each input feild")
    } else {
      if(!achieverID) {
        console.log("conceptUserMappingID : " + conceptUserMappingID)
        console.log("date : " + date)
       axios.post("", {  
        conceptUserMappingID : conceptUserMappingID,
        date : date,
       })
      .then(() => {
        setState({conceptUserMappingID: "", date: "",});
      })
      .catch((err) =>(err.response.data));
      window.alert("Achievers Added scucessfully")
      } 
    }
  };
 
  const handleInputChange = (e) => {
    const {name,value} = e.target;
    setState({...state,[name]: value });
  };
 
  return (
    <div className="AddBadges">
        <div style={{marignTop:"40px"}}>
          <form style={{
            margin:"auto",
            padding: "15px",
            maxWidth:"400px",
            alignItems:"center"
          }}
          onSubmit={handleSubmit}
          >
          <label htmlFor="conceptUserMappingID">ConceptUserMappingID</label>
          <input
            type="VARCHAR(64)"
            id="conceptUserMappingID"
            name="conceptUserMappingID"
            placeholder=""
            value={conceptUserMappingID || ""}
            onChange={handleInputChange}
            />
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            placeholder=""
            value={date || ""}
            onChange={handleInputChange}
            />
            <input type="submit" value="Save"/>
            <Link to="/Achievers">
              <input  type="button" value="Go Back"/>
            </Link>
          </form>
        </div>
    </div>
  )
}

export default AddBadges;
