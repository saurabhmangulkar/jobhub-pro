import { Link } from "react-router-dom";

function RecruiterDashboard() {

  return (
    <div className="container mt-5">

      <h2 className="mb-4">
        Recruiter Dashboard
      </h2>

      <div className="row">

        <div className="col-md-3 mb-4">
          <div className="card shadow">
            <div className="card-body text-center">

              <h4>Create Job</h4>

              <p>
                Post a new job opening
              </p>

              <Link
                to="/create-job"
                className="btn btn-primary"
              >
                Create
              </Link>

            </div>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div className="card shadow">
            <div className="card-body text-center">

              <h4>Manage Jobs</h4>

              <p>
                Edit and delete jobs
              </p>

              <Link
                to="/manage-jobs"
                className="btn btn-success"
              >
                Manage
              </Link>

            </div>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div className="card shadow">
            <div className="card-body text-center">

              <h4>Applicants</h4>

              <p>
                View applications
              </p>

              <Link
                to="/applicants"
                className="btn btn-warning"
              >
                View
              </Link>

            </div>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div className="card shadow">
            <div className="card-body text-center">

              <h4>Statistics</h4>

              <p>
                View dashboard stats
              </p>

              <button
                className="btn btn-info"
              >
                Coming Soon
              </button>

            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default RecruiterDashboard;