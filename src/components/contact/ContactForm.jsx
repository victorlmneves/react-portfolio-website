import React, { useReducer, useState } from 'react'

import './contactForm.scss'

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value
  }
}

function ContactForm() {
  const [formData, setFormData] = useReducer(formReducer, {})
  const [submitting, setSubmitting] = useState(false)
  const formFields = {
    name: '',
    email: '',
    message: ''
  }

  const clearForm = () => {
    for (let field in formFields) {
      formFields[field] = ''
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    setSubmitting(true)

    setTimeout(() => {
      const form = new FormData()

      const sentData = {
        name: event.target.name.value,
        email: event.target.email.value,
        message: event.target.message.value
      }

      form.name = sentData.name
      form.email = sentData.email
      form.message = sentData.message

      // Send form to server
      fetch('YOUR_API_ENDPOINT', {
        method: 'POST',
        body: JSON.stringify(form),
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-type': 'multipart/form-data; charset=UTF-8'
        }
      })

      .then(() => {
        clearForm()
        setSubmitting(false)
        setFormData(form)
      }).catch((e) => {
        console.log(e)
      })
    }, 3000)
  }

  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit}>
        <div className="contact-form__group contact-form__group--flex">
          <input
            required
            name="name"
            type="text"
            className="contact-form__input"
            placeholder="Name"
          />
          <input
            required
            name="email"
            type="email"
            className="contact-form__input"
            placeholder="Email"
          />
        </div>
        <div className="contact-form__group">
          <textarea
            required
            name="message"
            className="contact-form__input contact-form__input--textarea"
            cols="30"
            rows="7"
            placeholder="Message"
          ></textarea>
        </div>
        <div className="contact-form__group">
          {submitting && (
            <input
              type="submit"
              value="Sending..."
              className="contact-form__button contact-form__button--disabled"
              disabled
            />
          )}
          {!submitting && (
            <input
              type="submit"
              value="Send Message"
              className="contact-form__button"
            />
          )}
        </div>
      </form>
    </div>
  )
}

export default ContactForm
