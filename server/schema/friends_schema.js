const mongoose = require("mongoose");

const FriendsSchema = new mongoose.Schema({
  user: String,
  friends: [{ user: String, status: String }],
});
const Friends = mongoose.model("friends", FriendsSchema);

module.exports = Friends;
