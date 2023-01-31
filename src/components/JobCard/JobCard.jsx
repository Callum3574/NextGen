import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import ReactVivus from "react-vivus";
import UploadCV from "../CV/UploadCV";
import ApplyJob from "./ApplyJob";
import FullJobCard from "./FullJobCard";
import "../../assets/css/custom.css";
import { storage } from "../../firebase";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

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

  const [fileUpload, setFileUpload] = useState(null);

  const uploadCV = () => {
    if (fileUpload == null) return;

    const fileRef = ref(storage, `CVs/${fileUpload.name}`);

    uploadBytes(fileRef, fileUpload).then(() => {
      alert("Uploaded file!");
    });
  };

  return (
    <div
      className={`job-card d-flex flex-column container-sm mb-5 border w-100 ${classOption}`}
    >
      <div>
        <ApplyJob
          handleShow={handleShow}
          handleClose={handleClose}
          show={show}
          setShow={setShow}
          setFileUpload={setFileUpload}
          uploadCV={uploadCV}
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
          setFileUpload={setFileUpload}
          uploadCV={uploadCV}
        />
      </div>
      <div className={`text-container ${isLoaded ? "loaded" : ""}`}>
        <div>
          <div>
            <h3 className="role-title">{role}</h3>
          </div>
          <div>
            <p>Post date: {post_date}</p>
          </div>
        </div>
        <hr style={{ color: "rgb(30, 150, 190)" }} />
        <div className=" d-flex">
          <div>
            <h5 className="type-category">{type}</h5>
          </div>

          <div>
            <p>
              <hr />
            </p>
          </div>

          <div className="px-4">
            <h5 className="type-category">{job_category}</h5>
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

        <div className="d-flex justify-content-start mt-5">
          <div>
            {" "}
            <Button
              onClick={handleShow}
              style={{
                height: "2rem",
                color: "black",
                borderColor: "rgb(30, 150, 190)",
              }}
              variant="outlined"
              className="search-button mt-1"
            >
              APPLY NOW
            </Button>
          </div>
          <div className="px-3">
            <Button
              onClick={() => setLgShow(true)}
              style={{
                height: "2rem",
                color: "black",
                borderColor: "rgb(30, 150, 190)",
              }}
              variant="outlined"
              className="search-button mt-1"
            >
              MORE INFO
            </Button>
          </div>
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
