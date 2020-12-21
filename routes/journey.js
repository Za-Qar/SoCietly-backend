var express = require("express");
var router = express.Router();

const { createJourney } = require("../models/items");

router.post("/", async function (req, res) {
  let body = req.body;

  console.log("body in journey.js", body);

  const journey = await createJourney(body);

  console.log("body in journey.js", journey);

  res.json(journey);
});

// /* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
