import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'
import Contact from './Contact'

describe('Exercise 4: Component: Contact', function () {
  it('should have expected default structure', function () {
    const wrapper = shallow(<Contact name="Paul Serby" />)
    assert.equal(wrapper.name(), 'Card')
    assert.equal(wrapper.find('Card img').length, 0, 'Missing img')
    assert.equal(wrapper.find('Card header').length, 1, 'Missing header')
    assert.equal(wrapper.find('Card a').length, 0, 'Unexpected a')
  })

  it('should omit img if `imageUrl` missing', function () {
    const wrapper = shallow(<Contact name="Paul Serby" />)
    assert.equal(wrapper.find('img.card__image').length, 0, 'img should be omitted')
  })

  it('should have an img with expected className', function () {
    const wrapper = shallow(<Contact name="Paul Serby" imageUrl={'https://img.com/a.jpg'} />)
    const imgElemement = wrapper.find('img.card__image')
    assert.equal(imgElemement.length, 1, 'Missing image element')
    assert.equal(imgElemement.prop('src'), 'https://img.com/a.jpg')
  })

  it('should show `name`', function () {
    const wrapper = shallow(<Contact name="Paul Serby" />)
    assert.equal(wrapper.find('.card__header').length, 1, 'Expected .card__header not found')
    assert.equal(wrapper.find('.card__header').text(), 'Paul Serby')
  })

  it('should have `card__header` with empty `name`', function () {
    const wrapper = shallow(<Contact name="" />)
    assert.equal(wrapper.find('.card__header').length, 1)
    assert.equal(wrapper.find('.card__header').text(), '')
  })

  it('should show `emailAddress` if set', function () {
    const wrapper = shallow(<Contact name="Paul Serby" emailAddress="paul.serby@clock.co.uk" />)
    assert.equal(wrapper.find('.card__link.card__link--email').prop('href'), 'mailto:paul.serby@clock.co.uk')
  })

  it('should not show `emailAddress` when not present', function () {
    const wrapper = shallow(<Contact name="Paul Serby" />)
    assert.equal(wrapper.find('a.card__link.card__link--email').length, 0, 'Unexpected emailAddress element')
  })
})
