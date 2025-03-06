import React from 'react';
import developer from "../assets/developer.png";
import skills from "../assets/skills.png";
import projects from "../assets/projects.png";
import education from "../assets/education.png";
import "../styles/About.css";

const About = () => {
  return (
    <div className="container text-center">
      <h1 className="display-5 fw-bold mt-5">About Me</h1>
      
      <div className="row my-4">
        <div className="col-lg col-sm-6">
          <div className="card">
            <img src={developer} className="card-img-top" alt="About Me" />
            <div className="card-body">
              <h5 className="card-title fw-bold">Who I Am</h5>
              <p className="card-text text-black">
                I am a full-stack developer with a strong focus on Python. Passionate about building scalable applications, I specialize in backend development while also working with modern front-end technologies. With a problem-solving mindset, I strive to create seamless and efficient digital solutions.
              </p>
            </div>
          </div>
        </div>

        <div className="col-sm-6">
          <div className="card">
            <img src={skills} className="card-img-top" alt="Skills" />
            <div className="card-body">
              <h5 className="card-title fw-bold">My Skills</h5>
              <p className="card-text text-black">
                Expert in Python, Flask, and Django for backend development. Proficient in React, JavaScript, and MongoDB, enabling me to build dynamic full-stack applications. Experienced in Java, API integration, database optimization, and cloud services for scalable deployments.
              </p>
            </div>
          </div>
        </div>

        <div className="col-sm-6">
          <div className="card">
            <img src={projects} className="card-img-top" alt="Projects" />
            <div className="card-body">
              <h5 className="card-title fw-bold">Projects</h5>
              <p className="card-text text-black">
                I have developed a range of projects, including REST APIs, full-stack applications, and automation scripts. My work showcases my ability to solve complex problems efficiently using modern technologies, with a focus on performance and scalability.
              </p>
            </div>
          </div>
        </div>

        <div className="col-sm-6">
          <div className="card">
            <img src={education} className="card-img-top" alt="Education" />
            <div className="card-body">
              <h5 className="card-title fw-bold">Education</h5>
              <p className="card-text text-black">
                Currently studying Computer Science, focusing on software development, algorithms, and backend technologies. Passionate about AI and machine learning, continuously learning and exploring deep learning and data science for intelligent system development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
