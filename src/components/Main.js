import NewsCard from "./NewsCard";
import TrendingCard from "./TrendingCard";
import news from "./data";
import trendingItems from "./TrendingData";
import Header from "./Header";

export default function Main({}) {
  return (
    <>
      <header>
        <div className="container">
          <Header
          // style={objStyle}
          // onLogin={onLogin}
          // user={user}
          // setUser={setUser}
          // showModal={showModal}
          // openModal={openModal}
          />
        </div>
      </header>
      <div className="section-1">
        <div className="container">
          <div className="main row d-flex">
            <div className="mainstay col-6 row">
              <div className="col-md-12">
                <h1>Stay curious.</h1>
              </div>
              <div className="col-md-12">
                <p>
                  Discover stories, thinking, and expertise from writers on any
                  topic.
                </p>
              </div>
              <div className="col-12">
                <button className="startreading ">Start reading</button>
              </div>
            </div>
            <div className="mainimg col-6">
              <img src={require("../image/svg.png")} alt="" />
            </div>
          </div>
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
      </div>
    </>
  );
}
