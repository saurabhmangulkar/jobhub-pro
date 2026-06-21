import { useEffect, useState } from "react";
import { getAllJobs } from "../services/jobService";
import { Link } from "react-router-dom";
function Jobs() {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {

        const fetchJobs = async () => {

            try {

                const data = await getAllJobs();

                console.log(data);

                setJobs(data);

            } catch (error) {

                console.error(error);
            }
        };

        fetchJobs();

    }, []);

    return (
        <div className="container mt-4">

            <h2 className="mb-4">
                Available Jobs
            </h2>

            <div className="row">

                {jobs.map((job) => (

                    <div
                        key={job.id}
                        className="col-md-6 mb-4"
                    >

                        <div className="card shadow h-100">

                            <div className="card-body">

                                <h4>{job.title}</h4>

                                <p>
                                    <strong>Company:</strong>{" "}
                                    {job.companyName || "Not Assigned"}
                                </p>

                                <p>
                                    <strong>Location:</strong>{" "}
                                    {job.location}
                                </p>

                                <p>
                                    <strong>Salary:</strong>{" "}
                                    ₹{job.salary}
                                </p>

                                <p>
                                    <strong>Experience:</strong>{" "}
                                    {job.experienceRequired} Years
                                </p>

                                <p>
                                    <strong>Type:</strong>{" "}
                                    {job.employmentType}
                                </p>

                                <p>
                                    <strong>Status:</strong>{" "}
                                    {job.status}
                                </p>

                                <Link
                                    to={`/jobs/${job.id}`}
                                    className="btn btn-primary"
                                >
                                    View Details
                                </Link>

                            </div>s

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default Jobs;