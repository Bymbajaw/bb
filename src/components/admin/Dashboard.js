import { Title } from 'chart.js';
import React, { useEffect, useState } from 'react'



export default function Dashboard() {
  const [news, setNews] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=world&apiKey=57f263c59a5c451d8dcf306599bde48c"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setNews(data.articles);
      })
      .catch((err) => setError(err))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return "Loading";
  if (error) return "Error";

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 px-4">
            <div className="row my-4">
              <div className="col-md-4">
                <div className="card py-2 px-4">
                  <h5 class="card-title text-warning">Users</h5>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="fs-1">
                      <i
                        className="bi bi-people"
                        style={{ fontSize: "40px" }}
                      ></i>
                    </div>
                    <h2 className="text-primary">4500</h2>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card py-2 px-4">
                  <h5 class="card-title text-warning">News</h5>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="fs-1">
                      <i
                        className="bi bi-newspaper"
                        style={{ fontSize: "40px" }}
                      ></i>
                    </div>
                    <h2 className="text-primary">2300</h2>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card py-2 px-4">
                  <h5 class="card-title text-warning">Access</h5>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="fs-1">
                      <i
                        className="bi bi-reception-4"
                        style={{ fontSize: "40px" }}
                      ></i>
                    </div>
                    <h2 className="text-primary">6400</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              {/* <BarChart />
              <PieChart /> */}
            </div>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <th>1</th>
                  <th>1</th>
                  <th>1</th>
                </thead>
                <tbody>
                  {news.map((e) => {
                    return (
                      <tr>
                        <td>{e.title}</td>
                        <td>{e.source.name}</td>
                        <td>{e.author}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}