import React from "react";

function Navigation() {
  return (
    <nav class="navbar bg-light-blue" data-bs-theme="dark">
      <div class="container-fluid">
        <a class="navbar-brand text-attractive font-weight-bold">DEV@Deakin</a>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{ background:'white', height: '35px' ,width: '1310px' }} />
          <span style={{ marginRight: '35px' }}></span>
          <button class="btn btn-outline-success text-white font-weight-bold btn-3d" type="submit">Post</button>
          <span style={{ marginRight: '10px' }}></span>
          <button class="btn btn-outline-success text-white font-weight-bold btn-3d" type="submit">Login</button>
        </form>
      </div>
    </nav>
  );
  
  
  
  
}

export default Navigation;