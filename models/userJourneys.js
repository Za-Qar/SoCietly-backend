const { query } = require("../db/index");

/*-----------GET: Get all Users------------*/
async function getAllUserJourneys() {
  const res = await query(
    `SELECT * FROM journey
    LEFT JOIN users
    ON journey.uid = users.id
    ORDER BY journey.startDate DESC, users.surname ASC;
    `
  );
  return res.rows;
}

/*-----------GET: useJourney by id------------*/
async function getUserJourneysById(id) {
  const res = await query(` SELECT * FROM journey
    LEFT JOIN users
    ON journey.uid = users.id
    WHERE journey.uid = ${id} AND users.id = ${id}
    ORDER BY users.cohort ASC, users.surname ASC;`);
  return res.rows;
}

module.exports = {
  getAllUserJourneys,
  getUserJourneysById,
};
