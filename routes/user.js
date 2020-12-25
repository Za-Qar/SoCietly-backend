var express = require("express");
var router = express.Router();

const {
  createUser,
  getAllUsers,
  deleteUser,
  patchUsers,
} = require("../models/items");

/*---------Create User---------*/
router.post("/", async function (req, res) {
  let body = req.body;
  const user = await createUser(body);
  res.json(user);
});

// /*---------GET: Get all users---------*/
// router.get("/", function (req, res, next) {
//   res.send("respond with a resource");
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
  console.log("patch user id, routes: ", id);
  let body = req.body;
  console.log("patch user body, routes: ", body);
  patchUsers(body, id);
  return res.json({ success: true });
});

module.exports = router;
