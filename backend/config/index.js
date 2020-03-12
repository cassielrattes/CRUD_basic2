const express = require("express");
const session = require("express-session");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const Enum = require("../constants/enum");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(
  session({
    secret: Enum.sessionSecret,
    saveUninitialized: true,
    resave: true
  })
);
app.use(morgan());

app.use("/", require("../routes"));

module.exports = app;
