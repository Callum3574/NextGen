import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import ReactVivus from "react-vivus";
import UploadCV from "../CV/UploadCV";
import ApplyJob from "./ApplyJob";
import FullJobCard from "./FullJobCard";

function JobCard({
  classOption,
  role,
  description,
  salary,
  location,
  consultant,
  type,
  category,
  industry,
  job_category,
  post_date,
}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [lgShow, setLgShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 500);
  }, []);
  const limitTextLength = (text, limit) => {
    if (text.length > limit) {
      return text.slice(0, limit) + "...";
    } else {
      return text;
    }
  };

  return (
    <div
      className={`job-card d-flex flex-column container-sm mb-5 border ${classOption}`}
      style={{ borderBottom: "2px solid gray" }}
    >
      <div>
        <ApplyJob
          handleShow={handleShow}
          handleClose={handleClose}
          show={show}
          setShow={setShow}
        />
      </div>

      <div>
        <FullJobCard
          lgShow={lgShow}
          setLgShow={() => setLgShow(false)}
          role={role}
          description={description}
          salary={salary}
          location={location}
          consultant={consultant}
          type={type}
          category={category}
          industry={industry}
          job_category={job_category}
          post_date={post_date}
        />
      </div>
      <div className={`text-container ${isLoaded ? "loaded" : ""}`}>
        <div>
          <div>
            <h3>{role}</h3>
          </div>
          <div>
            <p>Post date: {post_date}</p>
          </div>
        </div>
        <hr />
        <div className="d-flex">
          <div>
            <h5 style={{ color: "#0f1e32" }} s>
              {type}
            </h5>
          </div>

          <div>
            <p>
              <hr />
            </p>
          </div>

          <div className="px-4">
            <h5 style={{ color: "#0f1e32" }}>{job_category}</h5>
          </div>
        </div>
        <div className="d-flex mt-1">
          <div className="">
            <p>{location}</p>
          </div>

          <div className="px-5">
            <p>{salary}</p>
          </div>

          <div className="">
            <p>{industry}</p>
          </div>
        </div>

        <div className="mt-3">
          <p>{limitTextLength(description, 300)}</p>
        </div>

        <div className="d-flex justify-content-center">
          <Button onClick={handleShow}>APPLY NOW</Button>
          <Button onClick={() => setLgShow(true)}>MORE INFO</Button>
        </div>
      </div>
    </div>
  );
}

JobCard.propTypes = {
  data: PropTypes.object,
  classOption: PropTypes.string,
};

JobCard.defaultProps = {
  classOption: "icon-box text-start",
};

export default JobCard;
