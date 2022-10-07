import React from "react";
import "./product.css";
import { Link } from "react-router-dom";
import Chart from "../../components/Chart/Chart";
import { productData } from  "../../dummyData";
import LapTop from "./ImgProduct/LapTop.jpg";
import pen from "./ImgProduct/Pen.jpg";
import {Publish} from "@material-ui/icons"

export default function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
            <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
            <Chart data={productData} dataKey="Sales" title="slaes performance" />
        </div>
        <div className="productTopRight">
            <div className="productInfoTop">
                <img src={LapTop} alt="" className="productInfoImg" />
                <span className="productName">Apple LapTop</span>
            </div>
            <div className="productInfoBottom">
                <div className="productInfoItem">
                    <span className="productInfoKey">id:</span>
                    <span className="productInfoValue">123</span>
                </div>
                <div className="productInfoItem">
                    <span className="productInfoKey">sales:</span>
                    <span className="productInfoValue">53241</span>
                </div>
                <div className="productInfoItem">
                    <span className="productInfoKey">active:</span>
                    <span className="productInfoValue">yes</span>
                </div>
                <div className="productInfoItem">
                    <span className="productInfoKey">in stock:</span>
                    <span className="productInfoValue">no</span>
                </div>
            </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
            <div className="productFormLeft">
                <label>Product Name</label>
                <input type="text" placeholder="Apple Airpods"/>
                <label>In stock</label>
                <select name="inStock" id="inStock">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
                <label>Active</label>
                <select name="active" id="active">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            <div className="productFormRight">
                <div className="productUpload">
                    <img src={pen} alt="" className="productUploadImg" />
                    <label>
                        <Publish/>
                    </label>
                    <input type="file" id="file" style={{display:"none"}} />
                </div>
                <button className="productButton">Update</button>
            </div>
        </form>
      </div>
    </div>
  );
}
