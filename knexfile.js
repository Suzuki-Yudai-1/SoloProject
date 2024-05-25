const path = require("path");
require("dotenv").config({
  path: path.resolve(__dirname, "./.env"),
});

module.exports = {
  client: "pg",
  connection: {
    database: process.env.DB_NAME ,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
  },

  migrations: {
    tableName: "knex_migrations",
  },
  seeds: {
    directory: "./db/seeds",
  },
};
