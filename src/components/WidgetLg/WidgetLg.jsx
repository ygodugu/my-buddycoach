import React from "react"
import "./widgetLg.css"
import pic from "./ImgLg/Revanth.jpeg"

export default function WidgetLg() {

  const Button = ({type}) => {
    return <button className={"widgetLgButton " + type}>{type}</button>
  }
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions </h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetUser">
            <img src={pic} alt="pic" className="widgetLgImg" />
            <span className="widgetLgName">Yashwanth</span>
          </td>
          <td className="widgetLgDate">09/09/2022</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus"><Button type="Approved"/></td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetUser">
            <img src={pic} alt="pic" className="widgetLgImg" />
            <span className="widgetLgName">Yashwanth</span>
          </td>
          <td className="widgetLgDate">09/09/2022</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus"><Button type="Declined"/></td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetUser">
            <img src={pic} alt="pic" className="widgetLgImg" />
            <span className="widgetLgName">Yashwanth</span>
          </td>
          <td className="widgetLgDate">09/09/2022</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus"><Button type="Pending"/></td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetUser">
            <img src={pic} alt="pic" className="widgetLgImg" />
            <span className="widgetLgName">Yashwanth</span>
          </td>
          <td className="widgetLgDate">09/09/2022</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus"><Button type="Approved"/></td>
        </tr>
      </table>
    </div>
  );
}
