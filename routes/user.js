var express = require("express");
var router = express.Router();

const imgbbUploader = require("imgbb-uploader");

const {
  createUser,
  getAllUsers,
  patchUsers,
  getUserByEmail,
  deleteUser,

  // imageTest,
} = require("../models/user");

/*---------Create User---------*/
router.post("/", async function (req, res) {
  let body = req.body;
  const user = await createUser(body);
  res.json(user);
});

/*---------GET: Get all users or users by email---------*/
router.get("/", async function (req, res) {
  let { email } = req.query;
  console.log(email);
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

/*---------TEST: Upload Image---------*/
const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: "./public/uploads/",
  filename: function (req, file, cb) {
    cb(null, "IMAGE-" + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
}).single("myImage");

// router.post("/upload", function (req, res) {
//   upload(req, res, function (err) {
//     console.log("Request ---", req.body);
//     console.log("Request file ---", req.body.myImage); //Here you get file.

//     imgbbUploader(
//       "3e52ce2227d376d601590e5c3e9d9a51",
//       /* prettier-ignore */
//       `${req.body.myImage}`
//     )
//       .then((response) => imageTest(response.image.url))
//       .catch((error) => console.error(error));

//     /*-------UPLOAD TO DB TEST-------*/

//     /*-------FOR ERRORS-------*/
//     if (!err) {
//       return res.sendStatus(200).end();
//     }
//   });
// });

module.exports = router;
