export default function TrendingCard({ trendingItems }) {
  console.log(trendingItems);
  return (
    <div className="container">
      <div className="d-flex mt-5 trend row ">
        <div className="col-6 row">
          <div className="col-1 col-md-1 col-lg-1 col-sm-1">
            <img src={require("../image/1.png")} alt="" />
          </div>
          <div className="col-11 col-md-11 col-sm-11 col-lg-11">
            <p>TRENDING ON MEDIUM</p>
          </div>
        </div>
        <div className="col-6"></div>
      </div>
      <div className="trending-cards gap-4 row">
        {trendingItems.map((obj) => (
          <div className="trend-card row col-4" key={obj.id}>
            <div className="trend-head row d-flex">
              <div className="col-1">
                <img src={obj.img} />
              </div>
              <div className="col-11">
                <h4>{obj.name}</h4>
              </div>
            </div>
            <div className="trend-body mt-2 col-12">
              <div>
                <h2>{obj.text2}</h2>
              </div>
            </div>
            <div className="trend-footer mt-2 d-flex">
              <div className="aa">
                <div className=" aaa">
                  <p>{obj.date + " · "}</p>
                  <p>{obj.read}</p>
                </div>
                <div className="">
                  <img src={obj.icon} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
