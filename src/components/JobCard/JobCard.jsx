import React from "react";
import Button from "@mui/material/Button";

function JobCard({
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
  const limitTextLength = (text, limit) => {
    if (text.length > limit) {
      return text.slice(0, limit) + "...";
    } else {
      return text;
    }
  };

  return (
    <div
      className=" job-card d-flex flex-column container-sm mt-5"
      style={{ borderBottom: "2px solid gray" }}
    >
      <div>
        <h3>{role}</h3>
      </div>
      <hr />
      <div className="d-flex">
        <div>
          <h5>{type}</h5>
        </div>

        <div className="px-4">
          <h5>{job_category}</h5>
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
        <h5>{limitTextLength(description, 200)}</h5>
      </div>

      <div className="d-flex justify-content-center">
        <Button>APPLY NOW</Button>
        <Button>MORE INFO</Button>
      </div>
    </div>
  );
}

export default JobCard;
