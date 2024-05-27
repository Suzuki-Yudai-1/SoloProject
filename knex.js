const knex = require("knex");
const config = require("./knexfile");
const environment = process.env.DATABASE_URL ? "production" : "development";

const database = knex(config[environment]);

module.exports = database;
