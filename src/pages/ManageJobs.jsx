import { useEffect, useState } from "react";
import API from "../services/api";

function ManageJobs() {

  const [jobs, setJobs] = useState([]);
  const [editingJob, setEditingJob] = useState(null);

  async function fetchJobs() {

    try {

      const response = await API.get("/jobs");

      setJobs(response.data);

    } catch (error) {

      console.error(error);
    }
  }
const deleteJob = async (id) => {

  const confirmDelete = window.confirm(
    "Are you sure you want to delete this job?"
  );

  if (!confirmDelete) {
    return;
  }

  try {

    const token = localStorage.getItem("token");

    await API.delete(
      `/jobs/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    alert("Job Deleted Successfully");

    fetchJobs();

  } catch (error) {

    console.error(error);

    if (error.response?.status === 401) {

      alert(
        "You are not authorized to delete this job."
      );

    } else {

      alert("Delete Failed");
    }
  }
};
const editJob = (job) => {

//   alert("Edit Clicked");

//   console.log("Editing:", job);

  setEditingJob({
    ...job
  });
};
const updateJob = async () => {

  try {

    const token =
      localStorage.getItem("token");

    await API.put(
      `/jobs/${editingJob.id}`,
      editingJob,
      {
        headers: {
          Authorization:
            `Bearer ${token}`
        }
      }
    );

    alert("Job Updated Successfully");

    setEditingJob(null);

    fetchJobs();

  } catch (error) {

    console.error(error);

    alert("Update Failed");
  }
};
  useEffect(() => {

  const loadJobs = async () => {

    try {

      const response = await API.get("/jobs");

      setJobs(response.data);

    } catch (error) {

      console.error(error);
    }
  };

  loadJobs();

}, []);

 return (
  <div className="container mt-5">

    <h2 className="mb-4">
      Manage Jobs
    </h2>
    

{editingJob && (


  <div className="card mb-4">

    <div className="card-body">

     <h4>Edit Job</h4>

      <input
        type="text"
        className="form-control mb-2"
        value={editingJob.title}
        onChange={(e) =>
          setEditingJob({
            ...editingJob,
            title: e.target.value
          })
        }
      />

      <input
        type="text"
        className="form-control mb-2"
        value={editingJob.location}
        onChange={(e) =>
          setEditingJob({
            ...editingJob,
            location: e.target.value
          })
        }
      />

      <input
        type="number"
        className="form-control mb-2"
        value={editingJob.salary}
        onChange={(e) =>
          setEditingJob({
            ...editingJob,
            salary: e.target.value
          })
        }
      />

     <button
  className="btn btn-success"
  onClick={updateJob}
>
  Update Job
</button>

    </div>

  </div>
  

)}
    <div className="row">

      {jobs.map((job) => (

        <div
          key={job.id}
          className="col-md-6 mb-4"
        >

          <div className="card shadow h-100">

            <div className="card-body">

              <h4 className="card-title">
                {job.title}
              </h4>

              <p>
                <strong>Location:</strong>
                {" "}
                {job.location}
              </p>

              <p>
                <strong>Salary:</strong>
                {" "}
                ₹{job.salary}
              </p>

              <p>
                <strong>Experience:</strong>
                {" "}
                {job.experienceRequired} Years
              </p>

              <p>
                <strong>Type:</strong>
                {" "}
                {job.employmentType}
              </p>

              <p>
                <strong>Status:</strong>
                {" "}
                {job.status}
              </p>

              <button
  className="btn btn-warning me-2"
  onClick={() => {
    alert("Edit Clicked");
    editJob(job);
  }}
>
  Edit Job
</button>

<button
  className="btn btn-danger"
  onClick={() =>
    deleteJob(job.id)
  }
>
  Delete Job
</button>

            </div>

          </div>

        </div>

      ))}

    </div>

  </div>
);

}

export default ManageJobs;