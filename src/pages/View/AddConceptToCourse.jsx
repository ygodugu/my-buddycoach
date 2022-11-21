import React,{useState,useEffect} from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./addConceptToCourse.css";



const AddConcept = () => {

    const [data, setData] = useState([]);

    const [ApiData, setApiData] = useState([]);

    const [conceptid, setConceptid] = useState('');

    const {courseID} = useParams();

      // const {conceptID} = useParams();

      const {conceptName} = useParams();

      const loadData = async () => {
        // debugger
        // alert(10)
      const resp = await axios.get(`http://192.168.0.118:8080/conceptToCourse`);
      //  alert(20)
      setData(resp.data);
      //  alert(30)
      JSON.stringify(resp.data)
      console.log(resp.data) 
       };
      //  debugger
      useEffect(() => {
        loadData();
      },[]);

      let optionItems = data.map((item) => 
      <option key={item.conceptID}>{item.conceptName}</option> 
      );

      const handler = () => {
        // debugger
        // alert('conceptID',conceptid)
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          courseID : courseID,
          conceptID : conceptid
        })
        };
        if (window.confirm('the concept add to course')) {
          fetch('http://192.168.0.118:8080/conceptToCourse', requestOptions)
          .then(response => response.json())
          .then(data => console.log(data.conceptid));
          // Save it!
        } else {
          window.close(`/View/${courseID}`);
          // Do nothing!
        }
          }

      const handleInputChange = (e,conceptList) => {
        e.preventDefault();
        const {name,value} = e.target;
        // debugger
        const result = conceptList.filter(word => word.conceptName== value);
      //  let ovg = data.filter(item=>item.conceptName===value)
      if(result.length > 0 ) {
        setConceptid(result[0].conceptID)
      }
      console.log(result)
      //  alert(conceptid)
        // setState({...state,[name]: value });
      };

  return (
    <div className="AddCourse">
      {/* {JSON.stringify(data)} */}
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
                  list="data1"
                  type="text"
                  id="conceptName"
                  name="conceptName"
                  placeholder="Search..."
                  value={conceptName}
                  onChange={ (e) => handleInputChange(e,data )}
                  />
                <datalist id="data1">
                <select>
                  {optionItems}
                </select>
                </datalist>
          </form>
          <button 
              className="buttonSubmit" 
              value="Save"
              onClick={handler} > 
              ADD Concept </button> 
              <Link to={`/View/${courseID}`}>
              <button 
              className="bttonGoback" 
              type="button" 
              value="Go Back">
              Go Back</button>
            </Link>
        </div>
    </div>
  )
}

export default AddConcept;
