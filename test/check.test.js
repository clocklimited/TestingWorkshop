import assert from 'assert'
import setup from './setup'

describe('setup check', function () {
  it('should run correctly', function () {
    assert.equal(setup(), 'Correctly Setup')
  })
})
