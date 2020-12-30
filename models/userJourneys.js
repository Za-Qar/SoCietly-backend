const { query } = require("../db/index");

async function getUserJourneys(id) {
  console.log("this is usersJourney id: ", id);
  const res = await query(` SELECT * FROM journey
    LEFT JOIN users
    ON journey.uid = users.id
    WHERE journey.uid = ${id} AND users.id = ${id};`);
  return res.rows;
}

module.exports = {
  getUserJourneys,
};
