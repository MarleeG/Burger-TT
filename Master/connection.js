const log = console.log;
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    socketPath : '/Applications/MAMP/tmp/mysql/mysql.sock'
});

connection.connect(err => {
    err ? log(err) : log("connected")
});