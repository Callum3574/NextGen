import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "../assets/css/custom.css";

class error404 extends Component {
  render() {
    return (
      <div className="not-found">
        <img
          className="h-25"
          alt="logo"
          src="/images/logo/NEXTGEN_LOGO.png"
        ></img>
        <h1 className="not-found-h1">404 - Page Not Found</h1>
        <p className="not-found-p">
          Sorry, the page you are looking for cannot be found.
        </p>
        <Link to="/">
          <Button>Back to Homepage</Button>
        </Link>
      </div>
    );
  }
}
export default error404;
