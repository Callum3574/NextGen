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
import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { BASE_URL } from "../../networking";

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

  const fetchPosts = async () => {
    try {
      const res = await fetch(BASE_URL + "/all-jobs");
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
          <div className=" mb-3 search-title d-flex justify-content-center flex-row w-100">
            <div className="d-flex">
              <h4
                style={{
                  color: "white",
                  textDecoration: "underline rgb(70, 133, 142)",
                }}
              >
                Start your job search
              </h4>
            </div>
            <div></div>
          </div>
          <div className="search-nav search-border container d-flex justify-content-start w-100 bg-blue">
            <div className="res-container d-flex">
              <div className="res-search px-1">
                <TextField
                  onChange={handleSearchInput}
                  name="jobTitle"
                  placeholder="Job title or Keywords"
                  id="input-with-icon-textfield"
                  className="text-filter text-field mb-5 px-5 "
                  label="Keywords"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon style={{ color: "white" }} />
                      </InputAdornment>
                    ),
                    inputProps: {
                      style: {
                        background: "transparent",
                        border: "none",
                      },
                    },
                  }}
                  InputLabelProps={{ className: "textfield-label" }}
                  variant="standard"
                />
              </div>
              <div className="res-search px-1">
                <TextField
                  onChange={handleSearchInput}
                  name="location"
                  placeholder="Location"
                  id="input-with-icon-textfield"
                  className="text-filter text-field mb-5 px-5 "
                  label="Location"
                  InputLabelProps={{ className: "textfield-label" }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationOnIcon style={{ color: "white" }} />
                      </InputAdornment>
                    ),
                    inputProps: {
                      style: {
                        background: "transparent",
                        border: "none",
                      },
                    },
                  }}
                  variant="standard"
                />
              </div>
            </div>
            <div className="res-search-button px-1">
              <Button
                onClick={handleSearchFilter}
                style={{
                  height: "2rem",
                  color: "white",
                  borderColor: "rgb(70, 133, 142)",
                }}
                variant="outlined"
                className="search-button mt-7 px-6 m-2"
              >
                SEARCH
              </Button>
            </div>
          </div>
        </Box>
      </div>

      <div className="d-flex justify-content-center">
        {allJobs.length > 0 ? (
          <div className="filter-res d-flex  bd-highlight justify-content-center p-1 flex-row">
            <div className="filter-box d-flex justify-content-start flex-column mt-2  ">
              <h4 className="filter-title mb-5">Filter Results</h4>
              <FormControl fullWidth>
                <label>Job Type</label>

                <NativeSelect
                  name="type"
                  onChange={handleFilterTypeAndCategory}
                  className="w-75"
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
                  className="w-75"
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
            <div className="segregation"></div>

            <div className="d-flex flex-column   container-md p-2 mt-1 ">
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
