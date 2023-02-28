import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import "../../assets/css/custom.css";
import JobCard from "../../components/JobCard/JobCard.jsx";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../assets/css/responsive.css";
import LinearProgress from "@mui/material/LinearProgress";
import NativeSelect from "@mui/material/NativeSelect";
import Alert from "@mui/material/Alert";

function SearchFilter() {
  const [allJobs, setAllJobs] = useState([]);
  const [searchInput, setSearchInput] = useState({
    jobTitle: "",
    location: "",
  });
  const [filterTypeAndCategory, setFilterTypeAndCategory] = useState({
    type: "",
    job_category: "",
  });
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [filtered, setFiltered] = useState(false);
  const [jobsVisible, setJobsVisible] = useState(10);
  const [filterOptions, setFilterOptions] = useState({
    type: ["Contract", "Permanent", "Temporary"],
    sector: [
      "Software & Web Development",
      "Networking & Info Security",
      "IT Support & Infrastructure",
      "QA & Testing",
      "Business Change & Transformation",
      "IT & Engineering",
    ],
  });
  const [emptyResult, setEmptyResult] = useState(false);

  const baseURL = "http://localhost:8000";
  const baseURLDeploy = "https://top-fork-production.up.railway.app";

  const fetchPosts = async () => {
    try {
      const res = await fetch(baseURL + "/all-jobs");
      const data = await res.json();
      console.log(data);
      setAllJobs(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    setJobsVisible(10);
  }, [filteredJobs]);

  const handleSearchInput = (e) => {
    setSearchInput({ ...searchInput, [e.target.name]: e.target.value });
    console.log(searchInput);
  };

  //* handles the search button click
  const handleSearchFilter = () => {
    setFiltered(true);
    setFilteredJobs(
      allJobs.filter((job) => {
        return (
          job.role.toLowerCase().includes(searchInput.jobTitle.toLowerCase()) &&
          job.location
            .toLowerCase()
            .includes(searchInput.location.toLowerCase())
        );
      })
    );
  };

  const handleFilterTypeAndCategory = (e) => {
    setFilterTypeAndCategory({
      ...filterTypeAndCategory,
      [e.target.name]: e.target.value,
    });
    console.log(filterTypeAndCategory);
  };
  //* handles the apply button click
  const handleFilterTypeAndCategorySearch = () => {
    setFiltered(true);

    setFilteredJobs(
      allJobs.filter((job) => {
        return (
          job.type
            .toLowerCase()
            .includes(filterTypeAndCategory.type.toLowerCase()) &&
          job.job_category
            .toLowerCase()
            .includes(filterTypeAndCategory.job_category.toLowerCase())
        );
      })
    );
  };

  const handleClearFilterButton = () => {
    setFiltered(false);
    setFilteredJobs([]);
  };

  const displayJobsCount = () => {
    if (filteredJobs.length === 0) {
      return (
        <p className="job-count" style={{ zIndex: 1000 }}>
          Displaying {allJobs.length < 10 ? allJobs.length : jobsVisible} out of{" "}
          {allJobs.length} jobs
        </p>
      );
    } else {
      return (
        <p className="job-count" style={{ zIndex: 1000 }}>
          Displaying{" "}
          {filteredJobs.length < 10 ? filteredJobs.length : jobsVisible} out of{" "}
          {filteredJobs.length} jobs
        </p>
      );
    }
  };

  //* handles the load more button click BUT only works for the first 30 jobs

  const handleJobListLength = (jobs) => {
    jobsVisible >= jobs.length - 10
      ? setJobsVisible(jobsVisible + jobs.length - jobsVisible)
      : setJobsVisible((prev) => prev + 10);
  };

  return (
    <div className=" wrapper bg-primary-blue">
      <div className=" search-box-jobs d-flex p-2 bd-highlight justify-content-center">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 2, width: "25ch" },
          }}
          noValidate
          autoComplete="on"
        >
          <div className="search-title d-flex justify-content-center flex-row w-100">
            <div className="mb-">
              <h4 style={{ color: "white" }}>Start your job search</h4>
            </div>
            <div>
              <i
                className="fa fa-search px-3"
                style={{ color: "rgb(70, 133, 142)" }}
              ></i>
            </div>
          </div>
          <div className="search-nav search-border container d-flex justify-content-start w-100 bg-blue">
            <div className="px-1">
              <input
                onChange={handleSearchInput}
                id="standard-basic"
                placeholder="Enter Keywords e.g. Job Title"
                variant="filled"
                name="jobTitle"
                className="text-filter"
              />
            </div>
            <div className="px-1">
              <input
                onChange={handleSearchInput}
                id="standard-basic"
                placeholder="Location"
                variant="filled"
                name="location"
                className="loc-bar text-filter2"
              />
            </div>
            <div className="px-1">
              <Button
                onClick={handleSearchFilter}
                style={{
                  height: "2rem",
                  color: "white",
                  borderColor: "rgb(70, 133, 142)",
                }}
                variant="outlined"
                className="search-button mt-1"
              >
                SEARCH
              </Button>
            </div>
          </div>
        </Box>
      </div>

      <div>
        {allJobs.length > 0 ? (
          <div className="filter-res d-flex  bd-highlight justify-content-center flex-row">
            <div className="filter-box d-flex justify-content-start flex-column  mt-5 me-8 ">
              <div className="container filter-container ">
                <h4 className="filter-title mb-5">Filter Results</h4>
                <FormControl fullWidth>
                  <label>Job Type</label>

                  <NativeSelect
                    name="type"
                    onChange={handleFilterTypeAndCategory}
                  >
                    <option value="" disabled selected hidden>
                      Select Job Type
                    </option>
                    {filterOptions.type.map((type) => {
                      return (
                        <option name={type} value={type}>
                          {type}
                        </option>
                      );
                    })}
                  </NativeSelect>
                </FormControl>
                <FormControl fullWidth>
                  <label>Sectors</label>
                  <NativeSelect
                    name="job_category"
                    onChange={handleFilterTypeAndCategory}
                  >
                    <option value="" disabled selected hidden>
                      Select Sector
                    </option>
                    {filterOptions.sector.map((sector) => {
                      return (
                        <option value={sector} name={sector}>
                          {sector}
                        </option>
                      );
                    })}
                  </NativeSelect>
                  <div className="button-filter p-2 m-2 d-flex ">
                    <div>
                      <Button
                        onClick={handleFilterTypeAndCategorySearch}
                        style={{
                          height: "2rem",
                          color: "black",
                          borderColor: "rgb(30, 150, 190)",
                        }}
                        variant="outlined"
                        className="search-button mt-1"
                      >
                        Apply
                      </Button>
                    </div>
                    <div className="px-2">
                      <Button
                        onClick={handleClearFilterButton}
                        style={{
                          height: "2rem",
                          color: "black",
                          borderColor: "rgb(30, 150, 190)",
                        }}
                        variant="outlined"
                        className="search-button mt-1"
                      >
                        CLEAR
                      </Button>
                    </div>
                  </div>
                </FormControl>
                {emptyResult && (
                  <Alert
                    className="mb-3 w-100 d-flex justify-content-center"
                    variant="outlined"
                    severity="error"
                  >
                    No results found!
                  </Alert>
                )}
              </div>
              {/* <div className="container filter-results border  d-flex flex-column mt-8 rounded ">
                <h2 className="filter-results-text p-2 m-2">Filter Results</h2>

                <div className="p-2 m-2 ">
                  <FormControl>
                    <FormLabel
                      style={{ color: "rgb(70, 133, 142)" }}
                      id="demo-radio-buttons-group-label"
                    >
                      Job Type
                    </FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="Contract"
                      name="type"
                      style={{ color: "black" }}
                      onChange={handleFilterTypeAndCategory}
                    >
                      <FormControlLabel
                        value="Contract"
                        control={<Radio color="default" />}
                        label="Contract"
                      />
                      <FormControlLabel
                        value="Permanent"
                        control={<Radio color="default" />}
                        label="Permanent"
                      />
                      <FormControlLabel
                        value="Temporary"
                        control={<Radio color="default" />}
                        label="Temporary"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
                <div className="p-2 m-2">
                  <FormControl>
                    <FormLabel
                      style={{ color: "rgb(70, 133, 142)" }}
                      id="demo-radio-buttons-group-label"
                    >
                      Sectors
                    </FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="Software & Web Development"
                      name="job_category"
                      style={{ color: "black" }}
                      onChange={handleFilterTypeAndCategory}
                    >
                      <FormControlLabel
                        value="Software & Web Development"
                        control={<Radio color="default" />}
                        label="Software & Web Development"
                      />
                      <FormControlLabel
                        value="Networking & Info Security"
                        control={<Radio color="default" />}
                        label="Networking & Info Security"
                      />
                      <FormControlLabel
                        value="IT Support & Infrastructure"
                        control={<Radio color="default" />}
                        label="IT Support & Infrastructure"
                      />
                      <FormControlLabel
                        value="QA & Testing"
                        control={<Radio color="default" />}
                        label="QA & Testing"
                      />
                      <FormControlLabel
                        value="Business Change & Transformation"
                        control={<Radio color="default" />}
                        label="Business Change & Transformation"
                      />

                      <FormControlLabel
                        value="IT & Engineering"
                        control={<Radio color="default" />}
                        label="IT & Engineering"
                      />
                    </RadioGroup>
                  </FormControl>
                  <div className="p-2 m-2 d-flex ">
                    <div>
                      <Button
                        onClick={handleFilterTypeAndCategorySearch}
                        style={{
                          height: "2rem",
                          color: "black",
                          borderColor: "rgb(30, 150, 190)",
                        }}
                        variant="outlined"
                        className="search-button mt-1"
                      >
                        Apply
                      </Button>
                    </div>
                    <div className="px-2">
                      <Button
                        onClick={handleClearFilterButton}
                        style={{
                          height: "2rem",
                          color: "black",
                          borderColor: "rgb(30, 150, 190)",
                        }}
                        variant="outlined"
                        className="search-button mt-1"
                      >
                        CLEAR
                      </Button>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
            <div className="d-flex flex-column justify-content-center jobs-container container-sm p-5 mt-1">
              <div className="job-count">{displayJobsCount()}</div>
              {filteredJobs.length === 0
                ? allJobs.slice(0, jobsVisible).map((job) => {
                    return (
                      <JobCard
                        role={job.role}
                        description={job.job_description}
                        salary={job.salary}
                        location={job.location}
                        category={job.category}
                        industry={job.industry}
                        consultant={job.consultant}
                        type={job.type}
                        job_category={job.job_category}
                        post_date={job.post_date}
                        job_ref={job.job_ref}
                        responsibilities={job.responsibilities}
                        skills={job.skills}
                      />
                    );
                  })
                : filteredJobs.slice(0, jobsVisible).map((job) => {
                    return (
                      <JobCard
                        role={job.role}
                        description={job.job_description}
                        salary={job.salary}
                        location={job.location}
                        category={job.category}
                        industry={job.industry}
                        consultant={job.consultant}
                        type={job.type}
                        job_category={job.job_category}
                        post_date={job.post_date}
                        job_ref={job.job_ref}
                        responsibilities={job.responsibilities}
                        skills={job.skills}
                      />
                    );
                  })}
              <div className="container d-flex justify-content-center">
                <Button
                  onClick={() => {
                    handleJobListLength(filtered ? filteredJobs : allJobs);
                  }}
                >
                  Load more
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="loading">
            <h4>Loading ...</h4>
            <LinearProgress />
          </div>
        )}
      </div>
    </div>
  );
}
SearchFilter.propTypes = {
  data: PropTypes.object,
  classOption: PropTypes.string,
};

SearchFilter.defaultProps = {
  classOption: "text-center",
};

export default SearchFilter;
