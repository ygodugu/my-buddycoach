import React from "react";
import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import "../addUser/AddUser";

export default function UserList() {
  const [data, setData] = useState([]);

  const columns = [
    { title: "ID", field: "id", width:90},
    { title: "Username", field: "username", width:150 },
    { title: "Name", field: "name", width:150},
    { title: "Email", field: "email", width:150},
    { title: "Phone", field: "phone", width:150},
    { title: "Web Link", field: 'website', width:150},
    { title: "Actions", field: 'Actions', width:150},

  ]
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(resp => resp.json())
      .then(resp => {
        setData(resp)
      })
  }, [])

    
  return (
    <div className="userList">
      <div className="AddUser">
      <div className="AdduserTitleContainer">
        <h1 className="AdduserTitle">UserList</h1>
        <Link to="/AddUser">
          <button className="userAddButton">Add User</button>
        </Link>
      </div>
    </div>
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}