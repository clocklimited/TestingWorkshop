import React from 'react'
import classNames from 'classnames'

const Card = ({ type, children }) => (
  <div className={classNames('card', { 'card--compact': type === 'compact' })}>
    {children}
  </div>
)

Card.propTypes = {
  type: React.PropTypes.string,
  children: React.PropTypes.node
}

export default Card
