import React from "react";
import "./sidebar.css";
import { LineStyle,Timeline,TrendingUp,
    PermIdentity,Storefront,LibraryBooks,BarChart,
    MailOutline,DynamicFeed,ChatBubbleOutline,
    WorkOutline,Report,Info,Group,AcUnit,AccountCircle,} from "@material-ui/icons";
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
                <li className="sidebarListItem">
                    <Timeline className="sidebarIcons"/>
                    Analytics
                </li>
                <li className="sidebarListItem">
                    <TrendingUp className="sidebarIcons"/>
                    sales
                </li>
            </ul>
        </div>
        <div className="sidebarMenu">
            <h3 className="sidebarTitle"> QuickMenu </h3>
            <ul className="sidebarList">
                <Link to={"/users"} className="link">
                    <li className="sidebarListItem">
                        <PermIdentity className="sidebarIcons"/>
                        Users
                    </li>
                </Link>
                <Link to={"/products"} className="link">
                    <li className="sidebarListItem">
                        <Storefront className="sidebarIcons"/>
                        Products
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
            </ul>

        </div>
        <div className="sidebarMenu">
            <h3 className="sidebarTitle"> User detailes </h3>
            <ul className="sidebarList">
            <Link to={"/User"} className="link">
                <li className="sidebarListItem">
                    <AccountCircle className="sidebarIcons"/>
                    User
                </li>
            </Link>
            <Link to={"/PersonalDetailes"} className="link">
                <li className="sidebarListItem">
                    <Info className="sidebarIcons"/>
                    Personal Detailes
                </li>
            </Link>
                <li className="sidebarListItem">
                    <Group className="sidebarIcons"/>
                    Yesterday's Achivers
                </li>
                <Link to={"/Badges"} className="link">
                    <li className="sidebarListItem">
                        <AcUnit className="sidebarIcons"/>
                        Badges
                    </li>
                </Link>
            </ul>
        </div>
        <div className="sidebarMenu">
            <h3 className="sidebarTitle"> Notifications </h3>
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <MailOutline className="sidebarIcons"/>
                    Mail
                </li>
                <li className="sidebarListItem">
                    <DynamicFeed className="sidebarIcons"/>
                    Feedback
                </li>
                <li className="sidebarListItem">
                    <ChatBubbleOutline className="sidebarIcons"/>
                    Message
                </li>
            </ul>
        </div>
        <div className="sidebarMenu">
            <h3 className="sidebarTitle"> Staff </h3>
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <WorkOutline className="sidebarIcons"/>
                    Manage
                </li>
                <li className="sidebarListItem">
                    <Timeline className="sidebarIcons"/>
                    Analytics
                </li>
                <li className="sidebarListItem">
                    <Report className="sidebarIcons"/>
                    Reports
                </li>
            </ul>
        </div>
      </div>
    </div>
  );
}
