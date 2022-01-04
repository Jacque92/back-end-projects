var express = require("express");
var mongoose = require("mongoose");

var router = express.Router();
var bodyParser = require("body-parser");

let responseObj = {};
router.get("/api/:input", function (req, res) {
  let { input } = req.params;

  if (parseInt(input) < 10000) {
    responseObj["unix"] = new Date(input).getTime();
    responseObj["utc"] = new Date(input).toUTCString();
  } else {
    //   timestamp
    input = parseInt(input);
    responseObj["unix"] = new Date(input).getTime();
    responseObj["utc"] = new Date(input).toUTCString();
  }

  if (!responseObj["unix"] || !responseObj["utc"]) {
    // responseObj["error"] = "Invalid Date"
    res.json({ error: "Invalid Date" });
  }
  res.json(responseObj);
});

router.get("/api/", function (req, res) {
  responseObj["unix"] = new Date().getTime();
  responseObj["utc"] = new Date().toUTCString();
  res.json(responseObj);
});

module.exports = router;
