var mysql = require("mysql");

// create the connection information for the sql database
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "burgers_db"
  });
};

// connect to the mysql server and sql database
connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;