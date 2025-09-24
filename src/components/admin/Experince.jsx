import React, { useEffect, useState } from "react";
import {
  getExperience,
  createExperience,
  updateExperience,
  deleteExperience,
} from "../../api/experienceApi";

const Experience = () => {
  const [experienceList, setExperienceList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [validationErrors, setValidationErrors] = useState({});

  // Fetch data
  const fetchExperienceData = () => {
    getExperience()
      .then((res) => {
        const data = Array.isArray(res.data) ? res.data : [];
        const prepared = data.map((item, index) => ({
          id: item.id || Date.now() + index,
          job_role: item.job_role || "",
          duration: item.duration || "",
          company_name: item.company_name || "",
          responsibilities: item.responsibilities || "",
        }));
        setExperienceList(prepared);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Something went wrong");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchExperienceData();
  }, []);

  // Add a new empty form
  const handleAddForm = () => {
    setExperienceList([
      ...experienceList,
      {
        id: "",
        job_role: "",
        duration: "",
        company_name: "",
        responsibilities: "",
      },
    ]);
  };

  // Delete a form
  const handleDeleteForm = (id) => {
    if (id) {
      deleteExperience(id)
        .then(() => {
          fetchExperienceData();
          setSuccess("Experience deleted successfully!");
        })
        .catch((err) => setError(err.message || "Failed to delete"));
    } else {
      setExperienceList((prev) => prev.filter((form) => form.id !== id));
    }
  };

  // Handle input change
  const handleChange = (id, field, value) => {
    setExperienceList((prev) =>
      prev.map((form) =>
        form.id === id ? { ...form, [field]: value } : form
      )
    );
  };

  // Validate form fields
  const validate = (form) => {
    const errors = {};
    if (!form.job_role) errors.job_role = "Job role is required";
    if (!form.duration) errors.duration = "Duration is required";
    if (!form.company_name) errors.company_name = "Company name is required";
    if (!form.responsibilities)
      errors.responsibilities = "Responsibilities are required";
    return errors;
  };

  // Handle form submit
  const handleSubmit = (e, id) => {
    e.preventDefault();
    const form = experienceList.find((f) => f.id === id);
    const errors = validate(form);

    if (Object.keys(errors).length > 0) {
      setValidationErrors({ [id]: errors });
      return;
    }

    const action = form.id
      ? updateExperience(form.id, form)
      : createExperience(form);

    action
      .then(() => {
        setSuccess(
          form.id
            ? "Experience updated successfully!"
            : "Experience created successfully!"
        );
        setValidationErrors({});
        fetchExperienceData();
      })
      .catch((err) => setError(err.message || "Failed to save"));
  };

  return (
    <div className="content-wrapper">
      <div className="container-xxl flex-grow-1 container-p-y">
        <div className="row mb-6 gy-6">
          <div className="col-xl">
            <div className="card">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h5 className="mb-0">Experience Details</h5>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleAddForm}
                >
                  Add
                </button>
              </div>
              <div className="card-body">
                {experienceList.map((form, i) => (
                  <form
                    key={form.id}
                    className="border p-3 mb-4 rounded"
                    onSubmit={(e) => handleSubmit(e, form.id)}
                  >
                    {/* Job Role */}
                    <div className="mb-3">
                      <label className="form-label">Job Role</label>
                      <input
                        type="text"
                        className="form-control"
                        value={form.job_role}
                        onChange={(e) =>
                          handleChange(form.id, "job_role", e.target.value)
                        }
                        placeholder="Software Developer"
                      />
                      {validationErrors[form.id]?.job_role && (
                        <p className="text-danger">
                          {validationErrors[form.id].job_role}
                        </p>
                      )}
                    </div>

                    {/* Duration */}
                    <div className="mb-3">
                      <label className="form-label">Duration</label>
                      <input
                        type="text"
                        className="form-control"
                        value={form.duration}
                        onChange={(e) =>
                          handleChange(form.id, "duration", e.target.value)
                        }
                        placeholder="2020 - 2024"
                      />
                      {validationErrors[form.id]?.duration && (
                        <p className="text-danger">
                          {validationErrors[form.id].duration}
                        </p>
                      )}
                    </div>

                    {/* Company Name */}
                    <div className="mb-3">
                      <label className="form-label">Company Name</label>
                      <input
                        type="text"
                        className="form-control"
                        value={form.company_name}
                        onChange={(e) =>
                          handleChange(form.id, "company_name", e.target.value)
                        }
                        placeholder="ABC Technologies Pvt Ltd"
                      />
                      {validationErrors[form.id]?.company_name && (
                        <p className="text-danger">
                          {validationErrors[form.id].company_name}
                        </p>
                      )}
                    </div>

                    {/* Responsibilities */}
                    <div className="mb-3">
                      <label className="form-label">Responsibilities</label>
                      <textarea
                        className="form-control"
                        value={form.responsibilities}
                        onChange={(e) =>
                          handleChange(form.id, "responsibilities", e.target.value)
                        }
                        placeholder={`• Developed REST APIs
• Managed deployments
• Led a team of 3 junior developers...`}
                      ></textarea>
                      {validationErrors[form.id]?.responsibilities && (
                        <p className="text-danger">
                          {validationErrors[form.id].responsibilities}
                        </p>
                      )}
                    </div>

                    {/* Submit + Delete */}
                    <div className="d-flex justify-content-between">
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                      {i !== 0 && (
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => handleDeleteForm(form.id)}
                        >
                          Delete
                        </button>
                      )}
                    </div>
                  </form>
                ))}
                {success && <p className="text-success">{success}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
