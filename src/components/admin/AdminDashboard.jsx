import React from 'react';

const AdminDashboard = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <div className="row">
        <div className="col-xxl-8 mb-6 order-0">
          <div className="card">
            <div className="d-flex align-items-start row">
              <div className="col-sm-7">
                <div className="card-body">
                  <h5 className="card-title text-primary mb-3">Congratulations John! 🎉</h5>
                  <p className="mb-6">
                    You have done 72% more sales today.<br />
                    Check your new badge in your profile.
                  </p>
                  <a href="#" className="btn btn-sm btn-outline-primary">View Badges</a>
                </div>
              </div>
              <div className="col-sm-5 text-center text-sm-left">
                <div className="card-body pb-0 px-0 px-md-6">
                  <img
                    src="../../assets/img/illustrations/man-with-laptop.png"
                    height="175"
                    alt="View Badge User"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional sections go here */}
        <div className="col-xxl-4 col-lg-12 col-md-4 order-1">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-6 mb-6">
              <div className="card h-100">
                <div className="card-body">
                  <div className="card-title d-flex align-items-start justify-content-between mb-4">
                    <div className="avatar flex-shrink-0">
                      <img
                        src="../../assets/img/icons/unicons/chart-success.png"
                        alt="chart success"
                        className="rounded"
                      />
                    </div>
                    <div className="dropdown">
                      <button
                        className="btn p-0"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="icon-base bx bx-dots-vertical-rounded text-body-secondary"></i>
                      </button>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a className="dropdown-item" href="#">View More</a>
                        <a className="dropdown-item" href="#">Delete</a>
                      </div>
                    </div>
                  </div>
                  <p className="mb-1">Profit</p>
                  <h4 className="card-title mb-3">$12,628</h4>
                  <small className="text-success fw-medium">
                    <i className="icon-base bx bx-up-arrow-alt"></i> +72.80%
                  </small>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 col-6 mb-6">
              <div className="card h-100">
                <div className="card-body">
                  <div className="card-title d-flex align-items-start justify-content-between mb-4">
                    <div className="avatar flex-shrink-0">
                      <img
                        src="../../assets/img/icons/unicons/wallet-info.png"
                        alt="wallet info"
                        className="rounded"
                      />
                    </div>
                    <div className="dropdown">
                      <button
                        className="btn p-0"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="icon-base bx bx-dots-vertical-rounded text-body-secondary"></i>
                      </button>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a className="dropdown-item" href="#">View More</a>
                        <a className="dropdown-item" href="#">Delete</a>
                      </div>
                    </div>
                  </div>
                  <p className="mb-1">Sales</p>
                  <h4 className="card-title mb-3">$4,679</h4>
                  <small className="text-success fw-medium">
                    <i className="icon-base bx bx-up-arrow-alt"></i> +28.42%
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* You should continue with the same pattern for:
            - Total Revenue
            - Profile Report
            - Order Statistics
            - Expense Overview
            - Transactions
        */}

        {/* Example: Button showing last year dynamically */}
        <button type="button" className="btn btn-outline-primary">
          {currentYear - 1}
        </button>

      </div>
    </div>
  );
};

export default AdminDashboard;
