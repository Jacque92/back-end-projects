var express = require("express");
var mongoose = require("mongoose");

var router = express.Router();
var bodyParser = require("body-parser");

// let Url = require("../model/Url");

let urlSchema = new mongoose.Schema({
  original: { type: String, required: true },
  short: Number,
});

const Url = mongoose.model("Url", urlSchema);

let responseObj = {};

// router.post("/api/shorturl", (req, res) => {
//   res.json(req.body);
// });

router.get("/api/shorturl/:input", (req, res) => {
  let input = req.params.input;
  Url.findOne({ short: input }, (error, result) => {
    if (!error && result !== undefined) {
      res.redirect(result.original);
    } else {
      res.json({ error: "Url doesn't found" });
    }
  });
});
router.post(
  "/api/shorturl",
  bodyParser.urlencoded({ extended: false }),
  (req, res) => {
    let inputUrl = req.body.url;
    console.log(req.body);
    let urlRegExp = new RegExp(
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
    );
    if (!inputUrl.match(urlRegExp)) {
      res.json({ error: "invalid url" });
      return;
    }

    responseObj["original_url"] = inputUrl;
    let inputShort = 1;
    Url.findOne({})
      .sort({ short: "desc" })
      .exec((error, result) => {
        if (!error && result != undefined) {
          inputShort = result.short + 1;
        }
        if (!error) {
          Url.findOneAndUpdate(
            { original: inputUrl },
            { original: inputUrl, short: inputShort },
            { new: true, upsert: true },
            (err, savedUrl) => {
              if (!error) {
                responseObj["short_url"] = savedUrl.short;
                res.json(responseObj);
              }
            }
          );
        }
      });
  }
);
module.exports = router;
