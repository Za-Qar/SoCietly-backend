const nodemailer = require("nodemailer");

function sendEmail(userEmail, subject, text) {
  console.log(userEmail, subject, text);

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
    //check if we can link to a html file
    // backticks html: `<img />`
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

var CronJob = require("cron").CronJob;
var job = new CronJob(
  "0 0 0 0 0-11 *",
  function () {
    sendEmail(
      "za.qa@outlook.com",
      "Every hour",
      "this is just a test to see if I get the email every hour or not"
    );
    console.log("You will see this message every second");
  },
  null,
  true,
  "America/Los_Angeles"
);
job.start();

module.exports = { sendEmail };
// try {
//     nonExistentFunction();
//   } catch (error) {
//     console.error(error);
//     // expected output: ReferenceError: nonExistentFunction is not defined
//     // Note - error messages will vary depending on browser
//   }
