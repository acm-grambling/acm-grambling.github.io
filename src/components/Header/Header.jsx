import React from 'react'
import logoImage from '../../assets/Untitled_design-removebg-preview.png'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <nav className="header-nav">
        <div className="header-container">
          <div className="logo-container">
            <img src={logoImage} alt="ACM at Grambling Logo" className="logo-image" />
            <span className="logo-name">acm@gram</span>
          </div>
          <div className="nav-group">
            <ul className="nav-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
            </ul>
            <button className="join-button">Join Us</button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header

