import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ image }) => {
  return (
    <div className="header-logo ">
      <Link to={process.env.PUBLIC_URL + "/"}>
        <img
          className="dark-logo"
          src={process.env.PUBLIC_URL + image}
          alt="Agency Logo"
        />
        {/* <h2 style={{ color: "white" }}>Nextgen</h2> */}
      </Link>
    </div>
  );
};

Logo.propTypes = {
  image: PropTypes.string,
};

export default Logo;
