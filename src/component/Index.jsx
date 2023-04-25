import React from 'react';
import { Link } from 'react-router-dom';

export default function Index(props) {
  return (
    <div className="container">
      <h2 className="heading">Logistics Management</h2>
      <div className="buttons">
        <Link to="/signup" className="button-link">
          <button className="signup-button">Sign Up</button>
        </Link>
        <Link to="/signin" className="button-link">
          <button className="signin-button">Sign In</button>
        </Link>
      </div>
    </div>
  );
}
