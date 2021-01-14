const nodemailer = require("nodemailer");

function sendEmail(userEmail, subject, text) {
  console.log("this is email: ", userEmail);
  console.log("this is subject: ", userEmail);
  console.log("this is text: ", text);
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

  //   console.log("Message sent: %s", info.messageId);
  //   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  //   // Preview only available when sending through an Ethereal account
  //   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  //   // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

module.exports = { sendEmail };
