var express = require("express");
var router = express.Router();

const {
  createComment,
  getAllComments,
  patchComment,
  deleteComment,
} = require("../models/comments");

/*---------Create Event---------*/
router.post("/", async function (req, res) {
  let body = req.body;
  const event = await createComment(body);
  res.json(event);
});

/*---------Get all comments---------*/
router.get("/", async function (req, res) {
  let events = await getAllComments();
  res.json({ success: true, payload: events });
});

/*---------Patch comment by id---------*/
router.patch("/:id", async function (req, res) {
  let id = req.params.id;
  let body = req.body;
  patchComment(body, id);
  return res.json({ success: true });
});

/*---------Delete Event based on given id---------*/
router.delete("/:id", async function (req, res) {
  let id = req.params.id;
  console.log("delete comment id, routes", id);
  deleteComment(id);
  return res.json({ success: true });
});

module.exports = router;
