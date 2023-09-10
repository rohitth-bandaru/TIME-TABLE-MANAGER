const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  uid: String,
  displayName: String,
  email: String,
  emailVerified: Boolean,
  photoURL: String,
});

const User = mongoose.model("user", userSchema);

module.exports = User;
