import React,{useState,useEffect} from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./addConceptToCourse.css";

const initialState = {
  conceptName:"",
  };

const AddConcept = () => {

  const[state,setState] = useState(initialState);

  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [dropdown, setDropdown] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      alert(1)
    const res = await axios.get(`http://192.168.0.118:8080/conceptToCourse?conceptName=${conceptName}`);
    debugger
      setData(res.data);
      setDropdown(res.data);
      
      console.log(dropdown)
      console.log(res.data);
    };
  }, []);

      let optionItems = data.map((item) =>
          <option key={item.conceptID}>{item.conceptName}</option>
      );

  const {conceptName} = state;
 
  const {conceptID} = useParams();
 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data)
    if(!conceptName) {
      window.alert("please provied the values into each input feild")
    } else {
      if(!conceptID) {
        console.log("conceptID : " + conceptID)
        axios.patch(`http://192.168.0.118:8080/conceptToCourse/${conceptID}`, {  
          conceptID : conceptID,
       })
      .then(() => {
        setState({conceptID: '' });
      })
      .catch((err) =>(err.response.data));
      window.alert("Concept Added scucessfully")
      } 
    }
  };
  function sample () {
    console.log(data)
  }
 
  const handleInputChange = (e) => {
    sample()
    debugger
    const {name,value} = e.target;
    const result = dropdown.filter(word => word.conceptName== value);
  //  let ovg = data.filter(item=>item.conceptName===value)
   console.log(result)
    setState({...state,[name]: value });
  };
 
  return (
    <div className="AddCourse">
        <div style={{marignTop:"40px"}}>
          <form style={{
            margin:"auto",
            padding: "15px",
            maxWidth:"400px",
            alignItems:"center"
          }}
          >
          <label htmlFor="conceptName">Search</label>
                <input
                  list="browsers"
                  type="text"
                  id="conceptName"
                  name="conceptName"
                  placeholder="Search..."
                  value={conceptID}
                  onChange={handleInputChange}
                  />
                <datalist id="browsers">
                <select>
                  {optionItems}
                </select>
                </datalist>
            <input type="submit" value="Save"
               onClick={handleSubmit}
            />
            <Link to="/course">
              <input  type="button" value="Go Back"/>
            </Link>
          </form>
        </div>
    </div>
  )
}

export default AddConcept;
