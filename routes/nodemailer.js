var express = require("express");
var router = express.Router();

const { sendEmail } = require("../models/nodemailer");

router.post("/", async (req, res) => {
  const email = req.body;
  //   let { to, subject, text } = email;
  console.log("this is email", email);

  let emails = email.to.join(", ");

  sendEmail(emails, email.subject, email.text);

  res.send("Email Sent!");
});

module.exports = router;
