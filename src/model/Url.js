var mongoose = require("mongoose");

let urlSchema = new mongoose.Schema({
  original: { type: String, required: true },
  short: Number,
});

const URL = mongoose.model("URL", urlSchema);

module.exports = new mongoose.model("Url", urlSchema);
