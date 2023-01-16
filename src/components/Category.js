import { useState } from "react";
import news from "./data";
let cate = [];

// import App from "../App";
export default function Category({ filt, setFilt }) {
  const Category = () => {
    news.map((a) => {
      if (!cate.includes(a.category)) {
        cate.push(a.category);
      }
    });
  };
  Category();

  const filterData = (cateName) => {
    console.log(cateName);
    setFilt({ ...filt, filt: true, category: cateName });
  };
  const catNews = [
    "Long Covid",
    "Data Science",
    "Productivity",
    "Politics",
    "Mental Health",
  ];
  const descriptions = [
    "Help",
    "Status",
    "Blog",
    "Politics",
    "Writers",
    "About",
    "Terms",
    "Careers",
    "Privacy",
  ];
  const [items, setItems] = useState(news);

  //   const filterItem = (categItem) => {
  //     const updatedItems = news.filter((curElem) => {});
  //   };
  return (
    <div className="my-4">
      <div>
        <h6>DISCOVER MORE OF WHAT MATTERS TO YOU</h6>
      </div>
      <div className="d-flex flex-wrap">
        {/* {catNews.map((c) => {
          return (
            <div className="categoryCard m-1">
              <h3 className="categoryText">{c}</h3>
            </div>
          );
        })} */}
        {/* <button className="btn btn-light" onClick={() => filterItem}>
          Technology
        </button> */}
        <div className="row d-flex gap-2 boom">
          {cate.map((a) => {
            return <p onClick={() => filterData(a)}>{a}</p>;
          })}
        </div>
      </div>
      <hr />
      <div className="d-flex flex-wrap justify-content-between">
        {descriptions.map((c) => {
          return (
            <div className="mr-5">
              <h3 className="categoryText">{c}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
