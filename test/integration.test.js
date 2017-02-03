const { expect } = require('chai')
const router = require('../router.js')
const request = require('request')
const { app } = require('../index.js')
const { notes } = require('../notes.js')
const PORT = 3000

describe('routes', () => {

	let server

  before(done => {
    server = app.listen(PORT, () => {
      done()
    })
  })

  after(() => {
    server.close()
  })

	describe('GET route', () => {

		it('should return all notes in an array', done => {
      const options = {
        json: true,
        method: 'GET'
      }
			request('http://localhost:' + PORT + '/notes', options, (err, res, body) => {
				expect(body).to.be.an('Array')
				done()
			})
		})
	})

	describe('POST route', () => {

		it('should return just the most recent note', done => {
			const options = {
				body: 'Integration testing, yeah!',
				method: 'POST',
				json: true
			}
			request('http://localhost:' + PORT + '/notes', options, (err, res, body) => {
				expect(err).to.not.equal(!201)
        expect(body.id).to.not.equal(1)
				done()
			})
		})
	})
})
