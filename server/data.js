const User = require("./schema/user_schema");
const Friends = require("./schema/friends_schema");

async function getUser(id) {
  const friends = await Friends.find({ user: id });
  console.log(friends);
  return friends;
}

async function createUser() {
  console.log("create user triggered");
  const course = new User({
    uid: "aSFZlCl6NePQGVGFPYdDQ7VLcBY2",
    displayName: "Rohitth Bandaru",
    email: "rohitthbandaru@gmail.com",
    emailVerified: true,
    photoURL:
      "https://lh3.googleusercontent.com/a/AAcHTteGEDDfuxH6atOWcH9eoRa2sRLMiChW9Xg_o3ITAhmiw7A=s96-c",
  });
  const friendlist = new Friends({
    user: "aSFZlCl6NePQGVGFPYdDQ7VLcBY2",
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

exports.getUser = getUser;
exports.createUser = createUser;
