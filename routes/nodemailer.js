var express = require("express");
var router = express.Router();
const nodemailer = require("nodemailer");

/*---------Nodemailer---------*/
const transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: "societly.soc@outlook.com",
    pass: "6miTY$aL#rX3y17At",
  },
});

// let transporter = nodemailer.createTransport({
//   host: "smtp.live.com", // hostname
//   secureConnection: false, // use SSL
//   port: 587, // port for secure SMTP
//   auth: {
//     user: "societly.soc@outlook.com",
//     pass: "6miTY$aL#rX3y17At",
//   },
//   tls: {
//     ciphers: "SSLv3",
//   },
// });

const message = {
  from: "societly.soc@outlook.com",
  to: "za.qa@outlook.com",
  subject: "Test nodemailer",
  text: "hello, this is just a test",
  html: "<p>HTML version of the message</p>",
};

transporter.sendMail(message, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});

// var express = require("express");
// var router = express.Router();
// const nodemailer = require("nodemailer");
// const bodyParser = require("body-parser");

// router.post("/", async (req, res) => {
//   const { email } = req.body;
//   // create reusable transporter object using the default SMTP transport
//   let transporter = nodemailer.createTransport({
//     host: "smtp.ethereal.email",
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//       user: "da...@ethereal.email", // ethereal user
//       pass: "aJ...", // ethereal password
//     },
//   });

//   const msg = {
//     from: '"The Exapress App" <theExpressApp@example.com>', // sender address
//     to: `${email}`, // list of receivers
//     subject: "Sup", // Subject line
//     text: "Long time no see", // plain text body
//   };
//   // send mail with defined transport object
//   const info = await transporter.sendMail(msg);

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

//   // Preview only available when sending through an Ethereal account
//   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
//   // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

//   res.send("Email Sent!");
// });

// app.listen(port, () =>
//   console.log(`Example app listening at http://localhost:${port}`)
// );

// module.exports = router;
