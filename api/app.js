require("dotenv").config();

const express = require("express");
const logger = require("morgan");
const createError = require("http-errors");

const app = express();

app.use(logger("dev"));

app.use((req, res, next) => next(createError(404, "Route not found")));
app.use((error, req, res, next) => {
  if (!error.status) {
    error = createError(500, error);
  }
  const data = {
    message: error.message,
  };

  res.status(error.status).json(data);
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.info(`application is running in port ${PORT}`));