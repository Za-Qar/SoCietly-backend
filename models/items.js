const { query } = require("../db/index");

/*-----------------------users------------------------*/

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
  const res = query(`SELECT * FROM users`);
  return res.rows;
}

/*-----------PATCH: Patch profile image------------*/

/*-----------------------Journey-----------------------*/
async function createJourney() {
  const res = query(
    `INSERT INTO journey (employer, jobTitle, startDate, description) VALUES ($1, $2, $3, $4)`,
    [value.employer, value.jobTitle, value.startDate, value.description]
  );
  return res;
}

/*-----------------------Events-----------------------*/

async function createEvent() {
  const res = await query(
    `
    INSERT INTO events(
        eventName, eventType, timeDate, description, image, location, enableVolunteers, attendingList, likes, volunteerList)
    VALUES
        ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)

    `,
    [
      value.eventName,
      value.eventType,
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

const deleteEvent = (module.exports = {
  createUser,
  getAllUsers,

  createJourney,

  createEvent,
});
