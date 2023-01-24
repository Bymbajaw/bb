import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";

export default function Admin() {
  const [news, setNews] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


  const navigate = useNavigate();

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
    <>
      <div className="bg-dark">
        <div className="container">
          <div className="navbar bg-dark flex-nowrap">
            <a href="/admin" className="col-md-3 navbar-brand text-light">
              Company Name
            </a>
            <input
              type="text"
              className="w-100 form-control bg-dark border-0"
            />
            <div className="nav text-nowrap">
              <a href="/">
                <span className="text-light"> Log Out </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="row">
          <div className="col-md-2">
            <div className="list-group">
              <div className="list-group-item">
                <a href="/admin/dashboard">Dashboard</a>
              </div>
              <div className="list-group-item">
                <a href="news">News</a>
              </div>
              <div className="list-group-item">
                <a href="/admin/user">User</a>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
