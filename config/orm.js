const log = console.log;
var connection = require('./connection.js');

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push('?');
    }

    return arr.toString();
}

function objToStr(ob) {
    var arr = [];

    for (var key in ob) {
        arr.push(key + "=" + ob[key]);
    }
    return arr.toString();
}

var orm = {
    all: (tablename, cb) => {
        log(`ALL`);
        let queryString = `SELECT * FROM ${tablename};`;
        connection.query(queryString, (err, result) => {
            if (err) throw err;
            log('----------------------------------------------------------------------------');
            cb(result);
            log('----------------------------------------------------------------------------');
        });

        log(`----------------------------------------------------------------------------`);
    },

    create: (tablename, cols, vals, cb) => {
        log(`CREATE`);
        // orm.create(`INSERT INTO burgers (burger_name, devoured) VALUES ("Coffee", ${false})`);

        let queryString = `INSERT INTO ${tablename} (${cols.toString()}) VALUES (${printQuestionMarks(vals.length)})`;
        log(`queryString:: ${queryString}`);

        connection.query(queryString, vals, (err, result) => {
            if (err) throw err;
            cb(result);
        });


        log(`--------------------------------------`);
    },

    update: (tablename, objColVals, condition, cb) => {
        log(`UPDATE ONE`);

        let queryString = `UPDATE ${tablename} SET ${objToStr(objColVals)} WHERE ${condition}`;
        log(`queryString:: ${queryString}`);

        connection.query(queryString, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    }
}

// TESTING
// orm.create(`INSERT INTO burgers (burger_name, devoured) VALUES ("Coffee", ${false})`);
// orm.update(`UPDATE burgers SET burger_name = 'Cheese burger' WHERE burger_name='Coffee'`);
// orm.update(`UPDATE burgers SET devoured = ${true} WHERE burger_name='Cheese burger'`);

module.exports = orm;