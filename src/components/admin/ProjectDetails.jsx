import React, { useEffect, useState } from "react";
import {
  getProject,
  createProject,
  updateProject,
  deleteProject,
} from "../../api/projectApi";
import { getCategory } from "../../api/categoryApi"; // 👈 new import

const ProjectDetails = () => {
  const [projectList, setProjectList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // form state
  const [formData, setFormData] = useState({
    id: null,
    title: "",
    category_id: "",
    client: "",
    project_date: "",
    project_url: "",
    description: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  // fetch projects
  const fetchProjectData = async () => {
    try {
      setLoading(true);
      const res = await getProject();
  
      // access the correct nested array
      const data = Array.isArray(res.data?.data) ? res.data.data : [];
  
      const prepared = data.map((item, index) => ({
        id: item.id || Date.now() + index,
        title: item.title || "",
        category_id: item.category_id || "",
        client: item.client || "",
        project_date: item.project_date || "",
        project_url: item.project_url || "",
        description: item.description || "",
        PortfolioCategory: item.PortfolioCategory || null,
      }));
  
      setProjectList(prepared);
      setLoading(false);
    } catch (err) {
      console.error("❌ API Error:", err);
      setError(err.message || "Something went wrong");
      setLoading(false);
    }
  };

  // fetch categories
  const fetchCategories = async () => {
    try {
      const res = await getCategory();
      setCategories(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error("❌ Category API Error:", err);
      setCategories([]);
    }
  };

  useEffect(() => {
    fetchProjectData();
    fetchCategories();
  }, []);

  // handle form input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // handle save (create or update)
  const handleSave = async () => {
    try {
      if (isEditing) {
        await updateProject(formData.id, formData);
      } else {
        await createProject(formData);
      }
      fetchProjectData();
      resetForm();
      window.bootstrap.Modal.getInstance(
        document.getElementById("projectModal")
      ).hide();
      document.body.classList.remove("modal-open");
      document.querySelectorAll(".modal-backdrop").forEach((el) => el.remove());

    } catch (err) {
      console.error("❌ Save Error:", err);
    }
  };

  // handle edit
  const handleEdit = (project) => {
    setFormData({ ...project });
    setIsEditing(true);
    const modal = new window.bootstrap.Modal(
      document.getElementById("projectModal")
    );
    modal.show();
  };

  // handle delete
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this project?")) return;
    try {
      await deleteProject(id);
      fetchProjectData();
    } catch (err) {
      console.error("❌ Delete Error:", err);
    }
  };

  // reset form
  const resetForm = () => {
    setFormData({
      id: null,
      title: "",
      category_id: "",
      client: "",
      project_date: "",
      project_url: "",
      description: "",
    });
    setIsEditing(false);
  };

  return (
    <div className="content-wrapper">
      <div className="container-xxl flex-grow-1 container-p-y">
        <div className="card">
          <div className="card-header d-flex justify-content-between align-items-center">
            <h5 className="card-title">Project List</h5>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#projectModal"
              onClick={resetForm}
            >
              Add Project
            </button>
          </div>

          <div className="table-responsive text-nowrap">
            {loading ? (
              <p className="text-center p-3">Loading projects...</p>
            ) : error ? (
              <p className="text-danger text-center p-3">{error}</p>
            ) : (
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
                  {projectList.length > 0 ? (
                    projectList.map((project, index) => (
                      <tr key={project.id}>
                        <td>{index + 1}</td>
                        <td>{project.title}</td>
                        <td>{project.PortfolioCategory?.name || "—"}</td>
                        <td>{project.client}</td>
                        <td>{project.project_date}</td>
                        <td>
                          {project.project_url && (
                            <a
                              href={project.project_url}
                              target="_blank"
                              rel="noreferrer"
                            >
                              Visit
                            </a>
                          )}
                        </td>
                        <td>{project.description}</td>
                        <td>
                     
                                <button
                                  className="dropdown-item"
                                  onClick={() => handleEdit(project)}
                                >
                                  <i className="icon-base bx bx-edit-alt me-1"></i>{" "}
                                  Edit
                                </button>

                                <button
                                  className="dropdown-item"
                                  onClick={() => handleDelete(project.id)}
                                >
                                  <i className="icon-base bx bx-trash me-1"></i>{" "}
                                  Delete
                                </button>
                              
                         
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="8" className="text-center">
                        No projects found.
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
          id="projectModal"
          tabIndex="-1"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {isEditing ? "Edit Project" : "Add Project"}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                {/* Form fields */}
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    className="form-control"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Enter title"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="category_id" className="form-label">
                    Category
                  </label>
                  <select
                    id="category_id"
                    className="form-control"
                    value={formData.category_id}
                    onChange={handleChange}
                  >
                    <option value="">-- Select Category --</option>
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="client" className="form-label">
                    Client
                  </label>
                  <input
                    type="text"
                    id="client"
                    className="form-control"
                    value={formData.client}
                    onChange={handleChange}
                    placeholder="Enter client name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="project_date" className="form-label">
                    Project Date
                  </label>
                  <input
                    type="date"
                    id="project_date"
                    className="form-control"
                    value={formData.project_date}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="project_url" className="form-label">
                    Project URL
                  </label>
                  <input
                    type="url"
                    id="project_url"
                    className="form-control"
                    value={formData.project_url}
                    onChange={handleChange}
                    placeholder="Enter URL"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <textarea
                    id="description"
                    className="form-control"
                    value={formData.description}
                    onChange={handleChange}
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
                <button type="button" className="btn btn-primary" onClick={handleSave}>
                  {isEditing ? "Update" : "Save"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
