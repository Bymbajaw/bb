import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function User() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch("https://medium-api-psi.vercel.app/api/users")
      .then((res) => res.json())
      .then((data) => {
        console.log("saved");
        console.log(data);
        setUsers(data.result);
      })
      .catch((err) => console.log(err));
  };

  const onDelete = (id) => {
    const url = `https://medium-api-psi.vercel.app/api/users?id=${id}`;

    fetch(url, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("saved");
        console.log(data);
        getData();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="">
      <div className="row d-flex">
        <div className="col-1 fs-5">Users</div>
        <h2 className="col-1">
          <Link to="/admin/adduser">
            <div className="col-1">Add</div>
          </Link>
        </h2>
      </div>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <th></th>
            <th></th>
            <th></th>
          </thead>
          <tbody>
            {users.map(({ _id, username, firstName, lastName }, i) => {
              return (
                <tr key={i}>
                  <td>{username}</td>
                  <td>{lastName}</td>
                  <td>{firstName}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => onDelete(_id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
