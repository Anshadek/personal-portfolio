import React, { useContext, useState } from "react";
import useAdminScripts from "../../hooks/useAdminScripts";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

const Login = () => {
  useAdminScripts();
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", { email, password });
      login(res.data.user, res.data.token); // store token and redirect
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="container-xxl">
      <div className="authentication-wrapper authentication-basic container-p-y">
        <div className="authentication-inner">
          <div className="card px-sm-6 px-0">
            <div className="card-body">
              {/* Logo */}
              <div className="app-brand justify-content-center">
                <a href="/" className="app-brand-link gap-2">
                  <span className="app-brand-text demo text-heading fw-bold">Anshad E K</span>
                </a>
              </div>

              {/* <h4 className="mb-1">Welcome to Sneat! 👋</h4>
              <p className="mb-6">Please sign in to your account and start the adventure</p> */}

              <form className="mb-6" onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="email" className="form-label">Email or Username</label>
                  <input
                    type="text"
                    id="email"
                    className="form-control"
                    placeholder="Enter your email or username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoFocus
                  />
                </div>

                <div className="mb-6 form-password-toggle">
                  <label htmlFor="password" className="form-label">Password</label>
                  <div className="input-group input-group-merge">
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <span className="input-group-text cursor-pointer">
                      <i className="icon-base bx bx-hide"></i>
                    </span>
                  </div>
                </div>

                {error && <p className="text-danger">{error}</p>}

                {/* <div className="mb-8 d-flex justify-content-between">
                  <div className="form-check mb-0">
                    <input className="form-check-input" type="checkbox" id="remember-me" />
                    <label className="form-check-label" htmlFor="remember-me">Remember Me</label>
                  </div>
                  <a href="#"><span>Forgot Password?</span></a>
                </div> */}

                <div className="mb-6">
                  <button type="submit" className="btn btn-primary d-grid w-100">Login</button>
                </div>
              </form>

              {/* <p className="text-center">
                <span>New on our platform? </span>
                <a href="#"><span>Create an account</span></a>
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
