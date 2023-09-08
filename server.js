const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/time-table-manager-database")
  .then(() => console.log("Connected!"))
  .catch((err) => console.log(err));

const userSchema = new mongoose.Schema({
  uid: String,
  displayName: String,
  email: String,
  emailVerified: Boolean,
  photoURL: String,
});

const FriendsSchema = new mongoose.Schema({
  user: String,
  friends: Array,
});
const Course = mongoose.model("user", userSchema);
const Friends = mongoose.model("friends", FriendsSchema);

async function createUser() {
  const course = new Course({
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
}

async function getUser() {
  try {
    const friends = await Friends.find({
      user: "aSFZlCl6NePQGVGFPYdDQ7VLcBY2",
    });
    console.log(friends);
  } catch {
    console.log("no user found");
  }
}

async function deleteUser(userId) {
  try {
    const friends = await Friends.find({
      user: userId,
    });
    for (var i of friends) {
      await Friends.findByIdAndDelete(
        { _id: i._id },
        console.log("deleted ", i)
      );
    }
  } catch {
    console.log("no user found");
  }
}

export default {};
