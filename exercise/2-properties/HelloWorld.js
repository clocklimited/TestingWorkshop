import React from 'react'

const HelloWorld = ({ who = 'World' }) => (<p>Hello {who}!</p>)

HelloWorld.propTypes = {
  who: React.PropTypes.string
}

export default HelloWorld
