import React, { useState, useEffect } from "react";
import { getContact, sendMail } from "../../api/user/contactApi";
import axios from "axios";

const Contact = () => {
  const [contact, setContact] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({ loading: false, success: null, error: null });

  useEffect(() => {
    getContact().then((res) => {
      const data = Array.isArray(res.data) ? res.data[0] : res.data;
      setContact(data);
    });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    try {
      const res = await sendMail(formData);
      setStatus({ loading: false, success: "Your message has been sent!", error: null });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus({
        loading: false,
        success: null,
        error: err.response?.data?.error || "Something went wrong!",
      });
    }
  };

  return (
    <section id="contact" className="contact section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>
          Have a question or collaboration idea? Feel free to reach out!
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          {/* Left side info */}
          <div className="col-lg-5">
            <div className="info-wrap">
              <div className="info-item d-flex">
                <i className="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h3>Address</h3>
                  <p>{contact?.address}</p>
                </div>
              </div>
              <div className="info-item d-flex">
                <i className="bi bi-telephone flex-shrink-0"></i>
                <div>
                  <h3>Call Us</h3>
                  <p>{contact?.phone}</p>
                </div>
              </div>
              <div className="info-item d-flex">
                <i className="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h3>Email Us</h3>
                  <p>{contact?.email}</p>
                </div>
              </div>

              <iframe
                title="Google Map"
                src={contact?.map_location}
                style={{ border: 0, width: "100%", height: "270px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Right side form */}
          <div className="col-lg-7">
            <form onSubmit={handleSubmit} className="php-email-form">
              <div className="row gy-4">
                <div className="col-md-6">
                  <label className="pb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label className="pb-2">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-12">
                  <label className="pb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    className="form-control"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-12">
                  <label className="pb-2">Message</label>
                  <textarea
                    name="message"
                    className="form-control"
                    rows="10"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <div className="col-md-12 text-center">
                  {status.loading && <div className="loading">Sending...</div>}
                  {status.error && <div className="error-message">{status.error}</div>}
                  {status.success && <div className="sent-message">{status.success}</div>}
                  <button type="submit" disabled={status.loading}>
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
