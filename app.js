var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var cors = require("cors");

var journeysRouter = require("./routes/journey");
var usersRouter = require("./routes/user");
var eventsRouter = require("./routes/events");
var userEventsRouter = require("./routes/userEvents");

var app = express();

//cors error
app.use(cors());


app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/journey", journeysRouter);
app.use("/events", eventsRouter);
app.use("/users", usersRouter);
app.use("/userEvents", userEventsRouter);


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
  res.json({error:err});
});

module.exports = app;
