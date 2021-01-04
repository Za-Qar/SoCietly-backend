var express = require("express");
var router = express.Router();

const {
  createJourney,
  getAllJourneys,
  getJourneyById,
  patchJourney,
  deleteJourney,
} = require("../models/journey");

/*---------Create Journey ---------*/
router.post("/", async function (req, res) {
  let body = req.body;
  const journey = await createJourney(body);
  res.json(journey);
});

/*---------GET: Get all Journeys or Journey by email---------*/
router.get("/", async function (req, res) {
  let { id } = req.query;
  if (id) {
    let journey = await getJourneyById(id);
    return res.json({ success: true, payload: journey });
  }
  let journeys = await getAllJourneys();
  return res.json({ success: true, payload: journeys });
});

/*---------Patch Journey based on given id---------*/
router.patch("/:id", async function (req, res) {
  let id = req.params.id;
  let body = req.body;
  patchJourney(body, id);
  return res.json({ success: true });
});

/*---------Delete Journey based on given id---------*/
router.delete("/:id", async function (req, res) {
  let id = req.params.id;
  deleteJourney(id);
  return res.json({ success: true });
});

module.exports = router;
