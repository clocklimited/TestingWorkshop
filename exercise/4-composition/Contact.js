import React from 'react'
import Card from '../3-children/Card'

const Contact = ({ name, emailAddress, imageUrl }) => (
  <Card>
    {imageUrl && <img className="card__image" src={imageUrl} />}
    <header className="card__header">{name}</header>
    {emailAddress && <a className="card__link card__link--email" href={'mailto:' + emailAddress}>{emailAddress}</a>}
  </Card>
)

const ContactShape = Contact.propTypes = {
  name: React.PropTypes.string.isRequired,
  emailAddress: React.PropTypes.string,
  imageUrl: React.PropTypes.string
}

export { ContactShape }
export default Contact
