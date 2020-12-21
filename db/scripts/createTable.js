const { query } = require("../index");

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
