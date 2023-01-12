export default function TrendingCard({id, img, text1, text2, date, read, icon}){
    console.log(id, img, text1, text2, date, read, icon);
    return(
    <div>
        <img src={img} alt="news img" />
        <h2>{text1}</h2>
        <span>{text2}</span>
        <span>{read}</span>
        <span>{date}</span>
        <i>{icon}</i>
    </div>
    )
}