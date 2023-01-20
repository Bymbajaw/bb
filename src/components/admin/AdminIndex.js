import React from "react";
import PieChart from "./PieChart";




export default function BarChart() {
  return (
    <>
      <div className="bg-dark">
        <div className="container">
          <div className="navbar bg-dark flex-nowrap">
            <a href="#" className="col-md-3 navbar-brand text-light">
              Company Name
            </a>
            <input
              type="text"
              className="w-100 form-control bg-dark border-0"
            />
            <div className="nav text-nowrap">
              <a href="/">
                <span className="text-light"> Log Out </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
}
