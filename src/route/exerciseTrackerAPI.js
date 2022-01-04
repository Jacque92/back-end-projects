// var express = require("express");
// var mongoose = require("mongoose");

// var router = express.Router();
// var bodyParser = require("body-parser");
// const User = require("../model/User");
// const Exercises = require("../model/Exercise");

// router.get("/api", function (req, res, next) {
//   res.send("API is working properly");
// });

// router.post(
//   "/api/users",
//   bodyParser.urlencoded({ extended: false }),
//   (req, res) => {
//     let newUser = new User({ username: req.body.username });
//     newUser.save((error, savedUser) => {
//       if (!error) {
//         let responseObj = {};
//         responseObj["username"] = savedUser.username;
//         responseObj["_id"] = savedUser.id;
//         res.json(responseObj);
//       }
//     });
//   }
// );
// router.get("/api/users", (req, res) => {
//   User.find({}, (error, dataArray) => {
//     if (!error) {
//       res.json(dataArray);
//     }
//   });
// });

// router.post(
//   "/api/users/:_id/exercises",
//   bodyParser.urlencoded({ extended: false }),
//   (req, res) => {
//     let userId = req.params._id;
//     let { description, duration, date } = req.body;
//     if (date === "" || typeof date === "undefined") {
//       date = new Date().toDateString();
//       console.log(date);
//     } else {
//       date = new Date(date).toDateString();
//       console.log(date);
//     }

//     let exercise = new Exercises({
//       duration: parseInt(duration),
//       description: description,
//       date: date,
//     });
//     User.findByIdAndUpdate(
//       userId,
//       { $push: { log: exercise } },
//       { new: false },
//       (error, updatedUser) => {
//         let returnObject = {};
//         if (error) {
//           console.log(error);
//         } else {
//           returnObject["_id"] = updatedUser["_id"];
//           returnObject["username"] = updatedUser.username;
//           returnObject["date"] = exercise.date;
//           returnObject["duration"] = exercise.duration;
//           returnObject["description"] = exercise.description;
//           res.json(returnObject);
//         }
//       }
//     );
//   }
// );

// router.get("/api/users/:_id/logs", (req, res) => {
//   let userId = req.params._id;
//   User.findById(userId, (error, result) => {
//     let responseObject = {};
//     if (error) {
//       console.log(error);
//     } else {
//       responseObject["_id"] = result._id;
//       responseObject["username"] = result.username;
//       responseObject["log"] = result.log;
//       responseObject["count"] = result.log.length;
//       if (req.query.limit) {
//         responseObject["log"] = result.log.slice(0, req.query.limit);
//       }
//       if (req.query.from || req.query.to) {
//         let fromDate = new Date(0);
//         let toDate = new Date();
//         if (req.query.from) {
//           fromDate = new Date(req.query.from);
//         }
//         if (req.query.to) {
//           toDate = new Date(req.query.to);
//         }
//         fromDate = fromDate.getTime();
//         toDate = toDate.getTime();
//         responseObject["log"] = responseObject["log"].filter((session) => {
//           let sessionDate = new Date(session.date).getTime();
//           return sessionDate >= fromDate && sessionDate <= toDate;
//         });
//       }
//       res.json(responseObject);
//     }
//   });
// });

// module.exports = router;
