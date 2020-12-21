const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = {
  query: (sql, value, cb) => {
    return pool.query(sql, value, cb);
  },
};
