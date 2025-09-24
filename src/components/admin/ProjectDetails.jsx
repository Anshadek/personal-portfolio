import React, { useEffect, useState } from "react";
import {
  getProject,
  createProject,
  updateProject,
  deleteProject,
} from "../../api/projectApi";
import { getCategory } from "../../api/categoryApi"; // <-- reuse from category
import { toast } from "react-toastify"; // optional notification

const ProjectDetails = () => {
  const [projects, setProjects] = useState([]);
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    id: null,
    title: "",
    category_id: "",
    client: "",
    project_date: "",
    project_url: "",
    description: "",
  });

  // Fetch projects & categories
  const fetchProjects = async () => {
    try {
      const res = await getProject();
      setProjects(res.data || []);
    } catch (err) {
      console.error("Error fetching projects", err);
    }
  };

  const fetchCategories = async () => {
    try {
      const res = await getCategory();
      setCategories(res.data || []);
    } catch (err) {
      console.error("Error fetching categories", err);
    }
  };

  useEffect(() => {
    fetchProjects();
    fetchCategories();
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Save / Update
  const handleSave = () => {
    const apiCall = formData.id
      ? updateProject(formData.id, formData)
      : createProject(formData);

    apiCall
      .then(() => {
        toast.success(formData.id ? "Project updated!" : "Project created!");
        setFormData({
          id: null,
          title: "",
          category_id: "",
          client: "",
          project_date: "",
          project_url: "",
          description: "",
        });
        fetchProjects();

        // Close modal
        const modalEl = document.getElementById("projectModal");
        const modal = window.bootstrap.Modal.getOrCreateInstance(modalEl);
        modal.hide();
        document.body.classList.remove("modal-open");
        document.querySelectorAll(".modal-backdrop").forEach((el) => el.remove());
      })
      .catch((err) => {
        console.error("Error saving project", err);
        toast.error("Failed to save project");
      });
  };

  // Edit project
  const handleEdit = (project) => {
    setFormData({
      id: project.id,
      title: project.title,
      category_id: project.category_id,
      client: project.client,
      project_date: project.project_date,
      project_url: project.project_url,
      description: project.description,
    });
    const modalEl = document.getElementById("projectModal");
    window.bootstrap.Modal.getOrCreateInstance(modalEl).show();
  };

  // Delete project
  const handleDelete = (id) => {
    if (!window.confirm("Are you sure you want to delete this project?")) return;
    deleteProject(id)
      .then(() => {
        toast.success("Project deleted!");
        fetchProjects();
      })
      .catch((err) => {
        console.error("Error deleting project", err);
        toast.error("Failed to delete project");
      });
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
              onClick={() =>
                setFormData({
                  id: null,
                  title: "",
                  category_id: "",
                  client: "",
                  project_date: "",
                  project_url: "",
                  description: "",
                })
              }
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
                {projects.length > 0 ? (
                  projects.map((project, index) => (
                    <tr key={project.id}>
                      <td>{index + 1}</td>
                      <td>{project.title}</td>
                      <td>
                        {
                          categories.find(
                            (cat) => cat.id === project.category_id
                          )?.name
                        }
                      </td>
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
                        <div className="dropdown">
                          <button
                            type="button"
                            className="btn p-0 dropdown-toggle hide-arrow"
                            data-bs-toggle="dropdown"
                          >
                            <i className="icon-base bx bx-dots-vertical-rounded"></i>
                          </button>
                          <div className="dropdown-menu">
                            <button
                              className="dropdown-item"
                              onClick={() => handleEdit(project)}
                            >
                              <i className="icon-base bx bx-edit-alt me-1"></i> Edit
                            </button>
                            <button
                              className="dropdown-item"
                              onClick={() => handleDelete(project.id)}
                            >
                              <i className="icon-base bx bx-trash me-1"></i> Delete
                            </button>
                          </div>
                        </div>
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
                  {formData.id ? "Edit Project" : "Add Project"}
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
                  <label htmlFor="projectTitle" className="form-label">
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
                  <label htmlFor="projectCategory" className="form-label">
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
                  <label htmlFor="projectClient" className="form-label">
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
                  <label htmlFor="projectDate" className="form-label">
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
                  <label htmlFor="projectUrl" className="form-label">
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
                  <label htmlFor="projectDesc" className="form-label">
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

export default ProjectDetails;
