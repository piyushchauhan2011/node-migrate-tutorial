const mysql = require("mysql");
const { promisify } = require("util");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "keep1234",
  database: "keeplearning",
});

// TODO: Error handling
async function query(q) {
  const connect = promisify(connection.connect).bind(connection);
  const end = promisify(connection.end).bind(connection);
  const queryConnection = promisify(connection.query).bind(connection);

  await connect();
  const results = await queryConnection(q);
  await end();

  return results;
}

module.exports = {
  query,
};

async function main() {
  const results = await query("SELECT 1 + 1 AS solution");
  console.log("The solution is: ", results[0].solution);
}

if (require.main === module) {
  connection.connect();

  connection.query("SELECT 1 + 1 AS solution", function (
    error,
    results,
    fields
  ) {
    if (error) throw error;
    console.log("The solution is: ", results[0].solution);
  });

  connection.end();

  // main();
}
