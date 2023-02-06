import React from "react";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import "../../assets/css/custom.css";

const IntroThree = () => {
  return (
    <div
      className="intro-section section overlay"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/hero-image/hero-7.jpg)`,
      }}
    >
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
                <div className="d-flex w-100">
                  <Link
                    to={process.env.PUBLIC_URL + "/"}
                    className="btn btn-outline-white btn-hover-primary w-50"
                    style={{ backgroundColor: "#c49e00" }}
                  >
                    Find me a candidate
                  </Link>
                  <Link
                    to={process.env.PUBLIC_URL + "/job-search"}
                    className="btn btn-outline-white btn-hover-primary w-50 mb-20"
                    style={{ backgroundColor: "#1e96be", color: "white" }}
                  >
                    {" "}
                    Find me a role{" "}
                  </Link>
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
