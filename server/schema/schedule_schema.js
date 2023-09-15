const mongoose = require("mongoose");

const ScheduleSchema = new mongoose.Schema({
  user: String,
  schedule: Object,
});
const Schedule = mongoose.model("schedule", ScheduleSchema);

module.exports = Schedule;
