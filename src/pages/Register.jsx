import { useState } from "react";
import { registerUser } from "../services/authService";

function Register() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    roleName: "JOB_SEEKER"
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response =
        await registerUser(formData);

      console.log(response);

      alert("Registration Successful");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phone: "",
        roleName: "JOB_SEEKER"
      });

    } catch (error) {

      console.error(error);

      alert("Registration Failed");
    }
  };

  return (
    <div className="container mt-5">

      <div className="row justify-content-center">

        <div className="col-md-6">

          <div className="card shadow">

            <div className="card-body">

              <h2 className="text-center mb-4">
                Register
              </h2>

              <form onSubmit={handleSubmit}>

                <div className="mb-3">
                  <label>First Name</label>

                  <input
                    type="text"
                    className="form-control"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label>Last Name</label>

                  <input
                    type="text"
                    className="form-control"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label>Email</label>

                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label>Password</label>

                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label>Phone</label>

                  <input
                    type="text"
                    className="form-control"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label>Role</label>

                  <select
                    className="form-control"
                    name="roleName"
                    value={formData.roleName}
                    onChange={handleChange}
                  >
                    <option value="JOB_SEEKER">
                      Job Seeker
                    </option>

                    <option value="RECRUITER">
                      Recruiter
                    </option>

                    <option value="ADMIN">
                      Admin
                    </option>

                  </select>
                </div>

                <button
                  type="submit"
                  className="btn btn-success w-100"
                >
                  Register
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Register;