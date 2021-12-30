import React from 'react'

import './about.scss'

const About = () => {
  return (
    <div className="about">
      <div className="about__item">
        <div className="about__content-wrapper">
          <div className="about__content">
            <h2 className="about__title">Hi! I'm Victor Neves</h2>
            <p className="about__info">
              Self-taught professional, competent, motivated and dedicated,
              experienced in Desktop Publishing and Web Development.
            </p>
          </div>
        </div>
        <div className="about__wrapper-img">
          <div
            className="about__image"
            style={{ 'backgroundImage': `url(YOUR_API_ENDPOINT)` }}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default About
