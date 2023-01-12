import React from "react";
// import { data } from "../data";

export default function NewsCard({ img, head, title, read, date }) {
  console.log(img, head, title, read, date );

  return (
    <div>
        {/* {data.map((e) => (
            <h2>{e.head}</h2>
        ))}; */}

      <img src={img} alt="news img" />
      <h2>{head}</h2>
      <span>{title}</span>
      <span>{read}</span>
      <span>{date}</span>
    </div>
//     {news.map((obj)=> {
//         console.log(obj);
//         return <NewsCard {...obj} />
//       })}
  );
}
