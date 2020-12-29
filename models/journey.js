const { query } = require("../db/index");

/*-----------------------Journey-----------------------*/
/*-----------POST: Create a Journey------------*/
async function createJourney(value) {
  const res = await query(
    `INSERT INTO journey (uid, employer, jobTitle, startDate, endDate, description) VALUES ($1, $2, $3, $4, $5, $6)`,
    [
      value.uid,
      value.employer,
      value.jobTitle,
      value.startDate,
      value.endDate,
      value.description,
    ]
  );
  return res;
}

/*-----------GET: Get all Journeys------------*/
async function getAllJourneys() {
  const res = await query(`SELECT * FROM journey`);
  return res.rows;
}

/*-----------PATCH: Journey Patch------------*/
async function patchJourney(value, id) {
  const res = await query(
    `UPDATE journey
      SET uid = COALESCE($1, uid),
      employer = COALESCE($2, employer),
      jobTitle = COALESCE($3, jobTitle), 
      startDate = COALESCE($4, startDate),
      endDate = COALESCE($5, endDate),
      description = COALESCE($6, description)
      WHERE id = ${id}
      `,
    [
      value.uid,
      value.employer,
      value.jobTitle,
      value.startDate,
      value.endDate,
      value.description,
    ]
  );
  return res;
}

// /*-----------DELETE: Journey------------*/
// async function deleteJourney(id) {
//   const result = await query(`
//   DELETE FROM journey WHERE id=${id};
//   `);
//   console.log(result);
// }

module.exports = {
  createJourney,
  getAllJourneys,
  patchJourney,
};

// SELECT *
// FROM Events
// LEFT JOIN users
// ON Events.uid = users.id
