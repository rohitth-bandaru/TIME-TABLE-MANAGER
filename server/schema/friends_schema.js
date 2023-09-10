const mongoose = require("mongoose");

const FriendsSchema = new mongoose.Schema({
  user: String,
  friends: Array,
});
const Friends = mongoose.model("friends", FriendsSchema);

module.exports = Friends;
