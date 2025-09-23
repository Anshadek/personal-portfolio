import React, { useEffect, useState } from "react";
import { getAbout, updateAbout } from "../../api/aboutApi";

const About = () => {
  const [aboutData, setAboutData] = useState({
    title: "",
    description: "",
    birthday: "",
    age: "",
    website: "",
    degree: "",
    phone: "",
    email: "",
    city: "",
    freelance: false,
    brief_description: "",
    profile_photo: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [validationErrors, setValidationErrors] = useState({});

  // Fetch data
  useEffect(() => {
    getAbout()
      .then((res) => {
        const data = Array.isArray(res.data) ? res.data[0] : res.data;
        setAboutData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Something went wrong");
        setLoading(false);
      });
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setAboutData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError(null);
      setSuccess(null);
      setValidationErrors({});

      await updateAbout(aboutData.id, aboutData);
      setSuccess("Profile updated successfully!");
    } catch (err) {
      if (err.errors) {
        setValidationErrors(err.errors);
      } else {
        setError(err.message || "Update failed");
      }
    }
  };



  return (
    <div className="content-wrapper">
      <div className="container-xxl flex-grow-1 container-p-y">
        <div className="row mb-6 gy-6">
          <div className="col-xl">
            <div className="card">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h5 className="mb-0">Personal Profile Details</h5>
              </div>
              <div className="card-body">
                {success && <p className="text-success">{success}</p>}
                {error && <p className="text-danger">{error}</p>}

                <form onSubmit={handleSubmit}>
                  {/* Professional Title */}
                  <div className="mb-6">
                    <label className="form-label">Professional Title</label>
                    <input
                      type="text"
                      className="form-control"
                      name="title"
                      value={aboutData.title || ""}
                      onChange={handleChange}
                    />
                    {validationErrors.title && (
                      <p className="text-danger">{validationErrors.title}</p>
                    )}
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <label className="form-label">Description</label>
                    <textarea
                      className="form-control"
                      name="description"
                      value={aboutData.description || ""}
                      onChange={handleChange}
                    />
                    {validationErrors.description && (
                      <p className="text-danger">{validationErrors.description}</p>
                    )}
                  </div>

                  {/* Birthday */}
                  <div className="mb-6">
                    <label className="form-label">Birthday</label>
                    <input
                      type="date"
                      className="form-control"
                      name="birthday"
                      value={aboutData.birthday?.split("T")[0] || ""}
                      onChange={handleChange}
                    />
                    {validationErrors.birthday && (
                      <p className="text-danger">{validationErrors.birthday}</p>
                    )}
                  </div>

                  {/* Age */}
                  <div className="mb-6">
                    <label className="form-label">Age</label>
                    <input
                      type="number"
                      className="form-control"
                      name="age"
                      value={aboutData.age || ""}
                      onChange={handleChange}
                    />
                    {validationErrors.age && (
                      <p className="text-danger">{validationErrors.age}</p>
                    )}
                  </div>

                  {/* Website */}
                  <div className="mb-6">
                    <label className="form-label">Website</label>
                    <input
                      type="url"
                      className="form-control"
                      name="website"
                      value={aboutData.website || ""}
                      onChange={handleChange}
                    />
                    {validationErrors.website && (
                      <p className="text-danger">{validationErrors.website}</p>
                    )}
                  </div>

                  {/* Degree */}
                  <div className="mb-6">
                    <label className="form-label">Degree</label>
                    <input
                      type="text"
                      className="form-control"
                      name="degree"
                      value={aboutData.degree || ""}
                      onChange={handleChange}
                    />
                    {validationErrors.degree && (
                      <p className="text-danger">{validationErrors.degree}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="mb-6">
                    <label className="form-label">Phone</label>
                    <input
                      type="text"
                      className="form-control"
                      name="phone"
                      value={aboutData.phone || ""}
                      onChange={handleChange}
                    />
                    {validationErrors.phone && (
                      <p className="text-danger">{validationErrors.phone}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="mb-6">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={aboutData.email || ""}
                      onChange={handleChange}
                    />
                    {validationErrors.email && (
                      <p className="text-danger">{validationErrors.email}</p>
                    )}
                  </div>

                  {/* City */}
                  <div className="mb-6">
                    <label className="form-label">City</label>
                    <input
                      type="text"
                      className="form-control"
                      name="city"
                      value={aboutData.city || ""}
                      onChange={handleChange}
                    />
                    {validationErrors.city && (
                      <p className="text-danger">{validationErrors.city}</p>
                    )}
                  </div>

                  {/* Freelance */}
                  <div className="mb-6">
                    <label className="form-label">Freelance</label>
                    <select
                      className="form-control"
                      name="freelance"
                      value={aboutData.freelance ? "true" : "false"}
                      onChange={(e) =>
                        setAboutData((prev) => ({
                          ...prev,
                          freelance: e.target.value === "true",
                        }))
                      }
                    >
                      <option value="true">Available</option>
                      <option value="false">Not Available</option>
                    </select>
                    {validationErrors.freelance && (
                      <p className="text-danger">{validationErrors.freelance}</p>
                    )}
                  </div>

                  {/* Brief Description */}
                  <div className="mb-6">
                    <label className="form-label">Brief Description</label>
                    <textarea
                      className="form-control"
                      name="brief_description"
                      value={aboutData.brief_description || ""}
                      onChange={handleChange}
                    />
                    {validationErrors.brief_description && (
                      <p className="text-danger">
                        {validationErrors.brief_description}
                      </p>
                    )}
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Save Changes
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
