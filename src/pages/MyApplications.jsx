import { useEffect, useState } from "react";
import API from "../services/api";

function MyApplications() {

  const [applications, setApplications] = useState([]);

  useEffect(() => {

    const fetchApplications = async () => {

      try {

        const userId =
          localStorage.getItem("userId");

        const token =
          localStorage.getItem("token");

        const response =
          await API.get(
            `/applications/user/${userId}`,
            {
              headers: {
                Authorization:
                  `Bearer ${token}`
              }
            }
          );

        setApplications(
          response.data
        );

      } catch (error) {

        console.error(error);
      }
    };

    fetchApplications();

  }, []);

  return (
    <div className="container mt-4">

      <h2 className="mb-4">
        My Applications
      </h2>

      <div className="row">

        {applications.map((app) => (

          <div
            key={app.id}
            className="col-md-6 mb-3"
          >

            <div className="card shadow">

              <div className="card-body">

                <h5>
                  {app.jobTitle}
                </h5>

                <p>
                  <strong>Status:</strong>
                  {" "}
                  {app.status}
                </p>

                <p>
                  <strong>Applied At:</strong>
                  {" "}
                  {app.appliedAt}
                </p>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default MyApplications;