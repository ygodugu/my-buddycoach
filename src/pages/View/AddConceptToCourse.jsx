import React,{useState,useEffect} from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./addConceptToCourse.css";

const initialState = {
  conceptName:"",
  };

const AddConcept = () => {

  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
      setData(res.data);
      console.log(res.data);
    };
    if (query.length === 0 || query.length > 2) fetchData();
  }, [query]);

      let optionItems = data.map((item) =>
          <option key={item.conceptName}>{item.conceptName}</option>
      );


  const[state,setState] = useState(initialState);

  const {conceptName} = state;
 
  const {conceptID} = useParams();
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if(conceptName) {
      window.alert("please provied the values into each input feild")
    } else {
      if(!conceptID) {
        console.log("conceptName : " + conceptName)
        axios.post("http://192.168.0.118:8080/", {  
        conceptName : conceptName,
       })
      .then(() => {
        setState({conceptName: '' });
      })
      .catch((err) =>(err.response.data));
      window.alert("Concept Added scucessfully")
      } 
    }
  };
 
  const handleInputChange = (e) => {
    const {name,value} = e.target;
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
          onSubmit={handleSubmit}
          >
          <label htmlFor="conceptName">Search</label>
                <input
                  list="browsers"
                  type="text"
                  id="conceptName"
                  name="conceptName"
                  placeholder="Search..."
                  value={conceptName}
                  onChange={(e) => setQuery(e.target.value.toLowerCase(),handleInputChange) }
                  />
                <datalist id="browsers">
                <select>
                  {optionItems}
                </select>
                </datalist>
            <input type="submit" value="Save"/>
            <Link to="/course">
              <input  type="button" value="Go Back"/>
            </Link>
          </form>
        </div>
    </div>
  )
}

export default AddConcept;
