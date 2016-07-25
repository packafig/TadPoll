const mongoose = require('mongoose');
const db = mongoose.connection;

const Host = require('../database/Models/HostModel');
const poll = require('../database/Models/PollModel');
// verifying
db.on('error', console.error);
db.once('open', () => {
  console.log('Mongodb connected');
});

const dbMethods = {};


// Mongodb CRUD Operation for HOSTS
dbMethods.createNewHost = (hostData) => {
  const hostTemp = new Host(hostData);
  hostTemp.save((err, hostData) => {
    if (err) return console.error('Error! ' + err);
    console.dir('saved!');
  });
};


// dbMethods.verifyHost = function(hostNameInput, hostPasswordInput) {
//
//     // fetch user and test password verification
//     Host.findOne({ username: 'SarahJ' }, function(err, user) {
//         if (err) throw err;
//
//         // test a matching password
//         user.comparePassword('Password123', function(err, isMatch) {
//             if (err) throw err;
//             console.log('Password123:', isMatch); // -> Password123: true
//         });
//
//         // test a failing password
//         user.comparePassword('123Password', function(err, isMatch) {
//             if (err) throw err;
//             console.log('123Password:', isMatch); // -> 123Password: false
//         });
//     });
//   }

// Mongodb CRUD Operations for POLLS


dbMethods.savePollInstance = (pollToSave) => {
  const pollTemp = new poll(pollToSave);
  pollTemp.save((err, pollToSave) => {
    if (err) return console.error('Error! ' + err);
    console.dir('saved!');
  });
}

dbMethods.deletePollInstance = (pollToDelete_id) => {
  poll.findByIdAndRemove(pollToDelete_id, (err, poll) => {
    console.log('removed ' + poll);
  });
};

mongoose.connect('mongodb://localhost/tadpoll');

module.exports = dbMethods;
