var express = require("express");
var router = express.Router();

const { getUserJourneys } = require("../models/userJourneys");

router.get("/:id", async function (req, res) {
  let { id } = req.params;
  let events = await getUserJourneys(id);
  res.json({ success: true, payload: events });
});

module.exports = router;
