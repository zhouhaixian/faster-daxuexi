const createError = require("http-errors");
const express = require("express");
const logger = require("morgan");
const hbs = require("hbs");

const indexRouter = require("./routes/index");
const imageRouter = require("./routes/image");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "html");
app.engine("html", hbs.__express);

app.use("/", indexRouter);
app.use("/image", imageRouter);

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
  const code = err.status || 500;
  res.status(code);
  res.sendStatus(code);
});

module.exports = app;
