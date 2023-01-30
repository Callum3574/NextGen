import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ReactVivus from "react-vivus";
import PropTypes from "prop-types";

function FullJobCard({
  lgShow,
  setLgShow,
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
  return (
    <>
      <Modal
        className="mt-10"
        style={{ zIndex: "9999" }}
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">{role}</Modal.Title>

          <div className={` text-center`}>
            {" "}
            <ReactVivus
              style={{ marginLeft: "1rem", height: "5rem" }}
              className="w-50"
              id={`svg-icon-apply`}
              option={{
                file: "images/svg/linea/linea-basic-upload.svg",
                animTimingFunction: "EASE",
                type: "oneByOne",
                delay: 80,
              }}
            />
          </div>
          <div>
            <p>{post_date}</p>
          </div>
        </Modal.Header>

        <Modal.Body>
          <div className="d-flex">
            <div>
              <h5 style={{ color: "#85bdbf" }} s>
                {type}
              </h5>
            </div>

            <div>
              <p>
                <hr />
              </p>
            </div>

            <div className="px-4">
              <h5 style={{ color: "#85bdbf" }}>{job_category}</h5>
            </div>
          </div>

          <div className="d-flex mt-1 flex-column">
            <div className="">
              <p>
                <strong>Location : </strong>
                {location}
              </p>
            </div>

            <div className="mt-2">
              <p>
                <strong>Salary : </strong> {salary}
              </p>
            </div>

            <div className="mt-2">
              <p>
                <strong>Industry : </strong>
                {industry}
              </p>
            </div>
          </div>
          <hr />
          <div>
            <p>{description}</p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

FullJobCard.propTypes = {
  data: PropTypes.object,
  classOption: PropTypes.string,
};

FullJobCard.defaultProps = {
  classOption: "icon-box text-start",
};

export default FullJobCard;
