import React, { useEffect, useState } from "react";
import {
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../../api/categoryApi"; // adjust path if needed

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({ id: null, name: "" });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // fetch categories
  const fetchCategories = () => {
    setLoading(true);
    getCategory()
      .then((res) => {
        setCategories(Array.isArray(res.data) ? res.data : []);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Failed to load categories");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // handle save (create or update)
  const handleSave = () => {
    const action = formData.id
      ? updateCategory(formData.id, { name: formData.name })
      : createCategory({ name: formData.name });

    action
    .then(() => {
      setSuccess(formData.id ? "Category updated!" : "Category created!");
      setFormData({ id: null, name: "" });
      fetchCategories();
    
      const modalEl = document.getElementById("categoryModal");
      const modal = window.bootstrap.Modal.getOrCreateInstance(modalEl);
      modal.hide();
    
      // Cleanup any leftover backdrop
      document.body.classList.remove("modal-open");
      document.querySelectorAll(".modal-backdrop").forEach((el) => el.remove());
    })
      .catch((err) => setError(err.message || "Failed to save category"));
  };

  // handle edit
  const handleEdit = (cat) => {
    setFormData({ id: cat.id, name: cat.name });
    new window.bootstrap.Modal(document.getElementById("categoryModal")).show();
  };

  // handle delete
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      deleteCategory(id)
        .then(() => {
          setSuccess("Category deleted!");
          fetchCategories();
        })
        .catch((err) => setError(err.message || "Failed to delete category"));
    }
  };

  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      {/* Category Table */}
      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h5 className="card-title">Category List</h5>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setFormData({ id: null, name: "" })}
            data-bs-toggle="modal"
            data-bs-target="#categoryModal"
          >
            Add Category
          </button>
        </div>
        <div className="table-responsive text-nowrap">
          {loading ? (
            <p className="p-3">Loading...</p>
          ) : (
            <table className="table">
              <thead>
                <tr>
                  <th>SI No.</th>
                  <th>Category Name</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody className="table-border-bottom-0">
                {categories.length > 0 ? (
                  categories.map((cat, index) => (
                    <tr key={cat.id}>
                      <td>{index + 1}</td>
                      <td>{cat.name}</td>
                      <td>
                      <button
                              className="btn btn-danger"
                              onClick={() => handleDelete(cat.id)}
                            >
                              <i className="icon-base bx bx-trash me-1"></i> 
                            </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="text-center p-3">
                      No categories found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
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
              <h5 className="modal-title">
                {formData.id ? "Edit Category" : "Add Category"}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Category Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter category name"
                />
              </div>
              {/* <div className="mb-3">
                <label htmlFor="status" className="form-label">
                  Status
                </label>
                <select
                  id="status"
                  className="form-control"
                  value={formData.status}
                  onChange={handleChange}
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div> */}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-label-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={handleSave}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>

      {error && <p className="text-danger mt-2">{error}</p>}
      {success && <p className="text-success mt-2">{success}</p>}
    </div>
  );
};

export default Category;
