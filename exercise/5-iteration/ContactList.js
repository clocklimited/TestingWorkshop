import React from 'react'
import Contact from '../4-composition/Contact'
import { url } from 'gravatar'

const ContactList = ({ contacts = [] }) => {
  const contactsWithImages = contacts.map(contact => {
    const newContact = Object.assign({}, contact)
    if (!newContact.imageUrl) newContact.imageUrl = url(newContact.emailAddress, { s: '200', r: 'x', d: 'retro' })
    return newContact
  })

  return (
    <div>
      {contacts.length > 0 ? contactsWithImages.map((contact, i) => <Contact key={i} {...contact} />) : <p>No contacts found</p> }
    </div>
  )
}

ContactList.propTypes = {
  contacts: React.PropTypes.arrayOf(React.PropTypes.shape(Contact.propTypes))
}

export default ContactList
