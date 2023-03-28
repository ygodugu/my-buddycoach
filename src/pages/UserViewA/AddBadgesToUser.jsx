import React,{useState,useEffect} from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./addBadgesToUser.css";
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

    const [badgeid, setBadgeid] = useState('');

    const {userID} = useParams();

      // const {conceptID} = useParams();

      const {badgeName} = useParams();

      const loadData = async () => {
        // debugger
        // alert(10)
      const resp = await axios.get(`http://192.168.0.118:8080/badgeToUser/${userID}`,
      {
        headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json',
            "Authorization": `${localStorage.getItem('token')}`
            },
      });
    //    alert(20)
      setData(resp.data);
    //    alert(30)
      JSON.stringify(resp.data)
      console.log(resp.data) 
       };
    //    debugger
      useEffect(() => {
        loadData();
      },[]);

      let optionItems = data.map((item) => 
      <option key={item.badgeID}>{item.badgeName}</option> 
      );

      const handler = () => {
        // debugger
        // alert('badgeID',badgeid)
      const requestOptions = {
        method: 'POST',
          headers: {
              'Accept': '*/*',
              'Content-Type': 'application/json',
              "Authorization": `${localStorage.getItem('token')}`
              },
       body: JSON.stringify({ 
            userID : userID,
            badgeID  : badgeid,
        })
        };
          fetch('http://192.168.0.118:8080/badgeToUser', requestOptions)
          .then(response => response.json())
          .then(data => console.log(data.badgeid));
          }
        
        // debugger
      const handleInputChange = (e,badgeList) => {

        const {name,value} = e.target;
        // debugger
        const result = badgeList.filter(word => word.badgeName== value);
      //  let ovg = data.filter(item=>item.conceptName===value)
      if(result.length > 0 ) {
        setBadgeid(result[0].badgeID)
      }
      console.log(result)
    //    alert(badgeid)
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
          <h2 id="simple-modal-title">Badge was Add successfully <AcUnit/> </h2>
          <p id="simple-modal-description"  style={{margin: "15px 0px 0px 0px "}} >
            Click on Add More button to add more badges 
          </p>
          <Link to={`/UserView/${userID}`}>
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
    <div className="AddBadgesToUser">
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
                  value={badgeName}
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
              <button  className="buttonSubmit" type="button" id="addBagdgeButton"
              onClick={(event) => { handler(event); handleOpen();}}
              >
                Add Badges
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
                <Link to={`/UserView/${userID}`}>
                <button 
                id="GobackButtonBadges"
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
