import news from "./data";
import List from "./List";
import Category from "./Category";
import Trending from "./TrendingCard";

export default function Main() {
  return (
    <div className="main row d-flex">
      <div className="mainstay col-6 row">
        <div className="col-md-12">
          <h1>Stay curious.</h1>
        </div>
        <div className="col-md-12">
          <p>
            Discover stories, thinking, and expertise from writers on any topic.
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
    // <div className="container" style={{ marginTop: "5rem" }}>
    //   <Trending news={news} />
    //   <hr />
    //   <div className="row mt-5">
    //     <List />

    //     <div className="col-md-4">
    //       <h1 className="cate-title">Discover more of what matters to you</h1>
    //       <Category />
    //     </div>
    //   </div>
    // </div>
  );
}
