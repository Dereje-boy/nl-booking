// models/serviceModel.js
const db = require('./db');

exports.getAllAccounts = async () => {
    const [rows] = await db.query('SELECT * FROM accounts');
    return rows;
};

exports.getById = async ({ id }) => {

    const values = id;
    const sql = 'SELECT * FROM Accounts WHERE Id = ?';

    try {
        const [rows, fields] = await db.query(sql, values);
        const result = rows[0];
        return result; // return an account
    } catch (err) {
        console.error('Error getting an account:', err);
        throw err;
    }
};

exports.createAccount = async ({ Firstname, Lastname, Email, Password,
    Pp_path, Phone, Type = "customer" }) => {
    const sql = `
        INSERT INTO accounts 
        (Firstname, Lastname, Email, Password,
    Pp_path, Phone, Type)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [Firstname, Lastname || null, Email, Password,
        Pp_path || null, Phone || null, Type.toLowerCase()];

    console.log('values: ' + values)

    try {
        const [result] = await db.query(sql, values);
        return result.insertId; // return new account ID
    } catch (err) {
        console.error('Error inserting account:', err);
        throw err;
    }
};

