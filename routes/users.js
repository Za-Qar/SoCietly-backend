var express = require("express");
var router = express.Router();

const { createUser, getAllUsers } = require("../models/items");

/*---------Create User---------*/
router.post("/", async function (req, res) {
  let body = req.body;

  console.log("this is body in users.js: ", body);

  const user = await createUser(body);

  console.log("this is user in users.js: ", user);

  res.json(user);
});

/*--------- ---------*/
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;
