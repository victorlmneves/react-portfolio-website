import React from 'react'

import './footerNewsletter.scss'

function FooterNewsletter() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('You have submitted the form.')
  }

  return (
    <div className="footer-newsletter">
      <h3 className="footer-newsletter__title">Subscribe Newsletter</h3>
      <p className="footer-newsletter__text">
        Subscribe our newsletter and get latest update
      </p>
      <div className="footer-newsletter__group">
        <form
          onSubmit={handleSubmit}
          action="https://dev.us1.list-manage.com/subscribe/post?u=0bfab83c7d1ac1ce846909de6&amp;id=87b6b5acbf"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          noValidate
        >
          <label className="is-hidden">Email</label>
          <input
            type="email"
            defaultValue=""
            name="EMAIL"
            id="mce-EMAIL"
            className="footer-newsletter__input"
            placeholder="Your email"
          />
          <input
            type="submit"
            defaultValue="Subscribe"
            name="subscribe"
            id="mc-embedded-subscribe"
            className="footer-newsletter__button"
          />
        </form>
      </div>
    </div>
  )
}

export default FooterNewsletter
