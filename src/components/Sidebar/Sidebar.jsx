import React from "react";
import "./sidebar.css";
import { LineStyle,
    PermIdentity,LibraryBooks,BarChart,
    MailOutline,AcUnit,Assistant,} from "@material-ui/icons";
import { Link } from "react-router-dom";
 
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
            <h3 className="sidebarTitle"> Dashboard </h3>
            <ul className="sidebarList">
                <Link to={"/"} className="link">
                <li className="sidebarListItem active">
                    <LineStyle className="sidebarIcons"/>
                    Home
                </li>
                </Link>
            </ul>
        </div>
        <div className="sidebarMenu">
            <h3 className="sidebarTitle"> QuickMenu </h3>
            <ul className="sidebarList">
            <Link to={"/User"} className="link">
                    <li className="sidebarListItem">
                        <PermIdentity className="sidebarIcons"/>
                        Users
                    </li>
                </Link>
                <Link to={"/Course"} className="link">
                    <li className="sidebarListItem">
                        <LibraryBooks className="sidebarIcons"/>
                        Course
                    </li>
                </Link>
                <Link to={"/Concept"} className="link"> 
                <li className="sidebarListItem">
                    <BarChart className="sidebarIcons"/>
                    Concept
                </li>
                </Link>
                <Link to={"/Badges"} className="link">
                    <li className="sidebarListItem">
                        <AcUnit className="sidebarIcons"/>
                        Badges
                    </li>
                </Link>
            </ul>
        </div>
        <div className="sidebarMenu">
            <h3 className="sidebarTitle"> User detailes </h3>
            <ul className="sidebarList">
                <Link to={"/Achievers"} className="link">
                    <li className="sidebarListItem">
                        <Assistant className="sidebarIcons"/>
                        Achiever
                    </li>
                </Link>
            </ul>
        </div>
        <div className="sidebarMenu">
            <h3 className="sidebarTitle"> Notifications </h3>
            <ul className="sidebarList">
               <Link to={"/MailSender"} className="link" > 
                    <li className="sidebarListItem">
                        <MailOutline className="sidebarIcons"/>
                        Mail
                    </li>
                </Link>
            </ul>
        </div>
      </div>
    </div>
  );
}
