import React,{useState,useEffect} from "react";
import { useHistory,useParams,Link } from "react-router-dom";
import axios from "axios";
import "./updateBadges.css";


const initialState = {
    badgeName :"",
    badgeDescription :"",
    badgeRules :"",
    badgeCount :""
  };

  function UpdateBadges() {
  const[state,setState] = useState(initialState);
   
  const {badgeName,badgeDescription,badgeRules,badgeCount} = state;
 
  const history = useHistory();

  const {badgeID} = useParams();

  useEffect(() => {
    axios.get(`http://192.168.0.118:8080/concept/${badgeID}`)
    .then((resp) => setState({...resp.data[0] }));
  }, [badgeID ])

  const handleSubmit = (e) => {
    e.preventDefault();
    if( !badgeName || !badgeDescription || !badgeRules || !badgeCount ) {
      window.alert("concept delete scuccesfully");
    }
      else {
        console.log("badgeName : " + badgeName)
        console.log("badgeDescription : " + badgeDescription)
        console.log("badgeRules : " + badgeRules)
        console.log("badgeCount : " + badgeCount)
        axios.put(`http://192.168.0.118:8080/concept/${badgeID }`, {     
            badgeName : badgeName,
            badgeDescription : badgeDescription,
            badgeRules : badgeRules,
            badgeCount : badgeCount
         })
        .then(() => {
          setState({badgeName: "", badgeDescription: "", badgeRules: "", badgeCount: ""});
        })
        .catch((err) => console.log(err.response.data));
        window.alert(" Concept updated scucessfully")
      }
       setTimeout(() => history.push("/Concept"), 500)
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
          <label htmlFor="BadgeName">BadgeName</label>
          <input
            type="VARCHAR(64)"
            id="badgeName "
            name="badgeName "
            value={badgeName }
            onChange={handleInputChange}
            />
          <label htmlFor="BadgeDescription">BadgeDescription</label>
          <input
            type="TEXT"
            id="badgeDescription "
            name="badgeDescription "
            value={badgeDescription }
            onChange={handleInputChange}
            />
          <label htmlFor="BadgeRules">BadgeRules</label>
          <input
            type="TEXT"
            id="badgeRules "
            name="badgeRules "
            value={badgeRules }
            onChange={handleInputChange}
            />
          <label htmlFor="BadgeCount">BadgeCount</label>
          <input
            type="INT(11)"
            id="badgeCount "
            name="badgeCount "
            value={badgeCount }
            onChange={handleInputChange}
            />
            <input type="submit" value={"UpdateBadges"}/>
            <Link to="/Badges">
              <input  type="button" value="Go Back"/>
            </Link>
          </form>
        </div>
    </div>
  )
};

export default UpdateBadges;
