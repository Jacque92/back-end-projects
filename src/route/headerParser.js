var express = require("express");
var mongoose = require("mongoose");

var router = express.Router();
var bodyParser = require("body-parser");

let responseObj = {};

router.get("/api/whoami/", (req, res) => {
  responseObj["ipaddress"] = req.ip;
  responseObj["language"] = req.get("Accept-language");
  responseObj["software"] = req.get("User-Agent");
  res.json(responseObj);
});

module.exports = router;
