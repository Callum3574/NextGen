import React from "react";
import Button from "@mui/material/Button";

function JobCard({ role, description, salary, location }) {
  console.log(role);
  return (
    <div
      className=" job-card d-flex flex-column container-sm mt-5"
      style={{ borderBottom: "2px solid black" }}
    >
      <div>
        <h3>{role}</h3>
      </div>
      <hr />
      <div>
        <h4>{salary}</h4>
      </div>
      <div>
        <h5>{location}</h5>
      </div>
      <div>
        <h5>{description}</h5>
      </div>
      <div>
        <Button>APPLY NOW</Button>
        <Button>MORE INFO</Button>
      </div>
    </div>
  );
}

export default JobCard;
