import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";
function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
const handleSubmit = async (e) => {

  e.preventDefault();

  try {

    const response = await loginUser({
      email,
      password
    });

    console.log(response);

    localStorage.setItem(
      "token",
      response.token
    );

    localStorage.setItem(
      "userId",
      response.userId
    );

    localStorage.setItem(
      "email",
      response.email
    );

    localStorage.setItem(
      "role",
      response.role
    );

    alert("Login Successful");
navigate("/dashboard");
  } catch (error) {

    console.error(error);

    alert("Invalid Credentials");
  }
};

  return (
    <div className="container mt-5">

      <div className="row justify-content-center">

        <div className="col-md-6">

          <div className="card">

            <div className="card-body">

              <h2 className="text-center mb-4">
                Login
              </h2>

              <form onSubmit={handleSubmit}>

                <div className="mb-3">
                  <label>Email</label>

                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    }
                  />
                </div>

                <div className="mb-3">
                  <label>Password</label>

                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) =>
                      setPassword(e.target.value)
                    }
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100"
                >
                  Login
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;