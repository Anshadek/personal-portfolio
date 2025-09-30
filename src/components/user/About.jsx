
const About = ({ about }) => {
  return (
    <section id="about" className="about section">
      <div className="container section-title" data-aos="fade-up">
        <h2>About</h2>
        <p>{about?.description}</p>
      </div>
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4">
            <img src={about?.profile_photo} className="img-fluid" alt="" />
          </div>
          <div className="col-lg-8 content">
            <h2>{about?.title}</h2>

            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>{about?.birthday}</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>{about?.website}</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>{about?.phone}</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>{about?.city}</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>{about?.age}</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>{about?.degree}</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>{about?.email}</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>{about?.freelance ? "Available" : "Not Available"}</span></li>
                </ul>
              </div>
            </div>
            <p className="py-3">
              {about?.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;