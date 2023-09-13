const User = require("./schema/user_schema");
const Friends = require("./schema/friends_schema");

async function getUser(id) {
  const friends = await Friends.findOne({ user: id });
  return friends;
}

async function createUser(userData) {
  const course = new User({
    ...userData,
  });
  const friendlist = new Friends({
    user: userData.uid,
    friends: [
      {
        user: "",
        FriendshipStatus: true,
      },
    ],
  });
  const result = await course.save();
  const result2 = await friendlist.save();
  console.log(result, result2);
  return result;
}

async function verifyEmail(email) {
  const result = await User.findOne({ email: email });
  return result;
}

exports.getUser = getUser;
exports.createUser = createUser;
exports.verifyEmail = verifyEmail;
