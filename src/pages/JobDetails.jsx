import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";

function JobDetails() {

  const { id } = useParams();

  const [job, setJob] = useState(null);

  useEffect(() => {

    const fetchJob = async () => {

      try {

        const response =
          await API.get(`/jobs/dto/${id}`);

        setJob(response.data);

      } catch (error) {

        console.error(error);
      }
    };

    fetchJob();

  }, [id]);

  if (!job) {

    return (
      <div className="container mt-5">
        <h3>Loading...</h3>
      </div>
    );
  }

  return (
    <div className="container mt-5">

      <div className="card shadow">

        <div className="card-body">

          <h2>{job.title}</h2>

          <hr />

          <p>
            <strong>Company:</strong>{" "}
            {job.companyName || "Not Assigned"}
          </p>

          <p>
            <strong>Description:</strong>{" "}
            {job.description}
          </p>

          <p>
            <strong>Location:</strong>{" "}
            {job.location}
          </p>

          <p>
            <strong>Salary:</strong> ₹
            {job.salary}
          </p>

          <p>
            <strong>Experience:</strong>{" "}
            {job.experienceRequired} Years
          </p>

          <p>
            <strong>Employment Type:</strong>{" "}
            {job.employmentType}
          </p>

          <p>
            <strong>Status:</strong>{" "}
            {job.status}
          </p>

          <button className="btn btn-success">
            Apply Now
          </button>

        </div>

      </div>

    </div>
  );
}

export default JobDetails;