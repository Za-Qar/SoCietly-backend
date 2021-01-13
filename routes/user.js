var express = require("express");
var router = express.Router();
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
const nodemailer = require("nodemailer");

const {
  createUser,
  getAllUsers,
  patchUsers,
  getUserByEmail,
  getUserByID,
  deleteUser,

  imageUpload,
} = require("../models/user");

/*---------Create User---------*/
router.post("/", async function (req, res) {
  let body = req.body;
  const user = await createUser(body);
  res.json(user);
});

/*---------GET: Get all users or users by email---------*/
router.get("/", async function (req, res) {
  let { email, id } = req.query;
  console.log(email);
  console.log(id);
  if (id) {
    let user = await getUserByID(id);
    return res.json({ success: true, payload: user });
  }
  if (email) {
    let user = await getUserByEmail(email);
    return res.json({ success: true, payload: user });
  }
  let users = await getAllUsers();
  return res.json({ success: true, payload: users });
});
//fetch(`http://localhost:3000/users?email=${email}&otherQueriesComeHere`)

// /*---------GET: Get all users---------*/
// router.get("/", async function (req, res) {
//   let users = await getAllUsers();
//   res.json({ success: true, payload: users });
// });

// /*---------GET: Get User by Email---------*/
// router.get("/email/:email", async function (req, res) {
//   let body = req.params.email;
//   let user = await getUserByEmail(body);
//   res.json({ success: true, payload: user });
// });

/*---------DELETE: User---------*/
router.delete("/:id", async function (req, res) {
  let id = req.params.id;
  console.log("delete id, routes: ", id);
  deleteUser(id);
  return res.json({ success: true });
});

/*---------PATCH: User---------*/
router.patch("/:id", async function (req, res) {
  let id = req.params.id;
  let body = req.body;
  patchUsers(body, id);
  return res.json({ success: true });
});

/*---------POST: IMAGE UPLOAD TEST---------*/
router.post("/imageupload", async function (req, res) {
  let body = req.body.image;
  imageUpload(body);
  return res.json({ success: true });
});

/*---------POST: IMAGE UPLOAD TEST---------*/
router.get("/imageupload", async function (req, res) {
  const { resources } = await cloudinary.search
    .expression("folder:falcon5iveImages")
    .sort_by("public_id", "desc")
    .max_results(30)
    .execute();
  const publicIds = resources.map((file) => file.public_id);
  res.send(publicIds);
});

/*---------Nodemailer---------*/
const transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: "societly.soc@outlook.com ",
    pass: "6miTY$aL#rX3y17At",
  },
});

const options = {
  from: "societly.soc@outlook.com ",
  to: "za.qa@outlook.com",
  subject: "Test nodemailer",
  text: "hello, this is just a test",
};

transporter.sendMail(options, function (err, info) {
  if (err) {
    console.log(err);
    return;
  }
  console.log("sent: ", info.response);
});

module.exports = router;
