import React from 'react'
import "./listInfo.css"
import {SchoolOutlined,EmailOutlined,AddCommentOutlined} from "@material-ui/icons";
import axios from "axios";
import { Link } from "react-router-dom";

export default function CoursesInfo() {

  return (
    <>
    <div className="listInfo">
      {/* users detailes and count of users list  */}
      <div className='box2'>
      <Link to={"/Home"} className="Link">
        <div className="listInfoItem">
          <div className='NameList'>
              <div className='borderList'>
                <SchoolOutlined className='listInfoIcon'/>
              </div>
          </div>
          <div className="listItemContainer">
            <span className="listInfoTitle">
                Achievers
            </span>
              <div className="listInfoMoneyContainer">
                <span className="listInfoMoney">
                  $3
                </span>
              </div>
          </div>
                <hr className='line'/>
              <span className="listInfosub">
                + x% than last week
              </span>
          </div>
          </Link>
        </div>
        
        {/* users detailes and count of users list  */}
        <div className='box2'>
          <Link to={"/MailSender"} className="Link">
            <div className="listInfoItem">
              <div className='NameList'>
                <div className='borderList'>
                  <EmailOutlined className='listInfoIcon'/>
                </div>
              </div>
              <div className="listItemContainer">
                <span className="listInfoTitle">
                  Mails send
                </span>
                <div className="listInfoMoneyContainer">
                    <span className="listInfoMoney">
                      $2
                    </span>
                </div>
              </div>
              <hr className='line'/>
              <span className="listInfosub">
              + x% than last week
              </span>
            </div>
          </Link>
        </div>

        {/* users detailes and count of users list  */}
            <div className='box2'>
              <Link to={"/Home"} className="Link">
                <div className="listInfoItem">
                  <div className='NameList'>
                    <div className='borderList'>
                      <AddCommentOutlined className='listInfoIcon'/>
                    </div>
                  </div>
                  <div className="listItemContainer">
                    <span className="listInfoTitle">
                        Feedback
                    </span>
                    <div className="listInfoMoneyContainer">
                        <span className="listInfoMoney">
                          $4
                        </span>
                    </div>
                  </div>
                  <hr className='line'/>
                  <span className="listInfosub">
                  + x% than last week
                  </span>
                </div>
              </Link>
            </div>
    </div>
    </>
  );
}
