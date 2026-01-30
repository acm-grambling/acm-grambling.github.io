import React from 'react'
import waveSvg from '../../assets/wavy (1).svg'
import './Features.css'

const Features = () => {
  const features = [
    {
      title: 'Learn',
      description: 'Workshops and technical training sessions'
    },
    {
      title: 'Mentorship',
      description: 'Have 1:1 conversations with mentors and peers'
    },
    {
      title: 'Connect',
      description: 'Network with peers'
    }
  ]

  return (
    <section className="features-section">
      <div className="wave-divider">
        <img src={waveSvg} alt="Wave divider" className="wave-svg" />
      </div>
      <div className="features-container">
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-top">
                <h3 className="feature-title">{feature.title}</h3>
              </div>
              <div className="feature-bottom">
                <p className="feature-description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

