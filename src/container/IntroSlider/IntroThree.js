import React from "react";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import "../../assets/css/custom.css";

const IntroThree = ({ userType }) => {
  return (
    <div
      className=" wavy intro-section section overlay"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/hero-image/hero-2.jpg)`,
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "150px",
          overflow: "hidden",
        }}
      >
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style={{ height: "100%", width: "100%" }}
        >
          <path
            d="M0.00,49.99 C150.00,150.00 349.20,-49.99 500.00,49.99 L500.00,150.00 L0.00,150.00 Z"
            style={{ stroke: "none", fill: "white" }}
          ></path>
        </svg>
      </div>
      <div className="container">
        <div className="row row-cols-lg-1 row-cols-1">
          <div className="col align-self-center">
            <div className="intro-content-two headline-active text-center mt-xl-8 mt-lg-8 mt-md-8 mt-sm-8 mt-xs-9">
              <div className="mt-1">
                <h2 className="headline display-4 text-color ">
                  RECRUITING FOR TOP TALENT IN THE FIELDS OF{" "}
                  <Typewriter
                    options={{
                      strings: [
                        "SOFTWARE",
                        "INFRASTRUCTURE",
                        "ANALYTICS",
                        "CLOUD",
                        "DATA",
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 110,
                    }}
                  />
                </h2>
              </div>

              <div></div>

              <div>
                <div className="d-flex w-100 justify-content-center">
                  <Link
                    to={process.env.PUBLIC_URL + "/"}
                    className="home-button btn btn-outline-white btn-hover-primary w-25"
                    style={{ backgroundColor: "#D0F5F2", color: "black" }}
                  >
                    Find me a candidate
                  </Link>
                  <Link
                    to={process.env.PUBLIC_URL + "/job-search"}
                    className="home-button  btn btn-outline-white btn-hover-primary w-25 mb-20"
                    style={{ backgroundColor: "#46858E", color: "white" }}
                  >
                    {" "}
                    Find me a role{" "}
                  </Link>
                  {userType === "admin" && (
                    <Link
                      to={process.env.PUBLIC_URL + "/dashboard"}
                      className="btn btn-outline-white btn-hover-primary w-50 mb-20"
                      style={{ backgroundColor: "white", color: "black" }}
                    >
                      {" "}
                      Admin Dashboard{" "}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroThree;
