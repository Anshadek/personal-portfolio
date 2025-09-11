import React from "react";

const ProjectImages = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      {/* Image Gallery Table */}
      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h5 className="card-title">Image Gallery List</h5>
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#imageModal"
          >
            Add Image
          </button>
        </div>
        <div className="table-responsive text-nowrap">
          <table className="table">
            <thead>
              <tr>
                <th>SI No.</th>
                <th>Image</th>
                <th>Image Title</th>
                <th>Description</th>
                <th>Linked Project</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="table-border-bottom-0">
              <tr>
                <td>1</td>
                <td>
                  <img
                    src="path/to/image.jpg"
                    alt="Image"
                    style={{ width: "80px", height: "auto" }}
                  />
                </td>
                <td>Homepage Banner</td>
                <td>Banner image for landing page</td>
                <td>Landing Page Redesign</td>
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
      <div className="modal fade" id="imageModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add / Edit Image</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="imageFile" className="form-label">
                  Image File
                </label>
                <input
                  type="file"
                  id="imageFile"
                  className="form-control"
                  accept="image/*"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="imageTitle" className="form-label">
                  Image Title
                </label>
                <input
                  type="text"
                  id="imageTitle"
                  className="form-control"
                  placeholder="Enter image title"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="imageDesc" className="form-label">
                  Image Description
                </label>
                <textarea
                  id="imageDesc"
                  className="form-control"
                  placeholder="Enter description"
                  rows="3"
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="linkedProject" className="form-label">
                  Linked Project
                </label>
                <select id="linkedProject" className="form-control">
                  <option value="">-- Select Project --</option>
                  <option value="Landing Page Redesign">Landing Page Redesign</option>
                  <option value="Mobile App Development">Mobile App Development</option>
                  {/* Dynamically load projects */}
                </select>
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
  );
};

export default ProjectImages;
