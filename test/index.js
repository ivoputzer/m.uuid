const {ok, equal} = require('assert')

test('m.uuid', () => {
  test('.uuid', () => {
    const {uuid} = require('..')

    test('is callable', () => {
      equal(typeof uuid, 'function')
    })

    test('returns RFC4122v4 compliant universally unique identifier with `Math.random`', () => {
      ok(/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(uuid()))
    })
  })
})

test('m.uuid/crypto', () => {
  test('.uuid', () => {
    const {uuid} = require('../crypto')

    test('is callable', () => {
      equal(typeof uuid, 'function')
    })

    test('returns RFC4122v4 compliant universally unique identifier with `crypto.randomBytes`', () => {
      ok(/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(uuid()))
    })
  })
})
