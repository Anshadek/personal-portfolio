import React from 'react';

const Category = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      {/* Category Table */}
      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h5 className="card-title">Category List</h5>
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#categoryModal"
          >
            Add Category
          </button>
        </div>
        <div className="table-responsive text-nowrap">
          <table className="table">
            <thead>
              <tr>
                <th>SI No.</th> {/* New Serial Number Column */}
                <th>Category Name</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="table-border-bottom-0">
              <tr>
                <td>1</td>
                <td>Electronics</td>
                <td>
                  <span className="badge bg-label-success">Active</span>
                </td>
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
                      <a className="dropdown-item" href="javascript:void(0);">
                        <i className="icon-base bx bx-edit-alt me-1"></i> Edit
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        <i className="icon-base bx bx-trash me-1"></i> Delete
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Clothing</td>
                <td>
                  <span className="badge bg-label-warning">Inactive</span>
                </td>
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
                      <a className="dropdown-item" href="javascript:void(0);">
                        <i className="icon-base bx bx-edit-alt me-1"></i> Edit
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        <i className="icon-base bx bx-trash me-1"></i> Delete
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      <div
        className="modal fade"
        id="categoryModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add / Edit Category</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="categoryName" className="form-label">
                  Category Name
                </label>
                <input
                  type="text"
                  id="categoryName"
                  className="form-control"
                  placeholder="Enter category name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="categoryStatus" className="form-label">
                  Status
                </label>
                <select id="categoryStatus" className="form-control">
                  <option value="active" defaultValue>
                    Active
                  </option>
                  <option value="inactive">Inactive</option>
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

export default Category;
