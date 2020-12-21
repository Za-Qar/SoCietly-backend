const { query } = require("../index");

/*-------------Create Events Table-------------*/
async function createEvents() {
  let res = await query(
    `CREATE TABLE events(
            id SERIAL PRIMARY KEY,
            eventName TEXT,
            eventType TEXT,
            timeDate DATE,
            description TEXT,
            image TEXT, 
            location TEXT, 
            enableVolunteers BOOL,
            attendingList TEXT,
            likes INTEGER,
            volunteerList TEXT

        )`
  );
  console.log(res);
}

createEvents();

/*-------------Create Journey Table-------------*/
async function createJourney() {
  let res = await query(
    `CREATE TABLE journey(
            id SERIAL PRIMARY KEY,
            employer TEXT,
            jobTitle TEXT,
            startDate DATE,
            description TEXT
        )`
  );
  console.log(res);
}

createJourney();

/*-------------Create Users Table-------------*/
async function createUsers() {
  let res = await query(
    `CREATE TABLE users(
            id SERIAL PRIMARY KEY,
            admin BOOL,
            name TEXT,
            email TEXT,
            profileImage TEXT,
            cohort INTEGER,
            currentRole TEXT,
            currentEmployer TEXT,
            skills TEXT,
            introduction TEXT
        )`
  );
  console.log(res);
}

createUsers();
