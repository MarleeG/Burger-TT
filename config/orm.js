const log = console.log;
var connection = require('./connection.js');

var orm = {
    all: query => {
        log(`ALL`);

        let queryString = query;
        queryString ? null :  queryString = 'SELECT * FROM burgers;';

        connection.query(queryString, (err, result, fields) => {
            if (err) throw err;
            log('results: ', result);
        });

        log(`--------------------------------------`);
    },

    insertOne: query => {
        log(`INSERT ONE`);

        let queryString = query;
        log(`queryString:: ${queryString}`);

        connection.query(queryString, (err, result, fields) => {
            if (err) throw err;
            // log(result);
            orm.all()
        });


        log(`--------------------------------------`);
    },

    updateOne: query =>  {
        log(`UPDATE ONE`);
        let queryString = query;
        log(`queryString:: ${queryString}`);
        connection.query(queryString, (err, result, fields) => {
            if (err) throw err;


            orm.all();
        })

    }
}

// TESTING
// orm.insertOne(`INSERT INTO burgers (burger_name, devoured) VALUES ("Coffee", ${false})`);

// orm.updateOne(`UPDATE burgers SET burger_name = 'Cheese burger' WHERE burger_name='Coffee'`);
// orm.updateOne(`UPDATE burgers SET devoured = ${true} WHERE burger_name='Cheese burger'`);





module.exports = orm;