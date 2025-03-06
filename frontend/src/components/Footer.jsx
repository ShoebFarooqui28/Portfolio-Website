import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer className="text-center text-white" style={{ backgroundColor: "#f1f1f1" }}>
      <div className="container pt-4">
        <section className="mb-4">
          <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="mailto:shoebfarooqui2@gmail.com" role="button">
            <i className="fas fa-envelope"></i>
          </a>
          <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="https://www.instagram.com/shoebbbsss/" role="button">
            <i className="fab fa-instagram"></i>
          </a>
          <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="https://www.linkedin.com/in/shoeb-farooqui-301935247/" role="button">
            <i className="fab fa-linkedin"></i>
          </a>
          <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="https://github.com/ShoebFarooqui28" role="button">
            <i className="fab fa-github"></i>
          </a>
        </section>
      </div>
      <div className="text-center text-light p-1 " style={{ backgroundColor: "rgb(148, 113, 107)"}}>
        © 2025 Copyright : Shoeb Farooqui
      </div>
    </footer>
  )
}

export default Footer