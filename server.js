"use strict";
var express = require("express");
var mongoose = require("mongoose");
var app = express();
var dotenv = require("dotenv");
var cors = require("cors");
var bodyParser = require("body-parser");
var path = require("path");

app.enable("trust proxy");
dotenv.config();

app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "./build")));
} else {
  app.get("/", (req, res) => {
    res.send(`API is running on ${process.env.NODE_ENV}`);
  });
}

//import Routes
const TimeStampRoute = require("./src/route/timeStamp");
const HeaderParserRoute = require("./src/route/headerParser");
const UrlShortenerRoute = require("./src/route/urlshortener");
const ExerciseTrackerRoute = require("./src/route/exerciseTrackerAPI");
const FileDataRoute = require("./src/route/fileMetaData");

app.get("/timestamp", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./build", "index.html"));
});

app.get("/headerparser", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./build", "index.html"));
});

app.get("/urlshortener", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./build", "index.html"));
});
app.get("/exercisetracker", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./build", "index.html"));
});
app.get("/metadata", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./build", "index.html"));
});
//middleware
app.use("/timestamp", TimeStampRoute);
app.use("/headerparser", HeaderParserRoute);
app.use("/urlshortener", UrlShortenerRoute);
app.use("/exercisetracker", ExerciseTrackerRoute);
app.use("/metadata", FileDataRoute);

//conncet to database
async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://testboy:test1234@cluster0.l0cuk.mongodb.net/db1?retryWrites=true&w=majority",
      { useNewUrlParser: true }
    );
    console.log("Successfully connected to Database");
  } catch (error) {
    console.log("Failed to connect to Database");
    console.log(error);
  }
}
connect();

const listener = app.listen(process.env.PORT || 8080, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
