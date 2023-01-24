import React from "react";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import "../../assets/css/custom.css";

const IntroThree = () => {
  return (
    <div
      className="intro-section section overlay"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/hero-image/hero-1.jpg)`,
      }}
      // style={{ backgroundColor: "#2C7D7A" }}
    >
      <div className="container">
        <div className="row row-cols-lg-1 row-cols-1">
          <div className="col align-self-center">
            <div className="intro-content-two headline-active text-center mt-xl-8 mt-lg-8 mt-md-8 mt-sm-8 mt-xs-9">
              <div className="mt-1">
                <h2 className="headline display-4 text-color ">
                  Recruiting Top Talent In The Fields Of{" "}
                  {/* RECRUITING FOR TOP TALENT IN THE FIELDS OF{" "} */}
                  <Typewriter
                    options={{
                      strings: [
                        "Software",
                        "Infrastructure",
                        "Analytics",
                        "Cloud",
                        "Data",
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 110,
                    }}
                  />
                  {/* brands &amp; experiences{" "} */}
                </h2>
              </div>

              <div>
                <br />
                <br />
                {/* <p style={{ color: "white" }}>
                  Our team has a deep understanding of the specific skills and
                  qualifications required for these industries, and we are
                  dedicated to finding the best candidates for your company's
                  specific needs
                </p> */}
              </div>

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
                    to={process.env.PUBLIC_URL + "/"}
                    className="btn btn-outline-white btn-hover-primary w-50 mb-20"
                    style={{ backgroundColor: "#0095b7", color: "white" }}
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
