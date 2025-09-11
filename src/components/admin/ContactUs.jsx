import React from "react";

const ContactUs = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      {/* Basic Layout */}
      <div className="row mb-6 gy-6">
        <div className="col-xl">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Contact Details</h5>
              <small className="text-body float-end">With Icons</small>
            </div>
            <div className="card-body">
              <form>
                {/* Title */}
                <div className="mb-4">
                  <label htmlFor="contactTitle" className="form-label">
                    Title
                  </label>
                  <div className="input-group input-group-merge">
                    <span className="input-group-text">
                      <i className="icon-base bx bx-id-card"></i>
                    </span>
                    <input
                      type="text"
                      id="contactTitle"
                      className="form-control"
                      placeholder="e.g. Contact Us / Get in Touch"
                    />
                  </div>
                </div>

                {/* Address */}
                <div className="mb-4">
                  <label htmlFor="contactAddress" className="form-label">
                    Address
                  </label>
                  <div className="input-group input-group-merge">
                    <span className="input-group-text">
                      <i className="icon-base bx bx-map"></i>
                    </span>
                    <input
                      type="text"
                      id="contactAddress"
                      className="form-control"
                      placeholder="123, MG Road, Mumbai, India"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="mb-4">
                  <label htmlFor="contactPhone" className="form-label">
                    Phone
                  </label>
                  <div className="input-group input-group-merge">
                    <span className="input-group-text">
                      <i className="icon-base bx bx-phone"></i>
                    </span>
                    <input
                      type="text"
                      id="contactPhone"
                      className="form-control"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="mb-4">
                  <label htmlFor="contactEmail" className="form-label">
                    Email
                  </label>
                  <div className="input-group input-group-merge">
                    <span className="input-group-text">
                      <i className="icon-base bx bx-envelope"></i>
                    </span>
                    <input
                      type="email"
                      id="contactEmail"
                      className="form-control"
                      placeholder="contact@example.com"
                    />
                  </div>
                </div>

                {/* Google Map Embed */}
                <div className="mb-4">
                  <label htmlFor="mapEmbed" className="form-label">
                    Google Map Embed (Iframe Code)
                  </label>
                  <div className="input-group input-group-merge">
                    <span className="input-group-text">
                      <i className="icon-base bx bx-map-pin"></i>
                    </span>
                    <textarea
                      id="mapEmbed"
                      className="form-control"
                      rows="4"
                      placeholder="Paste Google Map Embed iframe code here..."
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-primary">
                  Submit
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
