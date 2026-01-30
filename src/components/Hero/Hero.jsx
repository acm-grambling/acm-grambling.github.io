import React from 'react'
import heroBackground from '../../assets/hero-background.jpg'
import wavySvg from '../../assets/wavy.svg'
import './Hero.css'

const Hero = () => {
  return (
    <section 
      className="hero" 
      id="home"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          Welcome to  <span className="highlight">ACM at Grambling</span>
        </h1>
        <p className="hero-subtitle">
          Empowering the next generation of tech leaders at Grambling State University.
        </p>
        <button className="hero-cta">Join Now</button>
      </div>
      <div className="hero-wave">
        <img src={wavySvg} alt="Wave divider" className="wave-svg" />
      </div>
    </section>
  )
}

export default Hero
