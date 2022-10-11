import React,{useState,useEffect} from "react";
import { useHistory,useParams,Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "./updateConcept.css";


const initialState = {
    conceptName:"",
    conceptDescription:"",
    conceptLogo:"",
    resourceLink:"",
    quizLink:""
  };

  function UpdateConcept() {

  const[state,setState] = useState(initialState);
   
  const {conceptName,conceptDescription,conceptLogo,resourceLink,quizLink} = state;
 
  const history = useHistory();

  const {conceptID} = useParams();

  useEffect(() => {
    axios.get(`http://192.168.0.118:8080/concept/${conceptID}`)
    .then((resp) => setState({...resp.data[0] }));
  }, [conceptID])

  const handleSubmit = (e) => {
    e.preventDefault();
    if( !conceptName || !conceptDescription || !conceptLogo || !resourceLink || !quizLink ) {
      toast.error("please provied the values into each input feild ")
    }
      else {
        console.log("conceptName : " + conceptName)
        console.log("conceptDescription : " + conceptDescription)
        console.log("conceptLogo : " + conceptLogo)
        console.log("resourceLink : " + resourceLink)
        console.log("quizLink : " + quizLink)
        axios.put(`http://192.168.0.118:8080/concept/${conceptID}`, {     
          conceptName : conceptName,
          conceptDescription : conceptDescription,
          conceptLogo : conceptLogo,
          resourceLink : resourceLink,
          quizLink : quizLink
         })
        .then(() => {
          setState({conceptName: "", conceptDescription: "", conceptLogo: "", resourceLink: "", quizLink: ""  });
        })
        .catch((err) => console.log(err.response.data));
        toast.success(" Concept updated scucessfully ");
      }
       setTimeout(() => history.push("/Concept"), 500)
    };

    const handleInputChange = (e) => {
        const {name,value} = e.target;
        setState({...state,[name]: value });
      };

  return (
    <div className="UpdateConcept">
        <div style={{marignTop:"40px"}}>
          <form style={{
            margin:"auto",
            padding: "15px",
            maxWidth:"400px",
            alignItems:"center"
          }}
          onSubmit={handleSubmit}
          >
          <label htmlFor="conceptName">conceptName</label>
          <input
            type="text"
            id="conceptName"
            name="conceptName"
            placeholder="HTML Tables"
            value={conceptName}
            onChange={handleInputChange}
            />
          <label htmlFor="conceptDescription">conceptDescription</label>
          <input
            type="conceptDescription"
            id="conceptDescription"
            name="conceptDescription"
            placeholder="HTML tables allow web developers to arrange data into rows and columns."
            value={conceptDescription}
            onChange={handleInputChange}
            />
          <label htmlFor="conceptLogo">conceptLogoLink</label>
          <input
            type="conceptLogo"
            id="conceptLogo"
            name="conceptLogo"
            placeholder="LogoLINK(255)"
            value={conceptLogo}
            onChange={handleInputChange}
            />
          <label htmlFor="resourceLink">resourceLink</label>
          <input
            type="resourceLink"
            id="resourceLink"
            name="resourceLink"
            placeholder="resourceLink(255)"
            value={resourceLink}
            onChange={handleInputChange}
            />
          <label htmlFor="quizLink">quizLink</label>
          <input
            type="quizLink"
            id="quizLink"
            name="quizLink"
            placeholder="quizLink(255)"
            value={quizLink}
            onChange={handleInputChange}
            />
            <input type="submit" value={"UpdateConcept"}/>
            <Link to="/Concept">
              <input  type="button" value="Go Back"/>
            </Link>
          </form>
        </div>
    </div>
  )
};

export default UpdateConcept;
