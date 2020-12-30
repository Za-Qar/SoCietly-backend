var express = require("express");
var router = express.Router();

const { getUserEvents } = require("../models/userEvents");

router.patch("/:id/:uid", async function (req, res) {
  let uid = req.params.uid;
  let id = req.params.id;
  let body = req.body;
  patchUserEvent(body, id, uid);
  return res.json({ success: true });
});

router.get("/:id", async function (req, res) {
  let { id } = req.params;
  console.log("this is get id: ", id);
  let events = await getUserEvents(id);
  res.json({ success: true, payload: events });
});

module.exports = router;
