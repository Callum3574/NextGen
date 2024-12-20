import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ReactVivus from "react-vivus";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import "../../assets/css/custom.css";
import "../../assets/css/animations.css";
import "../../assets/css/responsive.css";

function FullJobCard({
  lgShow,
  setLgShow,
  role,
  description,
  salary,
  location,
  type,
  industry,
  job_category,
  post_date,
  setFileUpload,
  uploadCV,
  job_ref,
  handleUserApply,
  skills,
  responsibilities,
}) {
  const [displayApply, setDisplayApply] = useState(false);

  const handleDisplayApply = () => {
    setDisplayApply(!displayApply);
  };

  return (
    <>
      <Modal
        className="mt-10"
        style={{ zIndex: "9999" }}
        size="xl"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <div className="full-card-apply-modal p-5 ">
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
              <p>Post date: {post_date.split("").splice(0, 10).join("")}</p>
            </div>
          </Modal.Header>

          <Modal.Body>
            <div className="d-flex">
              <div>
                <h5 className="job-title-header">{type}</h5>
              </div>

              <div>
                <p>
                  <hr className="search-underline" />
                </p>
              </div>

              <div className="px-4">
                <h5 className="job-title-header">{job_category}</h5>
              </div>
            </div>

            <div className="job-item-container mt-1">
              <p className="job-item">
                <strong>Location : </strong>
                {location}
              </p>
              <p className="job-item">
                <strong>Salary : </strong> {salary}
              </p>
              <p className="job-item">
                <strong>Industry : </strong>
                {industry}
              </p>
              <p className="job-item">
                <strong>Reference: {job_ref}</strong>
              </p>
            </div>
            <hr className="search-underline" />
            <h3 className="job-title-header">Description</h3>
            <div dangerouslySetInnerHTML={{ __html: description }}></div>
            <hr className="search-underline" />
            <h3 className="job-title-header">Skills:</h3>
            {skills.map((skill, index) => {
              return (
                <div
                  dangerouslySetInnerHTML={{ __html: skill }}
                  key={index}
                ></div>
              );
            })}

            <hr className="search-underline" />

            <h3 className="job-title-header">Responsibilities:</h3>
            {responsibilities.map((responsibility, index) => {
              return (
                <div
                  dangerouslySetInnerHTML={{ __html: responsibility }}
                  key={index}
                ></div>
              );
            })}
            <hr className="search-underline" />

            <div className="d-flex justify-content-center mt-5">
              <Button onClick={handleDisplayApply}>APPLY NOW</Button>
            </div>
          </Modal.Body>
          {displayApply && (
            <Modal.Footer className="slide-in-blurred-bl slide-out-elliptic-top-bck d-flex justify-content-center flex-row">
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    name="firstName"
                    type="name"
                    placeholder="John"
                    autoFocus
                    onChange={handleUserApply}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    name="lastName"
                    type="name"
                    placeholder="Doe"
                    autoFocus
                    onChange={handleUserApply}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="name@example.com"
                    autoFocus
                    onChange={handleUserApply}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                ></Form.Group>

                <Form.Group>
                  <input
                    onChange={(e) => setFileUpload(e.target.files[0])}
                    type="file"
                    name="cv"
                    id="cv"
                  />
                  <Button onClick={uploadCV}>Submit</Button>
                </Form.Group>
              </Form>
            </Modal.Footer>
          )}
        </div>
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
