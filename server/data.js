const User = require("./schema/user_schema");
const Friends = require("./schema/friends_schema");
const Schedule = require("./schema/schedule_schema");

async function getUser(id) {
  const friends = await Friends.findOne({ user: id });
  return friends;
}

async function getUserData(id) {
  const userinfo = await User.findOne({ uid: id });
  const friendsinfo = await Friends.findOne({ user: id });
  const scheduleinfo = await Schedule.findOne({ user: id });
  return {
    userinfo: userinfo,
    friendsinfo: friendsinfo,
    scheduleinfo: scheduleinfo,
  };
}

async function createUser(userData) {
  const course = new User({
    ...userData,
  });
  const friendlist = new Friends({
    user: userData.uid,
    friends: [],
    requests: [],
  });
  const schedule = new Schedule({
    user: userData.uid,
    schedule: {},
  });
  const result1 = await course.save();
  const result2 = await friendlist.save();
  const result3 = await schedule.save();
  return {
    course_result: result1,
    friends_result: result2,
    schedule_result: result3,
  };
}

async function verifyEmail(email) {
  const result = await User.findOne({ email: email });
  return result;
}

async function createRequest(data) {
  const sender = await User.findOne({ email: data.sender });
  const receiver = await User.findOne({ email: data.receiver });
  const senderObj = {
    user: data.sender,
    status: "sent",
  };
  const receiverObj = {
    user: data.receiver,
    status: "received",
  };
  const result = await Friends.findOne({ user: sender.uid });
  const result1 = await Friends.findOne({ user: receiver.uid });
  console.log(result1);
  let check1 = false;

  for (one of result.friends) {
    if (one.user == receiverObj.user) {
      check1 = true;
    }
  }
  if (!check1) {
    result.friends.push(receiverObj);
    result.save();
  }

  let check2 = false;
  for (one of result1.friends) {
    if (one.user == senderObj.user) {
      check2 = true;
    }
  }
  if (!check2) {
    result1.friends.push(senderObj);
    result1.save();
  }
  return result1;
}

async function acceptUser(data) {
  const sender = await User.findOne({ email: data.sender });
  const receiver = await User.findOne({ email: data.receiver });
  const result = await Friends.findOne({ user: sender.uid });
  const result1 = await Friends.findOne({ user: receiver.uid });

  for (one of result.friends) {
    if (one.user == data.receiver) {
      one.status = "friends";
    }
  }
  for (one of result1.friends) {
    if (one.user == data.sender) {
      one.status = "friends";
    }
  }
  result.save();
  result1.save();
  return result, result1;
}

async function rejectUser(data) {
  const sender = await User.findOne({ email: data.sender });
  const receiver = await User.findOne({ email: data.receiver });
  const result = await Friends.findOne({ user: sender.uid });
  const result1 = await Friends.findOne({ user: receiver.uid });

  for (one of result.friends) {
    if (one.user == data.receiver) {
      one.status = "rejected";
    }
  }
  for (one of result1.friends) {
    if (one.user == data.sender) {
      one.status = "rejected";
    }
  }
  result.save();
  result1.save();
  return result, result1;
}

exports.getUser = getUser;
exports.createUser = createUser;
exports.verifyEmail = verifyEmail;
exports.createRequest = createRequest;
exports.getUserData = getUserData;
exports.acceptUser = acceptUser;
exports.rejectUser = rejectUser;
