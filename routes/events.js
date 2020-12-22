var express = require("express");
var router = express.Router();

const { createEvent } = require("../models/items");

/*---------Create Event---------*/
router.post("/", async function (req, res) {
  let body = req.body;

  console.log("this is body in routes function create event: ", body);

  const event = await createEvent(body);
  res.json(event);
});

/*---------Delete Event based on given id---------*/
router.delete("/:id", async function (req, res) {
  let id = req.params.id;
  console.log("delete id, routes", id);
  deleteEvent(id);
  return res.json({ success: true });
});

module.exports = router;
