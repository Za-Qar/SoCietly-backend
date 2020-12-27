var express = require("express");
var router = express.Router();

const {
  createUser,
  getAllUsers,
  patchUsers,
  getUserByEmail,
} = require("../models/user");

/*---------Create User---------*/
router.post("/", async function (req, res) {
  let body = req.body;
  const user = await createUser(body);
  res.json(user);
});

/*---------GET: Get all users---------*/
router.get("/", async function (req, res) {
  let users = await getAllUsers();
  res.json({ success: true, payload: users });
});

/*---------GET: Get User by Email---------*/
router.get("/email/:email", async function (req, res) {
  let body = req.params.email;
  let user = await getUserByEmail(body);
  res.json({ success: true, payload: user });
});

// /*---------DELETE: User---------*/
// router.delete("/:id", async function (req, res) {
//   let id = req.params.id;
//   console.log("delete id, routes: ", id);
//   deleteUser(id);
//   return res.json({ success: true });
// });

/*---------PATCH: User---------*/
router.patch("/:id", async function (req, res) {
  let id = req.params.id;
  let body = req.body;
  patchUsers(body, id);
  return res.json({ success: true });
});

module.exports = router;

// /*---------GET: Get all users---------*/
// router.get("/", function (req, res, next) {
//   res.send("respond with a resource");
// });
