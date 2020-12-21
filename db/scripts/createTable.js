const {query} = require("../index");

async function createUsers(){
    let res = await query(
        `CREATE TABLE users(
            id SERIAL PRIMARY KEY,
            admin BOOL,
            name TEXT,
            email TEXT,
            profile_image TEXT,
            cohort INTEGER,
            current_role TEXT,
            current_employer TEXT,
            skills TEXT,
            introduction TEXT
        )`
    );
    console.log(res)
}

createUsers();