const { query } = require("../index");

/*-------------Drop Table Create Events Table-------------*/
async function dropTableEvents() {
  let res = await query(`DROP TABLE events`);
  console.log(res);
}

dropTableEvents();

/*-------------Drop Table Create Journey Table-------------*/
async function dropTableJourney() {
  let res = await query(`DROP TABLE journey`);
  console.log(res);
}

dropTableJourney();

/*-------------Drop Table Users Table-------------*/
async function dropTableUsers() {
  let res = await query(`DROP TABLE users`);
  console.log(res);
}

dropTableUsers();
