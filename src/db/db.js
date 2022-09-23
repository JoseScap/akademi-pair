const mysql = require('promise-mysql');
const ENV = require('./../config/enviroment');

const conn = mysql.createConnection({
    host: ENV.HOST,
    database: ENV.DB,
    user: ENV.USER,
    password: ENV.PASS,
});

const getConnection = () => {
    return conn;
};

module.exports = getConnection;
