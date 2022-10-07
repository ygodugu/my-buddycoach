import React,{ useState,useEffect } from 'react';
import "./personalDetailes.css";
import { DataGrid } from "@material-ui/data-grid";
import { Link } from "react-router-dom";

export default function PersonalDetailes() {
    const [data, setData] = useState([]);

    const columns = [
        { title: "ID", field: "id", width:90},
        { title: "Username", field: "username", width:150 },
        { title: "Name", field: "name", width:150},
        { title: "Email", field: "email", width:150},
        { title: "Phone", field: "phone", width:150},
        { title: "Web Link", field: 'website', width:150},
      ]

      useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
          .then(resp => resp.json())
          .then(resp => {
            setData(resp)
          })
      }, [])
    
  return (
    <div className="personalDetailes">
      <div className="personalDetailesTitleContainer">
           <h1 className="personalDetailesTitle">Personal Detailes</h1>
              <Link to="/">
                 <button className="personalDetailesAddButton">Add PersonalDetailes</button>
              </Link>
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
