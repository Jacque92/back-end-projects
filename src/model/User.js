var mongoose = require("mongoose");

let exerciseSchema = mongoose.Schema({
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  date: String,
});

let userSchema = mongoose.Schema({
  username: { type: String, required: true },
  log: [exerciseSchema],
});

module.exports = mongoose.model("Exercises", exerciseSchema);

module.exports = mongoose.model("User", userSchema);
