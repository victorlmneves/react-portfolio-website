import React from 'react'
import ContactAddress from '../../components/contact/ContactAddress'
import ContactForm from '../../components/contact/ContactForm'

import './contacts.scss'

const Contacts = () => {
  return (
    <div className="contacts">
      <ContactAddress />
      <ContactForm />
    </div>
  )
}

export default Contacts
