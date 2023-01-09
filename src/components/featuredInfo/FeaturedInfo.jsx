import React,{useState, useEffect}  from 'react'
import "./featuredInfo.css"
import {PeopleOutlined,PersonOutlined,GroupOutlined,} from "@material-ui/icons";
import axios from "axios";
import { Link,useHistory } from "react-router-dom";

export default function FeaturedInfo() {

  const [data, setData] = useState([]);

  const history = useHistory ();

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

   const logout = async () => {
    try {
      const response = await axios("http://192.168.0.118:8080/logout", 
        {
          method: "Put",
          headers: {
              'Accept': '*/*',
              'Content-Type': 'application/json',
              "Authorization": `${localStorage.getItem('token')}`
              },
      })
      // remove token from local storage and redirect to login page 
      localStorage.clear();
      history.push("/")
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <>
    <div>
     <button className="LogOutButton"  onClick={logout}>Logout</button>
    </div>
    <div className="featured">
      {/* users detailes and count of users list  */}
      <div className='box'>
      <Link to={"/User"} className="Link">
        <div className="featuredItem">
          <div className='Name'>
            <div className='border'>
              <PersonOutlined className='featuredIcon'/>
            </div>
          </div>
          <div className="featuredItemContainer">
            <span className="featuredTitle">
                Aspirants
            </span>
              <div className="featuredMoneyContainer">
                <span className="featuredMoney">
                  {data.length} 
                </span>
              </div>
          </div>
                <hr className='line'/>
              <span className="featuredsub">
                + x% than last week
              </span>
          </div>
          </Link>
        </div>
        
        {/* users detailes and count of users list  */}
        <div className='box'>
          <Link to={"/Home"} className="Link">
            <div className="featuredItem">
              <div className='Name'>
                 <div className='border'>
                    <PeopleOutlined className='featuredIcon'/>
                 </div>
               </div>
              <div className="featuredItemContainer">
                <span className="featuredTitle">
                  Coordinator
                </span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">
                      $2
                    </span>
                </div>
              </div>
              <hr className='line'/>
              <span className="featuredsub">
              + x% than last week
              </span>
            </div>
          </Link>
        </div>

          {/* users detailes and count of users list  */}
            <div className='box'>
              <Link to={"/Home"} className="Link">
                <div className="featuredItem">
                  <div className='Name'>
                    <div className='border'>
                      <GroupOutlined className='featuredIcon'/>
                    </div>
                 </div>
                  <div className="featuredItemContainer">
                    <span className="featuredTitle">
                      Supervisor
                    </span>
                    <div className="featuredMoneyContainer">
                        <span className="featuredMoney">
                          $4
                        </span>
                    </div>
                  </div>
                  <hr className='line'/>
                  <span className="featuredsub">
                  + x% than last week
                  </span>
                </div>
              </Link>
            </div>
    </div>
    </>
  );
}
