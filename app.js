<<<<<<< HEAD
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
=======
require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
>>>>>>> 24d97e294c21abdaee11e01e8ac5af5247fc78f3

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const adminRouter = require("./routes/admin");

<<<<<<< HEAD
const app = express();

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/servy");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// // Import the functions you need from the SDKs you need
const firebase = require("firebase");

const firebaseConfig = {
  apiKey: "AIzaSyCFisFp--WFxeKiyTXo00I9yEzk8nrr3T8",
  authDomain: "servy-39f61.firebaseapp.com",
  projectId: "servy-39f61",
  storageBucket: "servy-39f61.appspot.com",
  messagingSenderId: "528883604006",
  appId: "1:528883604006:web:af6ae690d67488576ca4e7",
};

=======
// Import the functions you need from the SDKs you need
const firebase = require('firebase');
const firebaseConfig = require('./config/firebaseConfig');
>>>>>>> 24d97e294c21abdaee11e01e8ac5af5247fc78f3
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/admin", adminRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
