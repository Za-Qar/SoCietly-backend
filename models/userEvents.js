const { query } = require("../db/index");

async function getUserEvents(id) {
  console.log("this is models id: ", id);
  const res = await query(`
  SELECT * FROM Events
    LEFT JOIN users
    ON Events.uid = users.id
    WHERE users.id= ${id};`);
  console.log("this is res.rows: ", res.rows);
  return res.rows;
}

// Delete event where EventCreatedBy
module.exports = {
  // patchUserEvent,
  getUserEvents,
};

// `SELECT * FROM Events
//     LEFT JOIN users
//     ON Events.uid = users.id`
