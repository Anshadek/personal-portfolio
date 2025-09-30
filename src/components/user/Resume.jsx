import React, { useState, useEffect } from "react";
import { getExperience,getEducation } from "../../api/user/resumeApi"; 

const Resume = () => {
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Promise.all([getEducation(), getExperience()])
      .then(([eduRes, expRes]) => {
        setEducation(Array.isArray(eduRes.data) ? eduRes.data : []);
        setExperience(Array.isArray(expRes.data) ? expRes.data : []);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);


  return (
    <section id="resume" className="resume section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Resume</h2>
        <p>My educational background and professional experience</p>
      </div>

      <div className="container">
        <div className="row">

          {/* Education */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Education</h3>
            {education.map((edu) => (
              <div key={edu.id} className="resume-item">
                <h4>{edu.course}</h4>
                <h5>{edu.duration}</h5>
                <p>
                  <em>{edu.college_name}, {edu.college_address}</em>
                </p>
                <p>{edu.description}</p>
              </div>
            ))}
          </div>

          {/* Experience */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className="resume-title">Experience</h3>
            {experience.map((exp) => (
              <div key={exp.id} className="resume-item">
                <h4>{exp.job_role}</h4>
                <h5>{exp.duration}</h5>
                <p>
                  <em>{exp.company_name}</em>
                </p>
                <p>{exp.responsibilities}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Resume;
