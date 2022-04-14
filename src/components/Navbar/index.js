import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./style.css";

const index = () => {
  // returns a simple bootstrap navbar with links using Link from react-router-dom to specify the endpoint
  return (
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <div class="container-fluid">
        {/* brand or myname will link to the "homepage" which is the aboutme page. */}
        <Link to="/" class="navbar-brand">
          J. Murphy
        </Link>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            {/*  the "/" and "/about" endpoint lead to the same page but still created an endpoint */}
            <Link to="/about" class="nav-link active" aria-current="page">
              About
            </Link>
          </li>
          {/* link to contact */}
          <li class="nav-item">
            <Link to="/contact" class="nav-link active" aria-current="page">
              Contact
            </Link>
          </li>
          <li class="nav-item">
            {/* link to my portfolio */}
            <Link to="/portfolio" class="nav-link active" aria-current="page">
              Portfolio
            </Link>
          </li>
        </ul>
      </div>

      <Outlet />
    </nav>
  );
};

export default index;
