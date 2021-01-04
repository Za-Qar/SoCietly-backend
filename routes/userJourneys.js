var express = require("express");
var router = express.Router();

const {
  getUserJourneysById,
  getAllUserJourneys,
} = require("../models/userJourneys");

router.get("/", async function (req, res) {
  let { id } = req.query;
  if (id) {
    let journeys = await getUserJourneysById(id);
    return res.json({ success: true, payload: journeys });
  }
  let journeys = await getAllUserJourneys();
  return res.json({ success: true, payload: journeys });
});

module.exports = router;
