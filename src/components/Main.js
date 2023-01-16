import news from "./data";
import List from "./List";
import Category from "./Category";
import Trending from "./TrendingCard";

export default function Main() {
  return (
    <div className="main">
      <div className="mainstay">
        <h1>Stay curious.</h1>
        <p>
          Discover stories, thinking, and expertise from writers on any topic.
        </p>
        <button className="startreading">Start reading</button>
      </div>
      <div className="mainimg">
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
