import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/custom.css";
const SidebarBanner = () => {
  return (
    <div className="sidebar-widget-content mt-5 mb-5">
      <div
        className="sidebar-widget-banner overlay-two"
        style={{
          backgroundColor: "#0f1e32",
        }}
      >
        <img
          className="logo-img w-75 mb-5"
          src="/images/logo/NEXTGEN_LOGO.png"
        ></img>
        <h3 className="title">Subscribe to our newsletter</h3>
        <p>
          All the latest marketing news, including updates on brand campaigns,
          and the most interesting insights
        </p>
        <Link to={process.env.PUBLIC_URL + "/"}>Subscribe Now</Link>
      </div>
    </div>
  );
};

export default SidebarBanner;
