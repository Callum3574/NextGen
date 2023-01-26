import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import "../../assets/css/custom.css";
import JobCard from "../../components/JobCard/JobCard.jsx";

function SearchFilter() {
  const [allJobs, setAllJobs] = useState([]);
  const baseURL = "http://localhost:8000";

  const fetchPosts = async () => {
    const res = await fetch(baseURL + "/all-jobs");

    const data = await res.json();

    setAllJobs(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  console.log(allJobs);

  return (
    <div className="bg-primary-blue">
      <div className="d-flex p-2 bd-highlight justify-content-center">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 2, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="Job title" variant="filled" />
          <TextField id="filled-basic" label="Location" variant="filled" />
          <Button style={{ height: "4.1rem" }} variant="outlined">
            SEARCH
          </Button>
        </Box>
      </div>
      <hr />
      <div>
        <div className="d-flex p-2 bd-highlight justify-content-start flex-row">
          <div
            className="d-flex justify-content-start flex-column"
            style={{ marginLeft: "3rem" }}
          >
            <h2 className="p-2 m-2">Filter Results</h2>

            <div className="p-2 m-2">
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">
                  Job Type
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="Contract"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="Contract"
                    control={<Radio />}
                    label="Contract"
                  />
                  <FormControlLabel
                    value="Permanent"
                    control={<Radio />}
                    label="Permanent"
                  />
                  <FormControlLabel
                    value="Temporary"
                    control={<Radio />}
                    label="Temporary"
                  />
                </RadioGroup>
              </FormControl>
            </div>
            <div className="p-2 m-2">
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">
                  Sectors
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="Software & Web Development"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="Software & Web Development"
                    control={<Radio />}
                    label="Software & Web Development"
                  />
                  <FormControlLabel
                    value="Networking & Info Security"
                    control={<Radio />}
                    label="Networking & Info Security"
                  />
                  <FormControlLabel
                    value="IT Support & Infrastructure"
                    control={<Radio />}
                    label="IT Support & Infrastructure"
                  />

                  <FormControlLabel
                    value="QA & Testing"
                    control={<Radio />}
                    label="QA & Testing"
                  />
                  <FormControlLabel
                    value="Business Change & Transformation"
                    control={<Radio />}
                    label="Business Change & Transformation"
                  />
                </RadioGroup>
              </FormControl>
              <div className="p-2 m-2">
                <Button
                  className="m-2"
                  style={{ height: "4.1rem" }}
                  variant="outlined"
                >
                  APPLY
                </Button>
                <Button
                  style={{ height: "4.1rem" }}
                  variant="outlined"
                  className="m-2"
                >
                  CLEAR
                </Button>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column justify-content-center jobs-container container-sm m-5 p-5">
            {allJobs.map((job) => {
              return (
                <JobCard
                  role={job.role}
                  description={job.description}
                  salary={job.salary}
                  location={job.location}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchFilter;
