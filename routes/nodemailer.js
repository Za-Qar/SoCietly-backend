// var express = require("express");
// var router = express.Router();
// const nodemailer = require("nodemailer");

// /*---------Nodemailer---------*/
// const transporter = nodemailer.createTransport({
//   service: "hotmail",
//   auth: {
//     user: "societly.soc@outlook.com",
//     pass: "6miTY$aL#rX3y17At",
//   },
// });

// const message = {
//   from: "societly.soc@outlook.com",
//   to: "za.qa@outlook.com",
//   subject: "Test nodemailer",
//   text: "hello, this is just a test",
//   html: "<p>HTML version of the message</p>",
// };

// transporter.sendMail(message, function (error, info) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Email sent: " + info.response);
//   }
// });

var express = require("express");
var router = express.Router();
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

router.post("/", async (req, res) => {
  const email = req.body;
  console.log("this is email: ", email);
  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: "societly.soc@outlook.com",
      pass: "6miTY$aL#rX3y17At",
    },
  });

  const msg = {
    from: "societly.soc@outlook.com", // sender address
    to: `${email.email}`, // list of receivers
    subject: `${email.subject}`, // Subject line
    text: `${email.content}`, // plain text body
  };
  // send mail with defined transport object
  //   const info = await transporter.sendMail(msg);

  transporter.sendMail(msg, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  //   console.log("Message sent: %s", info.messageId);
  //   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  //   // Preview only available when sending through an Ethereal account
  //   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  //   // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

  res.send("Email Sent!");
});

module.exports = router;
