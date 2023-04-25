import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Manager(props) {
  const nav = useNavigate();

  const logOutFunc = () => {
    props.setUser([]);
    props.setFlag(false);
    nav('/');
  };

  return (
    <div className="container">
      <h1 className="title">Manager</h1>

      <table className="table">
        <thead>
          <tr>
            <th>NO.</th>
            <th>Full Name</th>
            <th>Log In Counter</th>
            <th>Number Of Products</th>
          </tr>
        </thead>
        <tbody>
          {props.worker.map((worker) => (
            <tr key={worker.id}>
              <td>{worker.id}</td>
              <td>{worker.name}</td>
              <td>{worker.logInCounter}</td>
              <td>{worker.productNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="logout-button" onClick={logOutFunc}>
        Log Out
      </button>
    </div>
  );
}
