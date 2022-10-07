import React from 'react'
import "./topbar.css"
import pic from './Images/pic.JPG'
import { NotificationsNone,Language,Settings } from '@material-ui/icons';

export default function Topbar() {
  return (
    <div className="topbar">
        <div className="topbarWarpper">
            <div className="topleft">
                <span className="logo">BuddyCoach</span>
            </div>
                <div className="topRight">
                    <div className="topbarIconsContainer">
                        <NotificationsNone/>
                        <span className="topIconsBadge">2</span>
                    </div>
                    <div className="topbarIconsContainer">
                        <Language/>
                        <span className="topIconsBadge">2</span>
                    </div>
                    <div className="topbarIconsContainer">
                        <Settings/>
                    </div>
                    <img src={pic} alt="pic" className="topAvatar" />
                </div>
           
        </div>
    </div>
  );
}
