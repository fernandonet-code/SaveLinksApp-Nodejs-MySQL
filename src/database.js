const mysql = require('mysql');
const { promisify } = require('util');
const { database } = require('./keys.js');

const pool = mysql.createPool(database);

pool.getConnection((err, connection) => {
    if(err) {
        console.error(err.message);
    }
    if(connection) {
        connection.release();
        console.log('Database is now connected');
    }
});

// Promisify Pool query
pool.query = promisify(pool.query);

module.exports = pool;