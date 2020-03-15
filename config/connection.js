const log = console.log;
var mysql = require("mysql");

var connection;

if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "root",
        socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock',
        database: 'burgersTT_db'
    });
}



connection.connect(function (err) {
    // err ? log(err) : log("connected")

    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;