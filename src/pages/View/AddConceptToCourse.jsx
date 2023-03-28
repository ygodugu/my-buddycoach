import React,{useState,useEffect} from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./addConceptToCourse.css";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button } from "@material-ui/core";
import { AcUnit } from "@material-ui/icons";


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

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
      const resp = await axios.get(`http://192.168.0.118:8080/conceptToCourse`,
      {
        headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json',
            "Authorization": `${localStorage.getItem('token')}`
            },
    });
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

      const handler = (e) => {
        e.preventDefault();
        // debugger
        // alert('conceptID',conceptid)
      const requestOptions = {
        method: 'POST',
          headers: {
              'Accept': '*/*',
              'Content-Type': 'application/json',
               "Authorization": `${localStorage.getItem('token')}`
            },
        body: JSON.stringify({ 
          courseID : courseID,
          conceptID : conceptid
        })
        };
          fetch('http://192.168.0.118:8080/conceptToCourse', requestOptions)
          .then(response => response.json())
          .then(data => console.log(data.conceptid));
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

      const classes = useStyles();
      // getModalStyle is not a pure function, we roll the style only on the first render
      const [modalStyle] = React.useState(getModalStyle);
      const [open, setOpen] = React.useState(false);
    
      const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    
      const body = (
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">Course Add successfully <AcUnit/> </h2>
          <p id="simple-modal-description"  style={{margin: "15px 0px 0px 0px "}} >
            Click on Add More button to add more concepts 
          </p>
          <Link to={`/View/${courseID}`}>
             <Button variant="contained" color="primary" 
             style={{margin: "40px 60px 0px 0px ",textDecoration:"none"}}>Done</Button>
          </Link>
            <Button variant="contained" color="secondary"
             style={{margin: "40px 10px 0px 0px"}}
             onClick={() => {setOpen(false)}}>
              AddMore</Button>
        </div>
      );

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
            <div style={{
              margin:"auto",
              padding: "15px",
              maxWidth:"400px",
              alignItems:"center"
            }}>
                <div>
                  <button  className="buttonSubmit"
                  id="addconceptToCourseButton"
                   type="submit"
                  onClick={(event) => { handler(event); handleOpen();}}
                  >
                    Add Concepts
                  </button>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                  >
                    {body}
                  </Modal>
                </div>
                {/* <button 
                    className="buttonSubmit" 
                    value="Save"
                    onClick={handler} > 
                    ADD Concept 
                </button>  */}
                    <Link to={`/View/${courseID}`}>
                    <button 
                    id="gobackButtonConceptsToCourse"
                    className="bttonGoback" 
                    type="button" 
                    value="Go Back">
                    Go Back</button>
                  </Link>
              </div>
          </div>
      </div>
  )
}

export default AddConcept;
