const log = console.log;
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock',
    database: 'burgersTT_db'
});

connection.connect(function (err) {
    // err ? log(err) : log("connected")

    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;