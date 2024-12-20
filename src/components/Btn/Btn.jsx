import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Btn = (props) => {
  return (
    <React.Fragment>
      <Link
        to={process.env.PUBLIC_URL + props.url}
        className="btn btn-outline-white btn-hover-primary"
      >
        {props.name}
      </Link>
    </React.Fragment>
  );
};

Btn.propTypes = {
  name: PropTypes.string,
};

export default Btn;
