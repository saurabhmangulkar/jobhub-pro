import { Link } from "react-router-dom";

function Dashboard() {

  const email =
    localStorage.getItem("email");

  return (
    <div className="container mt-5">

      <h2 className="mb-4">
        Welcome {email}
      </h2>

      <div className="row">

        <div className="col-md-4 mb-4">
          <div className="card shadow">
            <div className="card-body text-center">

              <h4>Browse Jobs</h4>

              <p>
                Search and apply for jobs.
              </p>

              <Link
                to="/jobs"
                className="btn btn-primary"
              >
                View Jobs
              </Link>

            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow">
            <div className="card-body text-center">

              <h4>My Applications</h4>

              <p>
                Track your applications.
              </p>

              <Link
                to="/my-applications"
                className="btn btn-success"
              >
                View Applications
              </Link>

            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow">
            <div className="card-body text-center">

              <h4>Upload Resume</h4>

              <p>
                Upload your latest resume.
              </p>

              <Link
                to="/upload-resume"
                className="btn btn-warning"
              >
                Upload Resume
              </Link>
              <Link
  to="/my-resume"
  className="btn btn-info"
>
  View Resume
</Link>

            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;