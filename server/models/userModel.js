const { Pool } = require("pg");

const PG_URI =
  "postgres://xdldglvc:EO5iuX8Ck3PdynhT-vVX9ZuXbxLqVYFd@heffalump.db.elephantsql.com/xdldglvc";

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callbacl) => {
    console.log("executed query", text);
    return pool.query(text, params, callback);
  },
};
