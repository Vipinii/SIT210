import React from "react";
import { useNavigate } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate('/Login'); // Navigate to the Login page when the button is clicked
  };

  return (
    <div>
      <nav className="navbar bg-light-blue" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand text-attractive font-weight-bold">DEV@Deakin</a>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{ width: '1120px' }} />
            <span style={{ marginRight: '35px' }}></span>
            <button className="btn btn-outline-success text-white font-weight-bold btn-3d post-button" type="submit">Post</button>
            <span style={{ marginRight: '10px' }}></span>
            <button className="btn btn-outline-success text-white font-weight-bold btn-3d login-button" type="button" onClick={clickHandler}>
      Login
    </button>
          </form>
        </div>
      </nav>

      {}
      <div className="welcome-text">
        <h1>Welcome</h1>
        <p>Login to continue</p>
      </div>

      
    </div>
  );
}

export default Navigation;
