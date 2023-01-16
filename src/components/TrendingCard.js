export default function TrendingCard({ trendingItems }) {
  console.log(trendingItems);
  return (
    <div className="container">
      <div className="d-flex mt-5 trend">
        <img src={require("../image/1.png")} alt="" />
        <p>TRENDING ON MEDIUM</p>
      </div>
      <div className="trending-cards gap-5 mt-4">
        {trendingItems.map((obj) => (
          <div className="trend-card " key={obj.id}>
            <div className="trend-head ">
              <img src={obj.img} className="" />
              <h4 className="">{obj.name}</h4>
            </div>
            <div className="trend-body mt-2">
              <span>{obj.text2}</span>
            </div>
            <div className="trend-footer mt-2 d-flex">
              <p>{obj.date + " · "}</p>
              <p>{obj.read}</p>
              <img src={obj.icon} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
