import { useState } from "react";
import API from "../services/api";

function ViewApplicants() {

  const [jobId, setJobId] = useState("");
  const [applications, setApplications] = useState([]);

  const loadApplicants = async () => {

  try {

    const token =
      localStorage.getItem("token");

    const response =
      await API.get(
        `/applications/job/${jobId}`,
        {
          headers: {
            Authorization:
              `Bearer ${token}`
          }
        }
      );

    setApplications(response.data);

  } catch (error) {

    console.error(error);

    alert("Failed to load applicants");
  }
};
 const updateStatus = async (
  applicationId,
  status
) => {

  try {

    const token =
      localStorage.getItem("token");

    await API.put(
      `/applications/${applicationId}/status?status=${status}`,
      {},
      {
        headers: {
          Authorization:
            `Bearer ${token}`
        }
      }
    );

    alert("Status Updated");

    loadApplicants();

  } catch (error) {

    console.error(error);

    alert("Update Failed");
  }
};
  return (
    <div className="container mt-5">

      <h2 className="mb-4">
        View Applicants
      </h2>

      <div className="mb-3">

        <input
          type="number"
          className="form-control"
          placeholder="Enter Job ID"
          value={jobId}
          onChange={(e) =>
            setJobId(e.target.value)
          }
        />

      </div>

      <button
        className="btn btn-primary mb-4"
        onClick={loadApplicants}
      >
        Load Applicants
      </button>

      {applications.map((app) => (

        <div
          key={app.id}
          className="card mb-3 shadow"
        >

          <div className="card-body">

            <h5>
              {app.applicantName}
            </h5>

            <p>
              Job:
              {" "}
              {app.jobTitle}
            </p>

            <p>
              Status:
              {" "}
              {app.status}
            </p>

            <button
              className="btn btn-success me-2"
              onClick={() =>
                updateStatus(
                  app.id,
                  "SHORTLISTED"
                )
              }
            >
              Shortlist
            </button>

            <button
              className="btn btn-danger"
              onClick={() =>
                updateStatus(
                  app.id,
                  "REJECTED"
                )
              }
            >
              Reject
            </button>

          </div>

        </div>

      ))}

    </div>
  );
}

export default ViewApplicants;