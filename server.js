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

app.use(express.static("public"));

app.use(cors());

// app.use("/public", express.static(`${process.cwd()}/public`));

// app.get("/", function (req, res) {
//   res.sendFile(process.cwd() + "/views/index.html");
// });

// dotenv.config({ path: path.resolve(__dirname, "./.env") });

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "./build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send(`API is running on ${process.env.NODE_ENV}`);
  });
}

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// app.use(express.static(__dirname + "/public"));
//import Routes
const TimeStampRoute = require("./src/route/timeStamp");
const HeaderParserRoute = require("./src/route/headerParser");
const UrlShortenerRoute = require("./src/route/urlshortener");

//middleware
app.use("/timestamp", TimeStampRoute);
app.use("/headerparser", HeaderParserRoute);
app.use("/urlshortener", UrlShortenerRoute);

// app.use("/", exercisetrackerAPI);

// var exercisetrackerAPI = require("./src/route/exerciseTrackerAPI");


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
