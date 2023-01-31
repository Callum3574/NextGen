import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ReactVivus from "react-vivus";
import PropTypes from "prop-types";
import ApplyJob from "./ApplyJob";
import Form from "react-bootstrap/Form";
import "../../assets/css/custom.css";
import "../../assets/css/animations.css";
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
  setFileUpload,
  uploadCV,
}) {
  const [displayApply, setDisplayApply] = useState(false);

  const handleDisplayApply = () => {
    setDisplayApply(!displayApply);
  };
  function generateReferenceNumber() {
    const possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let referenceNumber = "";
    for (let i = 0; i < 10; i++) {
      referenceNumber += possibleChars.charAt(
        Math.floor(Math.random() * possibleChars.length)
      );
    }
    return referenceNumber;
  }

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
        <div className="full-card-apply-modal ">
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
                <h5>{type}</h5>
              </div>

              <div>
                <p>
                  <hr />
                </p>
              </div>

              <div className="px-4">
                <h5>{job_category}</h5>
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
              <div className="mt-2">
                <p>
                  <strong>Reference: {generateReferenceNumber()}</strong>
                </p>
              </div>
            </div>
            <hr />
            <div>
              <p>{description}</p>
            </div>
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
                  <Form.Control type="name" placeholder="John" autoFocus />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Last name</Form.Label>
                  <Form.Control type="name" placeholder="Doe" autoFocus />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    autoFocus
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
