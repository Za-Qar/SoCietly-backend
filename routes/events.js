var express = require("express");
var router = express.Router();

const { createEvent } = require("../models/items");

router.post("/", async function (req, res) {
  let body = req.body;

  const event = await createEvent(body);

  res.json(event);
});

router.delete("/", async function (req, res) {
  const event = await deleteEvent();
  res.json(event);
});

module.exports = router;
