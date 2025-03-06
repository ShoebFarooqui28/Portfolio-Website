import React from 'react'
import developer from "../assets/developer.png"
import skills from "../assets/skills.png"
import projects from "../assets/projects.png"
import education from "../assets/education.png"
import "../styles/About.css"

const About = () => {
  return (
    <div className="container text-center">
      <h1 className='display-5 fw-bold mt-5'>About Me</h1>
      
      <div className="row my-4">
        <div className="col-lg col-sm-6">
          <div className="card">
            <img src={developer} className="card-img-top" alt="About Me" />
            <div className="card-body">
              <h5 className="card-title fw-bold">Who I Am</h5>
              <p className="card-text">I am a full-stack developer with a strong focus on Python. Passionate about building efficient and scalable applications, I specialize in backend development while also working with modern front-end technologies. With a problem-solving mindset and a keen interest in automation, I strive to create seamless and optimized digital solutions.</p>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <img src={skills} className="card-img-top" alt="Skills" />
            <div className="card-body">
              <h5 className="card-title fw-bold">My Skills</h5>
              <p className="card-text">Expert in Python, Flask, and Django for backend development. Proficient in React, JavaScript, and MongoDB, allowing me to build complete and dynamic web applications. Experienced in Java, having built applications like a weather app. Skilled in integrating APIs, optimizing database performance, and leveraging cloud services to deploy scalable solutions.</p>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <img src={projects} className="card-img-top" alt="Projects" />
            <div className="card-body">
              <h5 className="card-title fw-bold">Projects</h5>
              <p className="card-text">I have developed various projects, from REST APIs and full-stack web applications to automation scripts. I have also built applications using Python libraries and Java, showcasing my ability to solve complex problems with modern technologies. My projects emphasize efficiency, scalability, and user-friendly design.</p>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <img src={education} className="card-img-top" alt="Education" />
            <div className="card-body">
              <h5 className="card-title fw-bold">Education</h5>
              <p className="card-text">Currently pursuing studies in Computer Science with a focus on software development, algorithms, and backend technologies. Passionate about AI and machine learning, continuously learning and adapting to new advancements in the field. Exploring deep learning and data science to build intelligent systems.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About