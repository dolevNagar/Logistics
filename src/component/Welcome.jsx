import React from 'react';
import Product from './Product';
import { useNavigate } from 'react-router-dom';


export default function Welcome(props) {
  const nav = useNavigate();

  const show = () => {
    if (props.user.forklift) {
      return 'Yes';
    } else {
      return 'No';
    }
  };

  const logOutFunc = () => {
    props.setUser([]);
    props.setFlag(false);
    nav('/');
  };

  const productList = () => {
    let temp = [...props.product];

    return <Product temp={temp} user={props.user} worker={props.worker} />;
  };

  return (
    <div className="container">
      <h1 className="title">Welcome: {props.user.name.split(' ')[0]}</h1>

      <div className="details">
        <h2>Details:</h2>
        <p>Full Name: {props.user.name}</p>
        <p>NO.: {props.user.id}</p>
        <p>Forklift truck license: {show()}</p>
      </div>

      <h3 className="subtitle">List Of Products</h3>

      {productList()}

      <button className="logout-button" onClick={logOutFunc}>
        Log Out
      </button>
    </div>
  );
}
