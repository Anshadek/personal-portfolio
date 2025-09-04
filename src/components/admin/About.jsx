import React from 'react';

const About = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="content-wrapper">
      <div className="container-xxl flex-grow-1 container-p-y">
        <div className="row mb-6 gy-6">
          <div className="col-xl">
            <div className="card">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h5 className="mb-0">Personal Profile Details</h5>
                <small className="text-body float-end">With Icons</small>
              </div>
              <div className="card-body">
                <form>
                  {/* Professional Title */}
                  <div className="mb-6">
                    <label className="form-label">Professional Title</label>
                    <div className="input-group input-group-merge">
                      <span className="input-group-text"><i className="icon-base bx bx-briefcase"></i></span>
                      <input type="text" className="form-control" placeholder="Full Stack Developer" />
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <label className="form-label">Description</label>
                    <div className="input-group input-group-merge">
                      <span className="input-group-text"><i className="icon-base bx bx-info-circle"></i></span>
                      <textarea className="form-control" placeholder="Write a short description about yourself..."></textarea>
                    </div>
                  </div>

                  {/* Birthday */}
                  <div className="mb-6">
                    <label className="form-label">Birthday</label>
                    <div className="input-group input-group-merge">
                      <span className="input-group-text"><i className="icon-base bx bx-calendar"></i></span>
                      <input type="date" className="form-control" />
                    </div>
                  </div>

                  {/* Age */}
                  <div className="mb-6">
                    <label className="form-label">Age</label>
                    <div className="input-group input-group-merge">
                      <span className="input-group-text"><i className="icon-base bx bx-user-circle"></i></span>
                      <input type="number" className="form-control" placeholder="26" />
                    </div>
                  </div>

                  {/* Website */}
                  <div className="mb-6">
                    <label className="form-label">Website</label>
                    <div className="input-group input-group-merge">
                      <span className="input-group-text"><i className="icon-base bx bx-globe"></i></span>
                      <input type="url" className="form-control" placeholder="https://yourwebsite.com" />
                    </div>
                  </div>

                  {/* Degree */}
                  <div className="mb-6">
                    <label className="form-label">Degree</label>
                    <div className="input-group input-group-merge">
                      <span className="input-group-text"><i className="icon-base bx bx-book"></i></span>
                      <input type="text" className="form-control" placeholder="B.Tech in Computer Science" />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="mb-6">
                    <label className="form-label">Phone</label>
                    <div className="input-group input-group-merge">
                      <span className="input-group-text"><i className="icon-base bx bx-phone"></i></span>
                      <input type="text" className="form-control" placeholder="+91 98765 43210" />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="mb-6">
                    <label className="form-label">Email</label>
                    <div className="input-group input-group-merge">
                      <span className="input-group-text"><i className="icon-base bx bx-envelope"></i></span>
                      <input type="email" className="form-control" placeholder="yourname@example.com" />
                    </div>
                  </div>

                  {/* City */}
                  <div className="mb-6">
                    <label className="form-label">City</label>
                    <div className="input-group input-group-merge">
                      <span className="input-group-text"><i className="icon-base bx bx-map"></i></span>
                      <input type="text" className="form-control" placeholder="Mumbai" />
                    </div>
                  </div>

                  {/* Freelance Availability */}
                  <div className="mb-6">
                    <label className="form-label">Freelance Availability</label>
                    <div className="input-group input-group-merge">
                      <span className="input-group-text"><i className="icon-base bx bx-briefcase-alt-2"></i></span>
                      <select className="form-control">
                        <option value="available">Available</option>
                        <option value="not_available">Not Available</option>
                      </select>
                    </div>
                  </div>

                  {/* Brief Description */}
                  <div className="mb-6">
                    <label className="form-label">Brief Description</label>
                    <div className="input-group input-group-merge">
                      <span className="input-group-text"><i className="icon-base bx bx-comment"></i></span>
                      <textarea className="form-control" placeholder="A highly motivated web developer..."></textarea>
                    </div>
                  </div>

                  {/* Profile Photo */}
                  <div className="mb-6">
                    <label className="form-label">Profile Photo</label>
                    <div className="input-group input-group-merge">
                      <span className="input-group-text"><i className="icon-base bx bx-image"></i></span>
                      <input type="file" className="form-control" accept="image/*" />
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary">Submit</button>
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
