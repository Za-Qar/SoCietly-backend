const { query } = require("../db/index");

/*-----------------------USERS TABLE------------------------*/
/*-----------POST: Creating a Users------------*/
async function createUser(value) {
  const res = query(
    `
    INSERT INTO users (admin, name, email, profileImage, cohort, currentRole, currentEmployer, skills, introduction)
    VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)
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
    ]
  );
  return res;
}

/*-----------GET: Get all Users------------*/
async function getAllUsers() {
  const res = await query(`SELECT * FROM users`);
  return res.rows;
}

// /*-----------PATCH: Users Patch------------*/
async function patchUsers(value, id) {
  console.log("this is value in items.js :", value);
  console.log("this is the id in items.js :", id);
  const res = await query(
    `UPDATE users
      SET admin = COALESCE($1, admin),
      name = COALESCE($2, name), 
      email = COALESCE($3, email),
      profileImage = COALESCE($4, profileImage),
      cohort = COALESCE($5, cohort),
      currentRole = COALESCE($6, currentRole),
      currentEmployer = COALESCE($7, currentEmployer),
      skills = COALESCE($8, skills),
      introduction = COALESCE($9, introduction)
    WHERE id = ${id}
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
    ]
  );

  return res;
}

// /*-----------DELETE: user------------*/
// async function deleteUser(id) {
//   const result = await query(`
//   DELETE FROM users WHERE id=${id};
//   `);
//   console.log(result);
// }

/*-----------------------Journey-----------------------*/
/*-----------POST: Create a Journey------------*/
async function createJourney(value) {
  const res = await query(
    `INSERT INTO journey (uid, employer, jobTitle, startDate, description) VALUES ($1, $2, $3, $4, $5)`,
    [
      value.uid,
      value.employer,
      value.jobTitle,
      value.startDate,
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
      SET employer = COALESCE($1, employer),
      jobTitle = COALESCE($2, jobTitle), 
      startDate = COALESCE($3, startDate),
      description = COALESCE($4, description),
      WHERE id = ${id}
      `,
    [value.employer, value.jobTitle, value.startDate, value.description]
  );
  return res;
}

// /*-----------DELETE: user------------*/
// async function deleteJourney(id) {
//   const result = await query(`
//   DELETE FROM journey WHERE id=${id};
//   `);
//   console.log(result);
// }

/*-----------------------Events-----------------------*/
/*-----------POST: Create event------------*/
async function createEvent(value) {
  console.log("this is value in the createEvent models function: ", value);

  const res = await query(
    `
    INSERT INTO events(
        eventName, eventType, uid, date, time, description, image, location, enableVolunteers, attendingList, likes, volunteerList)
    VALUES
        ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)

    `,
    [
      value.eventName,
      value.eventType,
      value.uid,
      value.timeDate,
      value.description,
      value.image,
      value.location,
      value.enableVolunteers,
      value.attendingList,
      value.likes,
      value.volunteerList,
    ]
  );
  return res;
}

/*-----------GET: All events------------*/
async function getAllEvents() {
  const res = await query(`SELECT * FROM events`);
  return res.rows;
}

/*-----------PATCH: Events Patch------------*/
async function patchEvent(value, id) {
  const res = await query(
    `UPDATE events
      SET eventName = COALESCE($1, eventName),
      eventType = COALESCE($2, eventType), 
      uid = COALESCE($3, uid),
      date = COALESCE($4, date),
      time = COALESCE($5, time),
      description = COALESCE($6, description),
      image = COALESCE($7, image),
      location = COALESCE($8, location),
      enableVolunteers = COALESCE($9, enableVolunteers),
      attendingList = COALESCE($10, attendingList),
      likes = COALESCE($11, likes),
      volunteerList = COALESCE($12, volunteerList),
      WHERE id = ${id}
      `,
    [
      value.eventName,
      value.eventType,
      value.uid,
      value.date,
      value.time,
      value.description,
      value.image,
      value.location,
      value.enableVolunteers,
      value.likes,
      value.volunteerList,
    ]
  );
  return res;
}

// /*-----------DELETE: Event------------*/
// async function deleteEvent(id) {
//   const result = await query(`
//   DELETE FROM events WHERE id=${id};
//   `);
//   console.log(result);
// }

module.exports = {
  createUser,
  getAllUsers,
  patchUsers,

  createJourney,
  getAllJourneys,
  patchJourney,

  createEvent,
  getAllEvents,
  patchEvent,
};

// SELECT *
// FROM Events
// LEFT JOIN users
// ON Events.uid = users.id
