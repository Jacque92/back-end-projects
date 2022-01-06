var express = require("express");
var mongoose = require("mongoose");
var router = express.Router();

let multer = require("multer");
router.post("/api/fileanalyse", multer().single("upfile"), (req, res) => {
  let responseObj = {};
  responseObj["name"] = req.file.originalname;
  responseObj["type"] = req.file.mimetype;
  responseObj["size"] = req.file.size;
  res.json(responseObj);
});

module.exports = router;
