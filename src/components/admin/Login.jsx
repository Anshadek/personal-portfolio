import React from "react";
import useAdminScripts from '../../hooks/useAdminScripts';

const Login = () => {
  useAdminScripts();
  return (
    <div className="container-xxl">
      <div className="authentication-wrapper authentication-basic container-p-y">
        <div className="authentication-inner">
          {/* Register */}
          <div className="card px-sm-6 px-0">
            <div className="card-body">
              {/* Logo */}
              <div className="app-brand justify-content-center">
                <a href="/" className="app-brand-link gap-2">
                  <span className="app-brand-logo demo text-primary">
                    <svg
                      width="25"
                      viewBox="0 0 25 42"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <defs>
                        <path
                          id="path-1"
                          d="M13.79,0.36L3.4,7.44C0.57,9.69-0.38,12.48,0.56,15.8C0.69,16.23,1.1,17.79,3.12,19.23C3.81,19.72,5.32,20.38,7.65,21.22L7.6,21.25L2.63,24.55C0.45,26.3,0.09,28.51,1.56,31.17C2.84,32.82,5.21,33.26,7.09,32.54C8.35,32.06,11.46,30,16.42,26.37C18.03,24.5,18.7,22.45,18.41,20.24C17.96,17.53,16.18,15.58,13.05,14.37L10.92,13.47L18.62,7.98L13.79,0.36Z"
                        />
                      </defs>
                      <use fill="currentColor" xlinkHref="#path-1" />
                    </svg>
                  </span>
                  <span className="app-brand-text demo text-heading fw-bold">
                    Sneat
                  </span>
                </a>
              </div>
              {/* /Logo */}

              <h4 className="mb-1">Welcome to Sneat! 👋</h4>
              <p className="mb-6">
                Please sign in to your account and start the adventure
              </p>

              <form id="formAuthentication" className="mb-6" action="#">
                <div className="mb-6">
                  <label htmlFor="email" className="form-label">
                    Email or Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    name="email-username"
                    placeholder="Enter your email or username"
                    autoFocus
                  />
                </div>
                <div className="mb-6 form-password-toggle">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <div className="input-group input-group-merge">
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      name="password"
                      placeholder="••••••••••••"
                    />
                    <span className="input-group-text cursor-pointer">
                      <i className="icon-base bx bx-hide"></i>
                    </span>
                  </div>
                </div>
                <div className="mb-8">
                  <div className="d-flex justify-content-between">
                    <div className="form-check mb-0">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="remember-me"
                      />
                      <label className="form-check-label" htmlFor="remember-me">
                        Remember Me
                      </label>
                    </div>
                    <a href="#">
                      <span>Forgot Password?</span>
                    </a>
                  </div>
                </div>
                <div className="mb-6">
                  <button className="btn btn-primary d-grid w-100" type="submit">
                    Login
                  </button>
                </div>
              </form>

              <p className="text-center">
                <span>New on our platform? </span>
                <a href="#">
                  <span>Create an account</span>
                </a>
              </p>
            </div>
          </div>
          {/* /Register */}
        </div>
      </div>
    </div>
  );
};

export default Login;
