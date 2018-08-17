const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = require("../model/user");
const db = "mongodb://sagar:Yuvraj1996@ds047901.mlab.com:47901/angular_auth";

mongoose.connect(
  db,
  { useNewUrlParser: true },
  err => {
    if (err) console.log(`Error`);
    console.log(`Mongodb is connected`);
  }
);
function verifyToken(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).send("Unauthorized");
  }
  let token = req.headers.authorization.split(" ")[1];
  console.log(req.headers);
  if (token === null) return res.status(401).send("Unauthorized");
  let payload = jwt.verify(token, "secretKey");
  if (!payload) return res.status(401).send("Unauthorized");
  req.userId = payload.subject;
  next();
}

router.get("/", (req, res) => {
  res.send("I am api main route");
});
router.post("/register", (req, res) => {
  let userData = req.body;
  let user = new User(userData);
  user.save((err, registerUser) => {
    if (err) console.log(`error ${err}`);
    let payload = { subject: registerUser._id };
    let token = jwt.sign(payload, "secretKey");
    res.status(200).send({ token });
  });
});

router.post("/login", (req, res) => {
  let userData = req.body;
  User.findOne({ email: userData.email }, (err, result) => {
    if (err) console.log(`Error`);
    if (!result) res.status(401).send("Invalid User");
    if (userData.password != result.password) {
      res.status(401).send("Invalid password");
    }
    let payload = { subject: result._id };
    let token = jwt.sign(payload, "secretKey");
    // must send as object otherwise gets array
    res.status(200).send({ token });
  });
});

router.get("/events", (req, res) => {
  let events = [
    {
      _id: "1",
      name: "Auto Expo",
      description: "lorem ipsum",
      date: "2012-04-23T18:25:43.511Z"
    },
    {
      _id: "2",
      name: "Auto Expo",
      description: "lorem ipsum",
      date: "2012-04-23T18:25:43.511Z"
    },
    {
      _id: "3",
      name: "Auto Expo",
      description: "lorem ipsum",
      date: "2012-04-23T18:25:43.511Z"
    },
    {
      _id: "4",
      name: "Auto Expo",
      description: "lorem ipsum",
      date: "2012-04-23T18:25:43.511Z"
    },
    {
      _id: "5",
      name: "Auto Expo",
      description: "lorem ipsum",
      date: "2012-04-23T18:25:43.511Z"
    },
    {
      _id: "6",
      name: "Auto Expo",
      description: "lorem ipsum",
      date: "2012-04-23T18:25:43.511Z"
    }
  ];
  res.json(events);
});

router.get("/special", verifyToken, (req, res) => {
  let specialEvents = [
    {
      _id: "1",
      name: "Auto Expo Special",
      description: "lorem ipsum",
      date: "2012-04-23T18:25:43.511Z"
    },
    {
      _id: "2",
      name: "Auto Expo Special",
      description: "lorem ipsum",
      date: "2012-04-23T18:25:43.511Z"
    },
    {
      _id: "3",
      name: "Auto Expo Special",
      description: "lorem ipsum",
      date: "2012-04-23T18:25:43.511Z"
    },
    {
      _id: "4",
      name: "Auto Expo Special",
      description: "lorem ipsum",
      date: "2012-04-23T18:25:43.511Z"
    },
    {
      _id: "5",
      name: "Auto Expo Special",
      description: "lorem ipsum",
      date: "2012-04-23T18:25:43.511Z"
    },
    {
      _id: "6",
      name: "Auto Expo Special",
      description: "lorem ipsum",
      date: "2012-04-23T18:25:43.511Z"
    }
  ];
  res.json(specialEvents);
});

module.exports = router;
