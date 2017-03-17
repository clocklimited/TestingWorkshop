import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'
import HelloWorld from './HelloWorld'

describe('Exercise 1: Component: HelloWorld', function () {
  it('should say `Hello World!`', function () {
    const wrapper = shallow(<HelloWorld />)
    assert.equal(wrapper.type(), 'p')
    assert.equal(wrapper.text(), 'Hello World!')
  })
})
