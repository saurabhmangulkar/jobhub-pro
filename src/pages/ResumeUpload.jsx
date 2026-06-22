import { useState } from "react";
import API from "../services/api";

function ResumeUpload() {

  const [file, setFile] = useState(null);

  const handleUpload = async () => {

    if (!file) {
      alert("Please select a file");
      return;
    }

    try {

      const userId =
        localStorage.getItem("userId");

      const token =
        localStorage.getItem("token");

      const formData =
        new FormData();

      formData.append(
        "file",
        file
      );

      await API.post(
        `/resumes/upload/${userId}`,
        formData,
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
            "Content-Type":
              "multipart/form-data"
          }
        }
      );

      alert(
        "Resume Uploaded Successfully"
      );

    } catch (error) {

      console.error(error);

      alert(
        "Upload Failed"
      );
    }
  };

  return (
    <div className="container mt-5">

      <h2>Upload Resume</h2>

      <input
        type="file"
        className="form-control mb-3"
        onChange={(e) =>
          setFile(e.target.files[0])
        }
      />

      <button
        className="btn btn-primary"
        onClick={handleUpload}
      >
        Upload Resume
      </button>

    </div>
  );
}

export default ResumeUpload;