import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'
import ContactList from './ContactList'

const contacts = [
  {
    name: 'Paul Serby'
  },
  {
    name: 'Tom Smith'
  }
]

describe('Exercise 4: Component: ContactList', function () {
  it('should show message if no `contacts` are passed', function () {
    const wrapper = shallow(<ContactList contacts={[]} />)
    assert.equal(wrapper.childAt(0).html(), '<p>No contacts found</p>')
  })

  it('should only contain `Contact` components', function () {
    const wrapper = shallow(<ContactList contacts={contacts} />)
    assert(wrapper.children().length >= 1, 'Some children expected')
    wrapper.children().forEach(child => assert.equal(child.name(), 'Contact', 'Only `Contact` components expected as children'))
  })

  it('should take `contacts` and create Contact components', function () {
    const wrapper = shallow(<ContactList contacts={contacts} />)
    assert.equal(wrapper.find('Contact').length, 2)
    assert.equal(wrapper.childAt(0).prop('name'), 'Paul Serby')
    assert.equal(wrapper.childAt(1).prop('name'), 'Tom Smith')
  })
})
