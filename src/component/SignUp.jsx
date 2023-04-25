import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function SignUp(props) {
  let nav = useNavigate();
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [forklift, setForklift] = useState(false);

  const checkId = () => {
    document.getElementById('idLBL').innerHTML = ' ';
    if (id.length !== 5) {
      document.getElementById('idLBL').innerHTML =
        'The Number Must Be With 5 Digits';
      return false;
    }
    return true;
  };

  const checkName = () =>{
    document.getElementById('nameLBL').innerHTML = "";
    if ((!/[0-9]/)||(!!!/[ ]/)||(name.length<=5)){
        document.getElementById('nameLBL').innerHTML = "The Name Must Contain Minimum 4 Characters";
        return false;
    }
    return true;
}

  const checkValid = () => {
    if (props.worker.find((worker) => worker.id === id)) {
      alert('worker Already Exist');
      return;
    }
    if (checkName() && checkId()) {
      props.worker.push({
        id: id,
        name: name,
        forklift: forklift,
        logInCounter: '0',
        productNumber: '0',
      });
      nav('/signin');
    }
  };

  return (
    <div className="container">
      <h1 className="heading">Sign Up</h1>
      <div className="form-group">
        <label className="label" htmlFor="id">
          NO.
        </label>
        <input
          className="input"
          type="number"
          id="id"
          onChange={(e) => setId(e.target.value)}
        />
        <br />
        <label id="idLBL" className="error-label"></label>
        <br />
      </div>
      <div className="form-group">
        <label className="label" htmlFor="name">
          Full Name
        </label>
        <input
          className="input"
          type="text"
          id="name"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label id="nameLBL" className="error-label"></label>
        <br />
      </div>
      <div className="form-group">
        <label className="label">Forklift Truck</label>
        <div className="radio-group">
          <input
            type="radio"
            name="forklift"
            id="yes"
            onChange={(e) => setForklift(true)}
          />
          <label htmlFor="yes">Yes</label>
          <input
            type="radio"
            name="forklift"
            id="no"
            onChange={(e) => setForklift(false)}
            defaultChecked={true}
          />
          <label htmlFor="no">No</label>
        </div>
      </div>
      <button className="create-button" onClick={checkValid}>
        Create
      </button>
      <Link to={'/'}><button className="create-button">
        Back
      </button></Link>
    </div>
  );
}
