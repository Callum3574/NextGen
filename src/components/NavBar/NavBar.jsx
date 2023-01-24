import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="site-main-menu">
      <ul>
        <li>
          <NavLink to={process.env.PUBLIC_URL + "/home"}>
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
          <NavLink to={process.env.PUBLIC_URL + "/service"}>
            <span className="menu-text">Job Search</span>
          </NavLink>
        </li>
        <li className="has-children">
          <NavLink to={process.env.PUBLIC_URL + "/work"}>
            <span className="menu-text">Sectors</span>
          </NavLink>
          <span className="menu-toggle">
            <i className="far fa-angle-down"></i>
          </span>
          <ul className="sub-menu">
            <li>
              <NavLink to={process.env.PUBLIC_URL + "/work"}>
                <span className="menu-text">Software Engineering</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={process.env.PUBLIC_URL + `/work-details/1`}>
                <span className="menu-text">Data Engineering</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={process.env.PUBLIC_URL + "/work"}>
                <span className="menu-text">Data Science</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={process.env.PUBLIC_URL + `/work-details/1`}>
                <span className="menu-text">Cloud/Devops</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={process.env.PUBLIC_URL + "/work"}>
                <span className="menu-text">Senior Executive</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={process.env.PUBLIC_URL + `/work-details/1`}>
                <span className="menu-text">Project Management</span>
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink to={process.env.PUBLIC_URL + "/blog-grid"}>
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
