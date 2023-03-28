import React,{useState, useEffect}  from 'react'
import "./user.css"
import { Link} from "react-router-dom";
import {toast} from "react-toastify";
import {DeleteForever,Visibility,BorderColor} from "@material-ui/icons"
import axios from "axios";

const User = () => {
    
const [data, setData] = useState([]);

const loadData = async () => {
    const response = await axios.get("http://192.168.0.118:8080/users",
    {
      headers: {
          'Accept': '*/*',
          'Content-Type': 'application/json',
          "Authorization": `${localStorage.getItem('token')}`
          },
    });
    setData(response.data);
  };
   useEffect(() => {
    loadData();
   },[]);

   console.log(data)

   const deleteCourse = (userID) => {
    //  if(window.alert(" Are you sure that delete the course ?"));
    if (window.confirm('Are you sure you want to delete User ?')) {
      fetch(`http://192.168.0.118:8080/user/${userID}`,
      {
        method : "delete",
        headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json',
            "Authorization": `${localStorage.getItem('token')}`
            },
      });
      toast.success("user delete scuccesfully");
      // Save it!
      console.log('Nothing was deleted .');
    } else {
      // Do nothing!
      console.log('Thing was not saved to the database.');
    }
     setTimeout(() => 500);
   }

  return (
    <div className="UserList">
      <div style={{marginTop: "40px"}}>
        <div className="UserTitleContainer">
          <Link to={`/Home`} className="link">
              <h1 className="UserTitle">UserList</h1>
           </Link>
              <Link to="/AddUser">
                 <button className="UserAddButton">Add User</button>
              </Link>
         </div>

          <table className="styled-table">
            <thead>
              <tr>
                  <th style={{textAlign:"center"}}>UserID</th>
                  <th style={{textAlign:"center"}}>FirstName</th>
                  <th style={{textAlign:"center"}}>MiddleName</th>
                  <th style={{textAlign:"center"}}>LastName</th>
                  <th style={{textAlign:"center"}}>EmailID</th>
                  <th style={{textAlign:"center"}}>MobileNumber</th>
                  <th style={{textAlign:"center"}}>DATE OF BIRTH </th>
                  <th style={{textAlign:"center"}}>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item,index) =>{
                return(
                  <tr key={item.userID}>
                      <th scope='row'>{item.userID}</th>
                      <td>{item.firstName}</td>
                      <td>{item.middleName}</td>
                      <td>{item.lastName}</td>
                      <td>{item.emailID}</td>
                      <td>{item.mobileNumber}</td>
                      <td>{item.dateOfBirth}</td>
                      <td>
                        <Link to={`/UpdateUser/${item.userID}`}>
                          <button className="btn btn-edit"><BorderColor className="Icons" /></button>
                        </Link>
                        <button className="btn btn-delete" onClick={() => deleteCourse(item.userID) }><DeleteForever className="Icons" /></button>
                        <Link to={`/UserView/${item.userID}`}>
                          <button className="btn btn-view"><Visibility className="Icons"/></button>
                        </Link>
                      </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
  )
};
export default User;
