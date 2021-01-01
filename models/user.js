const { query } = require("../db/index");

/*-----------------------USERS TABLE------------------------*/
/*-----------POST: Creating a Users------------*/
async function createUser(value) {
  const res = query(
    `
    INSERT INTO users (admin, name, surname, email, profileImage, cohort, currentRole, currentEmployer, skills, introduction, social)
    VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
    `,
    [
      value.admin,
      value.name,
      value.surname,
      value.email,
      value.profileImage,
      value.cohort,
      value.currentRole,
      value.currentEmployer,
      value.skills,
      value.introduction,
      value.social,
    ]
  );
  return res;
}

/*-----------GET: Get all Users------------*/
async function getAllUsers() {
  const res = await query(
    `SELECT * FROM users ORDER BY cohort ASC, surname ASC`
  );
  return res.rows;
}

/*-----------GET: Users by Email Address------------*/
async function getUserByEmail(email) {
  console.log("this is value in items.js: ", email);
  const res = await query(`SELECT * FROM users WHERE email = $1`, [email]);
  return res.rows;
}

// /*-----------PATCH: Users Patch------------*/
async function patchUsers(value, id) {
  const res = await query(
    `UPDATE users
      SET admin = COALESCE($1, admin),
      name = COALESCE($2, name),
      surname = COALESCE($11, surname),
      email = COALESCE($3, email),
      profileImage = COALESCE($4, profileImage),
      cohort = COALESCE($5, cohort),
      currentRole = COALESCE($6, currentRole),
      currentEmployer = COALESCE($7, currentEmployer),
      skills = COALESCE($8, skills),
      introduction = COALESCE($9, introduction),
      social = COALESCE($10, social)
    WHERE id = $12
      `,
    [
      value.admin,
      value.name,
      value.email,
      value.profileImage,
      value.cohort,
      value.currentRole,
      value.currentEmployer,
      value.skills,
      value.introduction,
      value.social,
      value.surname,
      id,
    ]
  );

  return res;
}

/*-----------DELETE: user------------*/
async function deleteUser(id) {
  const result = await query(`
  DELETE FROM users WHERE id=${id};
  `);
  console.log(result);
}

/*-----------IMAGE UPLOAD TEST------------*/
/*-----------POST: Creating a Users------------*/
async function imageTest(value) {
  const res = query(
    `
    INSERT INTO users (profileImage)
    VALUES($1)
    `,
    [value]
  );
  console.log("this is value in models.js: ", value);
  return res;
}

module.exports = {
  createUser,
  getAllUsers,
  patchUsers,
  getUserByEmail,
  deleteUser,

  imageTest,
};
