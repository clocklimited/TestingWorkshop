import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'
import Card from './Card'

describe('Exercise 3: Component: Card', function () {
  it('should place children inside', function () {
    const wrapper = shallow(<Card><p>child placement</p></Card>)
    assert.equal(wrapper.type(), 'div')
    assert.equal(wrapper.childAt(0).type(), 'p')
    assert.equal(wrapper.childAt(0).text(), 'child placement')
  })

  it('should have expected `card` class', function () {
    const wrapper = shallow(<Card />)
    assert.equal(wrapper.find('div').prop('className'), 'card')
  })

  it('should add compact modifier', function () {
    const wrapper = shallow(<Card type="compact"><hr /></Card>)
    assert.equal(wrapper.find('div').prop('className'), 'card card--compact')
  })
})
