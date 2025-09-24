import React, { useEffect, useState } from "react";
import { updateEducation, getEducation, createEducation, deleteEducation } from "../../api/educationApi";

const Education = () => {
  const [educationList, setEducationList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [validationErrors, setValidationErrors] = useState({});
  // Fetch data
  const fetchEducationData = () => {

    getEducation()
      .then((res) => {
        const data = Array.isArray(res.data) ? res.data : [];
        // Ensure each record has an id
        const prepared = data.map((item, index) => ({
          id: item.id || Date.now() + index,
          course: item.course || "",
          duration: item.duration || "",
          college_name: item.college_name || "",
          college_address: item.college_address || "",
          description: item.description || "",
        }));
        setEducationList(prepared);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Something went wrong");
        setLoading(false);
      });
  }
  useEffect(() => {
    fetchEducationData();
  }, []);
  // Add a new empty form
  const handleAddForm = () => {
    setEducationList([
      ...educationList,
      {
        id: "",
        course: "",
        duration: "",
        college_name: "",
        college_address: "",
        description: "",
      },
    ]);
  };

  // Delete a form
  const handleDeleteForm = (id) => {
    if (id) {
      deleteEducation(id)
        .then(() => {
          fetchEducationData();
          setSuccess("Education details deleted successfully!");
        })
        .catch((err) => setError(err.message || "Failed to delete"));
    } else {
      setEducationList((prev) =>
        prev.filter((form) => form.id !== id)
      );
    }
  };
  // Handle input change
  const handleChange = (id, field, value) => {
    setEducationList((prev) =>
      prev.map((form) =>
        form.id === id ? { ...form, [field]: value } : form
      )
    );
  };
  // Validate form fields
  const validate = (form) => {
    const errors = {};
    if (!form.course) errors.course = "Course is required";
    if (!form.duration) errors.duration = "Duration is required";
    if (!form.college_name) errors.college_name = "College name is required";
    if (!form.college_address) errors.college_address = "College address is required";
    if (!form.description) errors.description = "Description is required";
    return errors;
  };
  // Handle form submit
  const handleSubmit = (e, id) => {
    e.preventDefault();
    const form = educationList.find((f) => f.id === id);
    const errors = validate(form);

    if (Object.keys(errors).length > 0) {
      setValidationErrors({ [id]: errors });
      return;
    }

    const action = form.id
      ? updateEducation(form.id, form) // update with ID
      : createEducation(form); // create new if no ID

    action
      .then(() => {
        setSuccess(
          form.id
            ? "Education details updated successfully!"
            : "Education details created successfully!"
        );
        setValidationErrors({});
        fetchEducationData();
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
                <h5 className="mb-0">Education Details</h5>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleAddForm}
                >
                  Add
                </button>
              </div>
              <div className="card-body">
                {educationList.map((form, i) => (
                  <form
                    key={form.id}
                    className="border p-3 mb-4 rounded"
                    onSubmit={(e) => handleSubmit(e, form.id)}
                  >
                    {/* Course */}
                    <div className="mb-3">
                      <label className="form-label">Course</label>
                      <input
                        type="text"
                        className="form-control"
                        value={form.course}
                        onChange={(e) =>
                          handleChange(form.id, "course", e.target.value)
                        }
                        placeholder="B.Tech in Computer Science"
                      />
                      {validationErrors[form.id]?.course && (
                        <p className="text-danger">
                          {validationErrors[form.id].course}
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
                        placeholder="2018 - 2022"
                      />
                      {validationErrors[form.id]?.duration && (
                        <p className="text-danger">
                          {validationErrors[form.id].duration}
                        </p>
                      )}
                    </div>

                    {/* College Name */}
                    <div className="mb-3">
                      <label className="form-label">College Name</label>
                      <input
                        type="text"
                        className="form-control"
                        value={form.college_name}
                        onChange={(e) =>
                          handleChange(form.id, "college_name", e.target.value)
                        }
                        placeholder="Indian Institute of Technology"
                      />
                      {validationErrors[form.id]?.college_name && (
                        <p className="text-danger">
                          {validationErrors[form.id].college_name}
                        </p>
                      )}
                    </div>

                    {/* College Address */}
                    <div className="mb-3">
                      <label className="form-label">College Address</label>
                      <input
                        type="text"
                        className="form-control"
                        value={form.college_address}
                        onChange={(e) =>
                          handleChange(form.id, "college_address", e.target.value)
                        }
                        placeholder="Powai, Mumbai, India"
                      />
                      {validationErrors[form.id]?.college_address && (
                        <p className="text-danger">
                          {validationErrors[form.id].college_address}
                        </p>
                      )}
                    </div>

                    {/* Description */}
                    <div className="mb-3">
                      <label className="form-label">Description</label>
                      <textarea
                        className="form-control"
                        value={form.description}
                        onChange={(e) =>
                          handleChange(form.id, "description", e.target.value)
                        }
                        placeholder="Brief about your course or projects..."
                      ></textarea>
                      {validationErrors[form.id]?.description && (
                        <p className="text-danger">
                          {validationErrors[form.id].description}
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

export default Education;
