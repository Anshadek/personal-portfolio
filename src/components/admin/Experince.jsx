import React from 'react';

const Experience = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="content-wrapper">
      <div className="container-xxl flex-grow-1 container-p-y">
        {/* Experience Details Layout */}
        <div className="row mb-6 gy-6">
          <div className="col-xl">
            <div className="card">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h5 className="mb-0">Experience Details</h5>
                <small className="text-body float-end"></small>
                <button type="button" className="btn btn-primary">Add</button>
              </div>
              <div className="card-body">
                <form>
                  {/* Job Role */}
                  <div className="mb-6">
                    <label className="form-label">Job Role</label>
                    <div className="input-group input-group-merge">
                      <span className="input-group-text"><i className="icon-base bx bx-briefcase"></i></span>
                      <input type="text" className="form-control" placeholder="Software Developer" />
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="mb-6">
                    <label className="form-label">Duration</label>
                    <div className="input-group input-group-merge">
                      <span className="input-group-text"><i className="icon-base bx bx-time-five"></i></span>
                      <input type="text" className="form-control" placeholder="2020 - 2024" />
                    </div>
                  </div>

                  {/* Company Name */}
                  <div className="mb-6">
                    <label className="form-label">Company Name</label>
                    <div className="input-group input-group-merge">
                      <span className="input-group-text"><i className="icon-base bx bx-building"></i></span>
                      <input type="text" className="form-control" placeholder="ABC Technologies Pvt Ltd" />
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div className="mb-6">
                    <label className="form-label">Responsibilities</label>
                    <div className="input-group input-group-merge">
                      <span className="input-group-text"><i className="icon-base bx bx-task"></i></span>
                      <textarea
                        className="form-control"
                        rows="4"
                        placeholder={`• Developed REST APIs
• Managed deployments
• Led a team of 3 junior developers...`}
                      ></textarea>
                    </div>
                  </div>

                  {/* Submit */}
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
};

export default Experience;
