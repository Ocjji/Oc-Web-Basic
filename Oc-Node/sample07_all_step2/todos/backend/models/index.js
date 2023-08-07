const mysql = require("mysql2");
const connection = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "12345",
    database: "nodetest"
});

module.exports = connection;