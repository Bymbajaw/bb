import React from "react";

export default function BarChart() {
  return (
    <div className="bg-dark">
      <div className="container">
        <div className="navbar bg-dark flex-nowrap">
          <a href="#" className="col-md-3 navbar-brand text-light">
            Company Name
          </a>
          <input type="text" className="w-100 form-control bg-dark border-0" />
          <div className="nav text-nowrap">
            <a href="/">
              <span className="text-light"> Log Out </span>
            </a>
          </div>
        </div>
      </div>
      <main>
        {/* <div className="section-1">
          <div className="container">
            <Main />
          </div>
        </div>
        <div className="section-2">
          <TrendingCard trendingItems={trendingItems} />
        </div>
        <hr className="hr" />
        <div className="section-3">
          <div className="news">
            <NewsCard news={news} />
          </div>
        </div> */}
      </main>
    </div>
  );
}
