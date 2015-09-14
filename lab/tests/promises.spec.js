'use strict'

import {makeAPromise, wait} from 'promise'

describe('Promises', () => {
  it('Make a promise and carry on. Eventualy it will get done. :)', done => {
    makeAPromise('Lose 5 pounds in a month').then(message => {
      expect(/done/i.test(message)).toBe(true)
      done()
    })
  })

  it('ES6 should not break promises', done => {
    makeAPromise('Save money').then(message => {
      expect(/done/i.test(message)).toBe(true)
      done()
    })
  })

  it('should wait some time as promised', done => {
    wait().then(complete => {
      expect(/complete/i.test(complete.message)).toBe(true)
      done()
    })
  })

  it('should wait no much longer than what has been promised', done => {
    let seconds = 2

    wait(seconds).then(complete => {
      expect(/complete/i.test(complete.message)).toBe(true)
      expect(complete.duration).toBeCloseTo(seconds)

      done()
    })
  })
})