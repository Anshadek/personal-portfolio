import React, { useEffect, useState } from "react";
import {
  getProjectImage,
  createProjectImage,
  updateProjectImage,
  deleteProjectImage,
} from "../../api/projectImageApi";
import { getProject } from "../../api/projectApi";

const ProjectImages = () => {
  const [images, setImages] = useState([]);
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({
    id: null,
    image_title: "",
    image_description: "",
    project_id: "",
  });
  const [previewImage, setPreviewImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch images
  const fetchImages = async () => {
    try {
      const res = await getProjectImage();
      setImages(res.data?.data || []);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  // Fetch projects
  const fetchProjects = async () => {
    try {
      const res = await getProject();
      setProjects(res.data?.data || []);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  useEffect(() => {
    fetchImages();
    fetchProjects();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // Handle file change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file)); // For preview only
    } else {
      setPreviewImage(null);
    }
  };

  // Save image (create/update)
  const handleSave = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const fileInput = document.getElementById("image_file");
      const selectedFile = fileInput?.files[0];

      // Validation
      if (!formData.image_title.trim()) {
        alert("Please enter an image title");
        setIsSubmitting(false);
        return;
      }
      if (!formData.project_id) {
        alert("Please select a project");
        setIsSubmitting(false);
        return;
      }
      if (!formData.id && !selectedFile) {
        alert("Please select an image file");
        setIsSubmitting(false);
        return;
      }

      const fd = new FormData();
      if (selectedFile) fd.append("image_path", selectedFile); // ✅ correct File object
      fd.append("image_title", formData.image_title);
      fd.append("image_description", formData.image_description || "");
      fd.append("project_id", formData.project_id);

      for (let [key, value] of fd.entries()) {
        if (value instanceof File) {
          console.log(`${key}: File(name=${value.name}, type=${value.type}, size=${value.size})`);
        } else {
          console.log(`${key}: ${value}`);
        }
      }

      if (formData.id) {
        await updateProjectImage(formData.id, fd);
        alert("Image updated successfully!");
      } else {
        await createProjectImage(fd);
        alert("Image created successfully!");
      }

      // Reset form
      setFormData({
        id: null,
        image_title: "",
        image_description: "",
        project_id: "",
      });
      setPreviewImage(null);
      fileInput.value = "";

      fetchImages();

      // Close modal
      const modalElement = document.getElementById("imageModal");
      const modalInstance = window.bootstrap.Modal.getInstance(modalElement);
      if (modalInstance) modalInstance.hide();
    } catch (error) {
      console.error("Error saving image:", error);
      alert(`Error saving image: ${error.response?.data?.message || error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Edit existing image
  const handleEdit = (img) => {
    setFormData({
      id: img.id,
      image_title: img.image_title,
      image_description: img.image_description,
      project_id: img.project_id,
    });

    setPreviewImage(img.image_path ? `http://localhost:5000${img.image_path}` : null);

    // Clear file input
    const fileInput = document.getElementById("image_file");
    if (fileInput) fileInput.value = "";

    new window.bootstrap.Modal(document.getElementById("imageModal")).show();
  };

  // Delete image
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure to delete this image?")) return;
    try {
      await deleteProjectImage(id);
      fetchImages();
      alert("Image deleted successfully!");
    } catch (error) {
      console.error("Error deleting image:", error);
      alert(`Error deleting image: ${error.response?.data?.message || error.message}`);
    }
  };

  // Add new image
  const handleAddNew = () => {
    setFormData({
      id: null,
      image_title: "",
      image_description: "",
      project_id: "",
    });
    setPreviewImage(null);

    const fileInput = document.getElementById("image_file");
    if (fileInput) fileInput.value = "";

    new window.bootstrap.Modal(document.getElementById("imageModal")).show();
  };

  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      {/* Image Gallery Table */}
      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h5 className="card-title">Image Gallery List</h5>
          <button className="btn btn-primary" onClick={handleAddNew}>
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
              {images.length > 0 ? (
                images.map((img, index) => (
                  <tr key={img.id}>
                    <td>{index + 1}</td>
                    <td>
                      {img.image_path && (
                        <img
                          src={`http://localhost:5000${img.image_path}`}
                          alt={img.image_title}
                          style={{ width: "80px", height: "auto" }}
                        />
                      )}
                    </td>
                    <td>{img.image_title}</td>
                    <td>{img.image_description}</td>
                    <td>{img.project?.title || "—"}</td>
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
                          <button className="dropdown-item" onClick={() => handleEdit(img)}>
                            <i className="icon-base bx bx-edit-alt me-1"></i> Edit
                          </button>
                          <button className="dropdown-item" onClick={() => handleDelete(img.id)}>
                            <i className="icon-base bx bx-trash me-1"></i> Delete
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center">
                    No images found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      <div className="modal fade" id="imageModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <form onSubmit={handleSave} encType="multipart/form-data">
              <div className="modal-header">
                <h5 className="modal-title">{formData.id ? "Edit Image" : "Add Image"}</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
              </div>
              <div className="modal-body">
                {/* File Upload */}
                <div className="mb-3">
                  <label htmlFor="image_file" className="form-label">
                    Upload Image {!formData.id && <span className="text-danger">*</span>}
                  </label>
                  <input
                    type="file"
                    id="image_file"
                    name="image_file"
                    className="form-control"
                    accept="image/*"
                    onChange={handleFileChange}
                    required={!formData.id}
                  />
                  {previewImage && (
                    <img src={previewImage} alt="Preview" style={{ width: 120, marginTop: 10 }} />
                  )}
                </div>

                {/* Title */}
                <div className="mb-3">
                  <label htmlFor="image_title" className="form-label">
                    Image Title <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    id="image_title"
                    className="form-control"
                    value={formData.image_title}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Description */}
                <div className="mb-3">
                  <label htmlFor="image_description" className="form-label">
                    Image Description
                  </label>
                  <textarea
                    id="image_description"
                    className="form-control"
                    rows="3"
                    value={formData.image_description}
                    onChange={handleChange}
                  />
                </div>

                {/* Linked Project */}
                <div className="mb-3">
                  <label htmlFor="project_id" className="form-label">
                    Linked Project <span className="text-danger">*</span>
                  </label>
                  <select
                    id="project_id"
                    className="form-control"
                    value={formData.project_id}
                    onChange={handleChange}
                    required
                  >
                    <option value="">-- Select Project --</option>
                    {projects.map((proj) => (
                      <option key={proj.id} value={proj.id}>
                        {proj.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                  Close
                </button>
                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                  {isSubmitting ? "Saving..." : "Save"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectImages;
