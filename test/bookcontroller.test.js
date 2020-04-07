// test file for book api's
process.env.NODE_ENV = 'test'
import chai from 'chai'
import request from 'supertest'
import knex from '../db/db'

import Server from '../server/api/v1/routes';
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect

describe('Books', () => {
  beforeEach(function (done) {
    knex.migrate.rollback()
      .then(function () {
        knex.migrate.latest()
          .then(function () {
            return knex.seed.run()
              .then(function () {
                done()
              })
          })
      })
  })

  afterEach(function (done) {
    knex.migrate.rollback()
      .then(function () {
        done()
      })
  })
//request(app.use(routes)).get('/').end()
 it('should return all books', (done) => {
       chai.request(Server)
       .get('/books')
       .end((err, res) => {
         expect(res.status).to.equal(200);
         expect(res.body.length).to.equal(5);
       done();
       });
     });
})
