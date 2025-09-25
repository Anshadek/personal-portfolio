import React, { useEffect, useState } from "react";
import { getContactUs, createContactUs, updateContactUs } from "../../api/contactUsApi";

const ContactUs = () => {
  const [contactData, setContactData] = useState({
    id: null,
    title: "",
    address: "",
    phone: "",
    email: "",
    map_location: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // Fetch existing contact info
  useEffect(() => {
    getContactUs()
      .then((res) => {
        const data = Array.isArray(res.data) && res.data.length > 0 ? res.data[0] : null;
        if (data) setContactData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Failed to load contact info");
        setLoading(false);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError(null);
      setSuccess(null);

      const formData = new FormData();
      for (let key in contactData) {
        if (contactData[key] !== null) formData.append(key, contactData[key]);
      }

      if (contactData.id) {
        await updateContactUs(contactData.id, formData);
        setSuccess("Contact info updated successfully!");
      } else {
        await createContactUs(formData);
        setSuccess("Contact info created successfully!");
      }
    } catch (err) {
      setError(err.message || "Operation failed");
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <div className="row mb-6 gy-6">
        <div className="col-xl">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Contact Details</h5>
              <small className="text-body float-end">With Icons</small>
            </div>
            <div className="card-body">
              {success && <p className="text-success">{success}</p>}
              {error && <p className="text-danger">{error}</p>}
              <form onSubmit={handleSubmit}>
                {/* Title */}
                <div className="mb-4">
                  <label className="form-label">Title</label>
                  <div className="input-group input-group-merge">
                    <span className="input-group-text">
                      <i className="icon-base bx bx-id-card"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      name="title"
                      value={contactData.title || ""}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Address */}
                <div className="mb-4">
                  <label className="form-label">Address</label>
                  <div className="input-group input-group-merge">
                    <span className="input-group-text">
                      <i className="icon-base bx bx-map"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      name="address"
                      value={contactData.address || ""}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="mb-4">
                  <label className="form-label">Phone</label>
                  <div className="input-group input-group-merge">
                    <span className="input-group-text">
                      <i className="icon-base bx bx-phone"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      name="phone"
                      value={contactData.phone || ""}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="mb-4">
                  <label className="form-label">Email</label>
                  <div className="input-group input-group-merge">
                    <span className="input-group-text">
                      <i className="icon-base bx bx-envelope"></i>
                    </span>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={contactData.email || ""}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Map Location */}
                <div className="mb-4">
                  <label className="form-label">Google Map Embed (Iframe)</label>
                  <textarea
                    className="form-control"
                    name="map_location"
                    value={contactData.map_location || ""}
                    onChange={handleChange}
                    rows="4"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">
                  {contactData.id ? "Update" : "Create"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
