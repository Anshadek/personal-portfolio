import React, { useState, useEffect } from "react";
import { getSkills } from "../../api/user/skillsApi";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getSkills()
      .then((res) => {
        // Convert object -> array
        const skillArray = Object.entries(res.data).map(([name, level]) => ({
          name,
          level,
        }));
        setSkills(skillArray);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <section id="skills" className="skills section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Skills</h2>
        <p>
        Here are the technologies and programming languages I have worked with, continuously improving my skills to build scalable and efficient applications.
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row skills-content skills-animation">
        
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {skills.map((skill, index) => (
  <div className="col-lg-6" key={index}>
    <div className="progress">
      <span className="skill">
        <span>{skill.name}</span>{" "}
        <i className="val">{skill.level}%</i>
      </span>
      <div className="progress-bar-wrap">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${skill.level}%` }}
          aria-valuenow={skill.level}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  </div>
))}

         
        </div>
      </div>
    </section>
  );
};

export default Skills;
