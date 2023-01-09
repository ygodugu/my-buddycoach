import React, {useState} from 'react';
import './loginPage.css';
import Logo from "../../LoginLogo.png";
import { Link,NavLink,useHistory } from "react-router-dom";
import {VisibilityOff,Visibility} from "@material-ui/icons";
import axios from 'axios';


export default function Login() {

    const [icon, setIcon]=useState(VisibilityOff);

    const [type, setType]=useState('password');

    const history = useHistory ();
  
    const [emailID, setEmailID] = useState();

    const [password, setPassword] = useState();    
    // const [token, setToken ] = useState();

  
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!emailID  || !password) {
            window.alert("Please Fill The Mandatory Feilds ")
            } else {
        axios.post("http://192.168.0.118:8080/login", {
                emailID: emailID,
                password: password,
            })
            .then((res) => {
                localStorage.setItem("token", res.data.token,);
                history.push(`/Home`);
            })
            .catch((err) => console.error(err));
    };
}

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
        <div>
            <div style={{
                width : "100%",
                height: "100%",
                backgroundImage : `url('https://media.istockphoto.com/id/1009726070/photo/abstract-gray-gradient-color-background.jpg?b=1&s=170667a&w=0&k=20&c=rNCY2mtwXqpnQwrribGTt65n75gMNwJD0RzpQjMTsdw=')`,
                backgroundPosition : "center",
                backgroundSize : "cover"
                }}>
                <img src={Logo} alt={Logo} className="logoImg2"/>
                <form style={{
                    margin : "auto",
                    padding: "15px",
                    maxWidth:"400px",
                    alignItems:"center",
                }}>
                <h3 className="code1">ADMIN LOGIN</h3>
                <div className="field">
                        <label className="label">Email</label>
                    <div className="control">
                        <input
                            type="email"
                            className='emailID'
                            name="emailID"
                            id="emailID" 
                            value={emailID || ''}
                            placeholder="Email"
                            required
                            onChange = {e => setEmailID(e.target.value)} 
                        />
                    </div>
                </div>  
                <div className="field">
                    <label className="label">Password</label>
                        <div className="control">
                            <div className='wrapper'>
                                <div className='input-field'>
                                    <input 
                                    className="password"
                                    type={type}
                                    name="password"
                                    id="password" 
                                    value={password} 
                                    placeholder="Password"
                                    onChange = {e => setPassword(e.target.value)}
                                    />
                                    <span onClick={handleToggle} className="span1"><VisibilityOff icon={icon} size={25}/></span>       
                                </div>
                            </div>
                        </div>
                </div>
                <button
                    type="submit"
                    className="button2"
                    onClick={handleSubmit}>
                    LOGIN
                </button>
                <div className="LogTo">
                  <label> Dont have Account please register</label> <NavLink to="/">Register</NavLink>
               </div>
                </form>
            </div>
        </div>
    )       
}
