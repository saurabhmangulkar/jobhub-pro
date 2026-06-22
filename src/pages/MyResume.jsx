import { useEffect, useState } from "react";
import API from "../services/api";

function MyResume() {

  const [resume, setResume] =
    useState(null);

  useEffect(() => {

    const fetchResume = async () => {

      try {

        const userId =
          localStorage.getItem("userId");

        const token =
          localStorage.getItem("token");

        const response =
          await API.get(
            `/resumes/user/${userId}`,
            {
              headers: {
                Authorization:
                  `Bearer ${token}`
              }
            }
          );

        setResume(response.data);

      } catch (error) {

        console.error(error);
      }
    };

    fetchResume();

  }, []);

  const downloadResume = () => {

    const userId =
      localStorage.getItem("userId");

    window.open(
      `http://localhost:8080/api/resumes/download/${userId}`,
      "_blank"
    );
  };

  if (!resume) {

    return (
      <div className="container mt-5">
        <h3>No Resume Found</h3>
      </div>
    );
  }

  return (
    <div className="container mt-5">

      <div className="card shadow">

        <div className="card-body">

          <h2>My Resume</h2>

          <p>
            <strong>File Name:</strong>
            {" "}
            {resume.fileName}
          </p>

          <p>
            <strong>User:</strong>
            {" "}
            {resume.userName}
          </p>

          <button
            className="btn btn-primary"
            onClick={downloadResume}
          >
            Download Resume
          </button>

        </div>

      </div>

    </div>
  );
}

export default MyResume;