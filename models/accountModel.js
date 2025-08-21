// models/serviceModel.js
const db = require('./db');
const { hashPassword } = require('../utils/authUtils');


exports.getAllAccounts = async () => {
    const [rows] = await db.query('SELECT Id, Firstname, Lastname, Email, Pp_path, Phone, Type FROM accounts');
    // console.log(rows);
    return rows;
};

exports.checkCredentials = async ({ email }) => {
    const values = email;
    const sql = 'SELECT * FROM accounts WHERE Email = ?';
    try {
        const [rows, fields] = await db.query(sql, [values]);
        const result = rows[0];

        return result; // return an account
    } catch (err) {
        console.error('Error getting an account:', err);
        throw err;
    }
}

exports.getById = async ({ id }) => {
    const values = id;
    const sql = 'SELECT Id, Firstname, Lastname, Email, Pp_path, Phone, Type FROM accounts WHERE Id = ?';
    try {
        const [rows, fields] = await db.query(sql, [values]);
        const result = rows[0];
        return result; // return an account
    } catch (err) {
        console.error('Error getting an account:', err);
        throw err;
    }
};

exports.getByEmail = async ({ email }) => {
    const values = email;
    const sql = 'SELECT Id, Firstname, Lastname, Email, Pp_path, Phone, Type FROM accounts WHERE Email = ?';
    try {
        const [rows, fields] = await db.query(sql, [values]);
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

    const values = [Firstname, Lastname || null, Email, await hashPassword(Password),
        Pp_path || null, Phone || null, Type];
    console.log('values: ' + values)

    try {
        const [result] = await db.query(sql, values);
        return result.insertId; // return new account ID
    } catch (err) {
        console.error('Error inserting account:', err);
        throw err;
    }
};

exports.updateAccount = async ({ id, accInfo }) => {
    const sql = `UPDATE Accounts
        SET Firstname = ?, 
            Lastname = ?, 
            Password = ?, 
            Pp_path = ?, 
            Phone = ?
        WHERE Id = ?`;

    const { Firstname, Lastname, Password,
        Pp_path, Phone } = accInfo;

    const values = [Firstname, Lastname || null, await hashPassword(Password),
        Pp_path || null, Phone || null, id];


    try {
        const [result] = await db.query(sql, values);
        return result;
    } catch (err) {
        console.error('Error updating account:', err);
        throw err;
    }

};

