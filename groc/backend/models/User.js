const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // You can change this to `false` if the name is optional
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: false, // Optional field, you can make it required if necessary
  },
  address: {
    type: String,
    required: false, // Optional field
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
