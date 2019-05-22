/************************************************************
 * Purpose : Server application starts here.
 * 
 * @description
 * @file : server.js
 * @overview : Import all required packages here.
 * @author: Deepthi V <deepthiv286@gmail.com>
 * @version : 1.0
 * @since : 07/05/2019
 * 
 *************************************************************/
const UserRouter = require("../Server/routes/routes");

const express = require("express");
// Import Body parser
var bodyParser = require("body-parser");
// create express app
const app = express();
app.use(bodyParser.json());
/********************************************************/

/***************************************************************/
// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({ extended: true }));

//To perform validations
var expressValidator = require("express-validator");
app.use(expressValidator());

require("http").createServer(app);
app.use("/", UserRouter);

// define a simple route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Fundoo App"
  });
});
// listen for requests
const server = app.listen(4000, () => {
  console.log("Server is listening on port 4000");
});
// Configuring the database
const databaseConfig = require("../Server/config/config");

require("dotenv").config();
// Import Mongoose
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

// Connecting to the database
// useNewUrlParser: true==> Mongoose lets you start using your models immediately,
// without waiting for mongoose to establish a connection to MongoDB.
mongoose
  .connect(databaseConfig.url, {
    useNewUrlParser: true
  })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch(err => {
    console.log("Could not connect to the database.", err);
    process.exit();
  });