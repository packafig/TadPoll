const expect = require('chai').expect;
const MongoClient = require('mongodb').MongoClient;
const pg = require('pg');
const mongoose = require('mongoose');
const db = mongoose.connection;

const host = require('../Database/Models/HostModel');
const poll = require('../Database/Models/PollModel');


describe('TadPoll DB ', function() {
  const polls;
  const db;
  before(function(done) {
    MongoClient.connect('mongodb://localhost/tadpoll', function(err, db_) {
      if (err) throw new Error(err);
      db = db_;
      polls = db_.collection('polls');
      done();
    });
  });

  it('should have records in the "polls" collection', function(done) {
    polls.count(function(err, num) {
      expect(err).to.not.exist;
      expect(num).to.be.above(1);
      done();
    });
  });

  after(function() {
    db.close();
  });
});
