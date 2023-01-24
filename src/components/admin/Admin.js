import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

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
        <div className="container-fluid">
          <div className="navbar bg-dark flex-nowrap">
            <a href="/admin" className=" navbar-brand text-light">
              Company Name
            </a>
            <input
              type="text"
              className="w-100 form-control bg-dark border-0"
            />
            <div className="nav text-nowrap">
              <span className="text-light">{localStorage.getItem("name")}</span>
              <span
                className="text-light"
                onClick={() => {
                  localStorage.clear();
                  navigate("/login");
                }}
              >
                Log Out
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="row">
          <div className="col-md-2">
            <div className="list-group">
              <div className="list-group-item">
                <a href="/admin">Dashboard</a>
              </div>
              <div className="list-group-item">
                <a href="/admin/news">News</a>
              </div>
              <div className="list-group-item">
                <a href="/admin/user">User</a>
              </div>
            </div>
          </div>
          <div className="col-md-10">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
