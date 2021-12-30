import React from 'react'

import './contactAddress.scss'

const ContactAddress = () => {
  return (
    <div className="contact-address">
      <h3 className="contact-address__title">My Contacts</h3>
      <ul className="contact-address__list">
        <li className="contact-address__item">
          <span className="contact-address__icon">
            <i className="icon-phone4"></i>
          </span>
          + 351 96 480 54 53
        </li>
        <li className="contact-address__item">
          <span className="contact-address__icon">
            <i className="icon-envelope2"></i>
          </span>
          <a mailto="info@victorneves.dev">info@victorneves.dev</a>
        </li>
        <li className="contact-address__item">
          <span className="contact-address__icon">
            <i className="icon-globe3"></i>
          </span>
          <a href="https://www.victorneves.dev">www.victorneves.dev</a>
        </li>
      </ul>
    </div>
  )
}

export default ContactAddress
