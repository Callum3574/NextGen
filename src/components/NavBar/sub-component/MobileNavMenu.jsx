import React from "react";
import { NavLink } from "react-router-dom";
import { getClosest, getSiblings, slideToggle, slideUp } from "../../../utils";

const MobileNavMenu = () => {
  const onClickHandler = (e) => {
    const target = e.currentTarget;
    const parentEl = target.parentElement;
    if (
      parentEl?.classList.contains("menu-toggle") ||
      target.classList.contains("menu-toggle")
    ) {
      const element = target.classList.contains("icon") ? parentEl : target;
      const parent = getClosest(element, "li");
      const childNodes = parent.childNodes;
      const parentSiblings = getSiblings(parent);
      parentSiblings.forEach((sibling) => {
        const sibChildNodes = sibling.childNodes;
        sibChildNodes.forEach((child) => {
          if (child.nodeName === "UL") {
            slideUp(child, 1000);
          }
        });
      });
      childNodes.forEach((child) => {
        if (child.nodeName === "UL") {
          slideToggle(child, 1000);
        }
      });
    }
  };
  return (
    <nav className="site-mobile-menu">
      <ul>
        <li>
          <NavLink to={process.env.PUBLIC_URL + "/"}>
            <span className="menu-text">Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={process.env.PUBLIC_URL + "/about"}>
            <span className="menu-text">About Us</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={process.env.PUBLIC_URL + "/job-search"}>
            <span className="menu-text">Job-search</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={process.env.PUBLIC_URL + "/job-sectors"}>
            <span className="menu-text">Sectors</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={process.env.PUBLIC_URL + "/blog"}>
            <span className="menu-text">Blog</span>
          </NavLink>
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

export default MobileNavMenu;
