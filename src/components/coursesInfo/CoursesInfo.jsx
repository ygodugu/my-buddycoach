import React,{useState, useEffect}  from 'react'
import "./coursesIfno.css"
import {MoreOutlined,LibraryBooksOutlined,BarChart} from "@material-ui/icons";
import axios from "axios";
import { Link } from "react-router-dom";


export default function CoursesInfo() {

  const [courses, setCourses] = useState([]);

  const loadData = async () => {
    const response = await axios.get("http://192.168.0.118:8080/courses",
    {
      headers: {
          'Accept': '*/*',
          'Content-Type': 'application/json',
          "Authorization": `${localStorage.getItem('token')}`
          },
    });
    setCourses(response.data);
  };
   useEffect(() => {
    loadData();
   },[]);

   const [concepts, setConcepts] = useState([]);

   const ConceptsData = async () => {
    const response = await axios.get("http://192.168.0.118:8080/concepts",
    {
      headers: {
          'Accept': '*/*',
          'Content-Type': 'application/json',
          "Authorization": `${localStorage.getItem('token')}`
          },
    });
    setConcepts(response.data);
  };
   useEffect(() => {
    ConceptsData();
   },[]);

   const [badges, setBadges] = useState([]);

   const BadgesData = async () => {
    const response = await axios.get("http://192.168.0.118:8080/badges",
    {
      headers: {
          'Accept': '*/*',
          'Content-Type': 'application/json',
          "Authorization": `${localStorage.getItem('token')}`
          },
    });
    setBadges(response.data);
  };
   useEffect(() => {
    BadgesData();
   },[]);

  return (
    <>
    <div className="coursesInfo">
      {/* users detailes and count of users list  */}
      <div className='box1'>
      <Link to={"/Course"} className="Link">
        <div className="coursesInfoItem">
          <div className='NameCourse'>
              <div className='borderCourse'>
                <LibraryBooksOutlined className='courseInfoIcon'/>
              </div>
          </div>
          <div className="coursesInfoItemContainer">
            <span className="coursesInfoTitle">
              Courses
            </span>
              <div className="coursesInfoMoneyContainer">
                <span className="coursesInfoMoney">
                  {courses.length} 
                </span>
              </div>
          </div>
                <hr className='line'/>
              <span className="coursesInfosub">
                + x% than last week
              </span>
          </div>
          </Link>
        </div>
        
        {/* users detailes and count of users list  */}
        <div className='box1'>
          <Link to={"/Concept"} className="Link">
            <div className="coursesInfoItem">
              <div className='NameCourse'>
                <div className='borderCourse'>
                  <BarChart className='courseInfoIcon'/>
                </div>
              </div>
              <div className="coursesInfoItemContainer">
                <span className="coursesInfoTitle">
                 Concepts
                </span>
                <div className="coursesInfoMoneyContainer">
                    <span className="coursesInfoMoney">
                      {concepts.length}
                    </span>
                </div>
              </div>
              <hr className='line'/>
              <span className="coursesInfosub">
              + x% than last week
              </span>
            </div>
          </Link>
        </div>
            {/* users detailes and count of users list  */}
            <div className='box1'>
              <Link to={"/Badges"} className="Link">
                <div className="coursesInfoItem">
                  <div className='NameCourse'>
                    <div className='borderCourse'>
                        <MoreOutlined className='courseInfoIcon'/>
                    </div>
                  </div>
                  <div className="coursesInfoItemContainer">
                    <span className="coursesInfoTitle">
                       Badges 
                    </span>
                    <div className="coursesInfoMoneyContainer">
                        <span className="coursesInfoMoney">
                          {badges.length}
                        </span>
                    </div>
                  </div>
                  <hr className='line'/>
                  <span className="coursesInfosub">
                  + x% than last week
                  </span>
                </div>
              </Link>
            </div>
    </div>
    </>
  );
}
