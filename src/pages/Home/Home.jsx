import React from "react";
import "./home.css";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
// import Chart from "../../components/Chart/Chart";
// import {userData} from "../../dummyData"
// import WidgetSm from "../../components/WidgetSm/WidgetSm";
// import WidgetLg from "../../components/WidgetLg/WidgetLg";
import CoursesInfo from "../../components/coursesInfo/CoursesInfo";
import ListInfo from "../../components/listInfo/ListInfo";
import SideBox from "./SideBox";




export default function Home() {
  return (
    <>
    <SideBox/> 
      <div className="home">
        <FeaturedInfo />
        <CoursesInfo/>
        <ListInfo/>
      </div>
      </>
  );
}



// export default function Home() {
//   return (
//     <div className="home">
//       <FeaturedInfo />
//       <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
//       <div className="homeWidgets">
//         <WidgetSm/>
//         <WidgetLg/>
//       </div>
//     </div>
//   );
// }

