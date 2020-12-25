var express = require("express");
var router = express.Router();

const {
  createJourney,
  getAllJourneys,
  patchJourney,
} = require("../models/journey");

/*---------Create Event---------*/
router.post("/", async function (req, res) {
  let body = req.body;
  const journey = await createJourney(body);
  res.json(journey);
});

router.get("/", async function (req, res) {
  let journey = await getAllJourneys();
  res.json({ success: true, payload: journey });
});

router.patch("/:id", async function (req, res) {
  let id = req.params.id;
  let body = req.body;
  patchJourney(body, id);
  return res.json({ success: true });
});

module.exports = router;
