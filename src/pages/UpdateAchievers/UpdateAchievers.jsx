import React,{useState,useEffect} from "react";
import { useHistory,useParams,Link } from "react-router-dom";
import axios from "axios";
import "./updateAchievers.css";


const initialState = {
    conceptUserMappingID :"",
    date :"",
  };

  function UpdateBadges() {
  const[state,setState] = useState(initialState);
   
  const {conceptUserMappingID,date} = state;
 
  const history = useHistory();

  const {achieverID} = useParams();

  useEffect(() => {
    axios.get(``)
    .then((resp) => setState({...resp.data[0] }));
  }, [achieverID ])

  const handleSubmit = (e) => {
    e.preventDefault();
    if( !conceptUserMappingID || !date ) {
      window.alert("");
    }
      else {
        console.log("conceptUserMappingID : " + conceptUserMappingID)
        console.log("date : " + date)
        axios.put(``, {     
            conceptUserMappingID : conceptUserMappingID,
            date : date,
         })
        .then(() => {
          setState({conceptUserMappingID: "", date: ""});
        })
        .catch((err) => console.log(err.response.data));
        window.alert("")
      }
       setTimeout(() => history.push("/Achievers"), 500)
    };

    const handleInputChange = (e) => {
        const {name,value} = e.target;
        setState({...state,[name]: value });
      };

  return (
    <div className="UpdateBadges">
        <div style={{marignTop:"40px"}}>
          <form style={{
            margin:"auto",
            padding: "15px",
            maxWidth:"400px",
            alignItems:"center"
          }}
          onSubmit={handleSubmit}
          >
          <label htmlFor="conceptUserMappingID">conceptUserMappingID</label>
          <input
            type="VARCHAR(64)"
            id="conceptUserMappingID"
            name="conceptUserMappingID"
            value={conceptUserMappingID }
            onChange={handleInputChange}
            />
          <label htmlFor="date">date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={date}
            onChange={handleInputChange}
            />
            <input type="submit" value={"UpdateAchievers"}/>
            <Link to="/Achievers">
              <input  type="button" value="Go Back"/>
            </Link>
          </form>
        </div>
    </div>
  )
};

export default UpdateBadges;
