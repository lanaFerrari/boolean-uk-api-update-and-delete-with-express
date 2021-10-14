const { Client } = require("pg");
// console.log(process.env)

const connection = process.env.PGURL;

const db = new Client(connection);

module.exports = db;

