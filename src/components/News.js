import React from "react";


export default function News({obj}){
    console.log(obj);
    return(
        <div>
            <img src={obj.img} alt="news img" />
            <h2>{obj.head}</h2>
            <span>{obj.title}</span>
            <span>{obj.key}</span>
        </div>
    )    
}