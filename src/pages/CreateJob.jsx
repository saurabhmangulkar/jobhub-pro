import { useState } from "react";
import API from "../services/api";

function CreateJob() {

  const [job, setJob] = useState({
    title: "",
    description: "",
    location: "",
    salary: "",
    experienceRequired: "",
    employmentType: "FULL_TIME",
    status: "OPEN"
  });

  const handleChange = (e) => {

    setJob({
      ...job,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const token =
        localStorage.getItem("token");

      const response =
        await API.post(
          "/jobs",
          job,
          {
            headers: {
              Authorization:
                `Bearer ${token}`
            }
          }
        );

      console.log(response.data);

      alert("Job Created Successfully");

      setJob({
        title: "",
        description: "",
        location: "",
        salary: "",
        experienceRequired: "",
        employmentType: "FULL_TIME",
        status: "OPEN"
      });

    } catch (error) {

      console.error(error);

      alert("Failed to Create Job");
    }
  };

  return (
    <div className="container mt-5">

      <div className="card shadow">

        <div className="card-body">

          <h2 className="mb-4">
            Create Job
          </h2>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="title"
              placeholder="Job Title"
              className="form-control mb-3"
              value={job.title}
              onChange={handleChange}
              required
            />

            <textarea
              name="description"
              placeholder="Description"
              className="form-control mb-3"
              value={job.description}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="location"
              placeholder="Location"
              className="form-control mb-3"
              value={job.location}
              onChange={handleChange}
              required
            />

            <input
              type="number"
              name="salary"
              placeholder="Salary"
              className="form-control mb-3"
              value={job.salary}
              onChange={handleChange}
              required
            />

            <input
              type="number"
              name="experienceRequired"
              placeholder="Experience Required"
              className="form-control mb-3"
              value={job.experienceRequired}
              onChange={handleChange}
            />

            <select
              name="employmentType"
              className="form-control mb-3"
              value={job.employmentType}
              onChange={handleChange}
            >
              <option value="FULL_TIME">
                FULL_TIME
              </option>

              <option value="PART_TIME">
                PART_TIME
              </option>

              <option value="INTERNSHIP">
                INTERNSHIP
              </option>
            </select>

            <button
              type="submit"
              className="btn btn-primary"
            >
              Create Job
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default CreateJob;