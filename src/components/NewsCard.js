import React from "react";







export default function NewsCard( {news} ) {
  console.log(news );

  return (
    <div className="container">
      {news.map((obj) => (
        <div key={obj.id} className="news-cards">
          <div className="news-cont ">
            <div className="">
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
                {/* <span>{obj.isTrending}</span> */}
                {/* <span>{obj.category}</span> */}
              </div>
              <div className="news-footer ">
                <span>{obj.date + " · "}</span>
                <span>{obj.read + " · "}</span>
                <span>{obj.key}</span>
              </div>
            </div>
            <div className="news-img">
              <img src={obj.img} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
