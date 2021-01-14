var express = require("express");
var router = express.Router();

const { sendEmail } = require("../models/nodemailer");

router.post("/", async (req, res) => {
  const email = req.body;
  console.log("this is email", email);

  sendEmail(email?.to.join(", "), email?.subject, email?.text);

  res.send("Email Sent!");
});

module.exports = router;
