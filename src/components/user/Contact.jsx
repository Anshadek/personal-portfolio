import React, { useState, useEffect } from "react";
import { getContact } from "../../api/user/contactApi";
const Contact = () => {
    const [contact, setContact] = useState(null);
    useEffect(() => {
        getContact().then((res) => {
            const data = Array.isArray(res.data) ? res.data[0] : res.data;
            setContact(data);
        });
    }, []);
    return (
        <section id="contact" className="contact section">

     
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>  Have a question, collaboration idea, or just want to say hello? 
    Feel free to reach out and I’ll get back to you as soon as possible. 
    I’m always open to discussing new projects, creative opportunities, or 
    ways to bring value together.</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="row gy-4">

        <div className="col-lg-5">
  <div className="info-wrap">
    <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
      <i className="bi bi-geo-alt flex-shrink-0"></i>
      <div>
        <h3>Address</h3>
        <p>{contact?.address}</p>
      </div>
    </div>

    <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
      <i className="bi bi-telephone flex-shrink-0"></i>
      <div>
        <h3>Call Us</h3>
        <p>{contact?.phone}</p>
      </div>
    </div>

    <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
      <i className="bi bi-envelope flex-shrink-0"></i>
      <div>
        <h3>Email Us</h3>
        <p>{contact?.email}</p>
      </div>
    </div>

    {/* ✅ Corrected iframe JSX syntax */}
    <iframe
      title="Google Map"
      src={contact?.map_location}
      style={{ border: 0, width: '100%', height: '270px' }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>


          <div className="col-lg-7">
            <form action="forms/contact.php" method="post" className="php-email-form" data-aos="fade-up" data-aos-delay="200">
              <div className="row gy-4">

                <div className="col-md-6">
                  <label  className="pb-2">Your Name</label>
                  <input type="text" name="name" id="name-field" className="form-control" required=""/>
                </div>

                <div className="col-md-6">
                  <label  className="pb-2">Your Email</label>
                  <input type="email" className="form-control" name="email" required=""/>
                </div>

                <div className="col-md-12">
                  <label  className="pb-2">Subject</label>
                  <input type="text" className="form-control" name="subject" required=""/>
                </div>

                <div className="col-md-12">
                  <label  className="pb-2">Message</label>
                  <textarea className="form-control" name="message" rows="10" required=""></textarea>
                </div>

                <div className="col-md-12 text-center">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>

                  <button type="submit">Send Message</button>
                </div>

              </div>
            </form>
          </div>

        </div>

      </div>

    </section>
    )
}
export default Contact