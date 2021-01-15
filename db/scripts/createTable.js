const { query } = require("../index");

/*-------------Create Users Table-------------*/
async function createUsers() {
  let res = await query(
    `CREATE TABLE users(
              id SERIAL PRIMARY KEY,
              admin BOOL,
              name TEXT,
              surname TEXT,
              email TEXT,
              profileImage TEXT,
              cohort INTEGER,
              currentRole TEXT,
              currentEmployer TEXT,
              skills TEXT[],
              introduction TEXT,
              social TEXT[]
          )`
  );
  console.log(res);
}

createUsers();

/*-------------Create Journey Table-------------*/
async function createJourney() {
  let res = await query(
    `CREATE TABLE journey(
            id SERIAL PRIMARY KEY,
            uid INTEGER,
            employer TEXT,
            jobTitle TEXT,
            startDate DATE,
            endDate DATE,
            description TEXT 
        )`
  );
  console.log(res);
}

createJourney();

/*-------------Create Events Table-------------*/
async function createEvents() {
  let res = await query(
    `CREATE TABLE events(
              eventId SERIAL PRIMARY KEY,
              eventName TEXT,
              eventType TEXT,
              uid INTEGER,
              date DATE,
              time TIME,
              description TEXT,
              image TEXT, 
              location TEXT, 
              enableVolunteers BOOL,
              attendingList TEXT[],
              likes TEXT[],
              volunteerList TEXT[],
              eventLink TEXT
          )`
  );
  console.log(res);
}

// createEvents();
