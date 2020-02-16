var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  usr_email: String,
  usr_fullname: String,
  usr_address: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', UserSchema);