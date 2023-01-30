import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import ReactVivus from "react-vivus";
import PropTypes from "prop-types";

function ApplyJob({ show, setShow, handleClose, handleShow, classOption }) {
  return (
    <div>
      <Modal
        className="mt-10"
        style={{ zIndex: "9999" }}
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton style={{ zIndex: "100" }}>
          <Modal.Title>Apply now</Modal.Title>
          <div className={` text-center`}>
            {" "}
            <ReactVivus
              style={{ marginLeft: "1rem", height: "5rem" }}
              className="w-50"
              id={`svg-icon-apply`}
              option={{
                file: "images/svg/linea/linea-basic-elaboration-mail-upload.svg",
                animTimingFunction: "EASE",
                type: "oneByOne",
                delay: 80,
              }}
            />
          </div>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>First name</Form.Label>
              <Form.Control type="name" placeholder="John" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Last name</Form.Label>
              <Form.Control type="name" placeholder="Doe" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
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

            <div>
              <input type="file" name="cv" id="cv" />
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
ApplyJob.propTypes = {
  data: PropTypes.object,
  classOption: PropTypes.string,
};

ApplyJob.defaultProps = {
  classOption: "icon-box text-center",
};

export default ApplyJob;
