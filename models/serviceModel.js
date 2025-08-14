// models/serviceModel.js
const db = require('./db');

exports.getAllServices = async () => {
    const [rows] = await db.query('SELECT * FROM services');
    return rows;
};

exports.createService = async ({ shortname, fullname, description, photos,
    price, amount = 1, type }) => {
    const sql = `
        INSERT INTO services 
        (Shortname, Fullname, Description, Photos, Price, Amount, AvailableFrom, Type)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [shortname, fullname || null, description || null, photos || null,
        price, amount, new Date().toISOString().slice(0, 10), type];

    try {
        const [result] = await db.query(sql, values);
        return result.insertId; // return new service ID
    } catch (err) {
        console.error('Error inserting service:', err);
        throw err;
    }
};

