import React, {useState} from 'react';
import './RegistrationAdmin.css';
import Logo from "../../LoginLogo.png";
import { NavLink, useHistory } from "react-router-dom";
import {VisibilityOff,Visibility} from "@material-ui/icons";
import axios from "axios";


const initialState = {
    firstName:"",
    lastName:"",
    emailID:"",
    mobileNumber:"",
    password:"",
  };

function RegistrationAdmin() {

    const[state,setState] = useState(initialState);

    const [icon, setIcon]=useState(VisibilityOff);

    const [type, setType]=useState('password');

    const history = useHistory ();
 
    const {firstName,lastName,emailID,mobileNumber,password} = state;

    
    const handleSubmit = (e) => {
        e.preventDefault();
        if( !firstName || !lastName || !emailID  || !password) {
        window.alert("please provied the values into each input feild")
        } else {
            if (e) {
            console.log("firstName : " + firstName)
            console.log("lastName : " + lastName)
            console.log("emailID : " + emailID)
            console.log("mobileNumber : " + mobileNumber)
            console.log("password : " + password)
        axios.post("http://192.168.0.118:8080/register", {  
            firstName : firstName,
            lastName : lastName,
            emailID : emailID,
            mobileNumber : mobileNumber,
            password : password
        })
        .then(() => {
            setState({firstName: "", lastName: "", emailID: "", mobileNumber: "", password: "" });
        })
        .catch((err) => (err.response.data));
        window.alert("Your Registration is completed please Login")
        }
        history.push('/LoginPage') 
      }
    }

    const handleInputChange = (e) => {
        const {name,value} = e.target;
        setState({...state,[name]: value });
      };

      const handleToggle=()=>{    
        if(type==='password'){
          setIcon(Visibility);      
          setType('text');
        }
        else{
          setIcon(VisibilityOff);     
          setType('password');
        }
      }



    return(
            <div style={{
                width : "100%",
                height: "100%",
                backgroundImage : `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY76uBf1kj58V6SIMHOoHd6ApFpgydIbyvhA5gkOfqSFqsP_URdvRFwi7knk_vcSqXu_k&usqp=CAU')`,
                backgroundPosition : "center",
                backgroundSize : "cover"
                }}>
                <img src={Logo} alt={Logo} className="logoImg"/>
                <form style={{
                    margin: "auto",
                    padding: "15px",
                    maxWidth:"400px",
                    alignItems:"center",
                }}>
                <h3 className="code">Registration</h3>
                <label className="label">FirstName</label>
                    <div className="control">
                        <input
                            className="firstName"
                            type="Text" 
                            name="firstName"
                            value={firstName} 
                            id="firstName" 
                            placeholder="First Name"
                            onChange = {(e) => handleInputChange(e)}
                        />
                    </div>
                <div className="field">
                        <label className="label">LastName</label>
                    <div className="control">
                        <input
                            className="lastName"
                            type="Text"
                            name="lastName"
                            id="lastName" 
                            value={lastName}  
                            placeholder="LastName"
                            onChange = {(e) => handleInputChange(e)} 
                        />
                    </div>
                </div>
                <div className="field">
                        <label className="label">Email</label>
                    <div className="control">
                        <input
                            className="emailID"
                            type="email"
                            name="emailID"
                            id="emailID" 
                            value={emailID}
                            placeholder="Email"
                            onChange = {(e) => handleInputChange(e)} 
                        />
                    </div>
                </div>
                <div className="field">
                        <label className="label">MobileNumber</label>
                    <div className="control">
                        <input
                            className="mobileNumber"
                            type="tel"
                            name="mobileNumber"
                            id="mobileNumber"
                            value={mobileNumber} 
                            placeholder="MobileNumber"
                            onChange = {(e) => handleInputChange(e)} 
                        />
                    </div>
                </div>
            
                <div className="field">
                    <label className="label">Password</label>
                        <div className="control">
                            <div className='wrapper'>
                                <div className='input-field1'>
                                    <input 
                                    className="password"
                                    type={type}
                                    name="password"
                                    id="password" 
                                    value={password} 
                                    placeholder="Password"
                                    onChange = {(e) => handleInputChange(e)}
                                    />
                                    <span onClick={handleToggle} className="span1"><VisibilityOff icon={icon} size={25}/></span>       
                                </div>
                            </div>
                        </div>
                </div>
                <button
                    type="submit"
                    className="button1"
                    onClick={handleSubmit} >
                    Register
                </button>
                <div className="LogTo">
                  <label> Already Have An Account?</label> <NavLink to="/LoginPage">Log in Here</NavLink>
               </div>
                </form>
            </div>
    )       
}

export default RegistrationAdmin;