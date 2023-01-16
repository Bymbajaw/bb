import React from "react";
import Category from "./Category";
import { useState } from "react";

export default function NewsCard({ news }) {
  const NewObj = {
    filt: false,
    category: "",
  };
  const [filt, setFilt] = useState(NewObj);

  if (filt.filt) {
    console.log(filt);
    let newDate = news.filter((data) => data.category === filt.category);
    return (
      <div className="container row">
        <div className="col-lg-8 col-md-12 col-sm-12 col-12 ">
          {newDate.map((a) => {
            if (a.category.includes(filt.category)) {
              return (
                <div className="news">
                  <div key={a.id} className="news-cards row mt-5">
                    <div className="col-lg-8  col-md-8 col-sm-8">
                      <div className="news-head">
                        <span key={a.createdUser.userId}></span>
                        <img src={a.createdUser.img} />
                        <p>{a.createdUser.Name}</p>
                      </div>
                      <div className="news-title">
                        <h3>{a.head}</h3>
                      </div>
                      <div className="news-body ">
                        <p>{a.title}</p>
                        {/* <span>{a.isTrending}</span> */}
                        {/* <span>{a.category}</span> */}
                      </div>
                      <div className="news-footer ">
                        <span>{a.date + " · "}</span>
                        <span>{a.read + " · "}</span>
                        <span>{a.key}</span>
                      </div>
                    </div>
                    <div className="news-img col-lg-4 col-sm-4 col-md-4">
                      <img src={a.img} />
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 col-12 col-ls-12">
          <Category filt={filt} setFilt={setFilt} />
        </div>
      </div>
    );
  }
  return (
    <div className="container row">
      <div className="col-lg-8 col-md-12 col-sm-12 col-12 ">
        {news.map((obj) => (
          <div className="news">
            <div key={obj.id} className="news-cards row mt-5">
              <div className="col-lg-8  col-md-8 col-sm-8">
                <div className="news-head">
                  <span key={obj.createdUser.userId}></span>
                  <img src={obj.createdUser.img} />
                  <p>{obj.createdUser.Name}</p>
                </div>
                <div className="news-title">
                  <h3>{obj.head}</h3>
                </div>
                <div className="news-body ">
                  <p>{obj.title}</p>
                </div>
                <div className="news-footer ">
                  <span>{obj.date + " · "}</span>
                  <span>{obj.read + " · "}</span>
                  <span>{obj.key}</span>
                </div>
              </div>
              <div className="news-img col-lg-4 col-sm-4 col-md-4">
                <img src={obj.img} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="col-lg-4 col-md-12 col-sm-12 col-12 col-ls-12">
        <Category filt={filt} setFilt={setFilt} />
      </div>
    </div>
  );
}
