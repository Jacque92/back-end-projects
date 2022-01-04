var mongoose = require("mongoose");

//Exercise Tracker
export let exerciseSchema = mongoose.Schema({
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  date: String,
});

module.exports = mongoose.model("Exercises", exerciseSchema);
