import React, { useState } from "react";
import Networking from "../../networking/Networking.jsx";

function AddJob() {
  const baseURL = "http://localhost:8000";

  const [jobDetails, setJobDetails] = useState({
    title: "",
    type: "",
    location: "",
    description: "",
    salary: "",
    client_id: "",
    category: "",
    industry: "",
    consultant: "",
  });

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setJobDetails((prev) => {
      return { ...prev, [name]: value };
    });

    console.log(jobDetails);
  };

  const postJobs = async () => {
    const res = await fetch(baseURL + "/post-job", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(jobDetails),
    });

    const data = await res.json();
    console.log(data);
  };

  return (
    <div>
      <input
        onChange={handleInputs}
        name="title"
        placeholder="title"
        type="text"
      ></input>
      <input
        onChange={handleInputs}
        name="type"
        placeholder="type"
        type="text"
      ></input>
      <input
        onChange={handleInputs}
        name="location"
        placeholder="location"
        type="text"
      ></input>
      <input
        onChange={handleInputs}
        name="description"
        placeholder="description"
        type="text"
      ></input>
      <input
        onChange={handleInputs}
        name="salary"
        placeholder="salary"
        type="text"
      ></input>
      <input
        onChange={handleInputs}
        name="client_id"
        placeholder="client_id"
        type="text"
      ></input>
      <select onChange={handleInputs} name="category">
        <option value="Software & Web Development">
          Software & Web Development
        </option>
        <option value="Networking & Info Security">
          Networking & Info Security
        </option>
        <option value="IT Support & Infrastructure">
          IT Support & Infrastructure
        </option>
        <option value="QA & Testing">QA & Testing</option>
        <option value="Business Change & Transformation">
          Business Change & Transformation
        </option>
      </select>

      <input
        onChange={handleInputs}
        name="industry"
        placeholder="industry"
        type="industry"
      ></input>
      <input
        onChange={handleInputs}
        name="consultant"
        placeholder="consultant"
        type="consultant"
      ></input>
      <button onClick={postJobs} className="btn btn-primary"></button>
    </div>
  );
}

export default AddJob;
