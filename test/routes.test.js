process.env.NODE_ENV = 'test';
import knex from '../db/db';
import chai from 'chai';

import Server from '../server/app';
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;

describe('Books', () => {
  beforeEach(function(done) {
    knex.migrate.rollback().then(function() {
      knex.migrate.latest().then(function() {
        return knex.seed.run().then(function() {
          done();
        });
      });
    });
  });

  afterEach(function(done) {
    knex.migrate.rollback().then(function() {
      done();
    });
  });
  it('should return all books', done => {
    chai
      .request(Server)
      .get('/books')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.length).to.equal(5);
        done();
      });
  });

  it('should return all authors', done => {
    chai
      .request(Server)
      .get('/authors')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.length).to.equal(2);
        done();
      });
  });
});
