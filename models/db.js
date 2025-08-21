const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',       // DB host
    user: 'root',            // DB username
    password: '',            // DB password
    database: 'nl', // DB name
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool.promise();

/**
 * Production Server Configuration
 * 
 
const pool = mysql.createPool({
        host: 'mysql-db03.remote',
        user: 'fetanjobs1',
        password: 'fetanjobs1',
        database: 'fetanjobsdb',
        port: 33636,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

 */
