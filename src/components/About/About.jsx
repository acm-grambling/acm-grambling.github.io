import React from 'react'
import './About.css'

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-title">
            About <span className="highlight">ACM at Grambling</span>
          </h2>
          <p className="about-description">
            The Association for Computing Machinery (ACM) at Grambling State University is a student-run organization dedicated to advancing computing as a science and profession. We provide opportunities for professional development, networking, and technical skill enhancement.
          </p>
        </div>
        <div className="about-visual">
          <div className="visual-circles">
            <div className="circle circle-1"></div>
            <div className="circle circle-2"></div>
            <div className="circle circle-3"></div>
            <div className="circle circle-4"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

