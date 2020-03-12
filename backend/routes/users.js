const router = require("express").Router();
const User = require("../models/user");

const _ = require("lodash");

const users = [];

router.get("/", (req, res) => {
  res.json(users);
});

router.post("/", (req, res) => {
  const data = req.body;
  const user = new User(data);
  user.pwd = User.setPassword(data.pwd);
  users.push(user);
  res.status(201).json(user);
});

router.post("/session", (req, res) => {
  let { email, pwd } = req.body;
  pwd = User.setPassword(pwd);
  const match = _.find(users, user => user.email === email && user.pwd === pwd);
  if (!match) {
    res.status(401).json("Unauthorized: Email/Password is empty");
  } else {
    req.session.name = match.name;
    res.status(200).json("User logged");
  }
});

router.delete("/session", (req, res) => {
  req.session.destroy();
  res.status(200).json("User logout successfully performed!");
});

module.exports = router;
