var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  user_email: String,
  user_fullname: String,
  user_address: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', UserSchema);