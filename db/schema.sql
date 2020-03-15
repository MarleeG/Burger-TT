CREATE DATABASE IF NOT EXISTS burgersTT_db;

use burgersTT_db;

CREATE TABLE burgers (
    id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
    burger_name varchar(255) NOT NULL, 
    devoured BOOL DEFAULT false
);