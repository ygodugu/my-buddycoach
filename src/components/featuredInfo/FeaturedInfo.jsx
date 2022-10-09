import React from "react";
import "./featuredInfo.css"
import {ArrowDownward, ArrowUpward} from "@material-ui/icons"

export default function featuredInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Aspirants</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">$2215</span>
            <span className="featuredMoneyRate">-11.4 <ArrowDownward className="featuredIcons negative"/></span>
        </div>
        <span className="featuredsub">Compared to last month </span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">coordinator</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">$2.344</span>
            <span className="featuredMoneyRate">-1.4 <ArrowDownward className="featuredIcons negative"/></span>
        </div>
        <span className="featuredsub">Compared to last month </span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">supervisor</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">$4.77</span>
            <span className="featuredMoneyRate">+11.4 <ArrowUpward className="featuredIcons"/></span>
        </div>
        <span className="featuredsub">Compared to last month </span>
      </div>
    </div>
  );
}
