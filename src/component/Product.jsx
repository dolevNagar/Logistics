import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Product(props) {
  const nav = useNavigate();

  const show = (value) => {
    if (value) {
      return 'Yes';
    } else {
      return 'No';
    }
  };

  const updateProduct = (forklift, id) => {
    const updatedProduct = props.temp.find((product) => product.id === id);

    if (!forklift) {
      updatedProduct.place = true;
      props.worker.find((worker) => worker.id === props.user.id).productNumber++;
      nav('/signin');
    } else {
      if (!props.user.forklift) {
        alert('Forklift license required');
      } else {
        updatedProduct.place = true;
        props.worker.find((worker) => worker.id === props.user.id).productNumber++;
        nav('/signin');
      }
    }
  };

  return (
    <div className="product-container">
      {props.temp.map((product) => (
        product.place === false && (
          <div key={product.id} className="product-card">
            <h3>Product No.: {product.id}</h3>
            <p>Name: {`${product.product} Box`}</p>
            <p>Need Forklift Truck: {show(product.forklift)}</p>
            <button onClick={() => updateProduct(product.forklift, product.id)}>Update</button>
          </div>
        )
      ))}
    </div>
  );
}
