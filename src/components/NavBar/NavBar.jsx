import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "../../assets/css/custom.css";

const NavBar = () => {
  return (
    <nav className="site-main-menu">
      <ul>
        <li>
          <NavLink to={process.env.PUBLIC_URL + "/"}>
            <span className="menu-text">Home</span>
          </NavLink>
          <span className="menu-toggle">
            <i className="far fa-angle-down"></i>
          </span>
        </li>
        <li>
          <NavLink to={process.env.PUBLIC_URL + "/about"}>
            <span className="menu-text">About Us</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={process.env.PUBLIC_URL + "/job-search"}>
            <span className="menu-text">Job Search</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={process.env.PUBLIC_URL + "/job-sectors"}>
            <span className="menu-text">Sectors</span>
          </NavLink>
          <span className="menu-toggle">
            <i className="far fa-angle-down"></i>
          </span>
        </li>
        <li>
          <NavLink to={process.env.PUBLIC_URL + "/blog"}>
            <span className="menu-text">Blog</span>
          </NavLink>
          <span className="menu-toggle">
            <i className="far fa-angle-down"></i>
          </span>
        </li>
        <li>
          <NavLink to={process.env.PUBLIC_URL + "/contact"}>
            <span className="menu-text">Contact Us</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
