const Express = require("express");
const router = Express.Router();
var { getUser, createUser, verifyEmail } = require("./data.js");

let slots = [];
router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

router.get("/verify/:id", (req, res) => {
  //   const UserId = req.params.id;
  getUser(req.params.id).then((response) => {
    if (response == null) {
      res.send(false);
    } else {
      res.send(true);
    }
  });
});

router.get("/verifyUser/:email", (req, res) => {
  const email = req.params.email;
  verifyEmail(email)
    .then((response) => {
      if (response == null) {
        res.send(false);
      } else {
        res.send(true);
      }
    })
    .catch((err) => console.log(err));
});
router.post("/add/", (req, res) => {
  const new_class = {
    ...req.body,
  };
  createUser(new_class).then((response) => {
    res.send(response);
  });
});

router.put("/:class_name", (req, res) => {
  const course = slots.find((s) => s.class_name === req.params.class_name);
  if (!course) {
    res.status(404).send("requested course was not found");
    return;
  }
  if (course.enrolled.length == course.capacity) {
    course.waitinglist.push(req.body.user);
    res.send(req.body.user + " has been added to waiting list");
    return;
  } else {
    course.enrolled.push(req.body.user);
    res.send(req.body.user + " has been added to enrolled");
  }
});

router.delete("/:class_name", (req, res) => {
  const course = slots.find((s) => s.class_name === req.params.class_name);
  if (!course) {
    res.status(404).send("requested course was not found");
    return;
  }
  const user_check = course.enrolled.find((u) => u === req.body.user);
  if (!user_check) {
    res.status(404).send(req.body.user + " has not not enrolled to the class");
    return;
  }
  const index = course.enrolled.indexOf(req.body.user);
  if (index == -1) {
    res.status(404).send(req.body.user + " has not not enrolled to the class");
    return;
  }
  course.enrolled.splice(index, 1);
  if (course.waitinglist.length > 0) {
    course.enrolled.push(course.waitinglist[0]);
    course.waitinglist.splice(0, 1);
    res.send(
      "user has been removed and person from waiting list has been moved to enrolled "
    );
    return;
  }

  res.send("user has been removed from the enrolled course");
});
module.exports = router;
