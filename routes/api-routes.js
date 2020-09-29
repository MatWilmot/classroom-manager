const express = require("express");
const db = require("../models");
const passport = require("../config/passport");
const router = express.Router();

// test endpoint to check connectivity
router.get("/api", (req, res) => res.send("Connected to the back end!"));

router.post("/login", passport.authenticate("local"), (req, res) => {
  res.json({ userName: req.user.userName, id: req.user.id });
});

router.post("/signup", (req, res) => {
  db.Instructor.create({
    userName: req.body.userName,
    firstName: req.body.firstName,
    password: req.body.password,
  })
    .then((result) => {
      res.send(result);
    })
    .catch(() => res.send("error creating user"));
});

router.get("/logout", (req, res) => {
  req.session.destroy();
});

module.exports = router;
