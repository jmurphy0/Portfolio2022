import React from "react";
import { Link, Routes, Route, Outlet } from "react-router-dom";
import "./style.css";

const index = () => {
  return (
    // <div>
    //   <nav class="navbar navbar-dark sticky-top bg-dark">
    //     <Link to="/">J. Murphy</Link>
    //     <ul>
    //       <li class="nav-item">
    //         <Link to="/About">About</Link>
    //       </li>
    //       <li>
    //         <Link class="nav-link active" to="/Contact">
    //           Contact
    //         </Link>
    //       </li>
    //       <li>
    //         <Link to="/Portfolio">Portfolio</Link>
    //       </li>
    //     </ul>
    //   </nav>
    //   <Outlet />
    // </div>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <div class="container-fluid">
        {/* <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button> */}
        <Link to="/" class="navbar-brand">
          J. Murphy
        </Link>
        {/* <div class="collapse navbar-collapse" id="navbarTogglerDemo03"> */}
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <Link to="/about" class="nav-link active" aria-current="page">
              About
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/contact" class="nav-link active" aria-current="page">
              Contact
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/portfolio" class="nav-link active" aria-current="page">
              Portfolio
            </Link>
          </li>
        </ul>
      </div>
      {/* </div> */}

      <Outlet />
    </nav>
  );
};

export default index;
