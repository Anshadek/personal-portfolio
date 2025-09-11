import React from 'react';

const Projects = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="content-wrapper">
      {/* Content */}
      <div className="container-xxl flex-grow-1 container-p-y">
        {/* Project Table */}
        <div className="card">
          <div className="card-header d-flex justify-content-between align-items-center">
            <h5 className="card-title">Project List</h5>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#projectModal"
            >
              Add Project
            </button>
          </div>
          <div className="table-responsive text-nowrap">
            <table className="table">
              <thead>
                <tr>
                  <th>SI No.</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Client</th>
                  <th>Project Date</th>
                  <th>Project URL</th>
                  <th>Description</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody className="table-border-bottom-0">
                <tr>
                  <td>1</td>
                  <td>Landing Page Redesign</td>
                  <td>Web Design</td>
                  <td>Acme Inc.</td>
                  <td>2025-07-01</td>
                  <td>
                    <a href="https://example.com" target="_blank" rel="noreferrer">
                      Visit
                    </a>
                  </td>
                  <td>Redesigned homepage and improved UX.</td>
                  <td>
                    <div className="dropdown">
                      <button
                        type="button"
                        className="btn p-0 dropdown-toggle hide-arrow"
                        data-bs-toggle="dropdown"
                      >
                        <i className="icon-base bx bx-dots-vertical-rounded"></i>
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          <i className="icon-base bx bx-edit-alt me-1"></i> Edit
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="icon-base bx bx-trash me-1"></i> Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                {/* Add more rows dynamically */}
              </tbody>
            </table>
          </div>
        </div>

        {/* Modal */}
        <div
          className="modal fade"
          id="projectModal"
          tabIndex="-1"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add / Edit Project</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="projectTitle" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    id="projectTitle"
                    className="form-control"
                    placeholder="Enter title"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="projectCategory" className="form-label">
                    Category
                  </label>
                  <select id="projectCategory" className="form-control">
                    <option value="">-- Select Category --</option>
                    <option value="Web Design">Web Design</option>
                    <option value="Mobile App">Mobile App</option>
                    <option value="UI/UX">UI/UX</option>
                    <option value="Branding">Branding</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="projectClient" className="form-label">
                    Client
                  </label>
                  <input
                    type="text"
                    id="projectClient"
                    className="form-control"
                    placeholder="Enter client name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="projectDate" className="form-label">
                    Project Date
                  </label>
                  <input type="date" id="projectDate" className="form-control" />
                </div>
                <div className="mb-3">
                  <label htmlFor="projectUrl" className="form-label">
                    Project URL
                  </label>
                  <input
                    type="url"
                    id="projectUrl"
                    className="form-control"
                    placeholder="Enter URL"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="projectDesc" className="form-label">
                    Description
                  </label>
                  <textarea
                    id="projectDesc"
                    className="form-control"
                    placeholder="Enter description"
                    rows="3"
                  ></textarea>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-label-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
