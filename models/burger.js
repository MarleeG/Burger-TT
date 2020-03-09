const log = console.log;
const orm = require("../config/orm.js");


var burger = {
    all: (cb) => {
        log(`BURGER.JS:: ALL`);

        orm.all('burgers', res => {
            cb(res);
        });
    },
    create: (name, cb) => {
        orm.create('burgers',
            ['burger_name', 'devoured'],
            [name, false],
            cb);
    },
    update: (id, cb) => {
        let condition = `id=${id}`;
        orm.update(
            'burgers',
            { devoured: true }, 
            condition, 
            cb);

    }
}


// TESTING
// burger.create('test', res => log(res));
// burger.update(3, res => log(res));
// burger.all(res => log(res));


module.exports = burger;
