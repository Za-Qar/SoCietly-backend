var express = require("express");
var router = express.Router();
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const {
  createEvent,
  getAllEvents,
  patchEvent,
  deleteEvent,
} = require("../models/events");

/*---------Create Event---------*/
router.post("/", async function (req, res) {
  console.log("this is the res:", res);
  let body = req.body;

  const event = await createEvent(body);
  res.json(event);
});

/*---------Get all events---------*/
router.get("/", async function (req, res) {
  let events = await getAllEvents();
  res.json({ success: true, payload: events });
});

/*---------Patch event by id---------*/
router.patch("/:id", async function (req, res) {
  let id = req.params.id;
  let body = req.body;
  patchEvent(body, id);
  return res.json({ success: true });
});

/*---------Delete Event based on given id---------*/
router.delete("/:id", async function (req, res) {
  let id = req.params.id;
  console.log("delete id, routes", id);
  deleteEvent(id);
  return res.json({ success: true });
});

module.exports = router;
