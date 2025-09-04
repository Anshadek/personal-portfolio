import React from 'react';

const Education = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="content-wrapper">
      <div className="container-xxl flex-grow-1 container-p-y">
        {/* Education Details Layout */}
        <div className="row mb-6 gy-6">
          <div className="col-xl">
            <div className="card">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h5 className="mb-0">Education Details</h5>
                <small className="text-body float-end"></small>
                <button type="button" className="btn btn-primary">Add</button>
              </div>
              <div className="card-body">
                <form>
                  {/* Course */}
                  <div className="mb-6">
                    <label className="form-label">Course</label>
                    <div className="input-group input-group-merge">
                      <span className="input-group-text">
                        <i className="icon-base bx bx-book"></i>
                      </span>
                      <input type="text" className="form-control" placeholder="B.Tech in Computer Science" />
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="mb-6">
                    <label className="form-label">Duration</label>
                    <div className="input-group input-group-merge">
                      <span className="input-group-text">
                        <i className="icon-base bx bx-time-five"></i>
                      </span>
                      <input type="text" className="form-control" placeholder="2018 - 2022" />
                    </div>
                  </div>

                  {/* College Name */}
                  <div className="mb-6">
                    <label className="form-label">College Name</label>
                    <div className="input-group input-group-merge">
                      <span className="input-group-text">
                        <i className="icon-base bx bx-building-house"></i>
                      </span>
                      <input type="text" className="form-control" placeholder="Indian Institute of Technology" />
                    </div>
                  </div>

                  {/* College Address */}
                  <div className="mb-6">
                    <label className="form-label">College Address</label>
                    <div className="input-group input-group-merge">
                      <span className="input-group-text">
                        <i className="icon-base bx bx-map"></i>
                      </span>
                      <input type="text" className="form-control" placeholder="Powai, Mumbai, India" />
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <label className="form-label">Description</label>
                    <div className="input-group input-group-merge">
                      <span className="input-group-text">
                        <i className="icon-base bx bx-comment-detail"></i>
                      </span>
                      <textarea className="form-control" placeholder="Brief about your course or projects..."></textarea>
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

export default Education;
