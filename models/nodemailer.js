const nodemailer = require("nodemailer");

function sendEmail(userEmail, subject, text) {
  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: "societly.soc@outlook.com",
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const msg = {
    from: "societly.soc@outlook.com", // sender address
    to: `${userEmail}`, // list of receivers
    subject: `${subject}`, // Subject line
    text: `${text}`, // plain text body
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
}

module.exports = { sendEmail };
// try {
//     nonExistentFunction();
//   } catch (error) {
//     console.error(error);
//     // expected output: ReferenceError: nonExistentFunction is not defined
//     // Note - error messages will vary depending on browser
//   }
