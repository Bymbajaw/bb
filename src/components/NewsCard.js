import React from "react";


export default function NewsCard({id, img, head, title, read, date }){
    console.log(id, img, head, title, read, date );
    
    return(
        <div>

            <img src={img} alt="news img" />
            <h2>{head}</h2>
            <span>{title}</span>
            <span>{read}</span>
            <span>{date}</span>
            {/* <span>{read}</span> */}
        </div>
    )    
}